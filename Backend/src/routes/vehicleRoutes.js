// import express from "express";
// import {
//  addVehicle,
//  getVehicles,
//  approveVehicle
// } from "../controllers/vehicleController.js";

// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.post("/", protect, addVehicle);
// router.get("/", getVehicles);
// router.patch("/approve/:id", protect, approveVehicle);

// export default router;

import express from "express";
import {
 addVehicle,
 getVehicles,
 approveVehicle
} from "../controllers/vehicleController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, allowRoles("vendor"), addVehicle);

router.get("/", protect, getVehicles);

router.patch(
 "/approve/:id",
 protect,
 allowRoles("admin"),
 approveVehicle
);

export default router;