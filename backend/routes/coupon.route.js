import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMyCoupon, validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/", protectRoute, getMyCoupon);
router.post("/validate", protectRoute, validateCoupon);

export default router;
