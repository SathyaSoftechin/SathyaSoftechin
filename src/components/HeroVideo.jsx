import HeroVideo from "../assets/videos/herovideo.mp4";
import MobileVideo from "../assets/videos/mobilevideo.mp4";

const HeroVideo = () => {
  return (
    <div className="relative w-full overflow-hidden mb-4">
      {/* ================= DESKTOP VIDEO ================= */}
      <video
        className="hidden md:block w-full h-[85vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={DesktopVideo} type="video/mp4" />
      </video>

      {/* ================= MOBILE VIDEO ================= */}
      <video
        className="block md:hidden w-full h-[65vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={MobileVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
