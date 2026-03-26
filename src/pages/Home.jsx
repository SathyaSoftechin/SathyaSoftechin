// // import Hero from "../assets/images/hero.jpg";
// import HeroImg from "../assets/images/hero.png";
// import srmedia from "../assets/images/srmedia.png";
// import gk from "../assets/images/gk.png";
// import haraa from "../assets/images/haraa.png";
// import yaritrip from "../assets/images/yaritrip-logo.png";
// import "./Home.css";
// import uiuxIcon from "../assets/icons/uiux.png";
// import Webdev from "../assets/icons/webdev.png";
// import Mobileapp from "../assets/icons/mobileapp.png";
// import Custom from "../assets/icons/custom.png";
// import Product from "../assets/icons/product.png";
// import Support from "../assets/icons/support.png";
// import Cyber from "../assets/icons/cyber.png";

// import Product1 from "../assets/images/Rectangle26.png";
// import Product2 from "../assets/images/Rectangle27.png";
// import Product3 from "../assets/images/Rectangle28.png";
// import Product4 from "../assets/images/Rectangle29.png";

// import CyberImg from "../assets/images/cyber.png";
// import MobileImg from "../assets/images/mobile.png";
// import LaptopImg from "../assets/images/laptop.png";
// import CloudImg from "../assets/images/cloud.png";
// import AiImg from "../assets/images/aiml.png";
// import sriram from "../assets/images/sriramnavami.png";
// import srirammain from "../assets/images/RamNavami-26-03.png";
// import sriramMobile from "../assets/images/RamNavami-mob-26-03.png";




// import petal1 from "../assets/images//flowers/petal1.png";
//  import petal2 from "../assets/images/flowers/petal2.png";
// // import petal2 from "../assets/images/flowers/3.png";

// import petal3 from "../assets/images/flowers/petal3.png";
// import { useEffect, useState } from "react";
// import FestiveBg from "../assets/images/Festivebg.png";

// const Home = () => {
//   const [isMobile, setIsMobile] = useState(false);
// useEffect(() => {
//   const handleResize = () => {
//     setIsMobile(window.innerWidth < 768);
//   };

//   handleResize(); // run on load
//   window.addEventListener("resize", handleResize);

//   return () => window.removeEventListener("resize", handleResize);
// }, []);
//   const clients = [
//     { name: "SR Media", logo: srmedia },
//     { name: "GK", logo: gk },
//     { name: "Haraa", logo: haraa },
//     { name: "Yaritrip", logo: yaritrip },
//   ];
//   const [showSplash, setShowSplash] = useState(true);

//   const petals = [petal1, petal2, petal3];


//   useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowSplash(false);
//   }, 5000); // 5 seconds

//   return () => clearTimeout(timer);
// }, []);

//   const services = [
//     {
//       title: "UI/UX",
//       desc: "We create intuitive, user-centered designs that enhance usability and engagement.",
//       icon: uiuxIcon,
//     },
//     {
//       title: "Web Development",
//       desc: "We build responsive, high-performance websites tailored to your business needs.",
//       icon: Mobileapp,
//       highlight: true,
//     },
//     {
//       title: "Mobile Application",
//       desc: "We develop powerful Android and iOS applications with modern technologies.",
//       icon: Webdev,
//     },
//     {
//       title: "Product Development",
//       desc: "We transform ideas into market-ready digital products.",
//       icon: Custom,
//     },
//     {
//       title: "Custom Software Development",
//       desc: "We design and develop custom software solutions to solve unique business challenges",
//       icon: Product,
//     },
//     {
//       title: "Support & Maintenance",
//       desc: "We provide ongoing support to ensure smooth and uninterrupted operations.",
//       icon: Support,
//     },
//     {
//       title: "Cyber Security",
//       desc: "Security audits and protection strategies to safeguard digital assets.",
//       icon: Cyber,
//     },
//     {
//       title: "AI Automation",
//       desc: "AI-driven automation solutions for smarter and efficient workflows.",
//       icon: AiImg,
//     },
//   ];

//   const reviews = [
//     {
//       desc: "Professional team with excellent delivery quality. Quality Team delivering Quality Products",
//       image: srmedia,
//       rating: 5,
//     },
//     {
//       name: "Fina Doe",
//       role: "Entrepreneur",
//       desc: "Great experience working with them. Highly recommended. Great Team with Great Work Presence",
//       image: gk,
//       rating: 5,
//     },
//     {
//       name: "Sandi Doe",
//       role: "Marketing",
//       desc: "Their team delivered an exceptional solution that transformed our digital presence and business operations.",
//       image: haraa,
//       rating: 4,
//     },
//     {
//       name: "Sandi Doe",
//       role: "Marketing",
//       desc: "Professional team with excellent delivery quality. Quality Team delivering Quality Products",
//       image: yaritrip,
//       rating: 5,
//     },
//   ];
// if (showSplash) {
//   return (
//     <div className="fixed inset-0 z-50 bg-black">

//       {/* 🌸 FULL PAGE PETALS */}
//       <div className="absolute inset-0 pointer-events-none z-10">
//         {Array.from({ length: 35 }).map((_, i) => {
//           const petal = petals[Math.floor(Math.random() * petals.length)];

//           return (
//             <img
//               key={i}
//               src={petal}
//               className="petal"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDuration: `${6 + Math.random() * 6}s`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 width: `${15 + Math.random() * 20}px`,
//                 opacity: 0.6,
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* ❌ Close Button */}
//       <button
//         onClick={() => setShowSplash(false)}
//         className="absolute top-4 right-5 text-3xl text-white z-30"
//       >
//         ✕
//       </button>

//       {/* 🖼️ FULL SCREEN IMAGE */}
//   {/* Desktop Image */}
// <img
//   src={srirammain}
//   className="hidden md:block w-full h-full object-cover"
// />

// {/* Mobile Image */}
// <img
//   src={sriramMobile}
//   className="block md:hidden w-full h-full object-cover"
// />

//     </div>
//   );
// }
//   return (

    
//     <main className="w-full bg-white text-gray-900">
//       {/* ================= HERO / INTRO ================= */}
//       <section
//         className="w-full mx-auto mb-24 overflow-hidden relative"
//         style={{
//                     // backgroundImage: `url(${FestiveBg})`,

//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}

// <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">  {Array.from({ length: 30 }).map((_, i) => {
//     const petal = petals[Math.floor(Math.random() * petals.length)];

//     return (
//       <img
//         key={i}
//         src={petal}
//         className="petal"
//         style={{
//           left: `${Math.random() * 100}%`,
//           animationDuration: `${6 + Math.random() * 6}s`,
//           animationDelay: `${Math.random() * 5}s`,
//           width: `${15 + Math.random() * 20}px`,
//         }}
//       />
//     );
//   })}
// </div>
// <div className=" w-full h-full px-6 py-10 relative z-10">          <div className="grid md:grid-cols-2 gap-12 items-center ml-10">
//             {/* LEFT CONTENT */}
//             <div className="hidden md:block ">
//               <h4 className="text-4xl md:text-3xl font-bold leading-tight mb-6 font-serif mt-5">
//                 Innovation through Products, Services,{" "}
//                 <span className="text-orange-500">AI Powered Solutions</span>
//               </h4>

//               <p className="text-gray-700 mb-6 max-w-lg text-xl">
//                 We are a <span className="font-bold">service</span> and{" "}
//                 <span className="font-bold">product</span> driven company
//                 delivering innovative digital, software, and{" "}
//                 <span className="font-bold">AI powered solutions</span> tailored
//                 for modern businesses.
//               </p>

//               {/* REQUEST CALL */}
//               <div className="max-w-auto px-10 mr-20 mt-10">
//                 <div className="flex items-center bg-white rounded-full shadow-md border border-gray-200 overflow-hidden">
//                   {/* Phone Input */}
//                   <input
//                     id="phoneInput"
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     className="flex-1 px-6 py-4 outline-none text-gray-700 placeholder-gray-400"
//                   />

//                   {/* Divider */}
//                   <div className="h-8 w-px bg-gray-300"></div>

//                   {/* Button */}
//                   <button
//                     onClick={() => {
//                       const phone = document.querySelector("#phoneInput").value;
//                       window.open(
//                         `https://wa.me/91XXXXXXXXXX?text=Call me back at ${phone}`,
//                       );
//                     }}
//                     className="px-6 py-4 font-semibold text-orange-500 hover:text-orange-600"
//                   >
//                     Request Call
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             {/* <div className="flex justify-center">
//               <img
//                 src={sriram}
//                 alt="Innovation"
//                 className="w-60 max-w-md object-contain"
//               />
//             </div> */}


//             <div className="flex justify-center">
//   <img
//     src={sriram}
//     alt="Innovation"
//     className=" w-full 
//       max-w-md 
//       h-auto 
//       object-cover 
//       rounded-2xl 
//       shadow-lg"
//   />
// </div>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 text-center font-serif">
//         <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif">
//           Transforming
//           <span className="text-orange-500 font-semibold">
//             {" "}
//             Businesses
//           </span>{" "}
//           Through <br />
//           Digital Innovation
//         </h4>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
//         {/* FEATURE 1 */}
//         <div className="grid md:grid-cols-2 gap-12 items-center ml-14">
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               We design and develop powerful websites that elevate your digital
//               presence.
//             </h3>

//             <p className="text-gray-600">
//               We specialize in designing and developing modern websites that
//               combine creativity, technology, and performance. Our goal is to
//               create digital experiences that not only look stunning but also
//               deliver seamless functionality and real business growth. Every
//               website we build is tailored to reflect your brand and connect
//               effectively with your audience.
//             </p>
//           </div>
//           <img
//             src={LaptopImg}
//             alt="Mobile Apps"
//             className="w-80 rounded-xl ml-10"
//           />
//         </div>

//         {/* FEATURE 2 */}
//         <div className="grid md:grid-cols-2 items-center ml-14">
//           <img src={MobileImg} alt="Web Platform" className="w-80 rounded-xl" />
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               We develop smart mobile applications that bring ideas to life.
//             </h3>

//             <p className="text-gray-600">
//               We develop innovative mobile applications that deliver seamless
//               performance and exceptional user experiences. Our apps are
//               designed with modern technology and intuitive interfaces to help
//               businesses connect with users anytime, anywhere.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="bg-gray-50 py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-serif">
//             Our Services
//           </h2>

//           <h3 className="text-3xl md:text-2xl font-sans text-center mb-10 font-normal">
//             We Deliver All-in-One Solutions for Problems related to IT Field
//           </h3>

//           <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
//             {services.map((service) => (
//               <div
//                 key={service.title}
//                 className="group p-10 border bg-white 
//           rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[60px]
//           transition-all duration-300 ease-in-out
//           hover:bg-orange-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
//               >
//                 {/* Icon */}
//                 {/* <img
//                   // src={service.icon}
//                   alt={service.title}
//                   className="h-12 mb-4 transition duration-300"
//                 /> */}

//                 {/* Title */}
//                 <h3 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-white text-orange-500">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white mt-5">
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PRODUCTS ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">
//           Products
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="grid grid-cols-2 gap-6">
//             <img src={Product1} className="rounded-xl" />
//             <img src={Product2} className="rounded-xl" />
//             <img src={Product3} className="rounded-xl" />
//             <img src={Product4} className="rounded-xl" />
//           </div>

//           <div className="ml-10">
//             <h3 className="text-md font-bold mb-4 text-orange-500">PROJECTS</h3>

//             <h3 className="text-4xl font-bold mb-4">
//               Our amazing project has <br />
//               been completed
//             </h3>

//             <p className="text-gray-600 mb-6">
//               Our completed projects reflect our passion for <br />
//               innovation and quality. Each solution is carefully <br />
//               designed to meet client goals while delivering <br />
//               exceptional user experiences. We take pride in turning <br />
//               ideas into successful digital products.
//             </p>

//             <a href="/portfolio">
//               <button className="border border-orange-500 text-orange-500 px-10 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
//                 Recent Projects
//               </button>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section className="bg-white py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">
//             Successful Clients
//           </h2>

//           <div className="grid md:grid-cols-4 gap-10">
//             {reviews.map((review, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition text-center hover:-translate-y-2 cursor-pointer duration-200 ease-in-out"
//               >
//                 {/* Quote Icon */}
//                 <div className="text-orange-500 text-5xl">❝</div>

//                 {/* Review Text */}
//                 <p className="text-black text-sm leading-relaxed mb-6">
//                   {review.desc}
//                 </p>

//                 {/* Stars */}
//                 <div className="flex justify-center gap-1 mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <span
//                       key={i}
//                       className={`text-lg ${
//                         i < review.rating ? "text-orange-400" : "text-gray-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 {/* Client Avatar */}
//                 <div className="flex justify-center mb-3">
//                   <img
//                     src={review.image}
//                     alt={review.name}
//                     className="w-32 rounded-full object-cover"
//                   />
//                 </div>

//                 {/* Client Name */}
//                 {/* <h4 className="font-semibold text-sm">{review.name}</h4> */}

//                 {/* Role */}
//                 {/* <p className="text-gray-500 text-xs">{review.role}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CLIENT LOGOS ================= */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-4xl font-bold mb-10 text-black font-serif">
//             Our Clients
//           </h3>

//           <div className="flex justify-center items-center gap-16 flex-wrap opacity-80 bg-orange-100">
//             {clients.map((client) => (
//               <img
//                 key={client.name}
//                 src={client.logo}
//                 alt={client.name}
//                 className="w-52 object-contain"
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;



import HeroImg from "../assets/images/hero.png";
import srmedia from "../assets/images/srmedia.png";
import gk from "../assets/images/gk.png";
import haraa from "../assets/images/haraa.png";
import yaritrip from "../assets/images/yaritrip-logo.png";
import "./Home.css";
import uiuxIcon from "../assets/icons/uiux.png";
import Webdev from "../assets/icons/webdev.png";
import Mobileapp from "../assets/icons/mobileapp.png";
import Custom from "../assets/icons/custom.png";
import Product from "../assets/icons/product.png";
import Support from "../assets/icons/support.png";
import Cyber from "../assets/icons/cyber.png";

import Product1 from "../assets/images/Rectangle26.png";
import Product2 from "../assets/images/Rectangle27.png";
import Product3 from "../assets/images/Rectangle28.png";
import Product4 from "../assets/images/Rectangle29.png";

import CyberImg from "../assets/images/cyber.png";
import MobileImg from "../assets/images/mobile.png";
import LaptopImg from "../assets/images/laptop.png";
import CloudImg from "../assets/images/cloud.png";
import AiImg from "../assets/images/aiml.png";
import sriram from "../assets/images/sriramnavami.png";
import srirammain from "../assets/images/RamNavami-26-03.png";
import sriramMobile from "../assets/images/RamNavami-mob-26-03.png";

import petal1 from "../assets/images/flowers/petal1.png";
import petal2 from "../assets/images/flowers/petal2.png";
import petal3 from "../assets/images/flowers/petal3.png";
import { useEffect, useState } from "react";
import FestiveBg from "../assets/images/Festivebg.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clients = [
    { name: "SR Media", logo: srmedia },
    { name: "GK", logo: gk },
    { name: "Haraa", logo: haraa },
    { name: "Yaritrip", logo: yaritrip },
  ];

  const petals = [petal1, petal2, petal3];

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { title: "UI/UX", desc: "We create intuitive, user-centered designs that enhance usability and engagement.", icon: uiuxIcon },
    { title: "Web Development", desc: "We build responsive, high-performance websites tailored to your business needs.", icon: Mobileapp, highlight: true },
    { title: "Mobile Application", desc: "We develop powerful Android and iOS applications with modern technologies.", icon: Webdev },
    { title: "Product Development", desc: "We transform ideas into market-ready digital products.", icon: Custom },
    { title: "Custom Software Development", desc: "We design and develop custom software solutions to solve unique business challenges", icon: Product },
    { title: "Support & Maintenance", desc: "We provide ongoing support to ensure smooth and uninterrupted operations.", icon: Support },
    { title: "Cyber Security", desc: "Security audits and protection strategies to safeguard digital assets.", icon: Cyber },
    { title: "AI Automation", desc: "AI-driven automation solutions for smarter and efficient workflows.", icon: AiImg },
  ];

  const reviews = [
    { desc: "Professional team with excellent delivery quality. Quality Team delivering Quality Products", image: srmedia, rating: 5 },
    { name: "Fina Doe", role: "Entrepreneur", desc: "Great experience working with them. Highly recommended. Great Team with Great Work Presence", image: gk, rating: 5 },
    { name: "Sandi Doe", role: "Marketing", desc: "Their team delivered an exceptional solution that transformed our digital presence and business operations.", image: haraa, rating: 4 },
    { name: "Sandi Doe", role: "Marketing", desc: "Professional team with excellent delivery quality. Quality Team delivering Quality Products", image: yaritrip, rating: 5 },
  ];

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        {/* 🌸 FULL PAGE PETALS */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {Array.from({ length: 35 }).map((_, i) => {
            const petal = petals[Math.floor(Math.random() * petals.length)];
            return (
              <img
                key={i}
                src={petal}
                className="petal"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${15 + Math.random() * 20}px`,
                  opacity: 0.6,
                }}
              />
            );
          })}
        </div>

        {/* ❌ Close Button */}
        <button onClick={() => setShowSplash(false)} className="absolute top-4 right-5 text-3xl text-white z-30">
          ✕
        </button>

        {/* 🖼️ FULL SCREEN IMAGE */}
        <img src={srirammain} className="hidden md:block w-full h-full object-cover" />
        <img src={sriramMobile} className="block md:hidden w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <main className="w-full bg-white text-gray-900">
      {/* ================= HERO / INTRO ================= */}
      <section className="w-full mx-auto mb-24 overflow-hidden relative" style={{ backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Overlay petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          {Array.from({ length: 30 }).map((_, i) => {
            const petal = petals[Math.floor(Math.random() * petals.length)];
            return (
              <img
                key={i}
                src={petal}
                className="petal"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${15 + Math.random() * 20}px`,
                }}
              />
            );
          })}
        </div>

        <div className="w-full h-full px-6 py-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center ml-10">
            {/* LEFT CONTENT */}
            <div className="hidden md:block">
              <h4 className="text-4xl md:text-3xl font-bold leading-tight mb-6 font-serif mt-5">
                Innovation through Products, Services, <span className="text-orange-500">AI Powered Solutions</span>
              </h4>
              <p className="text-gray-700 mb-6 max-w-lg text-xl">
                We are a <span className="font-bold">service</span> and <span className="font-bold">product</span> driven company delivering innovative digital, software, and <span className="font-bold">AI powered solutions</span> tailored for modern businesses.
              </p>

              {/* REQUEST CALL */}
              <div className="max-w-auto px-10 mr-20 mt-10">
                <div className="flex items-center bg-white rounded-full shadow-md border border-gray-200 overflow-hidden">
                  <input id="phoneInput" type="tel" placeholder="Enter your phone number" className="flex-1 px-6 py-4 outline-none text-gray-700 placeholder-gray-400" />
                  <div className="h-8 w-px bg-gray-300"></div>
                  <button
                    onClick={() => {
                      const phone = document.querySelector("#phoneInput").value;
                      window.open(`https://wa.me/91XXXXXXXXXX?text=Call me back at ${phone}`);
                    }}
                    className="px-6 py-4 font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Request Call
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={sriram}
                alt="Innovation"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* FEATURE 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center ml-14">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              We design and develop powerful websites that elevate your digital presence.
            </h3>
            <p className="text-gray-600">
              We specialize in designing and developing modern websites that combine creativity, technology, and performance...
            </p>
          </div>
          <img src={LaptopImg} alt="Mobile Apps" className="w-80 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ml-10" />
        </div>

        {/* FEATURE 2 */}
        <div className="grid md:grid-cols-2 items-center ml-14">
          <img src={MobileImg} alt="Web Platform" className="w-80 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">We develop smart mobile applications that bring ideas to life.</h3>
            <p className="text-gray-600">We develop innovative mobile applications...</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-serif">Our Services</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group p-10 border bg-white rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[60px] transition-all duration-300 ease-in-out hover:bg-orange-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <h3 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-white text-orange-500">{service.title}</h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white mt-5">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">Products</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {[Product1, Product2, Product3, Product4].map((prod, i) => (
              <img key={i} src={prod} className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
          <div className="ml-10">
            <h3 className="text-md font-bold mb-4 text-orange-500">PROJECTS</h3>
            <h3 className="text-4xl font-bold mb-4">Our amazing project has <br />been completed</h3>
            <p className="text-gray-600 mb-6">Our completed projects reflect our passion...</p>
            <a href="/portfolio">
              <button className="border border-orange-500 text-orange-500 px-10 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">Recent Projects</button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">Successful Clients</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center hover:-translate-y-2 cursor-pointer duration-200 ease-in-out">
                <div className="text-orange-500 text-5xl">❝</div>
                <p className="text-black text-sm leading-relaxed mb-6">{review.desc}</p>
                <div className="flex justify-center gap-1 mb-6">{[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < review.rating ? "text-orange-400" : "text-gray-300"}`}>★</span>
                ))}</div>
                <div className="flex justify-center mb-3">
                  <img src={review.image} alt={review.name} className="w-32 rounded-full object-cover shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-10 text-black font-serif">Our Clients</h3>
          <div className="flex justify-center items-center gap-16 flex-wrap opacity-80 bg-orange-100">
            {clients.map((client) => (
              <img key={client.name} src={client.logo} alt={client.name} className="w-52 object-contain rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
