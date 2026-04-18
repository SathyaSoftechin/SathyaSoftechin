import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

// 🔷 IMAGE
import heroImg from "../../assets/images/mobile-app.png";

// 🔷 SERVICES
const mobileServices = [
  {
    icon: <FaAndroid />,
    title: "Android App Development",
    desc: "Building robust and scalable Android apps tailored to diverse industry requirements.",
  },
  {
    icon: <FaApple />,
    title: "iOS App Development",
    desc: "High-performance iOS applications built with seamless user experiences and reliability.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Cross-Platform Apps",
    desc: "Apps that work flawlessly across multiple devices while maintaining quality and speed.",
  },
  {
    icon: <FaCogs />,
    title: "App Maintenance & Support",
    desc: "Ongoing support, performance monitoring, and updates to ensure app stability.",
  },
];

// 🔷 STEPS
const steps = [
  {
    title: "Research & Planning",
    desc: "Deep analysis of market needs and user expectations.",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging mobile experiences.",
  },
  {
    title: "App Development",
    desc: "Building scalable, high-performance mobile applications.",
  },
  {
    title: "Testing & QA",
    desc: "Ensuring reliability through rigorous testing processes.",
  },
  {
    title: "Deployment",
    desc: "Launching apps smoothly on App Store and Play Store.",
  },
];

const MobileApp = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      {/* 🔷 HERO */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            MOBILE SOLUTIONS
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            Building Powerful <span className="text-orange-500">Mobile</span>
            <br />
            Experiences
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Transform your vision into high-performance Android and iOS
            applications. We combine architecture excellence with stunning UI to
            create apps that users love and businesses rely on.
          </p>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={heroImg}
            alt="Mobile App Development"
            // className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* 🔷 SERVICES */}
      <div className="mt-24">
        <h2 className="text-md font-semibold text-orange-500">CAPABILITIES</h2>
        <p className="text-black mt-2 text-3xl font-bold">
          Our Mobile Services
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {mobileServices.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg mb-4 text-xl">
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

      {/* 🔷 PROCESS */}
      <div className="mt-28 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our Design-First Process
        </h2>

        <div className="relative mt-16">
          {/* Line */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-orange-500 text-white shadow-md flex items-center justify-center font-semibold">
                  {`0${i + 1}`}
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
        <h2 className="text-3xl font-bold">Ready to Build Your Mobile App?</h2>

        <p className="mt-4 text-orange-100">
          Let’s turn your idea into a scalable and high-performing mobile
          experience.
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

export default MobileApp;
