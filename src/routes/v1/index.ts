// src/routes/v1/index.ts
import { Router } from 'express';
import healthRoute from './health.route';
import userRoutes from './users.route';

const router = Router();

router.use('/health', healthRoute);
router.use('/users', userRoutes);

export default router;
