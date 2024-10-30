import { RedisService } from "./redis.js";
import { randomUUID } from "node:crypto";
import type { SocketService } from "./socket.js";
import { GeoReplyWith } from "redis";

export type Plane = {
    id: string;
    name: string;
    lat: number;
    lng: number
}

export class PlaneService {
    private redisService: RedisService;
    private socketService: SocketService

    constructor(redisService: RedisService, socketService: SocketService) {
        this.redisService = redisService
        this.socketService = socketService
    }

    async addPlane({ name, lat, lng }: Omit<Plane, 'id'>) {
        const userId = randomUUID();

        await this.redisService.redisClient.hSet(`plane:${userId}`, { name });
        await this.redisService.redisClient.geoAdd('planes', { longitude: lng, latitude: lat, member: userId });

        const newPlane = { id: userId, name, lat, lng };

        this.socketService.socketServer.emit('plane-created', newPlane);

        return newPlane;
    }

    async getAllPlanesNearBy(plane: Plane) {
        const planes = await this.redisService.redisClient.geoSearchWith('planes', { longitude: plane.lng, latitude: plane.lat }, { radius: 200, unit: 'km' }, [GeoReplyWith.COORDINATES]);
        return planes.map(({ member, coordinates }) => ({ id: member, lng: coordinates?.longitude, lat: coordinates?.latitude }));
    }

    async getPlane(id: string) {
        const plane = await this.redisService.redisClient.hGetAll(`plane:${id}`);
        const planeLocation = await this.redisService.redisClient.geoPos('planes', id);

        return { id, ...plane, lat: planeLocation[0]?.latitude, lng: planeLocation[0]?.longitude }
    }
}