import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;