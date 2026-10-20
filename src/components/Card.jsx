import { motion } from "framer-motion";
import { LuArrowRight, LuCalendar, LuClock } from "react-icons/lu";
import { fadeUp, lift } from "../motion";

// One card for the whole site. The "type" prop picks the look:
// service | doctor | blog | testimonial
// Icon is a react-icons component, e.g. LuBaby
const Card = ({ type, title, text, Icon, image, role, date, avatar, stars }) => {
  if (type === "service") {
    return (
      <motion.div {...fadeUp} {...lift} className="bg-blue-50/60 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-2xl">
          <Icon />
        </div>
        <h3 className="text-lg font-medium mt-6 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-6">{text}</p>
        <a href="#" className="inline-flex items-center gap-1 mt-6 text-sm font-medium hover:text-blue-500">
          View Services <LuArrowRight />
        </a>
      </motion.div>
    );
  }

  if (type === "doctor") {
    return (
      <motion.div {...fadeUp} {...lift}>
        <img src={image} alt={title} className="w-full h-72 object-cover bg-blue-50 rounded-2xl" />
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <LuArrowRight />
        </div>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
      </motion.div>
    );
  }

  if (type === "blog") {
    return (
      <motion.div {...fadeUp} {...lift}>
        <img src={image} alt={title} className="w-full h-56 object-cover rounded-2xl" />
        <h3 className="text-lg font-medium mt-4 pb-4 border-b border-gray-200 min-h-24">{title}</h3>
        <p className="flex items-center gap-2 text-xs text-gray-500 mt-4">
          <LuCalendar className="text-blue-500" /> {date}
          <LuClock className="text-blue-500 ml-2" /> 5 min Read
        </p>
      </motion.div>
    );
  }

  // testimonial
  return (
    <motion.div {...fadeUp} {...lift} className="bg-blue-50/60 rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={title} className="w-10 h-10 rounded-full object-cover" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-6 my-5">{text}</p>
      <p className="text-yellow-400 text-lg">{"★".repeat(stars) + "☆".repeat(5 - stars)}</p>
    </motion.div>
  );
};

export default Card;
