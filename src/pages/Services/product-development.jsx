import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaRocket,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";

// 🔷 IMAGE
import heroImg from "../../assets/images/product-development.png"; // replace if needed

// 🔷 SERVICES / EXPERTISE
const productServices = [
  {
    icon: <FaCogs />,
    title: "Product Strategy & Planning",
    desc: "Mapping your journey from initial concept to a validated product roadmap.",
  },
  {
    icon: <FaRocket />,
    title: "MVP Development",
    desc: "Building lean, high-quality products to test the market quickly and effectively.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    desc: "Crafting immersive and intuitive interfaces that resonate with your users.",
  },
  {
    icon: <FaChartLine />,
    title: "Product Scaling & Optimization",
    desc: "Scaling infrastructure and refining features for a growing user base.",
  },
];

const ProductDevelopment = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">

      {/* 🔷 HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
            PRODUCT DEVELOPMENT
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            Turning Ideas into <br />
            Scalable{" "}
            <span className="text-orange-500">Digital Products</span>
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            We bridge the gap between vision and reality. Our expert team delivers
            end-to-end product solutions that dominate markets and delight users.
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
            alt="Product Development"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* 🔷 EXPERTISE SECTION */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold text-gray-900">
          Comprehensive Product Expertise
        </h2>

        {/* underline */}
        <div className="w-16 h-1 bg-orange-500 mt-2 mb-10"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productServices.map((item, i) => (
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

              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔷 CTA SECTION */}
      <div className="mt-28 bg-orange-500 text-white rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Build Your Product?
        </h2>

        <p className="mt-4 text-orange-100">
          Let’s transform your idea into a scalable, high-impact digital product.
        </p>

        <button className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default ProductDevelopment;