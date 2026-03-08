import express from "express";
import { checkVehicleAvailability } from "../controllers/availabilityController.js";

const router = express.Router();

router.get("/vehicle", checkVehicleAvailability);

export default router;