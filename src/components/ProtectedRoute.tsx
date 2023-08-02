import { useEffect } from "react";
import { ReactNode } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

interface ChildrenProps {
    children: ReactNode
}

export default function ProtectedRoute({children}:ChildrenProps) {
    const{isAuth} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth) navigate("/");
    }, [isAuth])

    return isAuth? children : null;
}