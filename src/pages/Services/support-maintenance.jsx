import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaBug, FaTachometerAlt, FaShieldAlt } from "react-icons/fa";

// 🔷 VIDEO / IMAGE
import heroVideo from "../../assets/videos/support.mp4"; // or replace with image if needed

// 🔷 SERVICES
const supportServices = [
  {
    icon: <FaServer />,
    title: "System Monitoring & Maintenance",
    desc: "Continuous health checks to ensure your infrastructure performs at its peak 24/7.",
  },
  {
    icon: <FaBug />,
    title: "Bug Fixes & Issue Resolution",
    desc: "Rapid identification and elimination of software glitches to minimize downtime.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    desc: "Periodic fine-tuning of code and servers for lightning-fast user experiences.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Updates & Security Patches",
    desc: "Regular software updates and vulnerability patching to keep your data safe.",
  },
];

// 🔷 PROCESS
const steps = [
  {
    title: "Issue Identification",
    desc: "Automated or reported detection of discrepancies.",
  },
  {
    title: "Analysis & Diagnosis",
    desc: "In-depth investigation of root causes by experts.",
  },
  {
    title: "Resolution & Fix",
    desc: "Swift implementation of corrective measures.",
  },
  {
    title: "Testing & Validation",
    desc: "Rigorous QA to ensure the fix is stable.",
  },
  {
    title: "Continuous Monitoring",
    desc: "Post-fix tracking to prevent recurrence.",
  },
];

const SupportMaintenance = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      {/* 🔷 HERO */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            SUPPORT & MAINTENANCE
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            Reliable <span className="text-orange-500">Support</span>
            <br />
            for <span className="text-orange-500">Seamless</span> Performance
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Protect your digital investment with our proactive maintenance
            strategies. We ensure your systems remain fast, secure, and
            resilient while you focus on growth.
          </p>
        </div>

        {/* Right → VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* 🔷 SERVICES */}
      <div className="mt-24">
        <h2 className="text-sm font-semibold text-orange-500">OUR EXPERTISE</h2>

        <h3 className="text-3xl font-bold text-gray-900 mt-2">
          Support Services
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {supportServices.map((item, i) => (
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

      {/* 🔷 PROCESS */}
      <div className="mt-28 text-center">
        <h2 className="text-sm text-orange-500 font-semibold">HOW WE WORK</h2>

        <h3 className="text-3xl font-bold text-gray-900 mt-2">
          Our Support Process
        </h3>

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
        <h2 className="text-3xl font-bold">
          Keep Your Systems Running Smoothly
        </h2>

        <p className="mt-4 text-orange-100">
          Let us handle maintenance while you focus on scaling your business.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Support
        </button>
      </div>
    </div>
  );
};

export default SupportMaintenance;
