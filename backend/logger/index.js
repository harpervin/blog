import pino from "pino";
import { config } from 'dotenv';
config();

const logger = pino({
    level: process.env.LOG_LEVEL,
    timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
