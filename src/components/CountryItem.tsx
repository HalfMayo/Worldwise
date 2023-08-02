import { CountryProps } from "../contexts/CitiesContext"
import { getFlagEmoji } from "../utils/getEmoji"

interface Country {
    country: CountryProps
}

export default function CountryItem({country} : Country) {
    return(
        <div className="flex items-center justify-start gap-4 w-full bg-surface-container p-3 rounded-md">
            <p>{getFlagEmoji(country.emoji)}</p>
            <p>{country.country}</p>
        </div>
    )
}