# winston-logger

## Installation

1. Add `@gopikiller:registry=https://npm.pkg.github.com` to your `.npmrc` file.
2. Run the below npm command to install.

```
npm install @gopikiller/winston-logger
```

## Usage

```typescript
import { Logger, LoggerOption } from '@gopikiller/winston-logger/lib';

const loggerOption: LoggerOption = {
    logFileName: 'combained',
    logLevel: 'debug',
};

const logger = new Logger(loggerOption);

logger.info('Hello World!');

// It create's a file combained.log with log object.
// output log on console: {"level":"info","message":"Hello World!","timestamp":"2023-04-23 11:22:36"}
```
