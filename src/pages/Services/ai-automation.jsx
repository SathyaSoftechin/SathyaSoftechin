import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaRobot,
  FaChartLine,
  FaDatabase,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

// 🔷 IMAGE
import heroVideo from "../../assets/videos/ai-automation.mp4"; // replace if needed


// 🔷 SERVICES
const aiServices = [
  {
    icon: <FaProjectDiagram />,
    title: "Workflow Automation",
    desc: "Seamlessly link your creative stack. Automate repetitive file handoffs and project syncs.",
  },
  {
    icon: <FaRobot />,
    title: "AI Chatbots & Assistants",
    desc: "24/7 intelligent client intake and support using custom-trained LLM models.",
  },
  {
    icon: <FaChartLine />,
    title: "Process Optimization",
    desc: "AI-driven auditing of internal design processes to identify and remove bottlenecks.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Integration",
    desc: "Synchronize your customer data across all platforms with smart AI mapping.",
  },
];

// 🔷 PROCESS / ARCHITECTURE
const steps = [
  {
    icon: <FaSearch />,
    title: "Analysis & Strategy",
    desc: "Identifying high-impact areas for automation.",
    number: "01",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Workflow Design",
    desc: "Mapping logic and neural connection points.",
    number: "02",
  },
  {
    icon: <FaCogs />,
    title: "AI Model Integration",
    desc: "Deploying the intelligence engine.",
    number: "03",
  },
  {
    icon: <FaRocket />,
    title: "Implementation",
    desc: "Full-scale launch within your ecosystem.",
    number: "04",
  },
];



const AiAutomation = () => {
  const navigate = useNavigate(); 
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      {/* 🔷 HERO */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            AUTOMATION EXCELLENCE
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-gray-900">
            Automate <br />
            <span className="text-orange-500">Smarter</span> with AI
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Unlock hyper-efficiency for your business. We build custom AI
            architectures that handle the mundane, so your team can focus on
            high-value creative work.
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

      {/* 🔷 SERVICES */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our AI Automation Services
        </h2>

        <div className="w-16 h-1 bg-orange-500 mt-2 mb-10"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {aiServices.map((item, i) => (
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

      {/* 🔷 ARCHITECTURE SECTION */}
      <div className="mt-28 grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            The Architecture of <br />
            Intelligence
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our structured approach ensures that AI <br />
            integration is seamless, secure, and highly <br />
            effective for your specific needs.
          </p>

          {/* Highlight box */}
          <div className="mt-8 bg-gray-200 p-6 rounded-2xl">
            <p className="text-orange-500 text-2xl font-bold">95%</p>
            <p className="text-gray-600 text-sm mt-1 font-semibold">
              ACCURACY RATE IN MODEL TRAINING
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-orange-500 text-xl">{step.icon}</div>
                <span className="text-gray-200 text-3xl font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900">{step.title}</h3>

              <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="mt-28 bg-orange-500 text-white rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Automate Your Business?</h2>

        <p className="mt-4 text-orange-100">
          Let’s build intelligent systems that scale your operations
          effortlessly.
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

export default AiAutomation;
