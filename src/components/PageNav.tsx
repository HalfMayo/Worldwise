import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import { useAuth } from '../contexts/FakeAuthContext'
import User from './User'

export default function PageNav() {

    const{isAuth} = useAuth()

    return(
        <nav className="h-20 flex justify-between items-center w-11/12 fixed left-2/4 translate-x-[-50%]">
            <Logo />
            <ul className="flex gap-20 items-center">
                <li><NavLink to="/product" className={ ({isActive}) => isActive
                                                        ? "font-semibold text-on-surface pb-px border-b-2"
                                                        : "font-semibold text-on-surface"}>PRODUCT</NavLink></li>
                <li><NavLink to="/pricing" className={ ({isActive}) => isActive
                                                        ? "font-semibold text-on-surface pb-px border-b-2"
                                                        : "font-semibold text-on-surface"}>PRICING</NavLink></li>
                {isAuth
                    ? <li><Link to="/app"><User className="bg-transparent"/></Link></li>
                    : <li><NavLink to="/login" className={ ({isActive}) => isActive
                                                                ? "font-semibold text-on-surface pb-px border-b-2"
                                                                : "font-semibold text-white bg-primary px-2.5 py-1.5 rounded-md"}>LOGIN</NavLink></li>}
            </ul>
        </nav>
    )
}