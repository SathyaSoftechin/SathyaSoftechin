import Hero from "../assets/images/Hero.jpg";
import Services from "../assets/images/Services.png";
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

const Home = () => {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 text-center">
        <h1 className="text-2xl md:text-5xl font-serifDisplay font-bold text-gray-900 leading-tight">
          Transforming Businesses Through <br />
          <span className="text-orange-500">Digital Innovation</span>
        </h1>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
          <img src={Hero} alt="Digital Innovation" className="w-full object-cover" />
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-center text-xl font-semibold mb-6">Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React", "Node", "Python", "AWS"].map((tech) => (
            <div
              key={tech}
              className="bg-white border rounded-xl p-6 text-center shadow-sm"
            >
              <p className="font-medium">{tech}</p>
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
                { title: "UI/UX Design", desc: "Crafting intuitive designs that enhance user experience and engagement.", image: uiuxIcon },
                { title: "Web Development", desc: "High-performance, scalable web applications tailored to your business.", image: Webdev },
                { title: "Mobile App Development", desc: "Robust Android & iOS apps with seamless performance.", image: Mobileapp },
                { title: "Custom Software Development", desc: "Tailored software solutions aligned with your business goals.", image: Custom },
                { title: "Product Development", desc: "From idea to launch with complete product lifecycle support.", image: Product },
                { title: "Support & Maintenance", desc: "Continuous monitoring, updates, and performance optimization.", image: Support },
                { title: "Cyber Security", desc: "Securing your digital assets with advanced protection strategies.", image: Cyber },
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
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">Why Choose Us</h2>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 mt-16">
          {[
            { num: "01", title: "Expert Team", desc: "Skilled professionals with proven industry experience", image: Expert },
            { num: "02", title: "Quality Driven", desc: "High standards in design, development, and delivery.", image: Quality },
            { num: "03", title: "Timely Delivery", desc: "Projects delivered on time without compromising quality.", image: Delivery },
            { num: "04", title: "Result Oriented", desc: "We focus on measurable outcomes and real impact.", image: Result },
          ].map((item, index) => (
            <div key={item.num} className="relative flex flex-col items-center text-center">

              {/* Image + Number Overlap */}
              <div className="relative mt-6">
                <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg z-10 shadow-md">
                  {item.num}
                </div>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm max-w-[220px]">
                {item.desc}
              </p>

              {/* Curved Arrow */}
              {index < 3 && (
                <svg
                  className="hidden md:block absolute top-[95px] right-[-90px]"
                  width="160"
                  height="60"
                  viewBox="0 0 160 60"
                  fill="none"
                >
                  <path
                    d="M5 30 C 50 5, 110 5, 150 30"
                    stroke="#1f2a44"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                  />
                  <path
                    d="M145 26 L150 30 L145 34"
                    stroke="#1f2a44"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold mb-6">Clients</h2>
          <div className="flex justify-center">
            <div className="text-gray-600 font-medium">Sr Media</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
