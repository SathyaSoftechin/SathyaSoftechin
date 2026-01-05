import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
];

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef(null);

  const [pillStyle, setPillStyle] = useState({});
  const [showPill, setShowPill] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Sticky navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Handle pill visibility + positioning */
  useEffect(() => {
    // If Contact page → hide pill
    if (location.pathname === "/contact") {
      setShowPill(false);
      return;
    }

    setShowPill(true);

    const activeLink = navRef.current?.querySelector(
      'a[aria-current="page"]'
    );

    if (!activeLink || !navRef.current) return;

    const linkRect = activeLink.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    setPillStyle({
      width: linkRect.width,
      height: linkRect.height,
      transform: `translate(${linkRect.left - navRect.left}px, -50%)`,
    });
  }, [location.pathname]);

  const isContactActive = location.pathname === "/contact";

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${
        scrolled ? "sticky bg-white shadow-md" : "relative bg-white"
      }`}
    >
      <div className="relative max-w-7xl mx-auto h-[88px] px-6 flex items-center">

        {/* LEFT: Logo */}
        <div className="flex items-center translate-y-[1px]">
          <img src="/logo3.png" alt="Sathya Softech" className="h-12" />
        </div>

        {/* CENTER: Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <div
            ref={navRef}
            className="relative flex items-center gap-2 border rounded-full px-3 py-2 translate-y-[1px]"
          >
            {/* Active Pill (hidden on Contact) */}
            {showPill && (
              <span
                className="absolute left-0 top-1/2 rounded-full border border-blue-500 shadow-sm transition-all duration-300 ease-out"
                style={pillStyle}
              />
            )}

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="relative z-10 px-6 py-2 text-sm font-medium text-gray-800"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* RIGHT: Contact CTA */}
        <div className="ml-auto hidden md:block">
          <NavLink
            to="/contact"
            className={`px-6 py-2 rounded-full text-sm font-medium border transition
              ${
                isContactActive
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="ml-auto md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-gray-800 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={`font-medium ${
                isContactActive ? "text-orange-500" : "text-gray-800"
              }`}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;