import { CustomRequest } from '@type/customRequest';
import { Response } from 'express';
export const currentUser = (req: CustomRequest, res: Response) => {
  return res.status(200).json({ user: req.user });
}