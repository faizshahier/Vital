import Card from "../components/Card";
import { blogs, testimonials } from "../data";

const Blog = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Blog</p>
        <h1 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">Insights and tips for better healthcare decisions</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
          {blogs.map((item) => (
            <Card key={item.title} type="blog" title={item.title} date={item.date} image={item.image} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <p className="text-sm text-center mb-3"><span className="text-blue-500">●</span> Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto mb-12">What our satisfied and happy clients have to say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <Card key={item.name} type="testimonial" title={item.name} text={item.text} avatar={item.avatar} stars={item.stars} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
