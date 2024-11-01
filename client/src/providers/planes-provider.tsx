import { PropsWithChildren, useState, useEffect } from "react";
import { PlanesContext } from "../context/planes";
import { Plane } from "../types";
import { useSocket } from "../hooks/use-socket";

export const PlanesProvider = ({ children }: PropsWithChildren) => {
    const [planes, setPlanes] = useState<Plane[]>([]);
    const socket = useSocket();

    useEffect(() => {
        socket.on("plane-created", (plane: Plane) => {
            setPlanes((planes) => [...planes, plane]);
        });

        return () => {
            socket.off("plane-created");
        }
    }, [socket]);


    return <PlanesContext.Provider value={{ planes, setPlanes }}>{children}</PlanesContext.Provider>
};