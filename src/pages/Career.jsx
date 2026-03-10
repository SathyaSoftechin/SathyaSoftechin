import { useState } from "react";
import CareersHero from "../assets/images/career.png"; // replace with your image

const jobs = [
  {
    role: "Full Stack Developer",
    level: "Mid-Level",
    location: "Hyderabad",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases, and APIs.",
    responsibilities: [
      "Proficiency in front-end technologies HTML, CSS, JavaScript",
      "Experience in React or Angular",
      "Knowledge in backend technologies Node.js / Python / Java",
      "Experience in databases like MySQL or PostgreSQL",
      "Strong debugging and analytical skills",
    ],
    type: "Full-time",
    experience: "Minimum 3 Years",
    salary: "Competitive",
  },
  {
    role: "React Developer",
    level: "Mid-Level",
    location: "Hyderabad",
    description:
      "Designing and implementing UI components using React. Building scalable front-end architecture and collaborating with backend teams.",
    responsibilities: [
      "Strong experience with React",
      "Good knowledge of JavaScript ES6+",
      "Understanding of REST APIs",
      "Experience with Git version control",
    ],
    type: "Full-time",
    experience: "2+ Years",
    salary: "Competitive",
  },
  {
    role: "Flutter Developer",
    level: "Mid-Level",
    location: "Hyderabad",
    description:
      "Developing cross-platform mobile applications using Flutter framework.",
    responsibilities: [
      "Experience with Dart programming",
      "Flutter UI development",
      "API integration",
      "State management knowledge",
    ],
    type: "Full-time",
    experience: "2+ Years",
    salary: "Competitive",
  },
  {
    role: "PHP Developer",
    level: "Mid-Level",
    location: "Hyderabad",
    description:
      "Developing backend applications using PHP frameworks like Laravel.",
    responsibilities: [
      "Strong PHP knowledge",
      "Experience with Laravel",
      "Database design",
      "API development",
    ],
    type: "Full-time",
    experience: "2+ Years",
    salary: "Competitive",
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <main className="w-full">
      {/* ================= CAREERS HERO ================= */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="ml-12">
            <p className="text-orange-500 font-semibold mb-5">
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
            <div className="absolute w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-orange-200 via-orange-100 to-green-200 blur-[2px] opacity-70 -top-10 -right-10 -z-10"></div>

            <div className="absolute w-[380px] h-[380px] rounded-full border border-orange-200 -top-2 -right-2 -z-10"></div>

            <img
              src={CareersHero}
              alt="Careers at Sathya Softech"
              className="w-[320px] md:w-[360px] object-contain relative z-10"
            />
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Open Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT JOB LIST */}
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedJob(job)}
                  className={`cursor-pointer border rounded-xl p-5 transition 
                  ${
                    selectedJob.role === job.role
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-orange-400"
                  }`}
                >
                  <h3 className="font-semibold text-lg">{job.role}</h3>

                  <div className="flex gap-3 mt-2 text-xs">
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {job.level}
                    </span>

                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {job.location}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT JOB DETAILS */}
            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-2xl font-semibold mb-4">
                {selectedJob.role}
              </h3>

              <div className="flex gap-3 text-sm mb-6">
                <span className="bg-gray-200 px-2 py-1 rounded">
                  {selectedJob.level}
                </span>

                <span className="bg-gray-200 px-2 py-1 rounded">
                  {selectedJob.location}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{selectedJob.description}</p>

              <h4 className="font-semibold mb-3">Job Responsibilities</h4>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                {selectedJob.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="mt-8 space-y-2 text-sm">
                <p>
                  <strong>Employment Type:</strong> {selectedJob.type}
                </p>

                <p>
                  <strong>Experience Required:</strong> {selectedJob.experience}
                </p>

                <p>
                  <strong>Salary:</strong> {selectedJob.salary}
                </p>
              </div>

              <a
                href={`mailto:hiring.manager@sathyasoftechin.com?subject=Application for ${selectedJob.role}&body=Hello Hiring Team,%0D%0A%0D%0AI would like to apply for the position of ${selectedJob.role} at Sathya Softech-in.%0D%0A%0D%0ARole: ${selectedJob.role}%0D%0ALocation: ${selectedJob.location}%0D%0AExperience Required: ${selectedJob.experience}%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you.`}
                className="mt-8 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                Apply Now
              </a>
            </div>
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
