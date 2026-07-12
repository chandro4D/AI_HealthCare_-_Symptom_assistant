import React, { useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2026-07-20",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Michael Brown",
      specialty: "Dermatologist",
      date: "2026-07-23",
      time: "03:30 PM",
      status: "Pending",
    },
  ]);

  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    specialty: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.patientName ||
      !formData.doctor ||
      !formData.specialty ||
      !formData.date ||
      !formData.time ||
      !formData.reason
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      doctor: formData.doctor,
      specialty: formData.specialty,
      date: formData.date,
      time: formData.time,
      status: "Pending",
    };

    setAppointments([newAppointment, ...appointments]);

    alert("Appointment Booked Successfully!");

    setFormData({
      patientName: "",
      doctor: "",
      specialty: "",
      date: "",
      time: "",
      reason: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl text-white p-10 shadow-xl">
          <h1 className="text-4xl font-bold">Book Medical Appointment</h1>

          <p className="mt-3 text-blue-100 max-w-3xl">
            Easily schedule appointments with experienced healthcare
            professionals. Choose your doctor, preferred date and time, and
            receive instant confirmation.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 font-semibold">Total Appointments</h2>

            <p className="text-4xl font-bold text-cyan-600 mt-3">
              {appointments.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 font-semibold">Confirmed</h2>

            <p className="text-4xl font-bold text-green-600 mt-3">
              {appointments.filter((a) => a.status === "Confirmed").length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 font-semibold">Pending</h2>

            <p className="text-4xl font-bold text-orange-500 mt-3">
              {appointments.filter((a) => a.status === "Pending").length}
            </p>
          </div>
        </div>

        {/* Main */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          {/* Booking Form */}

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Schedule Appointment</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="patientName"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="text"
                name="doctor"
                placeholder="Doctor Name"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="text"
                name="specialty"
                placeholder="Specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <textarea
                rows="5"
                name="reason"
                placeholder="Describe your symptoms or reason for appointment..."
                value={formData.reason}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition">
                Book Appointment
              </button>
            </form>
          </div>

          {/* Upcoming */}

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>

            <div className="space-y-5">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border rounded-2xl p-5 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">
                        {appointment.doctor}
                      </h3>

                      <p className="text-gray-500">{appointment.specialty}</p>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-6 text-gray-600">
                    <div>
                      📅 <strong>{appointment.date}</strong>
                    </div>

                    <div>
                      🕒 <strong>{appointment.time}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Information */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-2">✔ Easy Booking</h3>

            <p className="text-gray-600">
              Schedule appointments in less than a minute using our intelligent
              booking system.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-2">🔒 Secure Records</h3>

            <p className="text-gray-600">
              Your appointment information is securely stored and protected.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-2">🤖 AI Assistance</h3>

            <p className="text-gray-600">
              Receive AI-powered recommendations before meeting your healthcare
              professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
