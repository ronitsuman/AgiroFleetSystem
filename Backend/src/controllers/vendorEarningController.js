import VendorEarning from "../models/VendorEarning.js";

export const addVendorEarning = async (req,res)=>{

 const { tripId, vendorId, amount } = req.body;

 const earning = await VendorEarning.create({
  tripId,
  vendorId,
  amount
 });

 res.json({
  message:"Vendor earning added",
  earning
 });

};

export const markPaymentPaid = async (req,res)=>{

 const earning = await VendorEarning.findByIdAndUpdate(
  req.params.id,
  {
   status:"paid",
   paymentDate:new Date()
  },
  {new:true}
 );

 res.json({
  message:"Payment marked paid",
  earning
 });

};