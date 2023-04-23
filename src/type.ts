export interface LoggerInterface {
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    debug(msg: string): void;
}

export type LoggerOption = {
    logFileName: string;
    logLevel: 'info' | 'warn' | 'error' | 'debug';
    dirName?: string;
};
