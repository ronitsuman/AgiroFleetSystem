import Booking from "../models/Booking.js";

export const checkVehicleAvailability = async (req, res) => {

 try {

  const { vehicleId, startDate, endDate } = req.query;

  const conflict = await Booking.findOne({

   vehicleId,

   status: { $ne: "completed" },

   startDate: { $lte: endDate },

   endDate: { $gte: startDate }

  });

  if (conflict) {

   return res.json({
    available: false,
    message: `Vehicle booked until ${conflict.endDate}`
   });

  }

  res.json({
   available: true,
   message: "Vehicle available"
  });

 } catch (error) {

  res.status(500).json({ message: error.message });

 }

};