import { Link } from "react-router-dom";
import HloPGLogo from "../assets/images/hlopg-logo.png";

const HloPG = () => {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-32 pb-28">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-orange-200/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <img
            src={HloPGLogo}
            alt="HloPG"
            className="w-[220px] mx-auto mb-10 drop-shadow-md"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transparency in <br />
            <span className="text-blue-600">Hostel & PG Discovery</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            HloPG is a mobile-first platform that connects users directly with
            verified hostel and PG owners, removing brokers, hidden charges, and
            misinformation.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-50 text-blue-600 font-medium">
              About HloPG
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What is HloPG?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Finding safe, verified, and affordable accommodation is a major
              challenge for students and working professionals.
            </p>

            <p className="text-gray-600 leading-relaxed">
              HloPG solves this by introducing physical property verification
              and direct owner connections, ensuring trust, transparency, and
              peace of mind.
            </p>
          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl -rotate-2"></div>

            <div className="relative bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Why People Choose HloPG
              </h3>

              <ul className="space-y-4 text-gray-700">
                {[
                  "Verified hostel & PG listings",
                  "100% broker-free platform",
                  "Transparent & honest pricing",
                  "Location-based discovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Why HloPG
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Transparency & Trust in <br /> Hostel and PG Discovery
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
                HloPG is built to eliminate brokers, fake listings, and hidden
                charges. Every property is physically verified, allowing users
                to connect directly with genuine hostel and PG owners with
                complete confidence.
              </p>

              {/* Optional CTA */}
            </div>

            {/* ================= RIGHT FEATURE CARDS ================= */}
            <div className="grid grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    🛡️
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">
                  Physical Property Verification
                </h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Every listing on HloPG is verified by our team to ensure
                  authenticity, safety, and accurate information before it goes
                  live.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    🤝
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">
                  Broker-Free Platform
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Connect directly with hostel and PG owners—no middlemen, no
                  commissions, and no unnecessary costs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    📍
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">
                  Location-Based Discovery
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Discover hostels and PGs near colleges, offices, and transit
                  points using smart location-based search.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    ⭐
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">
                  Transparent Listings & Reviews
                </h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  High-quality images, amenities, pricing clarity, and genuine
                  user reviews help users make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-28 bg-gray-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            HloPG is Currently Under Development
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are actively building HloPG to redefine accommodation discovery.
            Stay tuned for updates or reach out to collaborate with us.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full font-medium transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HloPG;
