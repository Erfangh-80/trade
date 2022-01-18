import symbolController from "../controllers/symbolController.js";
import express from "express";

const router = express.Router();

router.post("/createSymbol", () => symbolController.createSymbol);
router.get("/getSymbol", () => symbolController.getAllSymbol);
router.get("/getFindSymbol/:id", () => symbolController.FindSymbol);
router.put("/getUpdateSymbol/:id", () => symbolController.EditSymbol);
router.delete("/getDeleteSymbol/:id", () => symbolController.DeleteSymbol);

export default router;