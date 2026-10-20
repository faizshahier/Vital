import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuHeart } from "react-icons/lu";
import Button from "./Button";

const Navbar = ({ links }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between gap-4"
    >
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <span className="bg-blue-500 w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg">
          <LuHeart />
        </span>
        Vital+Flow
      </Link>
      <ul className="hidden md:flex items-center gap-8 text-base font-bold">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="hover:text-blue-500">{link.name}</Link>
          </li>
        ))}
      </ul>
      <Button text="Book a call" />
    </motion.header>
  );
};

export default Navbar;
