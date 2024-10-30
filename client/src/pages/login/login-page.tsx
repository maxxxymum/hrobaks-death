import { Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMyPlane } from "../../hooks/use-my-plain";
import { createPlaneApi } from "../../api/plane-api";
import { usePlanes } from "../../hooks/use-planes";
import { getRandomPlanePosition } from "./getRandomPlanePosition";

export const LoginPage = () => {
    const navigate = useNavigate();
    const navigateToMap = () => navigate('/map');
    const input = useRef<HTMLInputElement>(null);
    const { setMyPlane } = useMyPlane();
    const { setPlanes } = usePlanes();

    const onLoginClick = async () => {
        if (input.current?.value) {
            const { lat, lng } = getRandomPlanePosition();
            const { plane, planesNearBy } = await createPlaneApi({ name: input.current.value, lat, lng });

            setMyPlane(plane);
            setPlanes(planesNearBy);
            navigateToMap();
        }
    }

    return (
        <>
            <Heading as="h2" size={'4'}>Login</Heading>
            <Text>Plane name</Text>
            <TextField.Root placeholder="Plane name" ref={input} />
            <Button onClick={onLoginClick}>Let's go</Button>
        </>
    )
}