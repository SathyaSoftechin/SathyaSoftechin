import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Logo from "../assets/images/logo.png"; // adjust path if needed
import FooterImage from "../assets/images/footer-image.png"; // optional image shown in design

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <img
              src={Logo}
              alt="Sathya Softech"
              className="h-12 mb-6 bg-white rounded-full p-1"
            />

            <p className="text-sm leading-relaxed text-gray-400">
              We craft visually refined websites and powerful applications.
              Combining thoughtful design with robust development. Delivering
              digital products that create real impact.
            </p>

            {/* Optional Image */}
            {/* <div className="mt-6 rounded-lg overflow-hidden">
              <img
                src={FooterImage}
                alt="Workspace"
                className="w-full object-cover"
              />
            </div> */}
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Career", "Products", "Portfolio", "About Us"].map(
                (page) => (
                  <li
                    key={page}
                    className="hover:text-orange-500 cursor-pointer transition"
                  >
                    {page}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-sm">
              {[
                "UI/UX Design",
                "Web Development",
                "Mobile App Development",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-orange-500 cursor-pointer transition"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <span>+91 91171-77979</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>contact@sathyasoftechin.com</span>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  Sathya Softech-in, S Chandra Reddy Towers, Hitech City Road
                  Divert, Ayyappa Society, VIP Hills, Jaihind Enclave, Madhapur,
                  Hyderabad, Telangana 500081
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-700 mt-14 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sathya Softech. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 md:mt-0">
            <div className="flex gap-4 text-gray-300">
              <a
                href="https://www.facebook.com/profile.php?id=61586973818035"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="cursor-pointer hover:text-orange-500 transition" />
              </a>

              <a
                href="https://x.com/sathyasoftechin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="cursor-pointer hover:text-orange-500 transition" />
              </a>

              <a
                href="https://www.linkedin.com/company/sathyasoftech-in/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="cursor-pointer hover:text-orange-500 transition" />
              </a>

              <a
                href="https://www.instagram.com/sathya.softechin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="cursor-pointer hover:text-orange-500 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
