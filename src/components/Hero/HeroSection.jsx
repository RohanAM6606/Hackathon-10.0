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
    <section className="relative w-screen min-h-screen pt-24 overflow-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-black">

      <div className="absolute inset-0">
        <GridBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-96px)] space-y-10">

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
            { label: "Min", value: timeLeft.minutes },
            { label: "Sec", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center hover:bg-white/10 transition"
            >
              <div className="text-3xl font-semibold text-white">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {isOpen ? (
          <button className="mt-6 px-10 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-105 transition shadow-xl">
            Register Now
          </button>
        ) : (
          <div className="mt-6 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400">
            Registration Closed
          </div>
        )}

      </div>
    </section>
  );
}
