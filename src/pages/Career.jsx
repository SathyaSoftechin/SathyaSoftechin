import CareersHero from "../assets/images/career.png"; // replace with your image

const Careers = () => {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      {/* ================= CAREERS HERO ================= */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="ml-12">
            <p className="text-orange-500 font-semibold mb-5 ">
              Careers at Sathya Softech-in
            </p>

            <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900 leading-tight">
              Build Impactful Products <br />
              <span className="text-orange-500">From Anywhere</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
              Join a team that values innovation, ownership, and real-world
              impact. Work on meaningful projects while growing your career with
              us.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
              >
                View Openings
              </a>

              <a
                href="/contact"
                className="flex items-center gap-2 text-gray-800 font-medium hover:text-orange-500 transition"
              >
                Contact HR
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center mr-9">
            {/* Decorative Background Circle */}
            <div
              className="absolute w-[460px] h-[460px] rounded-full 
                  bg-gradient-to-tr from-orange-200 via-orange-100 to-green-200 
                  blur-[2px] opacity-70 
                  -top-10 -right-10 -z-10"
            ></div>

            {/* Optional inner soft ring */}
            <div
              className="absolute w-[380px] h-[380px] rounded-full 
                  border border-orange-200 
                  -top-2 -right-2 -z-10"
            ></div>

            {/* Image */}
            <img
              src={CareersHero}
              alt="Careers at Sathya Softech"
              className="w-[320px] md:w-[360px] object-contain relative z-10"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 mb-2">3 Reasons To Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-bold">Why Work With Us?</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Career Growth",
              desc: "Work on challenging projects that help you grow technically and professionally.",
              icon: "🚀",
            },
            {
              title: "Health Care",
              desc: "We care about your well-being and promote a healthy work-life balance.",
              icon: "💚",
            },
            {
              title: "Flexible Environment",
              desc: "A collaborative and flexible environment where your ideas matter.",
              icon: "🧩",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative bg-orange-100 rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top-left corner accent */}
              <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-orange-500 rounded-tl-xl"></span>

              {/* Bottom-right corner accent */}
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-orange-500 rounded-br-xl"></span>

              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-lg bg-orange-50 flex items-center justify-center text-xl">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="bg-orange-0 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
            Open Opportunities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                role: "MERN Stack Developer",
                type: "Full Time",
                location: "Hyderabad",
              },
              {
                role: "UI/UX Designer",
                type: "Full Time",
                location: "Hyderabad",
              },
              {
                role: "AIML Engineer's",
                type: "Full Time",
                location: "Hyderabad",
              },
              {
                role: "Mobile App Developer",
                type: "Full Time",
                location: "Hyderabad",
              },
              {
                role: "Cloud Engineer's",
                type: "Full Time",
                location: "Hyderabad",
              },
              {
                role: "DevOps Engineer",
                type: "Full Time",
                location: "Hyderabad",
              },
            ].map((job) => (
              <div
                key={job.role}
                className="bg-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {job.role}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {job.location} • {job.type}
                </p>

                <a
                  href="/contact"
                  className="inline-block text-orange-500 font-medium text-sm"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Didn’t Find the Role You’re Looking For?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We’re always looking for talented individuals. Send us your resume
            and we’ll get in touch.
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

export default Careers;
