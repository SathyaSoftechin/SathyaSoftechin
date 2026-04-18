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
              Thank you for getting in touch Kindly. <br />
              Fill the form, have a great day!
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

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61586973818035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 text-orange-400 flex items-center justify-center  hover:text-white transition"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={256}
                      height={256}
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#1877f2"
                        d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                      ></path>
                      <path
                        fill="#fff"
                        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                      ></path>
                    </svg>{" "}
                  </a>{" "}

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sathya.softechin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 text-orange-400 flex items-center justify-center  hover:text-white transition"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={256}
                      height={256}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="url(#SVGKdMMobCR)"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="url(#SVGqYUiQbXV)"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                        ></path>
                        <defs>
                          <radialGradient
                            id="SVGKdMMobCR"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fd5"></stop>
                            <stop offset={0.1} stopColor="#fd5"></stop>
                            <stop offset={0.5} stopColor="#ff543e"></stop>
                            <stop offset={1} stopColor="#c837ab"></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGqYUiQbXV"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3771c8"></stop>
                            <stop offset={0.128} stopColor="#3771c8"></stop>
                            <stop
                              offset={1}
                              stopColor="#60f"
                              stopOpacity={0}
                            ></stop>
                          </radialGradient>
                        </defs>
                      </g>
                    </svg>{" "}
                  </a>{" "}

                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/company/sathyasoftech-in/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-gray-100 text-orange-400 flex items-center justify-center  hover:text-white transition"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={256}
                      height={256}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#0a66c2"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                        ></path>
                      </g>
                    </svg>{" "}
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
