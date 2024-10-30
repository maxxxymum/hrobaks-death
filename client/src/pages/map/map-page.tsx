import { Box, Flex } from '@radix-ui/themes';
import { useEffect } from 'react';
import { useMyPlane } from '../../hooks/use-my-plane';
import { useNavigate } from 'react-router-dom';
import { Map } from './map/map';
import { NewTargets } from './new-targets';

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
        <Flex width={'100%'} flexGrow={'1'} align={'stretch'}>
            <Box flexGrow={'1'} width={'100%'} height={'100%'}>
                {myPlane ? <Map myPlane={myPlane} /> : null}
            </Box>
            <NewTargets />
        </Flex>
    );
}