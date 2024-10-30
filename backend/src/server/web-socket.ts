import { Server } from 'node:http';
import { Server as SocketServer } from 'socket.io';
import type { Services } from '../services/index.js';

export function startSocketServer(server: Server, services: Services) {
    const io = new SocketServer(server, { cors: { origin: 'http://localhost:5173', methods: ['GET', 'POST'] } });

    return io;
} 
