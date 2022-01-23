import { Router } from "express";
import {
  checkRolesExists,
  checkUsernameAndEmailExists,
} from "../middlewares/checkSignUp";
import { isAuth } from "../middlewares/verifyToken";
import { profile, signIn, signUp } from "../controllers/auth/auth.controller";

const router: Router = Router();

router.post("/signin", signIn);   // Login
router.post("/signup", [checkRolesExists, checkUsernameAndEmailExists], signUp);  // Register
router.get("/profile", isAuth, profile); // Get Profile

export default router;
