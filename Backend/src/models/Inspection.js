import mongoose from "mongoose";

const inspectionSchema = new mongoose.Schema(
{
 tripId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Trip"
 },

 type:{
  type:String,
  enum:["pickup","delivery"]
 },

 fuelLevel:String,

 notes:String,

 images:[String],

 createdBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 }
},
{timestamps:true}
);

export default mongoose.model("Inspection",inspectionSchema);