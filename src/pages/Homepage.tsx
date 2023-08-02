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
                        <h1 className="text-on-surface text-7xl mb-8 font-extrabold">Let's travel</h1>
                        <p className="text-on-surface mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas sapien non leo scelerisque, non ullamcorper diam euismod. Vivamus nec sodales risus. Aenean ac pharetra nibh. Aenean ullamcorper velit dignissim eros rutrum, ac efficitur dui condimentum.</p>
                        <Button label="Explore now" onClick={handleClick} color="primary" rank="main"/>
                    </div>
                </div>
            </section>
        </>
    )
}