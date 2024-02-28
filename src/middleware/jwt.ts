import { NextFunction } from 'connect';
import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { CustomRequest } from '@type/customRequest';
import { JwtPayload } from '@type/jwtPayload';
import CustomError from '@utils/CustomError';

export const verifyToken = (req:CustomRequest, res:Response, next:NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded as JwtPayload;
    next();
  } catch (err) {
    const error = new CustomError('Unauthorized',401);
    return next(error);
  }
}