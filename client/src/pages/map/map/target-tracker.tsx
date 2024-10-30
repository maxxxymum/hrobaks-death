import { Marker, useMapEvent } from "react-leaflet"
import { useState } from "react"
import { HrobakIcon } from "./icons/hrobak";
import { useMyPlane } from "../../../hooks/use-my-plain";
import { createTargetApi } from "../../../api/target-api";
import { Target } from "../../../types";

export const TargetTracker = () => {
    const [targets, setTargets] = useState<Target[]>([]);
    const { myPlane } = useMyPlane();

    const addTarget = (target: Target) => {
        setTargets((prevTargets) => [...prevTargets, target]);
    }

    useMapEvent('click', async ({ latlng }) => {
        if (myPlane?.id) {
            const target = await createTargetApi({ lat: latlng.lat, lng: latlng.lng, planeId: myPlane.id });
            addTarget(target);
        }
    });

    return <>{targets.map((target) => <Marker key={target.id} position={target} icon={HrobakIcon} />)}</>;
}