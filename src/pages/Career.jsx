import { useState } from "react";
import CareersHero from "../assets/images/career-hero.png";

const jobs = [
  {
    role: "Full Stack Developer",
    level: "Mid-Level",
    location: "Hyderabad",
    category: "Development",
    description:
      "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases, and APIs.",
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
    category: "Frontend",
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
    category: "Mobile",
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
    category: "Backend",
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

  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    return (
      job.role.toLowerCase().includes(search.toLowerCase()) &&
      (levelFilter === "All" || job.level === levelFilter) &&
      (locationFilter === "All" || job.location === locationFilter) &&
      (categoryFilter === "All" || job.category === categoryFilter)
    );
  });

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[320px] md:h-[380px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${CareersHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* <div className="relative z-10 text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-200">
            Explore exciting career opportunities with Sathya Softech
          </p>
        </div> */}
      </section>

      {/* ================= FILTER BAR ================= */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white shadow-xl rounded-xl p-6">
          {/* Search */}
          <div className="flex items-center border rounded-lg px-4 py-2 mb-6">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-4 gap-4 items-center">
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="All">All Experience Level</option>
              <option value="Mid-Level">Mid-Level</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="All">All Locations</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="All">All Categories</option>
              <option value="Development">Development</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Mobile">Mobile</option>
            </select>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
              View Jobs
            </button>
          </div>
        </div>
      </div>

      {/* ================= OPEN POSITIONS ================= */}
      <section id="openings" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Open Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT JOB LIST */}
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
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

              <p className="text-gray-700 mb-6">
                <p className="font-semibold text-black mb-2">Job Responsibilities</p>
                 
                {selectedJob.description}
              </p>

              <h4 className="font-semibold mb-3">Job Requirements</h4>

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
                href={`mailto:hiring.manager@sathyasoftechin.com?subject=Application for ${selectedJob.role}`}
                className="mt-8 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      {/* <section className="py-20">
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
      </section> */}
    </main>
  );
};

export default Careers;
