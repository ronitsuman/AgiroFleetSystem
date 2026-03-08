import express from "express";

import {
 createBooking,
 assignVendor,
 assignHelper
} from "../controllers/bookingController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, allowRoles("customer"), createBooking);

router.patch(
 "/assign-vendor/:id",
 protect,
 allowRoles("admin"),
 assignVendor
);

router.patch(
 "/assign-helper/:id",
 protect,
 allowRoles("admin"),
 assignHelper
);

export default router;