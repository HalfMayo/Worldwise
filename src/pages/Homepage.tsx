import travel from "../assets/images/travel.png";
import Button from "../storybook_components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import PageBase from "./PageBase";

export default function Homepage() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    isAuth ? navigate("/app") : navigate("/login");
  }

  return (
    <>
      <PageBase
        src={travel}
        alt="Man staring at the world, surrounded by famous monuments"
        link="https://www.freepik.com/free-vector/traveling-world-abstract-concept-illustration_11669325.htm"
        center={true}
      >
        <div className="2xl:w-1/3 w-[90vw] 2xl:static absolute">
          <h1 className="text-on-surface text-7xl mb-4 font-extrabold text-center 2xl:text-left relative">
            <span className="highlight">
              <span className="relative smaller-h1">You&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h1">travel&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h1">the&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h1">world.</span>
            </span>
          </h1>

          <h2 className="text-on-surface text-4xl mb-8 ml-2 font-extrabold text-center 2xl:text-left">
            <span className="highlight">
              <span className="relative smaller-h2">WorldWise&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h2">keeps&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h2">track&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h2">of&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h2">your&nbsp;</span>
            </span>
            <span className="highlight">
              <span className="relative smaller-h2">adventures.</span>
            </span>
          </h2>
          <div className="w-full flex items-center justify-center 2xl:justify-start">
            <h3 className="text-on-surface text-lg mb-8 ml-2 text-center 2xl:text-left w-[80vw] lg:w-[65vw] xl:w-[60vw] 2xl:w-auto">
              <span className="highlight-long-lg py-4 px-2">
                <span className="relative">
                  A world map that tracks your footsteps into{" "}
                  <span className="font-semibold">
                    every city you can think of
                  </span>
                  . Never forget your wonderful experiences, and show your
                  friends{" "}
                  <span className="font-semibold">
                    how you have wandered the world
                  </span>
                  .
                </span>
              </span>
            </h3>
          </div>
          <div className="w-full flex items-center justify-center 2xl:justify-start">
            <Button
              className="ml-2 ring-white ring-2"
              label="Explore now"
              onClick={handleClick}
              color="primary"
              rank="main"
            />
          </div>
        </div>
      </PageBase>
    </>
  );
}
