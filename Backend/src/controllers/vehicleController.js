import Vehicle from "../models/Vehicle.js";

export const addVehicle = async (req, res) => {

 try {

  const { vehicleNumber, vehicleType, brand, model } = req.body;

  const vehicle = await Vehicle.create({
   vendorId: req.user.id,
   vehicleNumber,
   vehicleType,
   brand,
   model
  });

  res.status(201).json({
   message: "Vehicle added",
   vehicle
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export const getVehicles = async (req, res) => {

 try {

  const vehicles = await Vehicle.find();

  res.json(vehicles);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export const approveVehicle = async (req, res) => {

 try {

  const vehicle = await Vehicle.findByIdAndUpdate(
   req.params.id,
   { status: "approved" },
   { new: true }
  );

  res.json({
   message: "Vehicle approved",
   vehicle
  });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};