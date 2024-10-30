import { Server } from "socket.io";

export class SocketService {
    private socket: Server;

    constructor(socket: Server) {
        this.socket = socket;
    }

    public emit(event: string, data: any) {
        this.socket.emit(event, data);
    }
}