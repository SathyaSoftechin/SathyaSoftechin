import { Link } from "react-router-dom";
import AboutImage from "../assets/images/services.png";
import Who from "../assets/images/who.png";

import krishna from "../assets/images/leadership/krishna.png";
import vishnu from "../assets/images/leadership/vishnu.jpeg";

const About = () => {
  const IMAGE_SIZE = 80;

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="bg-gray-100 pt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900 ml-20">
            Building Intelligent Software for <br />
            <span className="text-orange-500">Modern Businesses</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg ml-20">
            We design scalable digital products, AI-powered solutions, and
            innovative technology experiences that drive business growth. Our
            approach combines creativity, strategy, and advanced technology to
            deliver meaningful results.We help businesses transform ideas into
            powerful digital solutions for the future.
          </p>
          <a href="/contact">
            <button className="ml-20 mt-10 border border-orange-500 text-orange-500 px-10 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
              Start a Project
            </button>
          </a>
        </div>
        <img src={AboutImage} alt="About" className="w-96 rounded-xl ml-10" />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif text-center">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-black mb-4 leading-relaxed font-semibold text-[23px] font-serif">
              A team of innovators building scalable technology solutions for
              the digital future.
            </p>
            <p className="text-gray-900 leading-relaxed text-[18px]">
              Born from a passion for innovation, we help businesses evolve
              through intelligent technology. Our team combines creativity,
              engineering, and AI to build digital experiences that scale
              globally. We focus on delivering solutions that drive growth,
              efficiency, and long-term success. Together, we transform ideas
              into impactful digital products for the future.
            </p>
          </div>

          <div>
            <img src={Who} alt="Who We Are" />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif text-center">
          What Makes Us Different
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-black ">
          {[
            {
              title: "🧠 Innovation First",
              desc: "We leverage cutting-edge technologies and AI driven approaches to build future ready digital solutions that keep businesses ahead of the curve.",
            },
            {
              title: "⚡ Speed & Scalability",
              desc: "Our agile development process ensures rapid delivery while building scalable systems designed to grow with your business needs.",
            },
            {
              title: "❤️ Client Partnership",
              desc: "We collaborate closely with our clients, understanding their vision and becoming long-term technology partners rather than just service providers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl p-10 shadow-md hover:shadow-orange-500 transition-all duration-300 flex gap-6 items-start"
            >
              {/* <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img
                  // src={item.image}
                  alt={item.title}
                  className="object-contain"
                />
              </div> */}

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {item.desc}
                </p>
                {/* <Link
                  to={item.link}
                  className="text-orange-500 font-medium hover:text-orange-600 transition"
                >
                  Read More →
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-14 font-serif">
          Technologies We Work With
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              title: "🌐 Frontend",
              desc: ["React js", "React Native", "Next js"],
              // image: uiuxIcon,
            },
            {
              title: "⚙ Backend",
              desc: ["Node Js", "Python", "Java", "Spring Boot", "Express Js"],
              // image: webIcon,
            },
            {
              title: "☁ Cloud",
              desc: ["AWS", "Microsoft Azure", "Google Cloud"],
              // image: mobileIcon,
            },
            {
              title: "🤖 AI & Automation",
              desc: ["Machine Learning", "Data Analytics", "Automation Tools"],
              // image: customIcon,
            },
            // {
            //   title: "Cyber Security",
            //   desc: "Advanced security solutions to protect digital assets.",
            //   image: cyberIcon,
            // },
            // {
            //   title: "Support & Maintenance",
            //   desc: "Ongoing support to ensure reliability and performance.",
            //   image: supportIcon,
            // },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-orange-400 hover:-translate-y-1 transition-all duration-300 flex gap-6 items-start"
            >
              {/* <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                  className="object-contain"
                />
              </div> */}

              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  <ul className="list-disc pl-5">
                    {item.desc.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            The visionaries driving innovation, strategy, and execution at
            Sathya Softechin.
          </p>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl w-full">
              {[
                {
                  name: "V. Sathya Reddy",
                  role: "Founder & Managing Director",
                  bio: "Strategic leader driving innovation, growth, and long-term digital transformation initiatives.",
                },
                {
                  name: "Vishnu Ippili",
                  role: "Managing Director",
                  bio: "Oversees company strategy and operational excellence across departments.",
                  image: vishnu,
                },
                {
                  name: "Krishna. Ch",
                  role: "C.E.O",
                  bio: "Leads execution, performance strategy, and business scaling initiatives.",
                  image: krishna,
                },
                // {
                //   name: "Mahesh",
                //   role: "Business Development Manager (BDM)",
                //   bio: "Focused on partnerships, client acquisition, and sustainable business growth.",
                //   image: mahesh,
                // },
                // {
                //   name: "Eshwar Rao",
                //   role: "Business Development Manager (BDM)",
                //   bio: "Focused on partnerships, client acquisition, and sustainable business growth.",
                //   image: eshwar,
                // },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
                >
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                    )}

                    {/* Slide Up Bio Panel */}
                    <div className="absolute bottom-0 left-0 w-full bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out shadow-lg">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <img
            src={bg}
            alt=""
            className="w-[1500px] max-w-none translate-y-20"
          />
        </div> */}
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-900 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let’s Build Something Impactful
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto mb-8">
            Whether you’re launching a new product or scaling an existing one, <br />
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
