import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Terms from "./pages/terms";
import Cookie from "./pages/CookiePolicy";
import Privacy from "./pages/PrivacyPolicy";

//Services Individual pages
import UiUxDesign from "./pages/Services/ui-ux-design";
import WebDevelopment from "./pages/Services/web-development";
import MobileApp from "./pages/Services/mobile-app";
import ProductDevelopment from "./pages/Services/product-development";
import CustomSoftware from "./pages/Services/custom-software";
import SupportMaintenance from "./pages/Services/support-maintenance";
import CyberSecurity from "./pages/Services/cyber-security";
import AiAutomation from "./pages/Services/ai-automation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Services Routes */}
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app" element={<MobileApp />} />
        <Route
          path="/services/product-development"
          element={<ProductDevelopment />}
        />
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route
          path="/services/support-maintenence"
          element={<SupportMaintenance />}
        />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/ai-automation" element={<AiAutomation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
