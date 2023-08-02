import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav"
import loginImg from '../assets/images/loginImg.png'
import Button from "../storybook_components/Button"
import { useAuth } from "../contexts/FakeAuthContext"

export default function Login() {
    const[userName, setUsername] = useState<string>("johnnybanana@gmail.com");
    const[pw, setPw]= useState<string>("quaso?spranga!");
    const{login, isAuth} = useAuth();

    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(userName && pw) login(userName, pw);
    }

    useEffect(() => {
        if(isAuth) navigate("/app", {
            replace: true
        });
    }, [isAuth, navigate])

    return(
        <>
            <PageNav />
            <section className="flex items-center justify-center bg-surface">
                <div className="h-[calc(100vh-3rem)] flex items-center justify-center w-11/12 mt-12 gap-16">
                <img className="h-4/6" src={loginImg} alt="Elderly couple admiring some famous monuments."/>
                    <form className="w-1/3 bg-surface-container flex flex-col items-center gap-8 p-6 rounded-xl" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-on-primary-container font-semibold" htmlFor="email">EMAIL</label>
                            <input className="rounded-md p-2" name="email" id="email" value={userName} onChange={e => setUsername(e.target.value)}></input>
                        </div>
                        <div className="flex flex-col gap-2 w-full mb-2">
                            <label className="text-on-primary-container font-semibold" htmlFor="pw">PASSWORD</label>
                            <input className="rounded-md p-2" name="pw" id="pw" value={pw} onChange={e => setPw(e.target.value)}></input>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p>Forgot your password?</p>
                            <div className=" flex gap-4">
                                <Button label="Sign in" color="primary"/>
                                <Button label="Login" type="submit" color="primary" rank="main"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}