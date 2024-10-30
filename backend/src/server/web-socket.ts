import { Server } from 'node:http';
import { Server as SocketServer } from 'socket.io';

export function startSocketServer(server: Server) {
    const io = new SocketServer(server, { cors: { origin: 'http://localhost:5173', methods: ['GET', 'POST'] } });

    return io;
} 
