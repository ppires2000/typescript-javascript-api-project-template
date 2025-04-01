// src/routes/v1/index.ts
import { Router } from 'express';
import healthRoute from './health.route';

const router = Router();

router.use('/health', healthRoute);

export default router;
