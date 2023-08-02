import { useState } from "react";

interface Coords {
    lat: number,
    lng: number
}

function useGeolocation(defaultPosition : Coords | null  = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<Coords | null>(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}

export { useGeolocation }