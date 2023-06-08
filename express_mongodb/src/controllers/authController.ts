import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class AuthController {
    static async register(req: Request, res: Response) {
        const collection = globalThis.db.collection('users');
        const { username, email, password } = req.body;
        if (!username || !password || !email) {
            return res.status(400).json({ message: 'Please provide username, email and password' });
        }
        const date = new Date().toISOString();
        const findOne = await collection.findOne({ email });
        if (findOne) {
            return res.status(400).json({ message: 'User already exists' });
        }
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const rs = await collection.insertOne({
                username,
                email,
                password: hashedPassword,
                createdAt: date,
                updatedAt: date,
            });
            const findOne = await collection.findOne({ _id: rs.insertedId });
            delete findOne?.password;
            return res.status(201).json(findOne);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        }
    }
    static async login(req: Request, res: Response) {
        const collection = globalThis.db.collection('users');
        const { email } = req.body;
        if (!req.body.password || !email) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }
        try {
            const findUser = await collection.findOne({ email: email });
            if (!findUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isValidPassword = await bcrypt.compare(req.body.password, findUser.password);
            if (!isValidPassword) {
                return res.status(400).json({ message: 'Wrong password' });
            }
            const { password, ...info } = findUser;
            const accessToken = jwt.sign({ userId: info._id }, 'secret');
            return res.status(200).json({ ...info, accessToken });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        }
    }
}

export default AuthController;
