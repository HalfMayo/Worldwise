import {useCities} from "../contexts/CitiesContext"
import CountryItem from "./CountryItem";
import { CityProps } from "../contexts/CitiesContext";
import { CountryProps } from "../contexts/CitiesContext";

export default function CitiesList() {
    const {cities, isLoading} = useCities();

const countries : CountryProps[] = cities?.reduce((arr : CountryProps[], city : CityProps) => {
    if(!arr.map((el : CountryProps)=> el.country).includes(city.country)) {
        return [...arr, { country: city.country, emoji: city.emoji}]
    } else return arr;
}, []);

    if(isLoading) return <div><p>...</p></div>

    return(
        <ul className="flex flex-col w-11/12 mt-4 gap-2">
            {countries
                ? countries.map((country : CountryProps, i : number) =>
                    <CountryItem key={i} country={country}/>
                    )
                : <></>}
        </ul>
    )
}