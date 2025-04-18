import chalk from 'chalk';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';
import fs from 'fs';

const logDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const isDev = process.env.NODE_ENV === 'development';

const transports: winston.transport[] = [
  new DailyRotateFile({
    filename: path.join(logDir, 'app-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'info',
  }),
  new DailyRotateFile({
    filename: path.join(logDir, 'error-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
    level: 'error',
  }),
];

const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`,
    ),
  ),
  transports: isDev
    ? [new winston.transports.Console(), ...transports] // ✅ console + file logs
    : transports,
  exceptionHandlers: [
    new DailyRotateFile({
      filename: path.join(logDir, 'exceptions-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
  ],
  rejectionHandlers: [
    new DailyRotateFile({
      filename: path.join(logDir, 'rejections-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
  ],
});

export const logger = {
  info: (msg: string) => {
    if (isDev) {
      console.log(`${chalk.blue('[INFO]')} ${msg}`);
    } else {
      winstonLogger.info(msg);
    }
  },

  success: (msg: string) => {
    if (isDev) {
      console.log(`${chalk.green('[SUCCESS]')} ${msg}`);
    } else {
      winstonLogger.info(msg);
    }
  },

  warn: (msg: string) => {
    if (isDev) {
      console.log(`${chalk.yellow('[WARN]')} ${msg}`);
    } else {
      winstonLogger.warn(msg);
    }
  },

  error: (msg: string) => {
    if (isDev) {
      console.log(`${chalk.red('[ERROR]')} ${msg}`);
    }
    winstonLogger.error(msg); // ✅ Always log to file
  },

  route: (method: string, url: string, status: number, time: number) => {
    const statusColor =
      status >= 500
        ? chalk.red
        : status >= 400
          ? chalk.yellow
          : status >= 300
            ? chalk.cyan
            : chalk.green;

    const message = `${method} ${url} → ${status} (${time.toFixed(2)} ms)`;

    if (isDev) {
      console.log(
        `${chalk.gray(`[${new Date().toISOString()}]`)} ${chalk.magenta(
          method,
        )} ${chalk.white(url)} → ${statusColor(status)} (${time.toFixed(2)} ms)`,
      );
    } else {
      winstonLogger.info(message);
    }
  },
};
