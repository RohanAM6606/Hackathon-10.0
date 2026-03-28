import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GridBackground from "../ui/LightWavesBackground.jsx";

export default function HeroSection() {
  const navigate = useNavigate();

  const targetDate = new Date("2026-04-17T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    return {
      diff,
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isOpen = timeLeft.diff > 0;

  return (
    <section className="relative w-screen min-h-screen pt-24 overflow-hidden bg-[#000511]">
      {/* Background */}
      <div className="absolute inset-0">
        <GridBackground />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[calc(100vh-96px)] space-y-12">

        {/* Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-100 text-xs md:text-sm font-bold tracking-widest uppercase">
              TEAM SRM HACKATHON PRESENTS
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              HACKATHON 10.0
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200 font-medium max-w-2xl mt-4">
            36 hours of pure innovation. Build, compete, and forge the future.
          </p>
        </div>

        {/* Countdown */}
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center mt-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="w-24 h-28 md:w-32 md:h-36 rounded-2xl 
              bg-white/5 backdrop-blur-2xl border border-white/20 
              shadow-[0_8px_32px_rgba(0,0,0,0.6)] 
              flex flex-col items-center justify-center
              relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30"></div>

              <div className="text-4xl md:text-5xl font-bold text-white z-10">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-blue-300 mt-2 uppercase tracking-wide z-10">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {isOpen ? (
          <button
            onClick={() => navigate("/register")}
            className="mt-10 px-10 py-4 rounded-full 
            bg-white/10 backdrop-blur-xl border border-white/20
            text-white font-semibold text-lg
            shadow-[0_0_20px_rgba(56,189,248,0.6)]
            hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            Register Now
          </button>
        ) : (
          <div className="mt-10 text-gray-400 font-semibold">
            Registration Closed
          </div>
        )}
      </div>
    </section>
  );
}