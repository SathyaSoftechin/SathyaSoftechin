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
      className="relative text-gray-300 pt-16"
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <img
              src={Logo}
              alt="Sathya Softech"
              className="h-12 mb-6 bg-white rounded-full p-1"
            />

            <p className="text-sm leading-relaxed text-gray-300">
              We craft visually refined websites and powerful applications.
              Combining thoughtful design with robust development to deliver
              digital products that create real impact.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 underline underline-offset-8 decoration-orange-500">
              Pages
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "About Us", path: "/about" },
                { label: "Career", path: "/career" },
              ].map((page) => (
                <li key={page.label}>
                  <Link
                    to={page.path}
                    className="hover:text-orange-500 transition"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 underline underline-offset-8 decoration-orange-500">Services</h4>
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
            <h4 className="text-white font-semibold mb-4 underline underline-offset-8 decoration-orange-500">Contact</h4>

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
                <span className="leading-relaxed">
                  Sathya Softech-in, S Chandra Reddy Towers, Hitech City Road
                  Divert, Ayyappa Society, VIP Hills, Jaihind Enclave, Madhapur,
                  Hyderabad, Telangana 500081
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-600 mt-14 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sathya Softech. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=61586973818035"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-orange-500 transition cursor-pointer" />
            </a>

            <a
              href="https://x.com/sathyasoftechin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-orange-500 transition cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/company/sathyasoftech-in/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-orange-500 transition cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/sathya.softechin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-orange-500 transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
