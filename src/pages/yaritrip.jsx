import { Link } from "react-router-dom";
import YaritripLogo from "../assets/images/yaritrip-logo.png";

const Yaritrip = () => {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="bg-sky-50 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img
            src={YaritripLogo}
            alt="Yaritrip"
            className="w-[350px] mx-auto mb-8"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Smarter Travel Starts with Better Planning
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Yaritrip is a travel-focused platform designed to simplify trip
            planning, destination discovery, and bookings—helping travelers
            enjoy seamless journeys without complexity.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="ml-9">
            <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-sky-600 uppercase">
              About Yaritrip
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              What is Yaritrip?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Planning a trip often involves juggling multiple platforms for
              destinations, itineraries, and bookings. Yaritrip brings
              everything together in one unified experience.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From discovering destinations to organizing trips efficiently,
              Yaritrip helps travelers make informed decisions and enjoy
              stress-free travel experiences.
            </p>
          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Destination discovery & inspiration</li>
              <li>✔ Smart trip planning tools</li>
              <li>✔ Simplified booking experience</li>
              <li>✔ Personalized travel journeys</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE YARITRIP ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="ml-9">
              <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-sky-600 uppercase">
                Why Yaritrip
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Travel Planning, <br /> Reimagined
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
                Yaritrip is built to remove friction from travel planning.
                Whether you’re exploring new destinations or organizing detailed
                itineraries, Yaritrip helps you plan smarter and travel better.
              </p>

              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-105 transition">
                  ✈️
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Explore How Yaritrip Works
                </span>
              </div> */}
            </div>

            {/* RIGHT FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-sky-600 text-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    🌍
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">
                  Destination Discovery
                </h4>
                <p className="text-sm text-sky-100 leading-relaxed">
                  Discover trending destinations, hidden gems, and travel ideas
                  tailored to your interests.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    🗺️
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">
                  Smart Trip Planning
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Plan itineraries efficiently with structured journeys,
                  timelines, and recommendations.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    📅
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">
                  Seamless Booking
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Book travel essentials smoothly with a streamlined,
                  user-friendly experience.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-sky-600 text-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    ⭐
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">
                  Personalized Experiences
                </h4>
                <p className="text-sm text-sky-100 leading-relaxed">
                  Receive personalized travel suggestions based on your
                  preferences and past journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Yaritrip is Currently Under Development
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We’re building Yaritrip to simplify travel planning and deliver
          meaningful travel experiences. Stay connected or reach out to
          collaborate with us.
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

export default Yaritrip;
