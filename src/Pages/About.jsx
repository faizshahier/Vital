import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { fadeUp, lift } from "../motion";
import Button from "../components/Button";
import Card from "../components/Card";
import { aboutImages, stats, mission, vision, values, doctors } from "../data";

const About = () => {
  return (
    <>
      {/* Hero */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-sm mb-3"><span className="text-blue-500">●</span> About us</p>
        <h1 className="text-4xl md:text-5xl font-medium max-w-2xl mx-auto mb-6">A modern dental care home for families</h1>
        <Button text="Get Started" />
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {aboutImages.map((image) => (
            <img key={image} src={image} alt="" className="w-full h-80 object-cover rounded-2xl" />
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-5xl text-blue-500">{stat.number}</h3>
            <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      {/* Mission */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src={aboutImages[2]} alt="" className="w-full h-96 object-cover rounded-[100px]" />
        <div>
          <p className="text-sm mb-3"><span className="text-blue-500">●</span> Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-10">Transforming lives with medical solutions</h2>
          {mission.map((item) => (
            <div key={item.title} className="flex gap-4 mb-6">
              <LuCircleCheck className="text-blue-500 text-2xl shrink-0" />
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.text}</p>
              </div>
            </div>
          ))}
          <Button text="Book a call" />
        </div>
      </motion.section>

      {/* Vision */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm mb-3"><span className="text-blue-500">●</span> Our Vision</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-8">Passionate about creating healthier, happier lives</h2>
          <ul className="space-y-3 mb-8">
            {vision.map((item) => (
              <li key={item} className="text-sm flex gap-3">
                <span className="text-blue-500">●</span> {item}
              </li>
            ))}
          </ul>
          <Button text="Book a call" />
        </div>
        <img src={aboutImages[1]} alt="" className="w-full h-96 object-cover rounded-3xl" />
      </motion.section>

      {/* Values */}
      <motion.section {...fadeUp} className="bg-blue-50/60 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Our Values</p>
          <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Core principles guiding our healthcare mission</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((item) => (
              <motion.div key={item.title} {...lift} className="bg-blue-500 text-white rounded-2xl p-8">
                <span className="bg-white text-blue-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                  <item.icon />
                </span>
                <h3 className="text-xl font-medium mt-8 mb-3">{item.title}</h3>
                <p className="text-sm leading-6">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Team</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Meet our dedicated and experienced team of experts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          {doctors.map((item) => (
            <Card key={item.name} type="doctor" title={item.name} role={item.role} image={item.image} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
