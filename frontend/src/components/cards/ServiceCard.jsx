function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl duration-300 p-8">
      <div className="w-14 h-14 rounded-full bg-green-100 mb-6"></div>

      <h3 className="font-bold text-xl">{title}</h3>

      <p className="mt-4 text-gray-600">{desc}</p>
    </div>
  );
}

export default ServiceCard;
