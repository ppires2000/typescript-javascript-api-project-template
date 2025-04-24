// tests/utils/createHealthApp.ts
import express from 'express';
import healthRoute from '../../src/routes/v1/health.route';

export function createHealthApp() {
  const app = express();
  app.use('/api/v1/health', healthRoute);
  return app;
}
