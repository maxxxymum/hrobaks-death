import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { PlaneIcon } from './icons/plane';
import { TargetTracker } from './target-tracker';
import type { Plane } from '../../../types';
import { Planes } from './planes';

export type MapProps = {
    myPlane: Plane
}

export const Map = ({ myPlane }: MapProps) => {
    return <MapContainer center={[myPlane.lat, myPlane.lng]} zoom={9} scrollWheelZoom={false} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[myPlane.lat, myPlane.lng]} icon={PlaneIcon} />
        <TargetTracker />
        <Planes />
    </MapContainer>
}