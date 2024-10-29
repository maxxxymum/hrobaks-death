import { RedisService } from "./redis.js";
import { randomUUID } from "node:crypto";

type Plane = {
    name: string;
    lat: string;
    lng: string;
}

export class PlaneService {
    private redisService: RedisService;

    constructor(redisService: RedisService) {
        this.redisService = redisService
    }

    getPlane(id: string) {
        return this.redisService.redisClient.hGetAll(`plane:${id}`);
    }

    async addPlane(plane: Plane) {
        const id = randomUUID();

        await this.redisService.redisClient.hSet(`plane:${id}`, plane);

        return id;
    }
}