import express from "express";
import { getCode } from "../Controllers/getCode.js";

const router = express.Router();

router.post("/getcode", getCode);

export default router;
