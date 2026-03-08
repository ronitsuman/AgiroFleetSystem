import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
 {
  vendorId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true
  },

  vehicleNumber: {
   type: String,
   required: true,
   unique: true
  },

  vehicleType: {
   type: String,
   required: true
  },

  brand: {
   type: String
  },

  model: {
   type: String
  },

  status: {
   type: String,
   enum: ["pending", "approved", "rejected"],
   default: "pending"
  }
 },
 { timestamps: true }
);

export default mongoose.model("Vehicle", vehicleSchema);