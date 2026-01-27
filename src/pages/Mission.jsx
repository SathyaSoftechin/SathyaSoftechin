import { FaRocket, FaShieldAlt, FaUsers, FaLightbulb } from "react-icons/fa";

const Mission = () => {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_60%)]"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Our <span className="text-orange-500">Mission</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            To empower businesses with innovative, secure, and scalable digital
            solutions that solve real-world problems and create long-term impact.
          </p>
        </div>
      </section>

      {/* ================= MISSION PILLARS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            What Drives Our Mission
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                title: "Innovation First",
                desc: "We leverage modern technologies to build forward-thinking solutions.",
                icon: <FaLightbulb />,
              },
              {
                title: "Security by Design",
                desc: "Every solution is built with protection, privacy, and trust at its core.",
                icon: <FaShieldAlt />,
              },
              {
                title: "User-Centric Approach",
                desc: "We design experiences that are intuitive, accessible, and meaningful.",
                icon: <FaUsers />,
              },
              {
                title: "Scalable Growth",
                desc: "Our systems grow with your business, without technical debt.",
                icon: <FaRocket />,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-3xl p-8 shadow-sm 
                           hover:shadow-xl hover:-translate-y-2 
                           transition-all duration-500"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-orange-100 
                                flex items-center justify-center text-orange-500 text-2xl
                                group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE EXECUTE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            How We Deliver Our Mission
          </h2>

          <div className="space-y-14">
            {[
              {
                step: "01",
                title: "Understand the Problem",
                desc: "We begin with deep discovery to understand real business challenges.",
              },
              {
                step: "02",
                title: "Design Thoughtfully",
                desc: "Every interface and system is designed with clarity and purpose.",
              },
              {
                step: "03",
                title: "Build Securely",
                desc: "We develop robust, secure, and scalable architectures.",
              },
              {
                step: "04",
                title: "Iterate & Improve",
                desc: "Continuous optimization ensures long-term success.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="text-orange-500 font-bold text-3xl">
                  {item.step}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT CTA ================= */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        {/* Gradient Wave */}
        <div className="absolute bottom-0 left-0 w-full h-full 
                        bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.3),transparent_60%)]">
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Technology That Matters
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Our mission is not just about building software — it’s about
            creating meaningful digital experiences that empower people and
            businesses to succeed.
          </p>

          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 
                       text-white px-10 py-4 rounded-full font-medium 
                       transition-all duration-300"
          >
            Work With Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Mission;
