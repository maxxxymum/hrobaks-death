import { Section, Container, Box } from '@radix-ui/themes';
import { useEffect } from 'react';
import { useMyPlane } from '../../hooks/use-my-plain';
import { useNavigate } from 'react-router-dom';
import { Map } from './map/map';

import 'leaflet/dist/leaflet.css';

export const MapPage = () => {
    const navigate = useNavigate();
    const { myPlane } = useMyPlane();

    useEffect(() => {
        if (!myPlane) {
            navigate('/');
        }
    }, [myPlane, navigate]);

    return (
        <Section size='4'>
            <Container size={'4'}>
                <Box width={'800px'} height={'500px'}>
                    <Map myPlane={myPlane!} />
                </Box>

            </ Container>
        </Section >

    );
}