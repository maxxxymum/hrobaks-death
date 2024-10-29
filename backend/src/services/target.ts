import { RedisService } from './redis.js';
import { randomUUID } from 'node:crypto';


type Target = {
    name: string;
    planeId: string;
    lat: string;
    lng: string;
}

export class TargetService {
    private redisService: RedisService;

    constructor(redisService: RedisService) {
        this.redisService = redisService
    }

    async getTarget(id: string) {
        const target = await this.redisService.redisClient.hGetAll(`target:${id}`);
        const targetLocation = await this.redisService.redisClient.geoPos('targets', id);

        return { ...target, lat: targetLocation[0]?.latitude, lng: targetLocation[0]?.longitude };
    }

    async addTarget(target: Omit<Target, 'id'>) {
        const id = randomUUID();
        const { planeId, name, lat, lng } = target;

        await this.redisService.redisClient.hSet(`target:${id}`, { planeId, name });
        await this.redisService.redisClient.geoAdd('targets', { longitude: lng, latitude: lat, member: id });

        return { id, ...target };
    }
}