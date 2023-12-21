import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../storybook_components/Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?";

export default function AddCityForm() {
  const { createCity, isLoading } = useCities();
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [notes, setNotes] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country: countryName,
      emoji: countryCode,
      date: date.toDate().toDateString(),
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryName)
          throw new Error("It seems there's nothing in here...");

        setCityName(data.city || data.locality || "");
        setCountryName(data.countryName);
        setCountryCode(data.countryCode);
      } catch (err: any) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    fetchCityData();
  }, [lat, lng]);

  if (isLoadingGeocoding) return <div>...</div>;
  if (!lat && !lng)
    return (
      <div>
        <p>Start by clicking somewhere on the map :)</p>
      </div>
    );
  if (geocodingError) return <div>{geocodingError}</div>;

  return (
    <form
      className={`flex flex-col gap-4 p-4 bg-surface-container w-full rounded-md ${
        isLoading ? "opacity-30" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="cityName">Where have you been?</label>
        <input
          className="p-2 rounded-sm"
          name="cityName"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="City name"
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <p>When did you visit {cityName}?</p>
        <DatePicker
          value={date}
          onChange={(newDate) => setDate(dayjs(newDate))}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="notes">Add your thoughts</label>
        <textarea
          className="p-2 rounded-sm"
          name="notes"
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
        ></textarea>
      </div>
      <div className="flex justify-between items-center mt-2">
        <Button
          label="Back"
          type="button"
          color="primary"
          onClick={() => navigate(-1)}
        />
        <Button label="Add" type="submit" color="primary" rank="main" />
      </div>
    </form>
  );
}
