import { createClient } from 'redis';

function createRedisClient() {
    const redisClient = createClient({ url: 'redis://127.0.0.1:6379' });

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