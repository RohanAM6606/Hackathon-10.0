
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

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-screen space-y-10">

        <div className="flex flex-col items-center space-y-4">

          <span className="text-blue-300 text-sm uppercase tracking-widest">
            TEAM SRM HACKATHON PRESENTS
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            HACKATHON <span className="text-blue-400">10.0</span>
          </h1>

          <p className="text-blue-200 max-w-xl">
            48 hours of innovation. Build, compete, and create the future.
          </p>

        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="w-20 h-24 bg-blue-900/40 rounded-lg flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-white">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-blue-300 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {isOpen ? (
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Register Now
          </button>
        ) : (
          <div className="mt-6 text-gray-400">
            Registration Closed
          </div>
        )}

      </div>
    </section>
  );
}

