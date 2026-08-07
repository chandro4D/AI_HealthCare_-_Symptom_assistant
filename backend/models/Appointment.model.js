const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    // Patient information
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    patientName: {
      type: String,
      required: true,
      trim: true,
    },

    // Doctor information
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    doctorName: {
      type: String,
      required: true,
      trim: true,
    },

    doctorEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    specialty: {
      type: String,
      required: true,
    },

    hospital: {
      type: String,
      default: "",
    },

    // Appointment schedule
    date: {
      type: Date,
      required: [true, "Appointment date is required"],
    },

    timeSlot: {
      type: String,
      required: [true, "Time slot is required"],
      trim: true,
    },

    // Consultation type
    type: {
      type: String,
      enum: ["in-person", "video"],
      default: "in-person",
    },

    // Patient reason
    reason: {
      type: String,
      required: true,
      trim: true,
    },

    symptoms: [
      {
        type: String,
        trim: true,
      },
    ],

    // AI recommendation
    aiRecommendation: {
      suggestedSpecialty: String,
      urgency: {
        type: String,
        enum: ["Low", "Medium", "High", "Emergency"],
      },
      confidence: Number,
    },

    // Doctor notes
    notes: {
      type: String,
      default: "",
    },

    diagnosis: {
      type: String,
      default: "",
    },

    prescription: {
      type: String,
      default: "",
    },

    // Appointment status
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled", "Rejected"],
      default: "Pending",
    },

    // Cancellation
    cancelledBy: {
      type: String,
      enum: ["patient", "doctor", "admin", ""],
      default: "",
    },

    cancelReason: {
      type: String,
      default: "",
    },

    // Payment
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Refunded"],
      default: "Pending",
    },

    consultationFee: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes for faster queries
appointmentSchema.index({ patientId: 1, createdAt: -1 });
appointmentSchema.index({ doctorId: 1, date: 1 });
appointmentSchema.index({ status: 1 });

module.exports = mongoose.model("Appointment", appointmentSchema);
