import { CheckCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Hero Section Video
import HeroVideo from "../assets/videos/hero.mp4";

//Our Clients section images
import srmedia from "../assets/images/srmedia.png";
import gk from "../assets/images/gk.png";
import haraa from "../assets/images/haraa.png";
import yaritrip from "../assets/images/yaritrip-logo.png";
import adsinap from "../assets/images/adsinap.png";
import proprints from "../assets/images/proprint.png";
import madbzz from "../assets/images/madbzz.png";
import srworkforce from "../assets/images/srworkforce.png";

//Why choose us section videos
import InnovationVideo from "../assets/videos/innovation.mp4";
import CollaborationVideo from "../assets/videos/collaboration.mp4";
import ExcellenceVideo from "../assets/videos/excellence.mp4";
import IntegrityVideo from "../assets/videos/integrity.mp4";

const Home = () => {
  const clients = [
    { name: "SR Media", logo: srmedia },
    { name: "GK", logo: gk },
    { name: "Haraa", logo: haraa },
    { name: "Yaritrip", logo: yaritrip },
    { name: "AdsinAp", logo: adsinap },
    { name: "Madbzz", logo: madbzz },
    { name: "Proprints", logo: proprints },
    { name: "SrworkForce", logo: srworkforce },
  ];

  const features = [
    {
      title: "Innovation",
      description:
        "Pushing boundaries in software development to deliver scalable and innovative digital solutions",
      video: InnovationVideo,
    },
    {
      title: "Collaboration",
      description:
        "Working closely with clients to develop tailored solutions that drive measurable success.",
      video: CollaborationVideo,
    },
    {
      title: "Excellence",
      description:
        "Maintaining the highest standards in code quality, system performance, and client outcomes.",
      video: ExcellenceVideo,
    },
    {
      title: "Integrity",
      description:
        "Operating with transparency and ethical considerations at the forefront of all decisions.",
      video: IntegrityVideo,
    },
  ];

  const services = [
    {
      title: "UI/UX Designing",
      desc: "We create intuitive, user-centered designs that enhance usability and engagement.",
      path: "/services/ui-ux-design",
    },
    {
      title: "Web Development",
      desc: "We build responsive, high-performance websites tailored to your business needs.",
      path: "/services/web-development",
    },
    {
      title: "Mobile Application",
      desc: "We develop powerful Android and iOS applications with modern technologies.",
      path: "/services/mobile-app",
    },
    {
      title: "Product Development",
      desc: "We transform ideas into market-ready digital products by combining strategic thinking, user-focused design",
      path: "/services/product-development",
    },
    {
      title: "Custom Software Development",
      desc: "We design and develop custom software solutions to solve unique business challenges",
      path: "/services/custom-software",
    },
    {
      title: "Support & Maintenance",
      desc: "We provide ongoing support to ensure smooth and uninterrupted operations.",
      path: "/services/support-maintenence",
    },
    {
      title: "Cyber Security",
      desc: "Security audits and protection strategies to safeguard digital assets.",
      path: "/services/cyber-security",
    },
    {
      title: "AI Automation",
      desc: "AI-driven automation solutions for smarter and efficient workflows.",
      path: "/services/ai-automation",
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide end-to-end IT solutions including web development, mobile app development, UI/UX design, custom software development, AI automation, and cybersecurity services.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity. A standard website may take 2–4 weeks, while custom applications can take 6–12 weeks or more.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer dedicated support and maintenance plans to ensure your product runs smoothly and stays up to date.",
    },
    {
      question: "Can you help scale our existing product?",
      answer:
        "Absolutely. We specialize in optimizing, scaling, and enhancing existing platforms to handle growth efficiently.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply contact us through our website or book a consultation. We'll understand your requirements and propose the best solution.",
    },
  ];

  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="w-full bg-white text-gray-900">
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Video */}
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full object-cover"
        />

        {/* Dark Overlay (for readability) */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center font-serif">
          {/* Heading */}
          <h4 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Us
          </h4>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-72 h-72 rounded-full border-4 border-gray-200 flex flex-col items-center justify-center text-center px-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Video Icon */}
                <div className="mb-4 w-20 h-auto flex items-center justify-center">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-serif">
            Our Services
          </h2>

          <h3 className="text-2xl md:text-xl text-center mb-10 font-serif">
            We Deliver All-in-One Solutions for Problems related to IT Field
          </h3>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-10 border bg-white 
      rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[60px]
      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 text-orange-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-5">{service.desc}</p>

                {/* Know More Button */}
                <button
                  onClick={() => navigate(service.path)}
                  className="mt-6 relative w-44 h-12 flex items-center justify-center 
        border border-gray-300 rounded-full text-sm font-medium text-gray-700
        overflow-hidden group transition-all duration-300
        hover:bg-orange-500 hover:text-white"
                >
                  {/* Text */}
                  <span className="z-10 ml-5">Know More</span>

                  {/* Sliding Arrow */}
                  <span
                    className="absolute left-1 top-1 w-10 h-10 flex items-center justify-center 
          transition-all duration-500 ease-in-out
          group-hover:translate-x-[125px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="#000"
                        d="M1.5 6a.75.75 0 0 1 .75-.75h5.94L6.22 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 9.78a.75.75 0 0 1-1.06-1.06l1.97-1.97H2.25A.75.75 0 0 1 1.5 6"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-20 bg-gradient-to-b ">
        <div className="max-w-6xl mx-auto px-6">
          {/* Glass Card */}
          <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md py-16 px-8">
            {/* Heading */}
            <h3 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12 font-serif">
              Our Clients
            </h3>

            {/* Logo Scroll */}
            <div className="relative overflow-hidden">
              {/* Gradient Fade */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r to-transparent z-10" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l  to-transparent z-10" />

              {/* Scroll Track */}
              <div className="flex items-center gap-10 md:gap-14 animate-scroll whitespace-nowrap w-max">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[140px] md:min-w-[160px]"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">
            Frequently Asked Questions
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl bg-white transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 px-5 ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
