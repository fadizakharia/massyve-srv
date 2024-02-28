import {Request,Response, NextFunction } from 'express';
import User from '@models/user';
import {verify} from 'argon2';
import jwt from 'jsonwebtoken';
import CustomError from '@utils/CustomError';
export const login = async (req: Request, res: Response,next:NextFunction) => {
  const { username, password } = req.body;

  try{
  const user = await User.findOne({ username });
  const invalidCredentialsError = new CustomError('Email or Password is incorrect', 401);
  
  if (!user) {
    return next(invalidCredentialsError);
  }
  const isPasswordMatch = await verify( user.password,password);
  if (!isPasswordMatch) {
    return next(invalidCredentialsError)
  }
  const token = jwt.sign({ username: user.username, firstName:user.firstName, lastName:user.lastName},process.env.JWT_SECRET as string,{ expiresIn: '1h' });
  return res.status(200).json({ token });
  } catch(err) {
    const error = new CustomError('Something went wrong', 500);
    return next(error);
  }
};