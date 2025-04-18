import express from 'express';
import { sequelize } from '../../database/config/database';

const router = express.Router();

/**
 * @openapi
 * /api/v1/health:
 *   get:
 *     summary: Check API and database health status
 *     description: Returns the API uptime and database connection status.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API is running and database is connected
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 uptime:
 *                   type: number
 *                   example: 123.45
 *                 database:
 *                   type: string
 *                   example: connected
 *                 timestamp:
 *                   type: number
 *                   example: 1682219912345
 *       500:
 *         description: Database connection failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 database:
 *                   type: string
 *                   example: disconnected
 *                 error:
 *                   type: string
 *                   example: Unable to connect to the database.
 */

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
