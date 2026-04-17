import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCloud, FaServer, FaSyncAlt } from "react-icons/fa";

// 🔷 IMAGE
import heroVideo from "../../assets/videos/custom-software.mp4"; // replace if needed

// 🔷 SERVICES
const customServices = [
  {
    icon: <FaBuilding />,
    title: "Enterprise Software Development",
    desc: "Scalable, secure, and integrated systems designed to streamline global operations and complex data workflows.",
  },
  {
    icon: <FaCloud />,
    title: "SaaS Application Development",
    desc: "Multi-tenant architectures built for performance, rapid scaling, and seamless user experiences across devices.",
  },
  {
    icon: <FaServer />,
    title: "API & Backend Systems",
    desc: "Robust server-side logic and sophisticated API design that powers data-driven ecosystems with high availability.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Legacy System Modernization",
    desc: "Refactoring and migrating outdated infrastructure into modern cloud-native tech stacks without data loss.",
  },
];

const CustomSoftware = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      {/* 🔷 HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            PREMIER SOFTWARE ENGINEERING
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            <span className="text-orange-500">Custom Software</span>
            <br />
            Built for Your Business
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            We architect bespoke digital ecosystems that solve complex
            organizational challenges. From scalable enterprise cores to
            intuitive SaaS experiences, we turn your vision into
            high-performance software.
          </p>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* 🔷 SERVICES SECTION */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our Custom Solutions
        </h2>

        {/* underline */}
        <div className="w-16 h-1 bg-orange-500 mt-2 mb-10"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {customServices.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-lg mb-4 text-xl">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="mt-28 bg-orange-500 text-white rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold">Let’s Build Your Custom Software</h2>

        <p className="mt-4 text-orange-100">
          Partner with us to develop scalable, secure, and future-ready software
          solutions.
        </p>

        <button className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CustomSoftware;
