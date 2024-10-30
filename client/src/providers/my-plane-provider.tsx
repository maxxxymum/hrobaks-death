import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { MyPlaneContext } from "../context/my-plane";
import type { Plane } from "../types";
import { useSocket } from "../hooks/use-socket";

export const MyPlaneProvider = ({ children }: PropsWithChildren) => {
    const socket = useSocket();
    const [myPlane, setMyPlane] = useState<Plane | undefined>(undefined);

    const setMyPlaneAndJoinChannel = useCallback((plane: Plane) => {
        socket.emit("join-plane-channel", plane.id);
        setMyPlane(plane);
    }, [socket]);

    const ctx = useMemo(() => ({ myPlane, setMyPlane: setMyPlaneAndJoinChannel }), [myPlane, setMyPlaneAndJoinChannel]);

    return <MyPlaneContext.Provider value={ctx}>{children}</MyPlaneContext.Provider>
};