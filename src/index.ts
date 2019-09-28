import 'dotenv/config'


import { startConnection } from './database'

// Servicios
import {TimeService} from './services/time'


const timeService = new TimeService;

(async function main() {
    await startConnection();
    timeService.start();
})()
