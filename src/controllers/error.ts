import CustomError from '@utils/CustomError';
import { Request, Response, NextFunction } from 'express';
export const errorHandler = (err: CustomError, _: Request, res: Response, __: NextFunction) => {
  const status = err.statusCode ? err.statusCode : 500;
  const message = err.message;
  return res.status(status).json({ message });
}