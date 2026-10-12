import Button from "../components/Button";
import Card from "../components/Card";
import heroImage from "../assets/hero.png";
import { services, features, steps, testimonials, blogs, faqs, aboutImages } from "../data";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm"><span className="text-yellow-400 text-lg">★★★★★</span> 5.0 (150 Reviews)</p>
          <h1 className="text-5xl md:text-6xl font-medium my-6">Partner in health and wellness</h1>
          <p className="text-gray-600 max-w-md">Providing advanced healthcare solutions with a compassionate touch for every patient.</p>
          <div className="flex items-center gap-6 mt-8">
            <Button text="Book a call" />
            <a href="#" className="text-sm font-medium">Watch Video</a>
          </div>
          <div className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 3).map((t) => (
                <img key={t.name} src={t.avatar} alt="" className="w-10 h-10 rounded-full border-2 border-white" />
              ))}
            </div>
            <div>
              <p className="font-medium">3000+ Appointments</p>
              <p className="text-xs text-gray-500">Patients trust our care</p>
            </div>
          </div>
        </div>
        <img src={heroImage} alt="Doctor wearing a mask" className="w-full h-[480px] object-cover rounded-3xl" />
      </section>

      {/* Virtual consultation */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-50/60 rounded-3xl p-8">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-2xl font-medium">Virtual Consultation</h2>
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-sm">5.0 (180 Reviews)</span>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <input placeholder="Name" className="bg-white rounded-lg px-4 py-3 outline-none" />
            <input placeholder="Doctor" className="bg-white rounded-lg px-4 py-3 outline-none" />
            <input placeholder="Location" className="bg-white rounded-lg px-4 py-3 outline-none" />
            <Button text="Submit" />
          </div>
          <p className="mt-6">
            <span className="text-4xl font-medium">200K+</span> <span className="text-sm text-gray-600">Cured satisfied patients around the globe</span>
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm mb-3"><span className="text-blue-500">●</span> Why us</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-10">Why choose VitalFlow for your healthcare?</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-medium">Experienced Professionals</h3>
              <p className="text-sm text-gray-600">Our team of dedicated healthcare providers brings years of expertise to deliver top care.</p>
            </div>
            <div>
              <h3 className="font-medium">Advanced Technology</h3>
              <p className="text-sm text-gray-600">We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments.</p>
            </div>
          </div>
          <Button text="Get Started" />
        </div>
        <img src={aboutImages[0]} alt="" className="w-full h-96 object-cover rounded-3xl" />
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Services</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Personalized solutions for better oral health</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item) => (
            <Card key={item.title} type="service" title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={blogs[3].image} alt="" className="w-full h-96 object-cover rounded-3xl" />
        <div>
          <p className="text-sm mb-3"><span className="text-blue-500">●</span> About us</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-10">Vision for a healthier and brighter tomorrow</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-medium">Our Mission</h3>
              <p className="text-sm text-gray-600">Our mission is to deliver compassionate and high-quality healthcare services.</p>
            </div>
            <div>
              <h3 className="font-medium">Our Vision</h3>
              <p className="text-sm text-gray-600">Leading healthcare provider, recognized for innovative practices and care.</p>
            </div>
          </div>
          <Button text="What we do" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Features</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Innovative solutions to enhance medical service</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {features.map((item) => (
            <div key={item.title} className="text-center p-10 border-r border-b border-gray-200">
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> How it works</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Step-by-step process for seamless user experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title}>
              <span className="bg-blue-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">{index + 1}</span>
              <h3 className="font-medium mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{step.text}</p>
              <img src={step.image} alt="" className="w-full h-52 object-cover rounded-2xl" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">What our satisfied and happy clients have to say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <Card key={item.name} type="testimonial" title={item.name} text={item.text} avatar={item.avatar} stars={item.stars} />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Blog</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Insights and tips for better healthcare decisions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.slice(0, 3).map((item) => (
            <Card key={item.title} type="blog" title={item.title} date={item.date} image={item.image} />
          ))}
        </div>
      </section>

      {/* FAQ - the <details> tag opens and closes without React state */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> FAQs</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Frequently asked questions for quick answers</h2>
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-gray-200 py-5">
            <summary className="flex justify-between items-center cursor-pointer list-none font-medium">
              {faq.question}
              <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center group-open:rotate-45 transition">+</span>
            </summary>
            <p className="text-gray-600 mt-3">{faq.answer}</p>
          </details>
        ))}
      </section>
    </>
  );
};

export default Home;
