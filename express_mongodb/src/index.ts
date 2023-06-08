import express, { Express } from 'express';
import authRouter from './routes/auth';
import cluster, { Worker } from 'cluster';
import os from 'node:os';
import connectDB from './db';
const port: number = +process.env.PORT! || 4000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
(async () => {
    await connectDB();
})();
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to Express',
    });
});
if (cluster.isMaster) {
    const cores = os.cpus().length;
    console.log(`Total cores: ${cores}`);
    console.log(`Primary process ${process.pid} is running`);
    for (let i = 0; i < cores; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker: Worker, code, signal) => {
        console.log(`worker ${worker.process.pid} has been killed`);
        console.log('Starting another worker');
        cluster.fork();
    });
} else {
    app.listen(port, async () => {
        console.log(`Server running on port http://localhost:${port}`);
        // console.log(`Worker pid = ${process.pid}`);
    }).on('error', (err) => {
        console.log(err.message);
    });
}
