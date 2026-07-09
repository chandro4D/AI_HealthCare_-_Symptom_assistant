import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaRobot,
  FaUserMd,
  FaHospital,
  FaShieldAlt,
  FaBrain,
  FaNotesMedical,
  FaCloudUploadAlt,
  FaArrowRight,
} from "react-icons/fa";

import hero from "../../assets/images/about.jpg";
import doctor from "../../assets/images/doctor.jpg";
import ai from "../../assets/images/ai.jpg";

const features = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Symptom Checker",
    description:
      "Describe your symptoms and receive AI-powered preliminary health insights instantly.",
  },
  {
    icon: <FaUserMd size={40} />,
    title: "Doctor Appointment",
    description:
      "Book appointments with experienced doctors without waiting in long queues.",
  },
  {
    icon: <FaCloudUploadAlt size={40} />,
    title: "Prescription Upload",
    description:
      "Securely upload prescriptions and access them anytime from your account.",
  },
  {
    icon: <FaNotesMedical size={40} />,
    title: "Health Records",
    description:
      "Store all your medical history in one secure digital healthcare platform.",
  },
  {
    icon: <FaBrain size={40} />,
    title: "AI Assistant",
    description:
      "Chat with an intelligent healthcare assistant anytime for guidance and support.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Secure Platform",
    description:
      "Advanced encryption keeps your personal and medical information protected.",
  },
];

const stats = [
  { number: "25K+", text: "Happy Patients" },
  { number: "200+", text: "Expert Doctors" },
  { number: "98%", text: "Patient Satisfaction" },
  { number: "24/7", text: "AI Assistance" },
];

function About() {
  return (
    <div className="bg-white">
      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 text-white">
        <div className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl bottom-0 right-0"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur">
              AI Powered Healthcare
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight">
              Smarter Healthcare
              <br />
              Better Lives.
            </h1>

            <p className="mt-8 text-lg text-slate-100 leading-8">
              Our AI Healthcare platform combines artificial intelligence,
              digital healthcare, secure medical records, symptom analysis, and
              online doctor appointments into one intelligent ecosystem.
            </p>

            <button className="mt-10 bg-white text-sky-700 px-7 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 duration-300">
              Explore Platform
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={hero}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* About */}

      <section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-16 items-center">
        <img src={ai} className="rounded-3xl shadow-xl" />

        <div>
          <h2 className="text-4xl font-bold text-slate-800">
            Revolutionizing Healthcare with Artificial Intelligence
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our platform bridges patients and healthcare providers through
            AI-driven technology. Whether you need symptom analysis, appointment
            booking, prescription management, or intelligent medical assistance,
            everything is available in one secure place.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="p-6 rounded-2xl shadow bg-cyan-50">
              <FaHeartbeat size={40} className="text-cyan-600 mb-3" />
              <h3 className="font-bold">Patient First</h3>
            </div>

            <div className="p-6 rounded-2xl shadow bg-blue-50">
              <FaHospital size={40} className="text-blue-600 mb-3" />
              <h3 className="font-bold">Modern Healthcare</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">Our Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-2xl duration-300"
              >
                <div className="text-cyan-600 mb-5">{feature.icon}</div>

                <h3 className="font-bold text-xl">{feature.title}</h3>

                <p className="mt-4 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-extrabold">{item.number}</h2>

              <p className="mt-3">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}

      <section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold">Our Mission</h2>

          <p className="mt-6 text-gray-600 leading-8">
            We aim to make healthcare accessible, intelligent, affordable, and
            available to everyone by leveraging Artificial Intelligence and
            modern web technologies.
          </p>

          <h2 className="text-4xl font-bold mt-12">Our Vision</h2>

          <p className="mt-6 text-gray-600 leading-8">
            To become one of the world's most trusted AI healthcare ecosystems
            where patients receive personalized, fast, and secure healthcare
            support anytime.
          </p>
        </div>

        <img src={doctor} className="rounded-3xl shadow-xl" />
      </section>

      {/* CTA */}

      <section className="bg-cyan-700 py-20 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready to Experience Smart Healthcare?
          </h2>

          <p className="mt-6 text-lg">
            Join thousands of users who trust our AI-powered healthcare platform
            for appointments, symptom analysis, prescriptions, and personalized
            medical assistance.
          </p>

          <button className="mt-10 bg-white text-cyan-700 px-10 py-4 rounded-xl font-bold hover:scale-105 duration-300">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
