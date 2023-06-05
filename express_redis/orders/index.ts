import express, { Express } from 'express';
const port: number = 3001;
const app: Express = express();
app.use(express.json());
import Redis from 'ioredis';
const redis = new Redis();
redis.on('error', (err) => console.log('Redis Server Error', err));
app.use(express.urlencoded({ extended: false }));
redis.on('connect', () => {
    console.log('Redis plugged in.');
});
redis.subscribe('add-products', (err, count) => {
    if (err) {
        console.error('Failed to subscribe: %s', err.message);
    } else {
        console.log(
            `Subscribed successfully! This client is currently subscribed to ${count} channels.`,
        );
    }
});
redis.on('message', (channel, message) => {
    console.log(JSON.parse(message));
    console.log(`Received from ${channel}`);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
