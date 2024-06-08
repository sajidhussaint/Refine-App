import { Router } from "express";
import { getHome } from "../controllers/userController.js";

const router = Router();

router.get("/", getHome);


export default router;