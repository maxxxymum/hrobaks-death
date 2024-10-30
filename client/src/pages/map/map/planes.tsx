import { Marker } from "react-leaflet";
import { usePlanes } from "../../../hooks/use-planes"
import { PlaneIcon } from "./icons/plane";

export const Planes = () => {
    const { planes } = usePlanes();

    return <>
        {planes.map((plane) => (
            <Marker key={plane.id} position={[plane.lat, plane.lng]} icon={PlaneIcon} />
        ))}
    </>
}