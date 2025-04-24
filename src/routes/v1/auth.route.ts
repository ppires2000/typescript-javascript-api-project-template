import express from 'express';
import { login } from '../../controllers/auth.controller';
import { validate } from '../../middlewares/validate';
import { loginSchema } from '../../schemas/auth.schema';

const router = express.Router();

router.post('/login', validate(loginSchema), login);

export default router;
