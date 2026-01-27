import { useState } from "react";

/* Hero & Approach Images */
import HeroBg from "../assets/images/portfolio-hero.png";
import Approach1 from "../assets/images/approach1.png";
import Approach2 from "../assets/images/approach2.png";

/* Project Images */
import Project1 from "../assets/images/hlopg-logo.png";
import Project2 from "../assets/images/yaritrip-logo.png";
import Project3 from "../assets/images/yellaa.png";
import Project4 from "../assets/images/yellaa-logo.jpeg";

/* Video */
import CtaVideo from "../assets/videos/bg-video.mp4";

const projects = [
  {
    id: 1,
    title: "PG Finder & Hostel Booking App",
    category: "Booking",
    type: "Mobile App",
    image: Project1,
  },
  {
    id: 2,
    title: "Travel Platform",
    category: "Travel",
    type: "Mobile App",
    image: Project2,
  },
  {
    id: 3,
    title: "Transportation Platform",
    category: "Logistics",
    type: "Mobile App",
    image: Project4,
  },
  {
    id: 4,
    title: "SR Media",
    category: "Branding Agency",
    type: "Website",
    image: Project4,
  },
  {
    id: 5,
    title: "Haraa Gold, Diamonds & Silver",
    category: "Jewellery",
    type: "Custom Software",
    image: Project4,
  },
  {
    id: 6,
    title: "SR Work Force",
    category: "Employee Management",
    type: "Custom Software",
    image: Project2,
  },
  {
    id: 7,
    title: "Sharuji Logistics",
    category: "Logistics",
    type: "Custom Software",
    image: Project2,
  },
];

const FILTERS = ["All", "Mobile App", "Website", "Custom Software"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[300px] md:h-[380px] flex items-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="max-w-2xl text-gray-200">
            Discover how we help businesses build scalable, secure, and
            high-impact digital products.
          </p>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-4">
          {FILTERS.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === item
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {item === "All" ? "All Projects" : item}
            </button>
          ))}
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-blue-100 rounded-2xl shadow-sm 
                         hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-300"
            >
              <div className="flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[100px] object-contain"
                />
              </div>

              <div className="p-5">
                <div className="flex gap-2 text-xs text-gray-500 mb-2">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.type}</span>
                </div>

                <h3 className="font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 border-l-4 border-orange-500 pl-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "We analyze business goals, user needs, and market trends.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "We craft intuitive UI/UX focused on usability and impact.",
                },
                {
                  step: "03",
                  title: "Develop",
                  desc: "We build scalable, secure, high-performance products.",
                },
                {
                  step: "04",
                  title: "Launch & Scale",
                  desc: "We launch, monitor, and continuously optimize solutions.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-orange-500 font-bold">
                    {item.step}.
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <img src={Approach1} alt="Approach" className="rounded-xl shadow-md" />
              <img src={Approach2} alt="Approach" className="rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative h-[520px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={CtaVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65"></div>

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
