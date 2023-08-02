import { useContext, createContext, useReducer } from "react";
import { Outlet } from 'react-router-dom';

//INTERFACES
interface AuthContextProps {
    user: User | null,
    isAuth: boolean,
    login: (email : string, password : string) => void,
    logout: () => void
}

interface StateProps {
    user: User | null,
    isAuth: boolean
}

interface Login {
    type:"login",
    payload: User | null
}

interface Logout {
    type:"logout"
}

type Actions = Login | Logout

interface User {
    username: string,
    email: string,
    password: string,
    avatar: string
}

//EVERYTHING ELSE
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const FAKE_USER : User = {
    username: "JB",
    email: "johnnybanana@gmail.com",
    password: "quaso?spranga!",
    avatar: "https://i.pravatar.cc/150?img=54"
}

const initialState : StateProps = {
    user: null,
    isAuth: false
}

function reducer(state: StateProps, action: Actions) {
    switch(action.type) {
        case "login":
            return {...state, user: action.payload, isAuth: true};
        case "logout":
            return {...state, user: null, isAuth: false}
        default:
            throw new Error("WTF")
    }
}

function AuthProvider() {
    const[{user, isAuth}, dispatch] = useReducer(reducer, initialState)

    function login(email:string, password:string) {
        if(email === FAKE_USER.email && password === FAKE_USER.password) dispatch({type:"login", payload: FAKE_USER})
        else alert("Wrong email or password :(")
    }

    function logout() {
        dispatch({type:"logout"})
    }

    return(
        <AuthContext.Provider value={{user, isAuth, login, logout}}>
            <Outlet />
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    if(context === undefined) throw new Error("AuthContext was used outside AuthProvider :(");
    return context;
}

export { AuthProvider, useAuth }