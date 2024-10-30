import { Heading, Text, TextField, Button } from "@radix-ui/themes";
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

        console.log(plane, planesNearBy, targetsNearBy);

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
        <>
            <Heading as="h2" size={'4'}>Login</Heading>
            <Text>Plane name</Text>
            <TextField.Root placeholder="Plane name" ref={input} />
            <Button onClick={() => {
                onLoginClick(input.current?.value);
            }}>Let's go</Button>
        </>
    )
}