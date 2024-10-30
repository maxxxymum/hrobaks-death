import { Heading, TextField, Button, Flex } from "@radix-ui/themes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMyPlane } from "../../hooks/use-my-plane";
import { createPlaneApi } from "../../api/plane-api";
import { usePlanes } from "../../hooks/use-planes";
import { getRandomPlanePosition } from "./getRandomPlanePosition";
import { useTargets } from "../../hooks/use-targets";


const useOnLoginClick = () => {
    const navigate = useNavigate();
    const navigateToMap = () => navigate('/map');

    const { setMyPlane } = useMyPlane();
    const { setPlanes } = usePlanes();
    const { setTargets } = useTargets(); 

    const onLoginClick = async (name: string | undefined) => {
        if (!name) return;

        const { lat, lng } = getRandomPlanePosition();
        const { plane, planesNearBy, targetsNearBy } = await createPlaneApi({ name, lat, lng });

        setMyPlane(plane);
        setPlanes(planesNearBy);
        setTargets(targetsNearBy);
        navigateToMap();
    }

    return onLoginClick;
}

export const LoginPage = () => {
    const input = useRef<HTMLInputElement>(null);

    const onLoginClick = useOnLoginClick();

    return (
        <Flex direction={'column'} gap={'4'} justify={'center'} align={'center'}>
            <Heading as="h2" size={'6'}>Plane Name</Heading>
            <TextField.Root size={'3'} placeholder="Enter plane name" ref={input} />
            <Button size={'3'} onClick={() => {
                onLoginClick(input.current?.value);
            }}>Let's go</Button>
        </Flex>
    )
}