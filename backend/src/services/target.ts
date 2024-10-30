import { RedisService } from './redis.js';
import { randomUUID } from 'node:crypto';
import { SocketService } from './socket.js';
import { GeoReplyWith } from 'redis';
import type { Plane } from './plane.js';

type Target = {
    id: string;
    planeId: string;
    lat: number;
    lng: number;
}

type TargetWithDistance = Target & { distance: number };

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

        const newTarget = { id, ...target };

        this.notifyNearbyPlanesAboutNewTarget(newTarget);

        return newTarget;
    }

    async notifyNearbyPlanesAboutNewTarget(target: Target) {
        const distances = await this.getDistanceToNearbyPlanes(target);

        distances.forEach(({ planeId, distance }) => {
            this.socketService.socketServer.to(planeId).emit('new-target', { ...target, distance });
        });
    }

    async getDistanceToNearbyPlanes(target: Target) {
        const planes = await this.redisService.redisClient.geoSearchWith('planes', { longitude: target.lng, latitude: target.lat }, { radius: 200, unit: 'km' }, [GeoReplyWith.DISTANCE]);

        return planes.map(({ member, distance }) => ({ planeId: member, distance }));
    }

    async getAllTargetsNearBy(plane: Plane) {
        const targets = await this.redisService.redisClient.geoSearchWith('targets', { longitude: plane.lng, latitude: plane.lat }, { radius: 200, unit: 'km' }, [GeoReplyWith.COORDINATES, GeoReplyWith.DISTANCE]);

        return targets.map(({ member, coordinates, distance }) => ({ id: member, lng: coordinates?.longitude, lat: coordinates?.latitude, distance }));
    }
}