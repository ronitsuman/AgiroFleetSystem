import express from "express";
import cors from "cors";

//routes
import authRoutes from "./routes/authRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
 res.json({
  message: "Agiro Fleet API running"
 });
});

export default app;
