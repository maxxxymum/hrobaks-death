import { Marker, useMapEvent } from "react-leaflet"
import { useState } from "react"
import { LatLng } from "leaflet";
import { HrobakIcon } from "./icons/hrobak";
import { useSocket } from "../../../hooks/use-socket";
import { useMyPlane } from "../../../hooks/use-my-plain";

export const TargetTracker = () => {
    const [targets, setTargets] = useState<LatLng[]>([]);
    const socket = useSocket();
    const { myPlane } = useMyPlane();

    const addTarget = (target: LatLng) => {
        setTargets((prevTargets) => [...prevTargets, target]);
    }

    useMapEvent('click', ({ latlng }) => {
        if (myPlane?.id) {
            socket.emit('target', { lat: latlng.lat, lng: latlng.lng, planeId: myPlane.id });
            addTarget(latlng);
        }
    });

    return <>{targets.map((target) => <Marker position={target} icon={HrobakIcon} />)}</>;
}