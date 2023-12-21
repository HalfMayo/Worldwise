import Logo from "./Logo";
import AppNavigation from "./AppNavigation";
import { Outlet, useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Button from "../storybook_components/Button";

export default function Sidebar() {
  const { isOpen, setIsOpen } = useCities();
  const navigate = useNavigate();

  return (
    <>
      {window.innerWidth > 768 ? (
        <div className="bg-surface w-1/3 h-screen p-8 flex flex-col items-center justify-start gap-8 overflow-y-auto scrollbar">
          <Logo />
          <AppNavigation />
          <Outlet />
        </div>
      ) : window.innerWidth <= 768 && isOpen ? (
        <div className="bg-surface w-screen h-screen p-8 flex flex-col items-center justify-start gap-8 absolute z-10 top-16">
          <AppNavigation />
          <Outlet />
          <div className="w-full flex items-center justify-between pb-8 gap-4">
            <Button
              label="Go to the map"
              color="tertiary"
              rank="main"
              onClick={setIsOpen}
            />
            <Button
              label="Go back to the homepage"
              color="tertiary"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
