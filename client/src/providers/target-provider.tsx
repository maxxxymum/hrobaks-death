import { PropsWithChildren, useState, useEffect } from "react";
import { TargetsContext } from "../context/targets";
import { Target } from "../types";
import { useSocket } from "../hooks/use-socket";

export const TargetsProvider = ({ children }: PropsWithChildren) => {
    const [targets, setTargets] = useState<Target[]>([]);
    const socket = useSocket();

    useEffect(() => {
        socket.on("target-created", (target: Target) => {
            setTargets((targets) => [...targets, target]);
        });
    }, [socket]);


    return <TargetsContext.Provider value={{ targets, setTargets }}>{children}</TargetsContext.Provider>
};