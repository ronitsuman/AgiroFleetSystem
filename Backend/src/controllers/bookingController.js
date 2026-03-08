import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {

 try {

  const { pickupLocation, dropLocation } = req.body;

  const booking = await Booking.create({
   customerId: req.user.id,
   pickupLocation,
   dropLocation
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

  res.json({
   message: "Helper assigned",
   booking
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }

};