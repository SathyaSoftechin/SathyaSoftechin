import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/uiux-design.png"; // replace with your image

const uxServices = [
  {
    title: "User Research",
    desc: "Understanding behavior patterns to build sound structural foundations.",
  },
  {
    title: "Wireframing",
    desc: "Blueprints that prioritize flow and information hierarchy above all else.",
  },
  {
    title: "UI Design",
    desc: "Aesthetic interfaces meeting functional software engineering standards.",
  },
  {
    title: "Prototyping",
    desc: "Interactive simulations that breathe life into static concepts before launch.",
  },
];

const steps = [
  {
    title: "Research",
    desc: "Deep dive into user pain points and market gaps.",
  },
  {
    title: "Ideation",
    desc: "Brainstorming structural flows and creative pivots.",
  },
  {
    title: "Design",
    desc: "Iterative crafting of high-fidelity visual assets.",
  },
  {
    title: "Testing",
    desc: "Usability audits to ensure peak performance.",
  },
];

const UiUxDesign = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">
      
      {/* 🔷 HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            UX ARCHITECTURE
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            <span className="text-orange-500">Designing</span><br />
            Experiences<br />
            That Users Love
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            We don’t just build interfaces, we craft digital galleries.
            Elevate your product with weightless, sophisticated design
            architecture that guides every interaction with surgical precision.
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
            alt="UI UX Design"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* 🔷 SERVICES SECTION */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold text-gray-900">
          Architectural Services
        </h2>
        <p className="text-gray-500 mt-2">
          Precision-engineered design cycles for modern SaaS.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {uxServices.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg mb-4">
                {i + 1}
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔷 TIMELINE SECTION */}
      <div className="mt-28 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          The Architectural Path
        </h2>

        <div className="relative mt-16">
          
          {/* Line */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                
                <div className="mx-auto w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-orange-500 font-semibold">
                  {`0${i + 1}`}
                </div>

                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔷 CTA SECTION (IMPORTANT FOR CONVERSION) */}
      <div className="mt-28 bg-orange-500 text-white rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold">
          Let’s Build Exceptional User Experiences
        </h2>
        <p className="mt-4 text-orange-100">
          Partner with us to design intuitive and scalable digital products.
        </p>

        <button className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default UiUxDesign;