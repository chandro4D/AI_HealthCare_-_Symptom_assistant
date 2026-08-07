const asyncHandler = require("express-async-handler");
const Appointment = require("../models/Appointment.model");
const Notification = require("../models/Notification.model");
const User = require("../models/User.model");

// @desc    Book a new appointment
// @route   POST /api/v1/appointments
// @access  Patient
const bookAppointment = asyncHandler(async (req, res) => {
  const { doctorId, date, timeSlot, reason, symptoms, type } = req.body;

  if (!doctorId || !date || !timeSlot || !reason) {
    res.status(400);
    throw new Error("Please provide all required appointment information.");
  }

  // Verify doctor exists
  const doctor = await User.findOne({ _id: doctorId, role: "doctor" });

  if (!doctor) {
    res.status(404);
    throw new Error("Doctor not found.");
  }

  // Check if slot already booked
  const existingAppointment = await Appointment.findOne({
    doctorId,
    date,
    timeSlot,
    status: { $in: ["pending", "confirmed"] },
  });

  if (existingAppointment) {
    res.status(400);
    throw new Error("This time slot is already booked.");
  }

  // Create appointment
  const appointment = await Appointment.create({
    patientId: req.user._id,
    doctorId,
    date,
    timeSlot,
    reason,
    symptoms,
    type: type || "in-person",
    status: "pending",
  });

  // Notify doctor
  await Notification.create({
    userId: doctorId,
    title: "New Appointment Request",
    message: `${req.user.name} requested an appointment on ${new Date(
      date,
    ).toDateString()} at ${timeSlot}.`,
    type: "appointment",
  });

  // Notify patient
  await Notification.create({
    userId: req.user._id,
    title: "Appointment Booked",
    message: `Your appointment with Dr. ${doctor.name} is pending confirmation.`,
    type: "appointment",
  });

  const populatedAppointment = await Appointment.findById(appointment._id)
    .populate("doctorId", "name specialty")
    .populate("patientId", "name email");

  res.status(201).json({
    success: true,
    message: "Appointment booked successfully.",
    data: populatedAppointment,
  });
});

// @desc    Get logged-in patient appointments
// @route   GET /api/v1/appointments/my
// @access  Patient
const getMyAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({
    patientId: req.user._id,
  })
    .populate("doctorId", "name specialty avatar")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: appointments.length,
    data: appointments,
  });
});

// @desc    Get all appointments
// @route   GET /api/v1/appointments
// @access  Private
const getAppointments = asyncHandler(async (req, res) => {
  let query = {};

  if (req.user.role === "patient") {
    query.patientId = req.user._id;
  } else if (req.user.role === "doctor") {
    query.doctorId = req.user._id;
  }

  const appointments = await Appointment.find(query)
    .populate("patientId", "name email avatar")
    .populate("doctorId", "name specialty email avatar")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: appointments.length,
    data: appointments,
  });
});

// @desc    Get single appointment
// @route   GET /api/v1/appointments/:id
// @access  Private
const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)
    .populate("patientId", "name email phone avatar")
    .populate("doctorId", "name specialty email avatar");

  if (!appointment) {
    res.status(404);
    throw new Error("Appointment not found.");
  }

  res.status(200).json({
    success: true,
    data: appointment,
  });
});

// @desc    Update appointment
// @route   PUT /api/v1/appointments/:id
// @access  Doctor / Patient / Admin
const updateAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    res.status(404);
    throw new Error("Appointment not found.");
  }

  const { status, notes, diagnosis, cancelReason } = req.body;

  if (status) appointment.status = status;
  if (notes) appointment.notes = notes;
  if (diagnosis) appointment.diagnosis = diagnosis;

  if (cancelReason) {
    appointment.cancelReason = cancelReason;
    appointment.cancelledBy = req.user.role;
  }

  await appointment.save();

  const notifyUserId =
    req.user.role === "doctor" ? appointment.patientId : appointment.doctorId;

  const statusMessages = {
    confirmed: "Your appointment has been confirmed.",
    rejected: "Your appointment request was rejected.",
    completed: "Your appointment has been completed.",
    cancelled: "Your appointment has been cancelled.",
  };

  if (status && statusMessages[status]) {
    await Notification.create({
      userId: notifyUserId,
      title: "Appointment Update",
      message: statusMessages[status],
      type: "appointment",
    });
  }

  res.status(200).json({
    success: true,
    message: "Appointment updated successfully.",
    data: appointment,
  });
});

// @desc    Cancel appointment
// @route   DELETE /api/v1/appointments/:id
// @access  Patient / Admin
const cancelAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    res.status(404);
    throw new Error("Appointment not found.");
  }

  appointment.status = "cancelled";
  appointment.cancelledBy = req.user.role;
  appointment.cancelReason = req.body.reason || "Cancelled by user";

  await appointment.save();

  res.status(200).json({
    success: true,
    message: "Appointment cancelled successfully.",
  });
});

module.exports = {
  bookAppointment,
  getAppointments,
  getMyAppointments,
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
};
