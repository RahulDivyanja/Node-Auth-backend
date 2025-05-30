import express from "express"
import { logout, signup, login ,verifyEmail, forgotPassword, resetPassword,checkAuth} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check_auth", verifyToken, checkAuth);

router.post('/signup', signup);

router.post('/login',login);

router.post('/logout',logout);

router.post('/verify-email',verifyEmail);

router.post('/forgot_password',forgotPassword);

router.post('/reset_password/:token',resetPassword);

export default router;