import { RedisService } from "./redis.js";
import { PlaneService } from "./plane.js";
import { TargetService } from "./target.js";

export type Services = ReturnType<typeof initServices>;

export function initServices() {
    const redisService = new RedisService();
    const planeService = new PlaneService(redisService);
    const targetService = new TargetService(redisService);

    return {
        planeService,
        targetService,
    };
}