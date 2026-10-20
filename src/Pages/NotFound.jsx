import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuArrowLeft } from "react-icons/lu";
import { fadeUp } from "../motion";

// Shown for any URL that has no page
const NotFound = () => {
  return (
    <motion.section {...fadeUp} className="max-w-6xl mx-auto px-4 py-24 text-center">
      <p className="text-sm mb-3"><span className="text-blue-500">●</span> Error</p>
      <h1 className="text-8xl md:text-9xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl md:text-4xl font-medium mt-6">Page not found</h2>
      <p className="text-gray-600 max-w-md mx-auto mt-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-10 bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90"
      >
        <LuArrowLeft /> Back to Home
      </Link>
    </motion.section>
  );
};

export default NotFound;
