import { createClient } from "redis";

const redisClient = createClient({
    url: "redis://discoverholyrood.redis.cache.windows.net:6380",
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));
