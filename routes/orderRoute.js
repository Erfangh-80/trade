import express from "express";
import orderController from "../controllers/orderController.js"

const router = express.Router();

router.get("/getallorder", () => orderController.getAllOrder);
router.get("/getfindorder/:id", () => orderController.getFindOrder);
router.get("/getuserorder/:id", () => orderController.findUserOrder);
router.post("/createorder", () => orderController.createOrder);

export default router;