import { Server } from 'node:http';
import { Server as SocketServer } from 'socket.io';

export function startSocketServer(server: Server) {
    const webSocketSever = new SocketServer(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });

    return webSocketSever;
} 
