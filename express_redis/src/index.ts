import express, { Request, Response, Express } from 'express';
const port: number = 3000;
const app: Express = express();
app.use(express.json());
import Redis from 'ioredis';
const redis = new Redis();
redis.on('error', (err) => console.log('Redis Server Error', err));
app.use(express.urlencoded({ extended: false }));
redis.on('connect', () => {
    console.log('Redis plugged in.');
});
app.get('/', (req: Request, res: Response) => {
    (async () => {
        await redis.set('name', 'Dung');
    })();
    return res.status(200).json('Hello, world!');
});
app.get('/products', (req: Request, res: Response) => {
    const products = [
        {
            productId: 1,
            name: 'Iphone 14',
        },
        {
            productId: 2,
            name: 'Samsung Galaxy A51',
        },
    ];
    (async () => {
        await redis.publish('add-products', JSON.stringify(products));
    })();
    return res.status(200).json(products);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
