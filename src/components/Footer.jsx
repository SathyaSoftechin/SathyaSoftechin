import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Logo from "../assets/images/logo.png";
import FooterImage from "../assets/images/footerimage.png";

const Footer = () => {
  return (
    <footer
      className="relative text-gray-300 pt-20"
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* BRAND */}
          <div>
            <img
              src={Logo}
              alt="Sathya Softech"
              className="h-12 mb-6 bg-white rounded-full p-1"
            />

            <p className="text-sm leading-relaxed text-gray-300 mb-6">
              Transforming businesses through innovative technology solutions.
              We build secure, scalable, and high-impact digital products.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61586973818035"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="w-9 h-9 p-2 rounded-md bg-white/10 hover:bg-orange-500 transition" />
              </a>
              <a
                href="https://x.com/sathyasoftechin"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="w-9 h-9 p-2 rounded-md bg-white/10 hover:bg-orange-500 transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/sathyasoftech-in/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="w-9 h-9 p-2 rounded-md bg-white/10 hover:bg-orange-500 transition" />
              </a>
              <a
                href="https://www.instagram.com/sathya.softechin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-9 h-9 p-2 rounded-md bg-white/10 hover:bg-orange-500 transition" />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-6 underline underline-offset-8 decoration-orange-500">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "UI/UX Design",
                "Web Development",
                "Android Development",
                "iOS Development",
                "Custom Software Development",
                "Product Development",
                "IT Support & Maintenance",
                "Cybersecurity Solutions",
              ].map((service) => (
                <li key={service} className="hover:text-orange-500 transition">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-6 underline underline-offset-8 decoration-orange-500">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Career", path: "/career" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-500 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-6 underline underline-offset-8 decoration-orange-500">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaEnvelope className="text-orange-500 mt-1" />
                contact@sathyasoftechin.com
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="text-orange-500 mt-1" />
                +91 91171-77979
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed text-gray-300">
                  Sathya Softech-in, First Floor, S Chandra Reddy Towers, Hitech City Road
                  Divert, Madhapur, Hyderabad, Telangana 500081.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/20 mt-16"></div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sathya Softech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-orange-500 transition">
              Terms & Conditions
            </Link>
            <Link to="/cookies" className="hover:text-orange-500 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
