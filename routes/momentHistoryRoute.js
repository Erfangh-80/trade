import momentController from "../controllers/momentHistoryController.js";

import express from "express";

const router = express.Router();

router.post("/createMomentHistory", () => momentController.createMoment());
router.get("/getAllMomentHistory", () => momentController.getAllMomentHistory());

export default router;