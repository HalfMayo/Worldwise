import { useState, Dispatch, SetStateAction} from "react";
import Button from "./Button";

interface Friend {
    id: number,
    name: string,
    remaining: number
}

interface Friends {
    friends: Friend[]
}

interface CalcBillProps {
    friendsList: Friend[],
    setFriendsList: Dispatch<SetStateAction<Friend[]>>,
    selectedFriend: number
}

export default function SplitBill({friends} : Friends) {
    const [friendsList, setFriendsList] = useState(friends)
    const [selectedFriend, setSelectedFriend] = useState<number|null>()

    return(
        <div className="flex items-center justify-start">
            <ul className="w-[500px]">
                {friendsList.map(friend =>
                    <li className="flex items-center justify-start gap-16" key={friend.id}>
                        <div>
                        <p>{friend.name}</p>
                        <p>{typeof friend.remaining === "number" && (friend.remaining < 0
                                                                            ? `${friend.name} owes you ${Math.abs(friend.remaining)} money`
                                                                            : friend.remaining > 0
                                                                                ? `You owe ${friend.name} ${friend.remaining} money`
                                                                                : `You are even`)}</p>
                        </div>
                        <Button label="Select" onClick={() => selectedFriend === friend.id ? setSelectedFriend(null) : setSelectedFriend(friend.id)}/>
                    </li>    
                )}
            </ul>
            {selectedFriend && <CalcBill key={selectedFriend} friendsList={friendsList} setFriendsList={setFriendsList} selectedFriend={selectedFriend}/>}
        </div>
    )
}

function CalcBill({friendsList, setFriendsList, selectedFriend}: CalcBillProps) {
    const [total, setTotal] = useState<string>("");
    const [youPaid, setYouPaid] = useState<string>("");
    const [otherPaid, setOtherPaid] = useState<string>("");
    const [payer, setPayer] = useState<string>("");
    const [calc, setCalc] = useState<boolean>(false);

    function getFriend() : Friend|undefined {
        const [friend] = friendsList.filter(friend => friend.id === selectedFriend);
        return friend;
    }

    const myFriend = getFriend();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(total && youPaid) {
        const parsedTotal = parseFloat(total);
        const parsedPaid = parseFloat(youPaid);
        const parsedOther = parsedTotal - parsedPaid;
        setOtherPaid(parsedOther.toString())
        const newData = friendsList.map(friend => {
            if(friend.id === selectedFriend) {
                return {...friend, remaining: friend.remaining + (payer === myFriend?.name ? parsedPaid : -parsedOther)}
            }
            return friend;
        })
        setFriendsList(newData);
        setCalc(true);
        }
    }

    return(
        <>
            <form className="w-2/4 flex flex-col items-start justify-center gap-4" onSubmit={handleSubmit}>
                <label htmlFor="payer">Who paid?
                    <select name="payer" id="payer" value={payer} onChange={e => setPayer(e.target.value)}>
                        <option value="default">Choose...</option>
                        <option value="you">You</option>
                        <option value={myFriend?.name}>{myFriend?.name}</option>
                    </select>
                </label>
                <label htmlFor="total">Bill:
                    <input name="total" id="total" value={total} onChange={(e) => setTotal(e.target.value)}></input>
                </label>
                <label htmlFor="youPaid">Your amount:
                    <input name="youPaid" id="youPaid" value={youPaid} onChange={(e) => setYouPaid(e.target.value)}></input>
                    </label>
                <label htmlFor="otherPaid">{myFriend?.name}'s amount:
                    <input name="otherPaid" id="otherPaid" value={otherPaid} readOnly></input>
                </label>
                <Button label="Calculate" type="submit"/>
                {calc && (payer === myFriend?.name
                            ? <p>For this bill, you owe {myFriend?.name} {youPaid} money</p>
                            : payer === "you"
                                ? <p>For this bill, {myFriend?.name} owes you {otherPaid} money</p>
                                : <></>)
                }
                {calc && (typeof myFriend?.remaining === "number" && (myFriend?.remaining < 0
                        ? <p>Overall, {myFriend?.name} still owes you {Math.abs(myFriend?.remaining)} money</p>
                        : myFriend?.remaining > 0
                            ? <p>Overall, you still owe {myFriend?.name} {myFriend?.remaining} money</p>
                            : <p>Overall, you are even</p>)
                      )
                }
            </form>
        </>
    )
}