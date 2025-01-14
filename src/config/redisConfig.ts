import Redis from 'ioredis';

import ServerConfig from './serverConfig';

const redisConfig = {
    port: parseInt(ServerConfig.REDIS_PORT, 10),
    host: ServerConfig.REDIS_HOST
};

const redisConnection = new Redis(redisConfig);

export default redisConnection;
