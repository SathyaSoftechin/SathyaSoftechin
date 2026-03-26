import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import WorldMap from "../assets/images/contact-bg.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:contact@sathyasoftechin.com
      ?subject=${encodeURIComponent(form.subject)}
      &body=${encodeURIComponent(
        `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`,
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main
      className="relative w-full pt-32 pb-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${WorldMap})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "1400px",
      }}
    >
      <div className="absolute inset-0 bg-gray-50/0"></div>

      <div className="relative z-10">
        {/* PAGE HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            We’re here to answer your questions, discuss your ideas, and help
            you find the right technology solutions. Whether it’s software
            development, product innovation, or AI services let’s connect.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Have a project? <br /> Let’s discuss
            </h2>

            <p className="text-gray-600 mt-4 text-sm">
              Thank you for getting in touch Kindly. <br />Fill the form, have a great
              day!
            </p>

            <div className="bg-white/10 mt-8 rounded-xl shadow-sm border p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-md flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm font-semibold">Call Anytime</p>
                  <p className="text-sm text-gray-600">+91 91171-77979</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-md flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-semibold">Send Email</p>
                  <p className="text-sm text-gray-600">
                    contact@sathyasoftechin.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-md flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-gray-600">Madhapur, Hyderabad</p>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="pt-4 border-t">
                {" "}
                <p className="text-sm font-bold text-gray-800 mb-3">
                  {" "}
                  Follow us{" "}
                </p>{" "}
                <div className="flex gap-3">
                  {" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=61586973818035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    {" "}
                    <FaFacebookF />{" "}
                  </a>{" "}
                  {/* <a
                    href="https://x.com/sathyasoftechin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    {" "}
                    <FaTwitter />{" "}
                  </a>{" "} */}
                  <a
                    href="https://www.instagram.com/sathya.softechin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    {" "}
                    <FaInstagram />{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/company/sathyasoftech-in/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    {" "}
                    <FaLinkedinIn />{" "}
                  </a>{" "}
                </div>{" "}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/10 rounded-xl shadow-sm border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-black">Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-black">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-black">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-black">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-white hover:bg-orange-500 text-orange-400 shadow-md shadow-orange-600  hover:text-white px-6 py-2 rounded-full transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
