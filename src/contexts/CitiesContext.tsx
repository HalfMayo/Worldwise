import { useEffect, useReducer, useContext, createContext, useCallback } from 'react'
import { Outlet } from 'react-router-dom'

//props del context
interface CityPropsContext {
    cities: CityProps[],
    getCity: (id:string | undefined) => void,
    currentCity: CityProps | null,
    createCity: (newCity: NewCityProps) => void,
    isLoading: boolean,
    deleteCity: (id:number) => void,
    error: string
}

interface Position {
    lat: number,
    lng: number
}

//città da recuperare del json
export interface CityProps {
    cityName: string,
    country: string,
    emoji: string,
    date: string,
    notes: string,
    position: Position,
    id: number
}

//città da aggiungere al json (come CityProps ma senza id, che viene aggiunto quando viene inserito nel json)
interface NewCityProps {
    cityName: string,
    country: string,
    emoji: string,
    date: string,
    notes: string,
    position: Position,
}

//dati visualizzati nella tab "Countries"
export interface CountryProps {
    country: string,
    emoji: string
}

//tipi di azioni
interface CitiesLoaded {
    type: "cities/loaded",
    payload: CityProps[]
}
interface CityLoaded {
    type: "city/loaded",
    payload: CityProps
}
interface CityCreated {
    type: "city/created",
    payload: CityProps
}
interface CityDeleted {
    type: "city/deleted",
    payload: number
}
interface Loading {
    type: "loading"
}
interface Rejected {
    type: "rejected",
    payload: string
}
//tipo ombrello "Actions"
type Actions = CitiesLoaded | CityLoaded | CityCreated | CityDeleted | Loading | Rejected
//stato del useReducer
interface StateProps {
    cities: CityProps[],
    currentCity: CityProps | null,
    isLoading: boolean,
    error: string
}

const initialState : StateProps = {
    cities: [],
    currentCity: null,
    isLoading: false,
    error: ""
}

function reducer(state : StateProps, action : Actions) {
    switch(action.type) {
        case 'cities/loaded':
            return{...state, isLoading: false, cities: action.payload};
        case 'city/loaded':
            return {...state, isLoading: false, currentCity: action.payload};
        case 'city/created':
            return {...state, isLoading: false, cities: [...state.cities, action.payload], currentCity: action.payload}
        case 'city/deleted':
            return {...state, isLoading: false, cities: state.cities.filter(city => city.id !== action.payload), currentCity: null}
        case 'loading':
            return {...state, isLoading: true}
        case 'rejected':
            return {...state, isLoading: false, error: action.payload}
        default:
            throw new Error("Wtf?!")
    }
}

const BASE_URL = "https://statuesque-wide-dugong.glitch.me/cities";

const CitiesContext = createContext<CityPropsContext | undefined>(undefined);

function CitiesProvider() {

    const[{ cities, currentCity, isLoading, error }, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        async function fetchCities() {
            dispatch({type:"loading"})
            try {
                const res = await fetch(BASE_URL);
                const data = await res.json();
                dispatch({type:"cities/loaded", payload: data})
            } catch {
                dispatch({type:"rejected", payload: "Oh no! Error during data fetching :("})
            }
        }

        fetchCities();

    }, []);

    const getCity = useCallback(async function getCity(id : string | undefined) {

        if(Number(id) === currentCity?.id) return;

        dispatch({type:"loading"})
        try {
            const res = await fetch(`${BASE_URL}/${id}`);
            const data = await res.json();
            dispatch({type:"city/loaded", payload: data});
        } catch {
            dispatch({type:"rejected", payload: "Oh no! Error during data fetching :("})
        }
    }, [currentCity?.id])

    async function createCity(newCity : NewCityProps) {
        dispatch({type:"loading"})
        try {
            const res = await fetch(`${BASE_URL}`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            dispatch({type:"city/created", payload: data})
        } catch {
            dispatch({type:"rejected", payload: "Oh no! Error during city creation :("})
        }
    }

    async function deleteCity(id : number) {
        dispatch({type:"loading"})
        try {
            await fetch(`${BASE_URL}/${id}`, {
                method: "DELETE",
            });
            dispatch({type:"city/deleted", payload: id})
        } catch {
            dispatch({type:"rejected", payload: "Oh no! Error during city deletion :("})
        }
    }

    return(
        <CitiesContext.Provider value={{cities, getCity, currentCity, createCity, isLoading, deleteCity, error }}>
            <Outlet/>
        </CitiesContext.Provider>
    )
}

function useCities() {
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error("CitiesContext was used outside of CitiesProvider");
    return context;
}

export { CitiesProvider, useCities };