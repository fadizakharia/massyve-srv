import { Router } from 'express';
import auth from '@routes/auth';
import user from '@routes/user';

const router = Router();
router.get("/",(req,res)=>{
    res.send("Auth route");
}
);
router.use("/auth", auth);
router.use("/user", user);

export default router