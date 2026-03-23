
import { useEffect, useState } from "react";
import GridBackground from "../ui/LightWavesBackground.jsx";

export default function HeroSection() {
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

      <div className="absolute inset-0">
        <GridBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[calc(100vh-96px)] space-y-12">

        <div className="flex flex-col items-center space-y-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-100 text-xs md:text-sm font-bold tracking-widest uppercase">
              TEAM SRM HACKATHON PRESENTS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              HACKATHON 10.0
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-blue-200 font-medium max-w-2xl mt-4">
            48 hours of pure innovation. Build, compete, and forge the future.
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
              bg-[#00081a]/40 border border-white/10 backdrop-blur-xl 
              flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-blue-300 mt-2 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {isOpen ? (
          <button className="mt-10 px-10 py-4 rounded-full bg-blue-500 text-white font-semibold text-lg">
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

