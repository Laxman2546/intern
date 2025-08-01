import express from "express";

const router = express.Router();

router.post("/getcode", getCode);

export default router;
