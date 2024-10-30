import { Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../hooks/useSocket";

export const Login = () => {
    const navigate = useNavigate();
    const navigateToMap = () => navigate('/map');
    const input = useRef<HTMLInputElement>(null);
    const socket = useSocket();

    const onLoginClick = () => {
        navigateToMap();
        socket.connect();
        socket.emit('create-plane', { name: input.current?.value, lat: 55.752836452662, lng: 37.6228417793383 });
        socket.on('plane-created', (plane) => {
            console.log(plane);
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