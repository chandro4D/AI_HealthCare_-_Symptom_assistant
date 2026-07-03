import ServiceCard from "../../components/cards/ServiceCard";

const services = [
  {
    title: "AI Symptom Checker",
    desc: "Describe symptoms and receive AI suggestions.",
  },

  {
    title: "Book Appointment",
    desc: "Book appointments with doctors instantly.",
  },

  {
    title: "Medicine Reminder",
    desc: "Never miss your medicine schedule.",
  },
];

function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">How MediAI Works</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {services.map((item, index) => (
            <ServiceCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
