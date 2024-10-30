import { RedisService } from "./redis.js";
import { PlaneService } from "./plane.js";
import { TargetService } from "./target.js";
import { SocketService } from "./socket.js";

import type { Server as SocketServer } from "socket.io";

export type Services = ReturnType<typeof initServices>;

export function initServices({ socket }: { socket: SocketServer }) {
    const redisService = new RedisService();
    const socketService = new SocketService(socket);
    const planeService = new PlaneService(redisService, socketService);
    const targetService = new TargetService(redisService, socketService);

    return {
        planeService,
        targetService,
    };
}