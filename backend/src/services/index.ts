import { RedisService } from "./redis.js";
import { PlaneService } from "./plane.js";

export function initServices() {
    const redisService = new RedisService();
    const planeService = new PlaneService(redisService);

    return {
        planeService,
    };
}