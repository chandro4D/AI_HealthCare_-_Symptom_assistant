const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  getMyAppointments,
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
} = require("../controllers/appointment.controller");

const { protect, authorize } = require("../middleware/auth.middleware");

// All appointment routes require login
router.use(protect);

// Patient appointments
router.get("/my", authorize("patient"), getMyAppointments);

// GET /api/v1/appointments
// POST /api/v1/appointments
router
  .route("/")
  .get(getAppointments)
  .post(authorize("patient"), bookAppointment);

// GET /api/v1/appointments/:id
// PUT /api/v1/appointments/:id
// DELETE /api/v1/appointments/:id

// Single Appoinment
router
  .route("/:id")
  .get(getAppointmentById)
  .put(updateAppointment)
  .delete(authorize("patient", "admin"), cancelAppointment);

module.exports = router;
