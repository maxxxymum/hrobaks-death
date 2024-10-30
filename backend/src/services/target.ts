import { RedisService } from './redis.js';
import { randomUUID } from 'node:crypto';
import { SocketService } from './socket.js';

type Target = {
    id: string;
    planeId: string;
    lat: number;
    lng: number;
}

export class TargetService {
    private redisService: RedisService;
    private socketService: SocketService

    constructor(redisService: RedisService, socketService: SocketService) {
        this.redisService = redisService
        this.socketService = socketService
    }

    async getTarget(id: string) {
        const target = await this.redisService.redisClient.hGetAll(`target:${id}`);
        const targetLocation = await this.redisService.redisClient.geoPos('targets', id);

        return { ...target, lat: targetLocation[0]?.latitude, lng: targetLocation[0]?.longitude };
    }

    async addTarget(target: Omit<Target, 'id'>) {
        const id = randomUUID();
        const { planeId, lat, lng } = target;

        await this.redisService.redisClient.hSet(`target:${id}`, { planeId, id });
        await this.redisService.redisClient.geoAdd('targets', { longitude: Number(lng), latitude: Number(lat), member: id });

        return { id, ...target };
    }
}