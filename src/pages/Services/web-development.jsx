import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

// ✅ FIXED ICON IMPORTS (stable)
import {
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaFlask,
  FaRocket,
} from "react-icons/fa";

import heroImg from "../../assets/images/web-development.png";
import customDevelopment from "../../assets/images/services/custom.png";
import ecommerce from "../../assets/images/services/ecommerce.png";
import webApplication from "../../assets/images/services/web-application.png";
import webMaintenance from "../../assets/images/services/maintenance.png";

// 🔷 SERVICES
const webServices = [
  {
    icon: customDevelopment,
    title: "Custom Website Development",
    desc: "Bespoke digital architecture tailored to your unique brand identity and goals.",
  },
  {
    icon: ecommerce,
    title: "E-commerce Solutions",
    desc: "High-converting online stores built with seamless UX and secure infrastructure.",
  },
  {
    icon: webApplication,
    title: "Web Applications",
    desc: "Custom, cloud-based software solutions delivered via browser-first interfaces",
  },
  {
    icon: webMaintenance,
    title: "Website Maintenance",
    desc: "Continuous optimization, security updates and performance monitoring",
  },
];

// 🔷 STEPS (FIXED ICONS)
const steps = [
  {
    icon: <FaLightbulb />,
    title: "Planning and Strategy",
    desc: "Step 1",
  },
  {
    icon: <FaDraftingCompass />,
    title: "UI/UX Design",
    desc: "Step 2",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Step 3",
  },
  {
    icon: <FaFlask />,
    title: "Testing",
    desc: "Step 4",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    desc: "Step 5",
  },
];

const WebDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      {/* 🔷 HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            WEB SOLUTIONS
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            Building Modern & Scalable{" "}
            <span className="text-orange-500">Websites</span>
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Crafting high-performance digital experiences that merge weightless
            aesthetics with architectural integrity. We build for speed, SEO,
            and the future.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={heroImg}
            alt="Web development"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* 🔷 SERVICES */}
      <div className="mt-24">
        <h2 className="text-md font-semibold text-orange-500">CAPABILITIES</h2>
        <p className="text-black mt-2 text-3xl font-bold">Our Web Services</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {webServices.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔷 TIMELINE */}
      <div className="mt-28 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          The Architectural Path
        </h2>

        <div className="relative mt-16">
          <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-orange-500 text-white shadow-md flex items-center justify-center text-lg">
                  {step.icon}
                </div>

                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="mt-28 bg-orange-500 text-white rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold">
          Let’s Build Exceptional Digital Products
        </h2>

        <p className="mt-4 text-orange-100">
          Partner with us to create scalable and high-performance web solutions.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WebDevelopment;
