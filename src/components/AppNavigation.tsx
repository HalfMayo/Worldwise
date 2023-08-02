import { NavLink } from "react-router-dom";

export default function AppNavigation() {
    return(
        <div>
            <ul className="flex">
                <li>
                    <NavLink to="cities" className={ ({isActive}) => isActive
                                                        ? "font-semibold text-on-tertiary-container bg-tertiary-container py-2 px-4 rounded-l-md border-y border-l border-tertiary-container"
                                                        : "font-semibold text-on-surface bg-surface-container border-surface-container border-y border-l py-2 px-4 rounded-l-md"}>CITIES</NavLink>
                </li>
                <li>
                    <NavLink to="countries" className={ ({isActive}) => isActive
                                                        ? "font-semibold text-on-tertiary-container bg-tertiary-container py-2 px-4 rounded-r-md border-y border-r border-tertiary-container"
                                                        : "font-semibold text-on-surface bg-surface-container border-surface-container border-y border-r py-2 px-4 rounded-r-md"}>COUNTRIES</NavLink>
                </li>
            </ul>
        </div>
    )
}