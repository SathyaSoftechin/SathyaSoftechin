import { Link } from "react-router-dom";

import HloPG from "../assets/images/hlopg-logo.png";
import Yaritrip from "../assets/images/yaritrip-logo.png";
import CtaVideo from "../assets/videos/bg-video.mp4";

const Portfolio = () => {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-100 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900">
            Our Portfolio
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            A showcase of products, platforms, and digital solutions crafted
            with precision, scalability, and real-world impact.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What We’ve Built
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          From in-house platforms to client-focused solutions, our portfolio
          reflects our expertise in building secure, scalable, and user-focused
          digital products.
        </p>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          {/* HloPG */}
          <Link
            to="/products/hlopg"
            className="group bg-blue-100 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-8">
              <img
                src={HloPG}
                alt="HloPG"
                className="w-[240px] object-contain"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              HloPG is a mobile-first platform designed to bring transparency
              and trust to hostel and PG discovery. It connects users directly
              with verified property owners, eliminating brokers and hidden
              costs.
            </p>

            <span className="text-orange-500 font-medium">
              View Product →
            </span>
          </Link>

          {/* Yaritrip */}
          <Link
            to="/products/yaritrip"
            className="group bg-sky-100 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-8">
              <img
                src={Yaritrip}
                alt="Yaritrip"
                className="w-[260px] object-contain"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Yaritrip is a travel-focused platform that simplifies trip
              planning and bookings, helping users discover destinations and
              enjoy seamless travel experiences.
            </p>

            <span className="text-orange-500 font-medium">
              View Product →
            </span>
          </Link>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-14">
            Industries We Serve
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Technology & SaaS",
              "Travel & Hospitality",
              "Real Estate",
              "E-Commerce",
              "Education",
              "Startups",
              "Enterprises",
              "Service Businesses",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Our Approach
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { step: "01", title: "Discovery" },
            { step: "02", title: "Design" },
            { step: "03", title: "Development" },
            { step: "04", title: "Launch & Scale" },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-sky-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <p className="text-orange-500 font-bold text-xl mb-3">
                {item.step}
              </p>
              <p className="font-semibold text-gray-900">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA (VIDEO BACKGROUND) ================= */}
      <section className="relative h-[520px] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={CtaVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* CTA Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>

            <p className="text-gray-300 mb-10">
              Whether you’re launching a new product or scaling an existing
              platform, Sathya Softech-in is ready to help you turn ideas into
              impact.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition"
              >
                Start a Project
              </a>

              <a
                href="/portfolio"
                className="border border-white/40 hover:border-orange-500 
                           text-white hover:text-orange-500 px-8 py-3 rounded-full font-medium transition"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
