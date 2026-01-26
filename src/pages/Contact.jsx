import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
      {/* ================= CONTACT CARD ================= */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* ================= LEFT PANEL ================= */}
        <div className="relative bg-blue-500 text-white p-8 md:p-10 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-blue-100 mb-10">
              Say something to start a live chat!
            </p>

            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-4">
                <FaPhoneAlt />
                <span>+91 91171-77979</span>
              </li>

              <li className="flex items-center gap-4">
                <FaEnvelope />
                <span>contact@sathyasoftechin.com</span>
              </li>

              <li className="flex items-center gap-4">
                <FaMapMarkerAlt />
                <span>Madhapur, Hyderabad</span>
              </li>
            </ul>
          </div>

          {/* Decorative Circles */}
          {/* <div className="absolute bottom-0 right-0">
            <div className="w-40 h-40 bg-pink-500 rounded-full absolute -bottom-16 -right-16" />
            <div className="w-24 h-24 bg-orange-500 rounded-full absolute -bottom-6 -right-6" />
          </div> */}

          {/* Social Icons */}
          <div className="flex gap-4 mt-10 z-10">
            <a
              href="https://www.facebook.com/profile.php?id=61586973818035"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/sathyasoftechin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/sathya.softechin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/sathyasoftech-in/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="p-8 md:p-10">
          <form className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Company Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Contact Number</label>
                <input
                  type="tel"
                  placeholder=""
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Select Subject?</p>
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" defaultChecked />
                  General Inquiry
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Need Service
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Job Enquiry
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
