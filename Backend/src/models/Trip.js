import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
 {
  bookingId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Booking",
   required: true
  },

  startTime: Date,

  endTime: Date,

  status: {
   type: String,
   enum: ["started", "completed"],
   default: "started"
  }
 },
 { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);