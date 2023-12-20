import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";
import User from "./User";
import { ReactComponent as Menu } from "../assets/svgs/hamburger-menu-svgrepo-com.svg";
import SvgButton from "../storybook_components/SvgButton";
import { ReactComponent as Close } from "../assets/svgs/close-circle-svgrepo-com (1).svg";

export default function PageNav() {
  const { isAuth } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (window.innerWidth < 768)
    return (
      <>
        {isOpen ? (
          <div className="relative">
            <ul className="fixed h-screen w-screen bg-white z-20 flex flex-col items-center justify-center divide-y">
              <li className="font-bold h-12 w-[80vw] flex items-center justify-center">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white bg-primary px-2.5 py-1.5 rounded-md"
                      : "font-bold text-on-surface pb-px"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="font-bold h-12 w-[80vw] flex items-center justify-center">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white bg-primary px-2.5 py-1.5 rounded-md"
                      : "font-bold text-on-surface pb-px"
                  }
                >
                  PRODUCT
                </NavLink>
              </li>
              <li className="font-bold h-12 w-[80vw] flex items-center justify-center">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white bg-primary px-2.5 py-1.5 rounded-md"
                      : "font-bold text-on-surface pb-px"
                  }
                >
                  PRICING
                </NavLink>
              </li>
              <li className="h-12 w-[80vw] flex items-center justify-center">
                {isAuth ? (
                  <Link to="/app">
                    <User className="bg-transparent" />
                  </Link>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-white bg-primary px-2.5 py-1.5 rounded-md"
                        : "font-bold text-on-surface pb-px"
                    }
                  >
                    LOGIN
                  </NavLink>
                )}
              </li>
              <li className="h-12 w-[80vw] flex items-center justify-center">
                <SvgButton
                  label="Close Menu"
                  width="32"
                  height="32"
                  svg={Close}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center p-4 fixed z-20">
            <SvgButton
              label="Menu"
              svg={Menu}
              width="32"
              height="32"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
        )}
      </>
    );

  return (
    <nav className="h-20 flex justify-between items-center w-11/12 fixed left-2/4 translate-x-[-50%] z-10">
      <Logo />
      <ul className="flex gap-20 items-center justify-center">
        <li className="pt-2">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-on-surface pb-px border-b-2"
                : "font-semibold text-on-surface"
            }
          >
            PRODUCT
          </NavLink>
        </li>
        <li className="pt-2">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-on-surface pb-px border-b-2"
                : "font-semibold text-on-surface"
            }
          >
            PRICING
          </NavLink>
        </li>
        {isAuth ? (
          <li className="pt-2">
            <Link to="/app">
              <User className="bg-transparent" />
            </Link>
          </li>
        ) : (
          <li className="pt-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-on-surface pb-px border-b-2"
                  : "font-semibold text-white bg-primary px-2.5 py-1.5 rounded-md"
              }
            >
              LOGIN
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
