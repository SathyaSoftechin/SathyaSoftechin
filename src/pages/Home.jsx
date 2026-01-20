import Hero from "../assets/images/hero.jpg";
import Services from "../assets/images/services.png";

import uiuxIcon from "../assets/icons/uiux.png";
import Webdev from "../assets/icons/webdev.jpg";
import Mobileapp from "../assets/icons/mobileapp.png";
import Custom from "../assets/icons/custom.png";
import Product from "../assets/icons/product.png";
import Support from "../assets/icons/support.png";
import Cyber from "../assets/icons/cyber.png";

import Expert from "../assets/icons/expert.png";
import Quality from "../assets/icons/quality.png";
import Delivery from "../assets/icons/delivery.png";
import Result from "../assets/icons/result.png";

/* Technology Images */
import CyberImg from "../assets/images/cyber.png";
import WebImg from "../assets/images/mern.png";
import MobileImg from "../assets/images/devops.png";
import CloudImg from "../assets/images/cloud.png";
import AiImg from "../assets/images/aiml.png";
import HeroVideo from "../assets/videos/herovideo.mp4";

const Home = () => {
  return (
    <main className="w-full">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 text-center">
        <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>
        <h1 className="text-2xl md:text-5xl font-serifDisplay font-bold text-gray-900 leading-tight">
          Transforming Businesses Through <br />
          <span className="text-orange-500">Digital Innovation</span>
        </h1>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Hero}
            alt="Digital Innovation"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ================= TECHNOLOGIES (CARD STACK SCROLL) ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <h2 className="text-center text-4xl mb-16 text-orange-500 font-semibold">
          Tools & Technologies We Leverage
        </h2>

        <div className="relative space-y-40">
          {[
            {
              title: "🤖 AI & Machine Learning Solutions",
              desc: "We design intelligent systems that turn data into actionable insights. From predictive analytics to automation and personalized experiences, our AI/ML solutions help businesses improve efficiency, decision-making, and competitive advantage.",
              image: AiImg,
            },
            {
              title: "🚀 Full-Stack Web Engineering (MERN Stack)",
              desc: "We build high-performance, scalable web applications using MongoDB, Express, React, and Node.js. Our solutions are secure, fast, and designed for long-term business growth with clean architecture and modern UI/UX.",
              image: WebImg,
            },
            {
              title: "⚙️ Continuous Delivery & DevOps Automation",
              desc: "Accelerate development with streamlined CI/CD pipelines and automated infrastructure. We optimize deployment workflows, improve system reliability, and reduce downtime using modern DevOps best practices.",
              image: MobileImg,
            },
            {
              title: "🔐 Enterprise Cyber Defense",
              desc: "Protect your digital assets with advanced security strategies. We help businesses identify vulnerabilities, secure applications, and ensure compliance through proactive monitoring, audits, and threat prevention.",
              image: CyberImg,
            },
            {
              title: "☁️ Cloud Architecture & Scalability Solutions",
              desc: "Leverage the power of the cloud to scale confidently. From cloud migration to optimized infrastructure, we design cost-efficient, secure, and high-availability cloud environments tailored to enterprise needs.",
              image: CloudImg,
            },
          ].map((tech, index) => (
            <div
              key={tech.title}
              className="sticky top-28 flex justify-center"
              style={{ zIndex: 20 + index }}
            >
              <div
                className="w-full max-w-5xl bg-black rounded-[110px] shadow-xl border flex flex-col md:flex-row overflow-hidden text-white"
                style={
                  {
                    // transform: `translateY(${index * 28}px) scale(${1 - index * 0.04})`,
                  }
                }
              >
                {/* Image */}
                <div className="md:w-1/2 bg-black flex items-center justify-center p-6">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="max-h-[260px] object-contain"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {tech.title}
                  </h3>
                  <p className="text-white-600 mb-6 ">{tech.desc}</p>
                  <button className="self-start bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-orange-500 text-[30px] font-semibold px-20">
            Our Services:
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mt-6">
            <div>
              <img src={Services} alt="Services" />
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "UI/UX Design",
                  desc: "Crafting intuitive designs that enhance user experience and engagement.",
                  image: uiuxIcon,
                },
                {
                  title: "Web Development",
                  desc: "High-performance, scalable web applications tailored to your business.",
                  image: Webdev,
                },
                {
                  title: "Mobile App Development",
                  desc: "Robust Android & iOS apps with seamless performance.",
                  image: Mobileapp,
                },
                {
                  title: "Custom Software Development",
                  desc: "Tailored software solutions aligned with your business goals.",
                  image: Custom,
                },
                {
                  title: "Product Development",
                  desc: "From idea to launch with complete product lifecycle support.",
                  image: Product,
                },
                {
                  title: "Support & Maintenance",
                  desc: "Continuous monitoring, updates, and performance optimization.",
                  image: Support,
                },
                {
                  title: "Cyber Security",
                  desc: "Securing your digital assets with advanced protection strategies.",
                  image: Cyber,
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-5 rounded-xl shadow-sm flex gap-5 items-start"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      {/* (unchanged – keeping your existing implementation) */}
    </main>
  );
};

export default Home;
