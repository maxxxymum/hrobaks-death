import { Marker } from "react-leaflet";
import { usePlanes } from "../../../hooks/use-planes"
import { AlliedPlaneIcon } from "./icons/plane";
import { useMyPlane } from "../../../hooks/use-my-plane";

export const Planes = () => {
    const { myPlane } = useMyPlane();
    const { planes } = usePlanes();

    return <>
        {planes.map((plane) => {
            if (myPlane?.id === plane.id) {
                return null;
            } else {
                return <Marker key={plane.id} position={[plane.lat, plane.lng]} icon={AlliedPlaneIcon} />
            }
        })}
    </>
}