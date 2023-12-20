import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/images/loginImg.png";
import Button from "../storybook_components/Button";
import { useAuth } from "../contexts/FakeAuthContext";
import PageBase from "./PageBase";

export default function Login() {
  const [userName, setUsername] = useState<string>("johnnybanana@gmail.com");
  const [pw, setPw] = useState<string>("quaso?spranga!");
  const { login, isAuth } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userName && pw) login(userName, pw);
  }

  useEffect(() => {
    if (isAuth)
      navigate("/app", {
        replace: true,
      });
  }, [isAuth, navigate]);

  return (
    <>
      <PageBase
        src={loginImg}
        alt="Woman working with a laptop"
        link="https://www.freepik.com/free-vector/man-holiday-adventure-international-tourism-worldwide-sightseeing-tour-student-exchange-program_12085886.htm"
      >
        <form
          className="md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-1/3 w-[90vw] 2xl:static absolute bg-surface-container flex flex-col items-center gap-8 p-6 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-on-primary-container font-semibold"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className="rounded-md p-2"
              name="email"
              id="email"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-2 w-full mb-2">
            <label
              className="text-on-primary-container font-semibold"
              htmlFor="pw"
            >
              PASSWORD
            </label>
            <input
              className="rounded-md p-2"
              name="pw"
              id="pw"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            ></input>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Forgot your password?</p>
            <div className=" flex gap-4">
              <Button label="Sign in" color="primary" />
              <Button label="Login" type="submit" color="primary" rank="main" />
            </div>
          </div>
        </form>
      </PageBase>
    </>
  );
}
