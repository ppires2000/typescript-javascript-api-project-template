import express from 'express';
import { sequelize } from '../../database/config/database';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      database: 'connected',
      timestamp: Date.now(),
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
      error: (error as Error).message,
    });
  }
});

export default router;
