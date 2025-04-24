import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ZodError, ZodSchema } from 'zod';

export const validate = (schema: ZodSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: unknown) {
      const zodError = err as ZodError;
      res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: zodError.errors,
      });
    }
  };
};
