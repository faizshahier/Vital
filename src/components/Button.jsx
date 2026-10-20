import { motion } from "framer-motion";

// light = white-blue button (like Submit), big = larger size
const Button = ({ text, light, big }) => {
  const color = light ? "bg-blue-50 text-blue-500" : "bg-blue-500 text-white";
  const size = big ? "px-14 py-5 text-xl" : "px-6 py-3 text-sm";
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} ${size} rounded-full font-medium cursor-pointer`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
