import Hero from "../assets/images/hero.jpg";
import HeroImg from "../assets/images/hero.png";
import srmedia from "../assets/images/srmedia.png";
import gk from "../assets/images/gk.png";
import haraaLogo from "../assets/images/haraa.png";
import yaritrip from "../assets/images/yaritrip-logo.png";

import uiuxIcon from "../assets/icons/uiux.png";
import Webdev from "../assets/icons/webdev.png";
import Mobileapp from "../assets/icons/mobileapp.png";
import Custom from "../assets/icons/custom.png";
import Product from "../assets/icons/product.png";
import Support from "../assets/icons/support.png";
import Cyber from "../assets/icons/cyber.png";

import Product1 from "../assets/images/Rectangle26.png";
import Product2 from "../assets/images/Rectangle27.png";
import Product3 from "../assets/images/Rectangle28.png";
import Product4 from "../assets/images/Rectangle29.png";

import CyberImg from "../assets/images/cyber.png";
import MobileImg from "../assets/images/mobile.png";
import LaptopImg from "../assets/images/laptop.png";
import CloudImg from "../assets/images/cloud.png";
import AiImg from "../assets/images/aiml.png";

const Home = () => {
  const clients = [
    { name: "SR Media", logo: srmedia },
    { name: "GK", logo: gk },
    { name: "Haraa", logo: haraaLogo },
    { name: "Yaritrip", logo: yaritrip },
  ];

  const services = [
    {
      title: "UI/UX",
      desc: "We create intuitive, user-centered designs that enhance usability and engagement.",
      icon: uiuxIcon,
    },
    {
      title: "Web Development",
      desc: "We build responsive, high-performance websites tailored to your business needs.",
      icon: Mobileapp,
      highlight: true,
    },
    {
      title: "Mobile Application",
      desc: "We develop powerful Android and iOS applications with modern technologies.",
      icon: Webdev,
    },
    {
      title: "Product Development",
      desc: "We transform ideas into market-ready digital products.",
      icon: Custom,
    },
    {
      title: "Custom Software Development",
      desc: "We design and develop custom software solutions to solve unique business challenges",
      icon: Product,
    },
    {
      title: "Support & Maintenance",
      desc: "We provide ongoing support to ensure smooth and uninterrupted operations.",
      icon: Support,
    },
    {
      title: "Cyber Security",
      desc: "Security audits and protection strategies to safeguard digital assets.",
      icon: Cyber,
    },
    {
      title: "AI Automation",
      desc: "AI-driven automation solutions for smarter and efficient workflows.",
      icon: AiImg,
    },
  ];

  const reviews = [
    {
      desc: "Professional team with excellent delivery quality. Quality Team delivering Quality Products",
      image: srmedia,
      rating: 5,
    },
    {
      name: "Fina Doe",
      role: "Entrepreneur",
      desc: "Great experience working with them. Highly recommended. Great Team with Great Work Presence",
      image: gk,
      rating: 5,
    },
    {
      name: "Sandi Doe",
      role: "Marketing",
      desc: "Their team delivered an exceptional solution that transformed our digital presence and business operations.",
      image: haraaLogo,
      rating: 4,
    },
    {
      name: "Sandi Doe",
      role: "Marketing",
      desc: "Aliquam erat volutpat. Curabitur vehicula urna at lorem laoreet.",
      image: yaritrip,
      rating: 5,
    },
  ];

  return (
    <main className="w-full bg-white text-gray-900">
      {/* ================= HERO / INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="ml-16">
            <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif">
              Innovation through Products, Services, and{" "}
              <span className="text-orange-500">AI Powered Solutions</span>
              {/* <br /> Through Digital Innovation */}
            </h4>

            <p className="text-gray-600 mb-6 max-w-lg text-xl">
              We are a <span className="font-bold">service</span> and{" "}
              <span className="font-bold">product</span> driven company
              delivering innovative digital, software, and{" "}
              <span className="font-bold">AI powered solutions</span> tailored
              for modern businesses.
            </p>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={HeroImg}
              alt="Innovation"
              className="w-72 max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 text-center font-serif">
        <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif">
          Transforming
          <span className="text-orange-500 font-semibold">
            {" "}
            Businesses
          </span>{" "}
          Through <br />
          Digital Innovation
        </h4>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* FEATURE 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={LaptopImg}
            alt="Mobile Apps"
            className="w-96 rounded-xl ml-10"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              We design and develop powerful websites that elevate your digital
              presence.
            </h3>

            <p className="text-gray-600">
              We specialize in designing and developing modern websites that
              combine creativity, technology, and performance. Our goal is to
              create digital experiences that not only look stunning but also
              deliver seamless functionality and real business growth. Every
              website we build is tailored to reflect your brand and connect
              effectively with your audience.
            </p>
          </div>
        </div>

        {/* FEATURE 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              We develop smart mobile applications that bring ideas to life.
            </h3>

            <p className="text-gray-600">
              We develop innovative mobile applications that deliver seamless
              performance and exceptional user experiences. Our apps are
              designed with modern technology and intuitive interfaces to help
              businesses connect with users anytime, anywhere.
            </p>
          </div>

          <img src={MobileImg} alt="Web Platform" className="w-96 rounded-xl" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif">
            Our Services
          </h2>

          <h3 className="text-3xl md:text-2xl font-sans text-center mb-10">
            We Deliver All-in-One Solutions for Problems related to IT Field
          </h3>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 border bg-white 
          rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[60px]
          transition-all duration-300 ease-in-out
          hover:bg-orange-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-12 mb-4 transition duration-300"
                />

                {/* Title */}
                <h3 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-black">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Products
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <img src={Product1} className="rounded-xl" />
            <img src={Product2} className="rounded-xl" />
            <img src={Product3} className="rounded-xl" />
            <img src={Product4} className="rounded-xl" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Our amazing project has been completed
            </h3>

            <p className="text-gray-600 mb-6">
              We deliver innovative digital products built with modern
              technologies to help businesses scale and adapt to the digital
              economy.
            </p>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-10 text-gray-700">
            Our Clients
          </h3>

          <div className="flex justify-center items-center gap-16 flex-wrap opacity-80">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="w-72 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-xl shadow-sm hover:shadow-lg transition text-center hover:-translate-y-2 cursor-pointer duration-200 ease-in-out"
              >
                {/* Client Avatar */}
                <div className="flex justify-center mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-28 rounded-full object-cover"
                  />
                </div>
                {/* Quote Icon */}
                <div className="text-orange-500 text-5xl">❝</div>

                {/* Review Text */}
                <p className="text-gray-100 text-sm leading-relaxed mb-6">
                  {review.desc}
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Client Name */}
                {/* <h4 className="font-semibold text-sm">{review.name}</h4> */}

                {/* Role */}
                {/* <p className="text-gray-500 text-xs">{review.role}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
