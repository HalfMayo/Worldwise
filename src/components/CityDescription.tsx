import { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useCities } from "../contexts/CitiesContext";
import Button from '../storybook_components/Button';
import { getFlagEmoji } from '../utils/getEmoji';

export default function CityDescription() {

    const navigate = useNavigate();

    const {id} = useParams();
    const { getCity, currentCity, isLoading } = useCities();

    useEffect(() => {
        getCity(id)
    }, [id, getCity])

    if(isLoading) return <div><p>...</p></div>

    return(
        <>
            {currentCity &&
                <div className="flex flex-col gap-4 bg-surface-container p-4 rounded-md w-full">
                    <div className="flex items-center justify-center gap-4">
                        <h1 className="text-2xl font-semibold">{currentCity?.cityName}</h1>
                        <span>{getFlagEmoji(currentCity?.emoji)}</span>
                    </div>
                    <div className="w-full">
                        <h2 className="font-semibold">Visited on</h2>
                        <p className="bg-surface p-2 rounded-md"><time>{new Intl.DateTimeFormat('en-GB').format(new Date(currentCity?.date))}</time></p>
                    </div>
                    <div className="w-full">
                        <h2 className="font-semibold">Coordinates</h2>
                        <p className="bg-surface p-2 rounded-md">{currentCity?.position.lat.toFixed(4)}° N, {currentCity?.position.lng.toFixed(4)}° E</p>
                    </div>
                    {currentCity?.notes && <div className="w-full">
                        <h2 className="font-semibold">Notes</h2>
                        <p className="bg-surface p-2 rounded-md">{currentCity?.notes}</p>
                    </div>}
                    <Button className="mt-2" label="Back" type="button" color="primary" onClick={() => navigate(-1)}/>
                </div>
            }
        </>
    )
}