import { Link } from "react-router-dom";
import AboutImage from "../assets/images/services.png";
import Who from "../assets/images/who.png";
import Mission from "../assets/images/mission.png";
import VisionImg from "../assets/images/vision.png";

import uiuxIcon from "../assets/icons/uiux.png";
import webIcon from "../assets/icons/webdev.png";
import mobileIcon from "../assets/icons/mobileapp.png";
import customIcon from "../assets/icons/custom.png";
import cyberIcon from "../assets/icons/cyber.png";
import supportIcon from "../assets/icons/support.png";
import bg from "../assets/images/bg-3.png";

const About = () => {
  const IMAGE_SIZE = 80; // 🔥 change this to 64, 72, 80 anytime

  return (
    <main className="w-full">
      {/* ================= HERO / INTRO ================= */}
      <section className="bg-gray-100 pt-16">
        <div className="max-w-7xl mx-auto py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900">
            About Sathya Softech-in
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            We are a technology-driven software company focused on building
            scalable, secure, and high-impact digital solutions for businesses
            across industries.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-black mb-4 leading-relaxed">
              Sathya Softech-in is a software development company dedicated to
              delivering high-quality digital products through thoughtful
              design, strong engineering, and a deep understanding of business
              needs.
            </p>
            <p className="text-gray-900 leading-relaxed">
              We work closely with startups, enterprises, and growing businesses
              to transform ideas into reliable software solutions that drive
              growth and long-term value.
            </p>
          </div>

          <div>
            <img src={Who} alt="Who We Are" />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              desc: "To empower businesses with innovative, secure, and scalable digital solutions that solve real-world problems.",
              image: Mission,
              link: "/mission",
            },
            {
              title: "Our Vision",
              desc: "To become a trusted technology partner by delivering reliable products, exceptional UX, and long-term value.",
              image: VisionImg,
              link: "/vision",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-orange-50 rounded-3xl p-10 shadow-sm 
                   hover:shadow-lg transition-all duration-300 
                   flex gap-6 items-start"
            >
              {/* Icon / Image */}
              <div className="flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Read More Button */}
                <Link
                  to={item.link}
                  className="inline-flex items-center w-fit 
                       text-orange-500 font-medium 
                       hover:text-orange-600 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE DO (WITH IMAGES) ================= */}
      {/* ================= WHAT WE DO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        {/* Decorative Background Image */}
        <div
          className="absolute -left-40 top-1/2 -translate-y-1/2 
               w-[700px] h-[700px] 
               bg-no-repeat bg-contain opacity-40 
               pointer-events-none"
          style={
            {
              // backgroundImage: "url('/src/assets/images/bg-1.png')",
            }
          }
        />

        {/* Section Heading */}
        <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-center mb-14">
          What We Do
        </h2>

        {/* Cards */}
        <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "UI/UX Design",
              desc: "User-centered designs that enhance engagement and usability.",
              image: uiuxIcon,
            },
            {
              title: "Web Development",
              desc: "Scalable, secure, and high-performance web applications.",
              image: webIcon,
            },
            {
              title: "Mobile App Development",
              desc: "Robust Android and iOS applications built for growth.",
              image: mobileIcon,
            },
            {
              title: "Custom Software",
              desc: "Tailored software solutions aligned with business goals.",
              image: customIcon,
            },
            {
              title: "Cyber Security",
              desc: "Advanced security solutions to protect digital assets.",
              image: cyberIcon,
            },
            {
              title: "Support & Maintenance",
              desc: "Ongoing support to ensure reliability and performance.",
              image: supportIcon,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 shadow-sm 
                   hover:shadow-lg hover:-translate-y-1 
                   transition-all duration-300 flex gap-6 items-start"
            >
              {/* Image (no background) */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            These principles guide everything we do at Sathya Softech.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-14">
            {[
              {
                title: "Problem-First",
                desc: "We solve real problems, not build technology for its own sake.",
                icon: "💡",
              },
              {
                title: "User-Centric",
                desc: "Users’ trust, safety, and time guide every decision we make.",
                icon: "❤️",
              },
              {
                title: "Transparency",
                desc: "We build trust through honesty and clear communication.",
                icon: "👁️",
              },
              {
                title: "Quality",
                desc: "We deliver reliable, secure, and polished products.",
                icon: "🏅",
              },
            ].map((item) => (
              <div key={item.title} className="hover:-translate-y-2 transition">
                <div className="w-20 h-20 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <img
            src={bg}
            alt=""
            className="w-[1500px] max-w-none translate-y-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-50 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let’s Build Something Impactful
          </h2>
          <p className="text-gray-50 max-w-2xl mx-auto mb-8">
            Whether you’re launching a new product or scaling an existing one,
            Sathya Softech is ready to help you succeed.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
