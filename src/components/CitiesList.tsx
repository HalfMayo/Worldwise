import {useCities} from "../contexts/CitiesContext"
import CityItem from "./CityItem";

export default function CitiesList() {
    const {cities, isLoading} = useCities();

    if(isLoading) return <div><p>...</p></div>

    return(
        <ul className="flex flex-col w-11/12 mt-4 gap-2">
            {cities
                ? cities.map((city) =>
                    <CityItem key={city.id} city={city}/>
                    )
                : <></>}
        </ul>
    )
}