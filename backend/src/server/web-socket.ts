import { Server } from 'node:http';
import { Server as SocketServer } from 'socket.io';

export function startSocketServer(server: Server) {
    const io = new SocketServer(server, { cors: { origin: 'http://localhost:5173', methods: ['GET', 'POST'] } });

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });

    return io;
} 
