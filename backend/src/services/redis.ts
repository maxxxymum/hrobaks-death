import { createClient } from 'redis';

function createRedisClient() {
    const redisClient = createClient(({
        url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    }));

    redisClient.on('error', (err) => console.error('Redis Client Error', err));
    redisClient.connect().then(() => console.log('Connected to Redis'));

    return redisClient;
}

export class RedisService {
    redisClient: ReturnType<typeof createRedisClient>;

    constructor() {
        this.redisClient = createRedisClient();
    }
}