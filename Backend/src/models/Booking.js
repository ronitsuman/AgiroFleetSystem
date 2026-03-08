import mongoose, { trusted } from "mongoose";

const bookingSchema = new mongoose.Schema(
 {
  customerId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true
  },

  pickupLocation: {
   type: String,
   required: true
  },

  dropLocation: {
   type: String,
   required: true
  },
  startDate: {
 type: Date,
 required: true
},

endDate: {
 type: Date,
 required: true
},

  vendorId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User"
  },

  helperId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User"
  },

  vehicleId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Vehicle",
   required:true
  },

  status: {
   type: String,
   enum: [
    "pending",
    "vendor_assigned",
    "helper_assigned",
    "trip_started",
    "completed"
   ],
   default: "pending"
  }
 },
 { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);