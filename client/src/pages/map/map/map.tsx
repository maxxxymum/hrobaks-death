import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { PlaneIcon } from './icons/plane';
import { TargetTracker } from './target-tracker';
import type { Plane } from '../../../types';

export type MapProps = {
    myPlane: Plane
}

export const Map = ({ myPlane }: MapProps) => {
    return <MapContainer center={[myPlane!.lat, myPlane!.lng]} zoom={10} scrollWheelZoom={false} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[55.752836452662, 37.6228417793383]} icon={PlaneIcon} />
        <TargetTracker />
    </MapContainer>
}