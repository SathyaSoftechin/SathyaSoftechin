import { Link } from "react-router-dom";
import Yaritrip from "../assets/images/yaritrip-logo.png";
import HloPG from "../assets/images/hlopg-logo.png";

const Products = () => {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900">
            Our Products
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            At Sathya Softech-in, we build in-house digital products focused on
            solving real-world problems with technology. Our products are
            designed with a strong emphasis on trust, usability, and long-term
            value.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* ================= PRODUCT 1 ================= */}
          <Link
            to="/products/hlopg"
            className="group bg-blue-100 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border"
          >
            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <img
                src={HloPG}
                alt="HloPG Logo"
                className="w-[200px] h-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              HloPG is a mobile-first platform that brings transparency and
              trust to the hostel and PG discovery process. It connects users
              directly with verified property owners, eliminating brokers and
              hidden costs.
            </p>

            <span className="inline-flex items-center text-orange-500 font-medium mt-2">
              View Product →
            </span>
          </Link>

          {/* ================= PRODUCT 2 ================= */}
          <Link
            to="/products/yaritrip"
            className="group bg-sky-100 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border"
          >
            <div className="flex flex-col items-center text-center ">
              {/* Logo */}
              <img
                src={Yaritrip}
                alt="Yaritrip Logo"
                className="w-[300px] h-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-2">
              Yaritrip is a travel-focused platform designed to simplify trip
              planning and bookings. It helps users discover destinations, plan
              journeys efficiently, and enjoy seamless travel experiences.
            </p>

            {/* CTA */}
            <span className="inline-flex items-center justify-center text-orange-500 font-medium">
              View Product →
            </span>
          </Link>
        </div>
      </section>
      {/* ================= ABOUT OUR PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-blue-200 rounded-3xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Built In-House, Designed for Real Impact
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
            At Sathya Softech-in, our products are built entirely in-house by
            our engineering and design teams. We focus on solving real problems
            through thoughtful design, reliable technology, and continuous
            improvement.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Problem-Driven",
                desc: "Every product starts with a clearly identified real-world problem.",
              },
              {
                title: "User-Centric",
                desc: "We design experiences that are simple, intuitive, and practical.",
              },
              {
                title: "Scalable & Secure",
                desc: "Our platforms are built to scale while maintaining strong security.",
              },
              {
                title: "Continuously Evolving",
                desc: "We actively iterate based on feedback and market needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Interested in What We’re Building?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We’re continuously building and improving products that solve
            real-world problems. Explore our platforms or get in touch to learn
            more.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition"
            >
              Contact Us
            </a>

            {/* Secondary CTA */}
            <a
              href="/about"
              className="inline-flex items-center justify-center border border-gray-300 hover:border-orange-500 text-gray-800 hover:text-orange-500 px-8 py-3 rounded-full font-medium transition"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
