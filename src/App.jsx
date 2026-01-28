import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import HloPG from "./pages/hlopg";
import Yaritrip from "./pages/yaritrip";
import Terms from "./pages/terms";
import Cookie from "./pages/CookiePolicy";
import Privacy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/hlopg" element={<HloPG />} />
        <Route path="/yaritrip" element={<Yaritrip />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;