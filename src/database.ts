import "reflect-metadata";
import { createConnection } from "typeorm";

export async function startConnection() {
    await createConnection();
    console.log('Database is connected');
}