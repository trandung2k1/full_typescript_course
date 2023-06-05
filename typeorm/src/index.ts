import { AppDataSource } from './data-source';
import { User } from './entity/User';
import express, { Express, Response, Request } from 'express';
const app: Express = express();
const port: number = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', async (req: Request, res: Response) => {
    const users = await AppDataSource.manager.find(User);
    return res.status(200).json(users);
});
app.post('/', async (req: Request, res: Response) => {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !lastName || !age)
        return res.status(400).json({ message: 'FirstName, lastName , age is required' });
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    await AppDataSource.manager.save(user);
    return res.status(201).json(user);
});
AppDataSource.initialize()
    .then(async () => {
        app.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
        });
    })
    .catch((error) => console.log(error));
