import VisionImg from "../assets/images/vision.png";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-100 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900 mb-6">
              Our Vision
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We envision a future where technology is not just powerful, but
              purposeful — enabling businesses to scale confidently, innovate
              continuously, and create meaningful digital impact.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 
                         text-white px-8 py-3 rounded-full font-medium transition"
            >
              Build the Future With Us
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-100 rounded-3xl blur-2xl opacity-60"></div>
            <img
              src={VisionImg}
              alt="Our Vision"
              className="relative rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= CORE VISION STATEMENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            A Long-Term Perspective
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our vision is to become a globally trusted technology partner by
            delivering products and platforms that are secure, scalable, and
            built to last. We aim to shape digital ecosystems that empower
            people, businesses, and communities alike.
          </p>
        </div>
      </section>

      {/* ================= VISION PILLARS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            What Drives Our Vision
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation with Purpose",
                desc:
                  "We don’t chase trends. We build meaningful technology that solves real problems and creates lasting value.",
              },
              {
                title: "Scalable Thinking",
                desc:
                  "Our vision is rooted in long-term scalability — systems that grow with businesses, not against them.",
              },
              {
                title: "Trust & Transparency",
                desc:
                  "We believe trust is the foundation of every successful digital product and long-term partnership.",
              },
              {
                title: "Human-Centered Technology",
                desc:
                  "Technology should enhance human experience, not complicate it. Every solution we build reflects this belief.",
              },
              {
                title: "Global Impact",
                desc:
                  "We aspire to create products that go beyond borders and positively impact industries worldwide.",
              },
              {
                title: "Sustainable Growth",
                desc:
                  "Our vision prioritizes sustainability — technical, operational, and business sustainability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm 
                           hover:shadow-lg hover:-translate-y-2 
                           transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

      {/* ================= CTA ================= */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Shape the Future Together
          </h2>

          <p className="text-gray-300 mb-10">
            If our vision resonates with you, let’s collaborate to build
            impactful digital products that stand the test of time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 
                         text-white px-8 py-3 rounded-full font-medium transition"
            >
              Contact Us
            </Link>

            <Link
              to="/mission"
              className="border border-gray-400 hover:border-orange-500 
                         text-white hover:text-orange-500 
                         px-8 py-3 rounded-full font-medium transition"
            >
              View Our Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vision;
