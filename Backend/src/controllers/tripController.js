import Trip from "../models/Trip.js";
import Booking from "../models/Booking.js";

export const startTrip = async (req, res) => {

 try {

  const booking = await Booking.findById(req.params.bookingId);

  const trip = await Trip.create({
   bookingId: booking._id,
   startTime: new Date()
  });

  booking.status = "trip_started";

  await booking.save();

  res.json({
   message: "Trip started",
   trip
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }

};


export const completeTrip = async (req, res) => {

 try {

  const trip = await Trip.findById(req.params.tripId);

  trip.status = "completed";
  trip.endTime = new Date();

  await trip.save();

  await Booking.findByIdAndUpdate(
   trip.bookingId,
   { status: "completed" }
  );

  res.json({
   message: "Trip completed",
   trip
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }

};