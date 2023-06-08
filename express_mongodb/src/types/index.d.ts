import type { Db } from 'mongodb';
declare global {
    namespace globalThis {
        var db: Db;
    }
}
export {};
