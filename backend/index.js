const express = require("express");
const { createClient } = require("redis");
const app = express();
const PORT = 4000;

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.connect().then(() => console.log("Connected to Redis"));

app.get("/", (req, res) => res.send("Backend is running!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
