import express from "express";
import cors from "cors";

//routes
import authRoutes from "./routes/authRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import inspectionRoutes from "./routes/inspectionRoutes.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";







const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/inspections", inspectionRoutes);
app.use("/api/availability", availabilityRoutes);

app.get("/", (req, res) => {
 res.json({
  message: "Agiro Fleet API running"
 });
});

export default app;
