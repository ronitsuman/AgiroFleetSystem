import express from "express";
import {
 addVendorEarning,
 markPaymentPaid
} from "../controllers/vendorEarningController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post(
 "/",
 protect,
 allowRoles("admin"),
 addVendorEarning
);

router.patch(
 "/pay/:id",
 protect,
 allowRoles("admin"),
 markPaymentPaid
);

export default router;