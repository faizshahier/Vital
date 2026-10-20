import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuHeart } from "react-icons/lu";
import Button from "./Button";
import { fadeUp } from "../motion";

const inputStyle =
  "w-full bg-transparent border-b border-white/80 px-3 pb-5 text-lg font-medium text-white placeholder-white outline-none [color-scheme:dark]";

// Blue contact form + footer links (both show on every page)
const Footer = ({ contact, columns }) => {
  return (
    <>
      <section className="bg-[#4785ff] py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <motion.div {...fadeUp} className="text-white">
            <p className="text-lg mb-10">● &nbsp;{contact.label}</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-8">{contact.title}</h2>
            <p className="text-yellow-400 text-3xl">★★★★★</p>
          </motion.div>

          <motion.form {...fadeUp} className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16 pt-4">
            {contact.fields.map((field) => (
              <input key={field.placeholder} type={field.type} placeholder={field.placeholder} className={inputStyle} />
            ))}
            <textarea placeholder="Message or additional details" rows="6" className={`${inputStyle} sm:col-span-2 -mt-6`} />
            <div>
              <Button text="Submit" light big />
            </div>
          </motion.form>
        </div>
      </section>

      <motion.footer {...fadeUp} className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 text-xl font-medium">
            <span className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white">
              <LuHeart />
            </span>
            Vital+Flow
          </Link>
          <p className="text-gray-600 my-6 max-w-xs">Creative healthcare template to launch your site quick and easily</p>
          <Button text="Book a call" />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-medium mb-5">Stay up to date</h3>
          <div className="flex flex-wrap gap-3">
            <input type="email" placeholder="name@email.com" className="bg-blue-50 rounded-lg px-5 py-3 w-full sm:w-72 outline-none" />
            <Button text="Subscribe" />
          </div>
          <p className="text-sm text-gray-600 mt-4">by subscribing you will agree to privacy and policy</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-medium mb-4">{col.title}</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  {col.links.map((link) => (
                    <li key={link.name}><Link to={link.path} className="hover:text-blue-500">{link.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
