
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

      {/* Background Waves */}
      <div className="absolute inset-0">
        <GridBackground />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
            }}
          ></div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[calc(100vh-96px)] space-y-12">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-cyan-200 to-cyan-800">
          HACKATHON{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            10.0
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl text-gray-400 max-w-xl">
          48 hours of innovation. Build, compete, and create solutions that matter.
        </p>

        {/* COUNTDOWN (clean cards) */}
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group w-24 h-28 md:w-32 md:h-36 rounded-2xl 
              bg-[#00081a]/40 border border-t-white/20 border-x-white/5 border-b-transparent 
              backdrop-blur-xl 
              flex flex-col items-center justify-center 
              hover:-translate-y-2 hover:border-t-blue-400/50 hover:bg-[#00081a]/60
              transition-all duration-500 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-300 z-10">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-blue-300/60 mt-2 font-semibold uppercase tracking-[0.2em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {isOpen ? (
          <button className="relative group mt-10 px-10 py-4 md:px-14 md:py-5 rounded-full 
          bg-blue-400 text-white font-semibold text-lg md:text-xl 
          hover:scale-105 transition-all duration-500 
          shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            Register Now
          </button>
        ) : (
          <div className="mt-10 px-10 py-4 rounded-full bg-white/5 border border-white/10 text-gray-500 font-semibold text-lg">
            Registration Closed
          </div>
        )}

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
