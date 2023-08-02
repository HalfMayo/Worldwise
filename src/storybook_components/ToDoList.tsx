import InputArea from "./InputArea"
import Tabs from "./Tabs"
import { ReactComponent as Plus } from '../assets/svgs/plus-svgrepo-com.svg'
import { ReactComponent as Untick } from '../assets/svgs/untick-circle-svgrepo-com.svg'
import { ReactComponent as Tick } from '../assets/svgs/tick-circle-svgrepo-com.svg'
import { useState } from "react"
import List from "./List";

interface Todo {
    editInterface?: boolean
}

export default function ToDoList({editInterface = false}: Todo) {

    const[title, setTitle] = useState<string>("");
    const[icon, setIcon] = useState<boolean>(false);
    const[itemToAdd, setItemToAdd] = useState<string>("");
    const[todo, setTodo] = useState<string[]>([]);
    const[completed, setCompleted] = useState<string[]>([]);
    const[isActive, setIsActive] = useState<number>(0);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTodo(prev => [...prev, itemToAdd]);
        setItemToAdd("");
    }

    function changeIcon(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(title) {
            setIcon(true);
            //metodi per salvare il titolo nel db
        };
    }

    function toggleTab(i:number) {
        setIsActive(i);
    }

    function toggleDone(i:number) {
        const todosRemaining = [...todo];
        const todoDone = todosRemaining.splice(i, 1);
        setCompleted(prev => [...prev, todoDone[0]]);
        setTodo(todosRemaining);
    }

    function toggleUndone(i:number) {
        const completedRemaining = [...completed];
        const completedUndone = completedRemaining.splice(i, 1);
        setTodo(prev => [...prev, completedUndone[0]]);
        setCompleted(completedRemaining);
    }

    return(
        <div className="flex flex-col items-center w-96 bg-surface pb-4">
            <div className="border-b border-disabled w-full flex justify-center">
                <Tabs className="m-2" tabs={["Active", "Completed"]} state={isActive} onClick={toggleTab}/>
            </div>
            <InputArea
                className="my-2 pl-2 text-lg"
                label="Set"
                inputType="input"
                svg={icon ? Tick : Untick}
                value={title}
                setValue={e => setTitle(e.target.value)}
                handleSubmit={changeIcon}
                width={"384px"}/>
            {isActive === 0
                ? <List
                    items={todo}
                    setItems={setTodo}
                    onClick={toggleDone}
                    checked={false}
                    readonly={true}
                    editInterface={editInterface}/>
                : <List
                    items={completed}
                    setItems={setCompleted}
                    onClick={toggleUndone}
                    checked={true}
                    readonly={true}/>
            }
            {isActive === 0
                ? <InputArea
                    className="bg-surface-container"
                    label="Add"
                    inputType="textarea"
                    svg={Plus}
                    value={itemToAdd}
                    setValue={e => setItemToAdd(e.target.value)}
                    handleSubmit={handleSubmit}
                    width={"384px"}/>
                : <></>
            }
        </div>
    )
}