import { Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const navigateToMap = () => navigate('/map');

    return (
        <>
            <Heading as="h2" size={'4'}>Login</Heading>
            <Text>Plane name</Text>
            <TextField.Root placeholder="Plane name" />
            <Button onClick={navigateToMap}>Let's go</Button>
        </>
    )
}