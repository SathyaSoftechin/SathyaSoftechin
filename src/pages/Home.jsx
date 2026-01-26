import Hero from "../assets/images/hero.jpg";
import Services from "../assets/images/services.png";
import srmedia from "../assets/images/srmedia.png";
import gk from "../assets/images/gk.png";

import uiuxIcon from "../assets/icons/uiux.png";
import Webdev from "../assets/icons/webdev.jpg";
import Mobileapp from "../assets/icons/mobileapp.png";
import Custom from "../assets/icons/custom.png";
import Product from "../assets/icons/product.png";
import Support from "../assets/icons/support.png";
import Cyber from "../assets/icons/cyber.png";

/* Technology Images */
import CyberImg from "../assets/images/cyber.png";
import WebImg from "../assets/images/mern.png";
import MobileImg from "../assets/images/devops.png";
import CloudImg from "../assets/images/cloud.png";
import AiImg from "../assets/images/aiml.png";

/* Videos */
import DesktopHeroVideo from "../assets/videos/herovideo.mp4";
import MobileHeroVideo from "../assets/videos/mobilevideo.mp4";

const Home = () => {
  const clients = [
    { name: "SR Media", logo: srmedia },
    { name: "GK", logo: gk },
    // add more clients here later
  ];

  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-10 text-center">
        {/* ================= HERO VIDEO ================= */}
        <div className="relative w-full overflow-hidden mb-4">
          {/* Desktop Video */}
          <video
            className="hidden md:block w-full h-[85vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={DesktopHeroVideo} type="video/mp4" />
          </video>

          {/* Mobile Video */}
          <video
            className="block md:hidden w-full h-[65vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={MobileHeroVideo} type="video/mp4" />
          </video>
        </div>

        {/* ================= HERO TEXT ================= */}
        <h1 className="mt-4 text-2xl md:text-5xl font-serifDisplay font-bold text-gray-900 leading-tight">
          Transforming Businesses Through <br />
          <span className="text-orange-500">Digital Innovation</span>
        </h1>

        {/* ================= HERO IMAGE ================= */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Hero}
            alt="Digital Innovation"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <h2 className="text-center text-4xl mb-16 text-orange-500 font-semibold">
          Tools & Technologies We Leverage
        </h2>

        <div className="relative space-y-40">
          {[
            {
              title: "🤖 AI & Machine Learning Solutions",
              desc: "We design intelligent systems that turn data into actionable insights, enabling automation and smarter decisions.",
              image: AiImg,
            },
            {
              title: "🚀 Full-Stack Web Engineering (MERN Stack)",
              desc: "Scalable, secure web applications using MongoDB, Express, React, and Node.js.",
              image: WebImg,
            },
            {
              title: "⚙️ Continuous Delivery & DevOps Automation",
              desc: "Optimized CI/CD pipelines and infrastructure reliability using DevOps best practices.",
              image: MobileImg,
            },
            {
              title: "🔐 Enterprise Cyber Defense",
              desc: "Proactive security strategies to safeguard applications and infrastructure.",
              image: CyberImg,
            },
            {
              title: "☁️ Cloud Architecture & Scalability Solutions",
              desc: "Secure, scalable, and cost-efficient cloud environments tailored for growth.",
              image: CloudImg,
            },
          ].map((tech, index) => (
            <div
              key={tech.title}
              className="sticky top-28 flex justify-center"
              style={{ zIndex: 20 + index }}
            >
              <div className="w-full max-w-5xl bg-black rounded-[110px] shadow-xl border flex flex-col md:flex-row overflow-hidden text-white">
                <div className="md:w-1/2 flex items-center justify-center p-6">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="max-h-[260px] object-contain"
                  />
                </div>

                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                  <p className="text-gray-300 mb-6">{tech.desc}</p>
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
                  desc: "Crafting intuitive designs.",
                  image: uiuxIcon,
                },
                {
                  title: "Cyber Security",
                  desc: "Advanced protection strategies.",
                  image: Cyber,
                },
                {
                  title: "Web Development",
                  desc: "Scalable web applications.",
                  image: Webdev,
                },
                {
                  title: "Mobile App Development",
                  desc: "Android & iOS apps.",
                  image: Mobileapp,
                },
                {
                  title: "Cloud Architecture",
                  desc: "Enterprise cloud solutions.",
                  image: CloudImg,
                },
                {
                  title: "Custom Software",
                  desc: "Tailored business solutions.",
                  image: Custom,
                },
                {
                  title: "Product Development",
                  desc: "End-to-end product lifecycle.",
                  image: Product,
                },
                {
                  title: "Support & Maintenance",
                  desc: "Continuous optimization.",
                  image: Support,
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

      {/* ================= OUR CLIENTS ================= */}
      <section className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-blue-400 text-[40px] font-semibold text-center mb-14">
            Our Clients
          </h2>

          {/* Center the entire grid */}
          <div className="flex justify-center">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 
                      gap-12 place-items-center"
            >
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center w-full h-full"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-[150px] max-w-[auto] 
                         object-contain ml-[730px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
