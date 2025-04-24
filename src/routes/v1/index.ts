// src/routes/v1/index.ts
import { Router } from 'express';
import healthRoute from './health.route';
import userRoutes from './users.route';
import authRoutes from './auth.route';
import authMeRoute from './authMe.route';

const router = Router();

router.use('/health', healthRoute);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/auth', authMeRoute);

export default router;
