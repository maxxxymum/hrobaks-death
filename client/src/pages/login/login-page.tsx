import { Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../hooks/use-socket";
import { useMyPlane } from "../../hooks/use-my-plain";

export const LoginPage = () => {
    const navigate = useNavigate();
    const navigateToMap = () => navigate('/map');
    const input = useRef<HTMLInputElement>(null);
    const socket = useSocket();
    const { setMyPlane } = useMyPlane();

    const onLoginClick = () => {
        socket.connect();
        socket.emit('create-plane', { name: input.current?.value, lat: 55.752836452662, lng: 37.6228417793383 });
        socket.on('plane-created', (plane) => {
            setMyPlane(plane);
            navigateToMap();
        });
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