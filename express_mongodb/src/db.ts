import { MongoClient, Db } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client: MongoClient = new MongoClient(url);
const dbName: string = 'db';
async function connectDB() {
    try {
        await client.connect();
        console.log('Connect MongoDB server successfully');
        const db: Db = client.db(dbName);
        const existsCollection =
            (await (
                await db.listCollections().toArray()
            ).findIndex((item) => item.name === 'users')) !== -1;
        if (existsCollection) {
            console.log('Collection users exists');
        } else {
            await db.createCollection('users', {
                validator: {
                    $jsonSchema: {
                        bsonType: 'object',
                        required: ['username', 'email', 'password'],
                        properties: {
                            username: {
                                bsonType: 'string',
                                description: 'must be a string and is required',
                            },
                            email: {
                                bsonType: 'string',
                                pattern: '@gmail\\.com$',
                                description: "Must be a string and end with '@gmail.com'",
                            },
                            password: {
                                bsonType: 'string',
                                pattern:
                                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$',
                                description: 'Invalid password',
                            },
                            createdAt: {
                                bsonType: 'string',
                            },
                            updatedAt: {
                                bsonType: 'string',
                            },
                        },
                    },
                },
                validationAction: 'error',
            });
            console.log('Collection created successfully');
        }
        globalThis.db = db;
    } catch (error) {
        console.log(error);
        await client.close();
        process.exit(1);
    }
}

export default connectDB;
