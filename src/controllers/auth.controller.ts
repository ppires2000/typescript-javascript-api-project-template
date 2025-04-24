import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../database/models/user.model';
import { catchAsync } from '../utils/catchAsync';

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET ?? '', {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  } as jwt.SignOptions);

  res.status(200).json({
    token,
    user: {
      id: user.id,
      email: user.email,
      fname: user.fname,
      lname: user.lname,
    },
  });
});
