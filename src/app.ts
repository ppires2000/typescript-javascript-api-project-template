// src/app.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import v1Routes from './routes/v1';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

import { logger } from './utils/logger';

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    const start = process.hrtime();

    res.on('finish', () => {
      const [seconds, nanoseconds] = process.hrtime(start);
      const time = seconds * 1000 + nanoseconds / 1e6;

      logger.route(req.method, req.originalUrl, res.statusCode, time);
    });

    next();
  });
}

// Default route
app.get('/', (_req, res) => {
  res.json({ message: 'API is running.' });
});

// Versioned API routes
app.use('/api/v1', v1Routes);

// Serve Swagger docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
