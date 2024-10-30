import { SocketContext } from "../context/socket";
import { io } from "socket.io-client";

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = io('http://localhost:4000');

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}