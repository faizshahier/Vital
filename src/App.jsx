import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Doctors from "./Pages/Doctors";
import Blog from "./Pages/Blog";
import { navLinks, footerLinks, contact } from "./data";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer contact={contact} columns={footerLinks} />
    </BrowserRouter>
  );
};

export default App;
