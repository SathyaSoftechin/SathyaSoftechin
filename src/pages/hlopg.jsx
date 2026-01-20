import { Link } from "react-router-dom";
import HloPGLogo from "../../assets/images/hlopg-logo.png";

const HloPG = () => {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="bg-blue-50 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img
            src={HloPGLogo}
            alt="HloPG"
            className="w-[220px] mx-auto mb-8"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparency in Hostel & PG Discovery
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            HloPG is a mobile-first platform that connects users directly with
            verified hostel and PG owners, eliminating brokers, hidden charges,
            and misinformation.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What is HloPG?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Finding safe, verified, and affordable accommodation is a major
              challenge for students and working professionals. HloPG solves
              this by introducing physical property verification and direct
              owner connections.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every listing on HloPG is verified by our team, ensuring trust,
              transparency, and peace of mind for users.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Verified hostel & PG listings</li>
              <li>✔ Broker-free platform</li>
              <li>✔ Transparent pricing</li>
              <li>✔ Location-based discovery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-14">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Physical Property Verification",
              "Direct Owner Contact",
              "Transparent Listings",
              "User Reviews & Ratings",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          HloPG is Currently in Development
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We are actively building HloPG to redefine accommodation discovery.
          Stay tuned for updates or reach out to collaborate.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
};

export default HloPG;
