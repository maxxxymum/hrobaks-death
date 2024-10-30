import { Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMyPlane } from "../../hooks/use-my-plain";
import { createPlaneApi } from "../../api/plane-api";

export const LoginPage = () => {
    const navigate = useNavigate();
    const navigateToMap = () => navigate('/map');
    const input = useRef<HTMLInputElement>(null);
    const { setMyPlane } = useMyPlane();

    const onLoginClick = async () => {
        if (input.current?.value) {
            const plane = await createPlaneApi({ name: input.current.value, lat: 55.752836452662, lng: 37.6228417793383 });

            setMyPlane(plane);
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