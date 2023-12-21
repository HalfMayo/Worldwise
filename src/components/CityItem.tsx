import SvgButton from "../storybook_components/SvgButton";
import { CityProps } from "../contexts/CitiesContext";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { getFlagEmoji } from "../utils/getEmoji";
import { ReactComponent as Close } from "../assets/svgs/close-svgrepo-com.svg";

export interface City {
  city: CityProps;
}

export default function CityItem({ city }: City) {
  const { currentCity, deleteCity } = useCities();

  function handleClick(e?: React.MouseEvent<HTMLElement>) {
    if (!e) return;
    e.preventDefault();
    deleteCity(city.id);
  }

  return (
    <Link
      className={`flex items-center justify-between w-full bg-surface-container p-3 gap-2 rounded-md ${
        city.id === currentCity?.id ? "border-2 border-primary" : ""
      }`}
      to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
    >
      <div className="flex gap-4">
        <p>{getFlagEmoji(city.emoji)}</p>
        <p>{city.cityName}</p>
      </div>
      <div className="flex items-center gap-4">
        <time>
          {new Intl.DateTimeFormat("en-GB").format(new Date(city.date))}
        </time>
        <SvgButton
          label="Remove city"
          svg={Close}
          color="text-on-surface"
          onClick={handleClick}
        />
      </div>
    </Link>
  );
}
