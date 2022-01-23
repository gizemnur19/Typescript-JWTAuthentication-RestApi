import { Router } from "express";
import { isAuth } from "../middlewares/verifyToken";
import {
  getUsers
} from "../controllers/users.controller";
import { isAdmin } from "../middlewares/permissionsLevel";

const router: Router = Router();

router.get("/all", [isAuth,isAdmin], getUsers); // Get Users

export default router;
