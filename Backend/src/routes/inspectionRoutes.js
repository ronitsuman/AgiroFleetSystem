import express from "express";
import { createInspection } from "../controllers/inspectionController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post(
 "/",
 protect,
 allowRoles("helper"),
 createInspection
);

export default router;