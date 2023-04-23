import * as winston from 'winston';
import { LoggerInterface, LoggerOption } from './type';

export class Logger implements LoggerInterface {
    private logger: winston.Logger;

    constructor(loggerOption: LoggerOption) {
        this.initialiseLogger(loggerOption);
    }

    private initialiseLogger(loggerOption: LoggerOption) {
        const { logFileName, logLevel, dirName } = loggerOption;
        const { json, combine, timestamp } = winston.format;
        const format = combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), json());
        const transports = [new winston.transports.Console(), new winston.transports.File({ filename: `${logFileName}.log`, level: logLevel, dirname: dirName })];
        this.logger = winston.createLogger({ format, transports });
    }

    info(msg: string): void {
        this.logger.info(msg);
    }
    warn(msg: string): void {
        this.logger.warn(msg);
    }
    error(msg: string): void {
        this.logger.error(msg);
    }
    debug(msg: string): void {
        this.logger.debug(msg);
    }
}
