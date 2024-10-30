import { Marker, useMapEvent } from "react-leaflet"
import { useState } from "react"
import { LatLng } from "leaflet";
import { HrobakIcon } from "./icons/hrobak";

export const TargetTracker = () => {
    const [targets, setTargets] = useState<LatLng[]>([]);

    const addTarget = (target: LatLng) => {
        setTargets((prevTargets) => [...prevTargets, target]);
    }

    useMapEvent('click', ({ latlng }) => {
        addTarget(latlng)
    });

    return <>{targets.map((target) => <Marker position={target} icon={HrobakIcon} />)}</>;
}