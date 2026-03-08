import mongoose from "mongoose";

const vendorEarningSchema = new mongoose.Schema(
{
 tripId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Trip"
 },

 vendorId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 },

 amount: Number,

 status: {
  type: String,
  enum: ["pending", "paid"],
  default: "pending"
 },

 paymentDate: Date
},
{ timestamps: true }
);

export default mongoose.model("VendorEarning", vendorEarningSchema);