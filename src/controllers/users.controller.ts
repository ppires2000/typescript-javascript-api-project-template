import { Request, Response, NextFunction } from 'express';
import { User } from '../database/models/user.model';
import { catchAsync } from '../utils/catchAsync';

export const getAllUsers = catchAsync(async (_req: Request, res: Response) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

export const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404);
    return next(new Error('User not found'));
  }
  res.status(200).json(user);
});

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const { fname, lname, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    res.status(409);
    throw new Error('Email already exists');
  }

  const user = await User.create({ fname, lname, email, password });
  res.status(201).json(user);
});

export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404);
    return next(new Error('User not found'));
  }
  await user.update(req.body);
  res.status(200).json(user);
});

export const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404);
    return next(new Error('User not found'));
  }
  await user.destroy();
  res.status(204).send();
});
