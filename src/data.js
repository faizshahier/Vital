// All website content lives here. Components get it through props.

const img = (id) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

export const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Blog", path: "/blog" },
];

export const services = [
  { title: "Pediatrics", text: "Monitor your child's growth and development closely to ensure their health at every stage." },
  { title: "Orthopedics", text: "Receive care for bone and muscle health with advanced treatments tailored to your needs." },
  { title: "Gastroenterology", text: "Comprehensive care for digestive health to address issues with precision and personalized attention." },
  { title: "Neurology", text: "Specialized treatments for brain and nerve health, ensuring advanced and compassionate care always." },
  { title: "Cardiology", text: "State-of-the-art heart care focused on your cardiovascular health with expertise and dedication." },
  { title: "General care", text: "Reliable primary healthcare services designed to maintain your well-being at every stage of life." },
];

export const doctors = [
  { name: "Jonathan Reed", role: "Gastroenterologist", image: img("photo-1612349317150-e413f6a5b16d") },
  { name: "Olivia Bennett", role: "Dermatologist", image: img("photo-1559839734-2b71ea197ec2") },
  { name: "David Harris", role: "Pediatrician", image: img("photo-1622253692010-333f2da6031d") },
  { name: "Emily Rogers", role: "Orthopedic", image: img("photo-1594824476967-48c8b964273f") },
  { name: "Michael Carter", role: "Cardiologist", image: img("photo-1537368910025-700350fe46c7") },
  { name: "Sarah Thompson", role: "Neurologist", image: img("photo-1651008376811-b90baee60c1f") },
];

export const blogs = [
  { title: "The Benefits of Regular Exercise: A Pathway to Health", date: "Sep 4, 2024", image: img("photo-1576091160550-2173dba999ef") },
  { title: "Managing Stress for Better Health: Strategies for a Calmer Life", date: "Sep 5, 2024", image: img("photo-1579684385127-1ef15d508118") },
  { title: "The Impact of Sleep on Your Health: Why Rest Matters", date: "Sep 16, 2024", image: img("photo-1631217868264-e5b90bb7e133") },
  { title: "The Power of a Balanced Diet", date: "Sep 17, 2024", image: img("photo-1584982751601-97dcc096659c") },
  { title: "The Role of Mental Health in Overall Wellness", date: "Sep 28, 2024", image: img("photo-1607990281513-2c110a25bd8c") },
  { title: "The Importance of Preventive Healthcare", date: "Sep 26, 2024", image: img("photo-1666214280557-f1b5022eb634") },
];

export const testimonials = [
  { name: "Emily Johnson", stars: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "Their service was outstanding. They ensured I was comfortable and informed every step of the way." },
  { name: "Michael Roberts", stars: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg", text: "The support I received was excellent. They truly cared about my needs and exceeded my expectations." },
  { name: "Sophia Martinez", stars: 4, avatar: "https://randomuser.me/api/portraits/women/68.jpg", text: "I felt valued and cared for. Their team made every effort to provide exceptional support and service." },
  { name: "Olivia Harris", stars: 4, avatar: "https://randomuser.me/api/portraits/women/65.jpg", text: "They were attentive and thorough. Their professionalism and kindness made the entire process seamless." },
  { name: "James Anderson", stars: 5, avatar: "https://randomuser.me/api/portraits/men/46.jpg", text: "My experience was remarkable. They delivered exactly what they promised with care and dedication." },
  { name: "Daniel Thompson", stars: 5, avatar: "https://randomuser.me/api/portraits/men/75.jpg", text: "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed." },
];

export const aboutImages = [
  img("photo-1576765608535-5f04d1e3f289"),
  img("photo-1588776814546-1ffcf47267a5"),
  img("photo-1582750433449-648ed127bb54"),
];

export const stats = [
  { number: "98%", label: "Satisfaction rate" },
  { number: "30+", label: "Years of experience" },
  { number: "1000", label: "Patients Treated" },
  { number: "80+", label: "Expert Doctors" },
];

export const mission = [
  { title: "Compassionate care", text: "Our mission is to provide personalized and empathetic healthcare for individual." },
  { title: "Excellence in service", text: "We strive to deliver high-quality, reliable, and innovative medical solutions." },
];

export const vision = [
  "Innovating for better healthcare futures",
  "Leading with patient-focused care solutions",
  "Building healthier and stronger communities",
  "Transforming lives through medical excellence",
];

export const values = [
  { title: "Compassion", text: "We prioritize empathy and understanding, ensuring every patient feels valued, respected, and cared for in their healthcare journey." },
  { title: "Excellence", text: "We are committed to delivering the highest standards of quality in every aspect of our services, striving for continuous improvement." },
  { title: "Integrity", text: "We uphold honesty and transparency in all interactions, building trust with patients, families, and the community through ethical practices." },
];

export const features = [
  { title: "Easy appointment", text: "Schedule your appointments quickly with our simple and efficient booking system." },
  { title: "Personalized plans", text: "Receive tailored care plans designed to meet your unique health needs and goals." },
  { title: "24/7 consultations", text: "Access expert medical advice anytime through secure and reliable virtual consultations." },
  { title: "Medical technology", text: "Experience modern healthcare with innovative tools and state-of-the-art equipment." },
  { title: "Patient records", text: "Stay organized with secure, easy access to your medical records whenever needed." },
  { title: "Care network", text: "Connect with top specialists and facilities to ensure complete healthcare coverage." },
];

export const steps = [
  { title: "Share your preferences", text: "Tell us about your unique needs and preferences to help us create a personalized plan for your care.", image: img("photo-1579684385127-1ef15d508118") },
  { title: "Customized solutions", text: "We analyze your requirements and craft tailored solutions designed specifically for your goals.", image: img("photo-1576091160550-2173dba999ef") },
  { title: "Achieve your vision", text: "Experience seamless healthcare that helps you bring your health vision to life with precision and care.", image: img("photo-1584982751601-97dcc096659c") },
];

export const faqs = [
  { question: "What services do you offer?", answer: "We offer pediatrics, orthopedics, gastroenterology, neurology, cardiology and general care." },
  { question: "How can I book an appointment?", answer: "Click the 'Book a call' button or fill in the contact form and our team will reach out." },
  { question: "Are your services available 24/7?", answer: "Yes, virtual consultations are available around the clock." },
  { question: "Do you accept insurance?", answer: "We accept most major insurance plans. Contact us to confirm yours." },
  { question: "What makes your care unique?", answer: "Personalized plans, experienced doctors and modern medical technology." },
];

export const footerLinks = [
  { title: "Static pages", links: ["Home", "About", "Contact", "404"] },
  { title: "CMS Pages", links: ["Services", "Doctors", "Careers", "Blogs"] },
  { title: "Detail pages", links: ["Service (CMS)", "Doctor (CMS)", "Career (CMS)", "Blogs (CMS)"] },
  { title: "Follow us", links: ["Linkedin", "Facebook", "Twitter", "Youtube"] },
];

export const contact = {
  label: "Contact",
  title: "Contact us for more information & get started",
  fields: [
    { type: "text", placeholder: "Full Name" },
    { type: "email", placeholder: "Email Address" },
    { type: "tel", placeholder: "Phone Number" },
    { type: "date", placeholder: "mm/dd/yyyy" },
  ],
};
