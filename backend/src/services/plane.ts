import { RedisService } from "./redis.js";
import { randomUUID } from "node:crypto";

type Plane = {
    id: string;
    name: string;
    lat: number;
    lng: number
}

export class PlaneService {
    private redisService: RedisService;

    constructor(redisService: RedisService) {
        this.redisService = redisService
    }

    async getPlane(id: string) {
        const plane = await this.redisService.redisClient.hGetAll(`plane:${id}`);
        const planeLocation = await this.redisService.redisClient.geoPos('planes', id);

        return { ...plane, lat: planeLocation[0]?.latitude, lng: planeLocation[0]?.longitude };
    }

    async addPlane({ name, lat, lng }: Omit<Plane, 'id'>) {
        const userId = randomUUID();

        await this.redisService.redisClient.hSet(`plane:${userId}`, { name });
        await this.redisService.redisClient.geoAdd('planes', { longitude: lng, latitude: lat, member: userId });

        return { id: userId, name, lat, lng };
    }
}