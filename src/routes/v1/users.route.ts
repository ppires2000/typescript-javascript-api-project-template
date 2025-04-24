import express from 'express';
import { createUserSchema } from '../../schemas/user.schema';
import { validate } from '../../middlewares/validate';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/users.controller';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', validate(createUserSchema), createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
