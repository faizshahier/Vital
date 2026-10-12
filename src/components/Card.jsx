// One card for the whole site. The "type" prop picks the look:
// service | doctor | blog | testimonial
const Card = ({ type, title, text, image, role, date, avatar, stars }) => {
  if (type === "service") {
    return (
      <div className="bg-blue-50/60 rounded-2xl p-8 text-center">
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-6">{text}</p>
        <a href="#" className="inline-block mt-6 text-sm font-medium hover:text-blue-500">View Services</a>
      </div>
    );
  }

  if (type === "doctor") {
    return (
      <div>
        <img src={image} alt={title} className="w-full h-72 object-cover bg-blue-50 rounded-2xl" />
        <h3 className="text-lg font-medium mt-4">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
      </div>
    );
  }

  if (type === "blog") {
    return (
      <div>
        <img src={image} alt={title} className="w-full h-56 object-cover rounded-2xl" />
        <h3 className="text-lg font-medium mt-4 pb-4 border-b border-gray-200 min-h-24">{title}</h3>
        <p className="text-xs text-gray-500 mt-4">{date} · 5 min Read</p>
      </div>
    );
  }

  // testimonial
  return (
    <div className="bg-blue-50/60 rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={title} className="w-10 h-10 rounded-full object-cover" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-6 my-5">{text}</p>
      <p className="text-yellow-400 text-lg">{"★".repeat(stars) + "☆".repeat(5 - stars)}</p>
    </div>
  );
};

export default Card;
