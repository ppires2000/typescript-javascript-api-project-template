import express from 'express';
import { authenticateToken, AuthenticatedRequest } from '../../middlewares/authenticateToken';

const router = express.Router();

router.get('/me', authenticateToken, (req, res) => {
  const { user } = req as AuthenticatedRequest;
  res.status(200).json({ message: 'Authenticated', user });
});

export default router;
