import express from "express";

import {
 startTrip,
 completeTrip
} from "../controllers/tripController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post(
 "/start/:bookingId",
 protect,
 allowRoles("helper"),
 startTrip
);

router.post(
 "/complete/:tripId",
 protect,
 allowRoles("helper"),
 completeTrip
);

export default router;