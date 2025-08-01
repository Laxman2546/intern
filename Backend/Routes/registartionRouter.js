import express from "express";

const router = express.Router();
import { Registration, login } from "../Controllers/registration.js";

router.post("/register", Registration);
router.post("/login", login);
export default router;
