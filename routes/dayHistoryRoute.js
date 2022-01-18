import express from "express";
import dayHistoryController from "../controllers/dayHistoryController.js";

const router = express.Router();

router.get("/getAllHistory", () => dayHistoryController.getAllHistory);
router.get("/getDateHistory/:id", () => dayHistoryController.getHistoryDate);
router.get("/getUserHistory/:id", () => dayHistoryController.getHistoryUser);
router.post("/createHistory", () => dayHistoryController.createDayHistory);

export default router;