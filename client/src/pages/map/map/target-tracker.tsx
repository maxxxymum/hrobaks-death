import { Marker, useMapEvent } from "react-leaflet"
import { HrobakIcon } from "./icons/hrobak";
import { useMyPlane } from "../../../hooks/use-my-plane";
import { createTargetApi } from "../../../api/target-api";
import { useTargets } from "../../../hooks/use-targets";
import { useNewTargets } from "../../../hooks/use-new-targets";

export const TargetTracker = () => {
    const { myPlane } = useMyPlane();
    const { targets } = useTargets();
    const newTargets = useNewTargets();

    useMapEvent('click', ({ latlng }) => {
        if (myPlane?.id) {
            createTargetApi({ lat: latlng.lat, lng: latlng.lng, planeId: myPlane.id });
        }
    });

    return <>
        {targets.map((target) => <Marker key={target.id} position={target} icon={HrobakIcon} />)}
        {newTargets.map((target) => <Marker key={target.id} position={target} icon={HrobakIcon} />)}

    </>;
}