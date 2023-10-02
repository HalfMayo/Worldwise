import PageNav from "../components/PageNav"
import travel from '../assets/images/travel.png'
import Button from "../storybook_components/Button"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

export default function Homepage() {
    const{isAuth} = useAuth()
    const navigate = useNavigate();

    function handleClick() {
        isAuth ? navigate("/app") : navigate("/login");
    }

    return(
        <>
            <PageNav />
            <section className="flex items-center justify-center bg-surface">
                <div className="h-[calc(100vh-3rem)] flex items-center justify-evenly w-11/12 mt-12">
                    <div className="flex flex-col items-center justify-center">
                        <img className="h-11/12" src={travel} alt="Man staring at the world, surrounded by famous monuments"/>
                        <p className="text-sm"><a href="https://www.freepik.com/free-vector/traveling-world-abstract-concept-illustration_11669325.htm#query=travel%20illustration&position=4&from_view=search&track=ais">Image by vectorjuice</a> on Freepik</p>
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-on-surface text-7xl mb-4 font-extrabold">
                            You travel the world.
                        </h1>
                        <h2 className="text-on-surface text-4xl mb-8 ml-2 font-extrabold">
                            WorldWise keeps track of your adventures.
                        </h2>
                        <h3 className="text-on-surface text-lg mb-8 ml-2">A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.
                        </h3>
                        <Button className="ml-2" label="Explore now" onClick={handleClick} color="primary" rank="main"/>
                    </div>
                </div>
            </section>
        </>
    )
}