import Logo from "./Logo"
import AppNavigation from "./AppNavigation"
import { Outlet } from "react-router-dom"

export default function Sidebar() {
    return(
        <div className="bg-surface w-1/3 h-screen p-8 flex flex-col items-center justify-start gap-8">
            <Logo />
            <AppNavigation />
            <Outlet />
        </div>
    )
}