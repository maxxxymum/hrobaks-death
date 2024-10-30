import { PropsWithChildren, useState, useEffect } from "react"
import { NewTargetsContext } from "../context/new-targets";
import { Target } from "../types";
import { useSocket } from "../hooks/use-socket";


export const NewTargetsProvider = ({ children }: PropsWithChildren) => {
    const [newTargets, setNewTargets] = useState<Target[]>([]);

    const socket = useSocket();

    useEffect(() => {
        socket.on("new-target", (target: Target) => {
            console.log("new-target", target);
            setNewTargets((targets) => [...targets, target]);
        });

        return () => {
            socket.off("new-target");
        }
    }, [socket]);

    return (
        <NewTargetsContext.Provider value={newTargets}>
            {children}
        </NewTargetsContext.Provider>
    )
}