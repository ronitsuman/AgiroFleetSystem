// import Booking from "../models/Booking.js";

// export const createBooking = async (req, res) => {

//  try {

//   const { pickupLocation, dropLocation } = req.body;

//   const booking = await Booking.create({
//    customerId: req.user.id,
//    pickupLocation,
//    dropLocation
//   });

//   res.status(201).json({
//    message: "Booking created",
//    booking
//   });

//  } catch (error) {
//   res.status(500).json({ message: error.message });
//  }

// };


// export const assignVendor = async (req, res) => {

//  try {

//   const { vendorId } = req.body;

//   const booking = await Booking.findByIdAndUpdate(
//    req.params.id,
//    {
//     vendorId,
//     status: "vendor_assigned"
//    },
//    { new: true }
//   );

//   res.json({
//    message: "Vendor assigned",
//    booking
//   });

//  } catch (error) {
//   res.status(500).json({ message: error.message });
//  }

// };


// export const assignHelper = async (req, res) => {

//  try {

//   const { helperId } = req.body;

//   const booking = await Booking.findByIdAndUpdate(
//    req.params.id,
//    {
//     helperId,
//     status: "helper_assigned"
//    },
//    { new: true }
//   );

//   res.json({
//    message: "Helper assigned",
//    booking
//   });

//  } catch (error) {
//   res.status(500).json({ message: error.message });
//  }

// };

import Booking from "../models/Booking.js";
import { logAudit } from "../utils/auditLogger.js";

export const createBooking = async (req, res) => {

 try {

  const {
   pickupLocation,
   dropLocation,
   vehicleId,
   startDate,
   endDate
  } = req.body;

  const conflictBooking = await Booking.findOne({
   vehicleId,
   status: { $ne: "completed" },
   startDate: { $lte: endDate },
   endDate: { $gte: startDate }
  });

  if (conflictBooking) {

   return res.status(400).json({
    message: `Vehicle already booked until ${conflictBooking.endDate}`
   });

  }

  const booking = await Booking.create({
   customerId: req.user.id,
   vehicleId,
   pickupLocation,
   dropLocation,
   startDate,
   endDate
  });

  await logAudit({
   action: "booking_created",
   userId: req.user.id,
   entityId: booking._id,
   entityType: "Booking"
  });

  res.status(201).json({
   message: "Booking created",
   booking
  });

 } catch (error) {

  res.status(500).json({ message: error.message });

 }

};


export const assignVendor = async (req, res) => {

 try {

  const { vendorId } = req.body;

  const booking = await Booking.findByIdAndUpdate(
   req.params.id,
   {
    vendorId,
    status: "vendor_assigned"
   },
   { new: true }
  );
    await logAudit({
   action: "vendor_assigned",
   userId: req.user.id,
   entityId: booking._id,
   entityType: "Booking"
  });

  res.json({
   message: "Vendor assigned",
   booking
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }

};


export const assignHelper = async (req, res) => {

 try {

  const { helperId } = req.body;

  const booking = await Booking.findByIdAndUpdate(
   req.params.id,
   {
    helperId,
    status: "helper_assigned"
   },
   { new: true }
  );
    await logAudit({
   action: "helper_assigned",
   userId: req.user.id,
   entityId: booking._id,
   entityType: "Booking"
  });

  res.json({
   message: "Helper assigned",
   booking
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }

};