import express from "express";
import tradeController from "../controllers/tradeController.js";

const router = express.Router();

router.get("/getalltrade", () => tradeController.getAllTrade);
router.get("/getfindtrade/:id", () => tradeController.getFindTrade);
router.get("/getusertrade/:id", () => tradeController.findUserTrade);
router.post("/createtrade", () => tradeController.createTrade);

export default router;


