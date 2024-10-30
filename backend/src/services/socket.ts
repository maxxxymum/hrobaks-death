import { Server } from "socket.io";

export class SocketService {
    socketServer: Server;

    constructor(socketServer: Server) {
        this.socketServer = socketServer;

        socketServer.on('connection', (socket) => {
            socket.on('join-plane-channel', (planeId: string) => {
                socket.join(planeId);
            });
        });
    }
}