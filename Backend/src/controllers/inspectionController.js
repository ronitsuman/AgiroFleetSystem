import Inspection from "../models/Inspection.js";

export const createInspection = async(req,res)=>{

 const { tripId,type,fuelLevel,notes } = req.body;

 const inspection = await Inspection.create({
  tripId,
  type,
  fuelLevel,
  notes,
  createdBy:req.user.id
 });

 res.json({
  message:"Inspection recorded",
  inspection
 });

};