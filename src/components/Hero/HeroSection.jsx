import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GridBackground from "../ui/LightWavesBackground.jsx";

export default function HeroSection() {
  const navigate = useNavigate();
  const rotatingBadges = [
    "TEAM SRM HACKATHON PRESENTS",
    "HACK • BUILD • PITCH",
    "36 HOURS SPRINT",
    "TEAM SIZE 2 - 4",
  ];

  const targetDate = new Date("2026-04-17T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTime());
  const [badgeIndex, setBadgeIndex] = useState(0);

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

  useEffect(() => {
    const badgeTimer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % rotatingBadges.length);
    }, 5000);

    return () => clearInterval(badgeTimer);
  }, [rotatingBadges.length]);

  const isOpen = false; // Registration closed
  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-screen min-h-screen pt-16 sm:pt-24 overflow-hidden bg-[#000511] hero-shell">
      {/* Background */}
      <div className="absolute inset-0">
        <GridBackground />
      </div>

      <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-72 w-72 md:h-104 md:w-104 rounded-full bg-cyan-400/25 blur-[120px]" />
      <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
      <div className="absolute bottom-10 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-slate-950/40 to-black/75"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-96px)] py-3 sm:py-14 space-y-7 sm:space-y-10 md:space-y-12">

        {/* Header */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 hero-fade-up">
          <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full 
          bg-slate-900/55 backdrop-blur-xl border border-cyan-200/30 shadow-[0_8px_35px_rgba(2,6,23,0.45)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span
              key={badgeIndex}
              className="hero-badge-text text-cyan-100 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase"
            >
              {rotatingBadges[badgeIndex]}
            </span>
          </div>

          <h1 className="text-[2.05rem] xs:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] px-2">
            <span className="hero-title-text inline-block whitespace-nowrap bg-linear-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              HACKATHON 10.0
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-slate-200/95 font-medium max-w-2xl mt-1 sm:mt-2 px-2">
            36 hours of pure innovation. Build, compete, and forge the future.
          </p>

        </div>

        {/* Countdown */}
        <div className="w-full max-w-5xl hero-fade-up-delay -mt-2 sm:-mt-3 md:-mt-4">
          <div className="hero-countdown-wrap">
          {countdownItems.map((item, i) => (
            <div
              key={i}
              className="hero-time-card"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-200/10 to-transparent opacity-60"></div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10 tracking-tight">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[11px] sm:text-xs text-cyan-200 mt-1.5 sm:mt-2 uppercase tracking-[0.2em] z-10">
                {item.label}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* CTA */}
        {isOpen ? (
          <button
            onClick={() => navigate("/register")}
            className="hero-cta group -mt-2 sm:mt-1"
          >
            <span className="hero-cta-shine" />
            <span className="relative z-10">Register Now</span>
          </button>
        ) : (
          <button
            className="hero-cta group -mt-2 sm:mt-1 cursor-not-allowed opacity-90"
          >
            <span className="relative z-10">Registration closed</span>
          </button>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800&display=swap');

        .hero-shell::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(125, 211, 252, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125, 211, 252, 0.06) 1px, transparent 1px);
          background-size: 52px 52px;
          opacity: 0.35;
        }

        .hero-title-text {
          font-family: 'Orbitron', 'Inter', sans-serif;
          letter-spacing: 0.015em;
        }

        .hero-countdown-wrap {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
          max-width: 48rem;
          margin: 0 auto;
          padding: 0.7rem;
          border-radius: 1.2rem;
          background: linear-gradient(145deg, rgba(8, 20, 42, 0.45), rgba(9, 30, 55, 0.3));
          border: 1px solid rgba(125, 211, 252, 0.14);
          backdrop-filter: blur(10px);
        }

        .hero-time-card {
          position: relative;
          overflow: hidden;
          min-height: 7.6rem;
          border-radius: 1rem;
          border: 1px solid rgba(186, 230, 253, 0.34);
          background: linear-gradient(145deg, rgba(12, 30, 56, 0.6), rgba(22, 46, 78, 0.38));
          backdrop-filter: blur(16px);
          box-shadow:
            0 14px 34px rgba(2, 8, 23, 0.48),
            inset 0 1px 0 rgba(255, 255, 255, 0.28),
            inset 0 -1px 0 rgba(14, 165, 233, 0.24),
            0 0 0 1px rgba(56, 189, 248, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-time-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), transparent 42%);
          opacity: 0.45;
        }

        .hero-mini-pill {
          padding: 0.38rem 0.72rem;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.58);
          border: 1px solid rgba(125, 211, 252, 0.28);
          backdrop-filter: blur(10px);
        }

        .hero-badge-text {
          animation: heroBadgeFade 0.35s ease;
          display: inline-block;
          min-width: 23ch;
          text-align: left;
        }

        .hero-cta {
          position: relative;
          overflow: hidden;
          border-radius: 999px;
          padding: 0.9rem 2.1rem;
          font-size: 1.02rem;
          font-weight: 700;
          color: white;
          border: 1px solid rgba(186, 230, 253, 0.35);
          background: linear-gradient(90deg, rgba(14, 116, 144, 0.92), rgba(2, 132, 199, 0.95), rgba(67, 56, 202, 0.9));
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.45), 0 14px 34px rgba(2, 6, 23, 0.52);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 32px rgba(56, 189, 248, 0.62), 0 16px 38px rgba(2, 6, 23, 0.55);
        }

        .hero-cta-shine {
          position: absolute;
          inset: 0;
          transform: translateX(-120%);
          background: linear-gradient(100deg, transparent 20%, rgba(255, 255, 255, 0.3) 50%, transparent 80%);
          transition: transform 0.9s ease;
        }

        .hero-cta:hover .hero-cta-shine {
          transform: translateX(120%);
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroBadgeFade {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-fade-up {
          animation: heroFadeUp 0.65s ease both;
        }

        .hero-fade-up-delay {
          animation: heroFadeUp 0.82s ease both;
        }

        @media (max-width: 900px) {
          .hero-countdown-wrap {
            max-width: 36rem;
            gap: 0.7rem;
            padding: 0.55rem;
          }

          .hero-time-card {
            min-height: 6.8rem;
          }
        }

        @media (max-width: 640px) {
          .hero-badge-text {
            min-width: 20ch;
          }

          .hero-countdown-wrap {
            grid-template-columns: repeat(4, minmax(68px, 1fr));
            max-width: 100%;
            gap: 0.45rem;
            padding: 0.45rem;
            border-radius: 1rem;
          }

          .hero-time-card {
            min-height: 5.4rem;
            min-width: 0;
            border-radius: 0.9rem;
            box-shadow: 0 10px 24px rgba(2, 8, 23, 0.5), inset 0 1px 0 rgba(186, 230, 253, 0.16);
          }

          .hero-time-card > div:first-child {
            font-size: 1.55rem;
          }

          .hero-time-card > div:last-child {
            font-size: 0.6rem;
            margin-top: 0.2rem;
            letter-spacing: 0.14em;
          }

          .hero-cta {
            width: min(92vw, 22rem);
            padding: 0.85rem 1.25rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}