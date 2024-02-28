import { Router } from 'express';
import { verifyToken } from '@middleware/jwt';
import { currentUser } from '@controllers/user';
const router = Router();
router.get("/",verifyToken, currentUser);
export default router;