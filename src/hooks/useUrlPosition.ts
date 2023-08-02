import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
    const [searchParams] = useSearchParams();
    const lat : number = parseFloat(searchParams.get("lat")!);
    const lng : number = parseFloat(searchParams.get("lng")!);

    return [ lat, lng ]
}

export { useUrlPosition }