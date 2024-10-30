import { Section, Container, Box } from '@radix-ui/themes';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { PlaneIcon } from './icons/plane';
import { TargetTracker } from './components/target-tracker';

import 'leaflet/dist/leaflet.css';

export const Map = () => {
    return (
        <Section size='4'>
            <Container size={'4'}>
                <Box width={'800px'} height={'500px'}>
                    <MapContainer center={[55.752836452662, 37.6228417793383]} zoom={10} scrollWheelZoom={false} style={{ height: '500px' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[55.752836452662, 37.6228417793383]} icon={PlaneIcon} />
                        <TargetTracker />
                    </MapContainer>
                </Box>

            </ Container>
        </Section >

    );
}