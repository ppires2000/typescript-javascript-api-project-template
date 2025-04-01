// src/utils/logger.ts
import chalk from 'chalk';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';
import fs from 'fs';

// Create logs directory if not exists
const logDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const isDev = process.env.NODE_ENV === 'development';

// Winston transports for production
const transports: winston.transport[] = [
  new DailyRotateFile({
    filename: path.join(logDir, 'app-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d', // Keep logs for 14 days
    level: 'info',
  }),
  new DailyRotateFile({
    filename: path.join(logDir, 'error-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d', // Keep error logs for 30 days
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
  transports: isDev ? [new winston.transports.Console()] : transports,
  exceptionHandlers: [
    new winston.transports.File({ filename: path.join(logDir, 'exceptions.log') }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: path.join(logDir, 'rejections.log') }),
  ],
});

export const logger = {
  info: (msg: string) => {
    isDev ? console.log(`${chalk.blue('[INFO]')} ${msg}`) : winstonLogger.info(msg);
  },
  success: (msg: string) => {
    isDev ? console.log(`${chalk.green('[SUCCESS]')} ${msg}`) : winstonLogger.info(msg);
  },
  warn: (msg: string) => {
    isDev ? console.log(`${chalk.yellow('[WARN]')} ${msg}`) : winstonLogger.warn(msg);
  },
  error: (msg: string) => {
    isDev ? console.log(`${chalk.red('[ERROR]')} ${msg}`) : winstonLogger.error(msg);
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

    isDev
      ? console.log(
          `${chalk.gray(`[${new Date().toISOString()}]`)} ${chalk.magenta(method)} ${chalk.white(url)} → ${statusColor(status)} (${time.toFixed(2)} ms)`,
        )
      : winstonLogger.info(message);
  },
};
