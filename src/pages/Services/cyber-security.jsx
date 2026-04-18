import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaNetworkWired, FaShieldAlt, FaLock, FaEye } from "react-icons/fa";

// 🔷 IMAGE / VIDEO
import heroImg from "../../assets/images/cyber-security.png"; // replace if needed

// 🔷 SERVICES
const securityServices = [
  {
    icon: <FaNetworkWired />,
    title: "Network Security",
    desc: "Next-gen firewalls and intrusion prevention systems to lock down perimeter and internal traffic.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Application Security",
    desc: "Securing the software layer through penetration testing and continuous code analysis.",
  },
  {
    icon: <FaLock />,
    title: "Data Protection",
    desc: "End-to-end encryption and robust access management to ensure data integrity and privacy.",
  },
  {
    icon: <FaEye />,
    title: "Threat Response",
    desc: "24/7 proactive monitoring and rapid incident response protocols to mitigate emerging risks.",
  },
];

// 🔷 PROCESS
const steps = [
  {
    title: "Risk Assessment",
    desc: "Deep audit of existing infrastructure.",
  },
  {
    title: "Vulnerability Analysis",
    desc: "Identifying weak points and exploits.",
  },
  {
    title: "Security Implementation",
    desc: "Deploying hardened protocols.",
  },
  {
    title: "Monitoring & Detection",
    desc: "Active surveillance and triggers.",
  },
  {
    title: "Continuous Improvement",
    desc: "Iterative updates and hardening.",
  },
];

const CyberSecurity = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      {/* 🔷 HERO */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            CYBER SECURITY DIVISION
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            Securing Your <span className="text-orange-500">Digital</span>
            <br />
            Infrastructure
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Advanced protection for enterprise systems, global networks, and
            sensitive data. We engineer invisible fortresses around your digital
            assets.
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
            alt="Cyber Security"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* 🔷 SERVICES */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold text-gray-900">
          Core Defense Capabilities
        </h2>

        <div className="w-16 h-1 bg-orange-500 mt-2 mb-10"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {securityServices.map((item, i) => (
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
        <h2 className="text-2xl font-semibold text-gray-900">
          The Aura Security Lifecycle
        </h2>

        <div className="relative mt-16">
          {/* Line */}
          <div className="absolute top-6 left-20 w-[85%] h-[2px] bg-gray-300"></div>

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
          Secure Your Digital Ecosystem Today
        </h2>

        <p className="mt-4 text-orange-100">
          Let us protect your infrastructure with enterprise-grade security
          solutions.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Protected
        </button>
      </div>
    </div>
  );
};

export default CyberSecurity;
