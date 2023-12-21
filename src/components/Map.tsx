import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "../storybook_components/Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

export default function Map() {
  const { cities, isOpen } = useCities();
  const [lat, lng] = useUrlPosition();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapPosition, setMapPosition] = useState<LatLngExpression>([40, -3]);

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <div
      className={`h-screen bg-disabled relative ${
        window.innerWidth <= 768 ? "w-screen" : "w-2/3"
      }`}
    >
      {!isOpen && (
        <Button
          className={`absolute z-10 left-2/4 translate-x-[-50%] ${
            window.innerWidth > 768 ? "bottom-24" : "top-24"
          }`}
          label={isLoadingPosition ? "Loading..." : "Use your position"}
          onClick={getPosition}
          color="tertiary"
          rank="main"
        />
      )}
      <MapContainer
        center={mapPosition}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

interface PosProps {
  position: LatLngExpression;
}

function ChangeCenter({ position }: PosProps) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const { setIsOpen } = useCities();
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      if (window.innerWidth < 768) setIsOpen();
    },
  });
  return null;
}
