import React from "react";

const EventDetails = () => {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-[#020617] px-4 sm:px-6 py-16 sm:py-20">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-300/35 bg-cyan-400/10 text-cyan-100 text-[11px] sm:text-xs tracking-[0.24em] uppercase mb-4">
          Competition Overview
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 bg-linear-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
          Event Details
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need before stepping into HACKATHON 10.0.
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

        {/* LEFT CARD */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-linear-to-br from-slate-900/85 via-blue-950/65 to-slate-900/80 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_22px_55px_rgba(2,8,23,0.55)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_100%_80%,rgba(99,102,241,0.16),transparent_45%)]" />
          <div className="relative z-10">

          <h2 className="text-3xl sm:text-4xl font-black text-center text-white tracking-tight">
            HACKATHON 10.0
          </h2>

          <p className="text-cyan-200 text-center mt-2 text-sm sm:text-base">
            From concept to creation in 36 hours
          </p>

          <p className="text-slate-300 mt-6 text-center leading-relaxed text-sm sm:text-base">
            The battlefield of code is ready. Step in, come together, and turn
            bold ideas into real-world solutions. In just 36 hours, brainstorm,
            build, and bring concepts to life, driven by creativity,
            collaboration, and the thrill of rapid innovation.
          </p>

          {/* Divider */}
          <div className="border-t border-cyan-300/20 my-7 sm:my-8"></div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">

            <div className="rounded-xl border border-cyan-300/20 bg-slate-950/35 py-3 sm:py-4">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-300">1L+</p>
              <p className="text-slate-400 text-[11px] sm:text-sm mt-1">Prize Pool</p>
            </div>

            <div className="rounded-xl border border-cyan-300/20 bg-slate-950/35 py-3 sm:py-4">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-300">36 hrs</p>
              <p className="text-slate-400 text-[11px] sm:text-sm mt-1">Duration</p>
            </div>

            <div className="rounded-xl border border-cyan-300/20 bg-slate-950/35 py-3 sm:py-4">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-300">2-4</p>
              <p className="text-slate-400 text-[11px] sm:text-sm mt-1">Team Size</p>
            </div>

          </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Guidelines */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-linear-to-br from-slate-900/80 via-blue-950/55 to-slate-900/75 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_16px_40px_rgba(2,8,23,0.52)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.14),transparent_38%)]" />
            <div className="relative z-10">

            <h3 className="text-xl font-semibold text-cyan-200 mb-4 tracking-wide">
              ⚡ Event Guidelines
            </h3>

            <ul className="text-slate-300 space-y-2.5 text-sm sm:text-base">
              <li className="flex items-start gap-2"><span className="text-cyan-300">•</span><span>Open to all students</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-300">•</span><span>Original ideas only</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-300">•</span><span>Prototype Optional</span></li>
              <li className="flex items-start gap-2"><span className="text-cyan-300">•</span><span>Final pitch to judges</span></li>
            </ul>
            </div>
          </div>

          {/* Snapshot */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-linear-to-br from-slate-900/80 via-blue-950/55 to-slate-900/75 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_16px_40px_rgba(2,8,23,0.52)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(99,102,241,0.14),transparent_42%)]" />
            <div className="relative z-10">

            <h3 className="text-xl font-semibold text-cyan-200 mb-4 tracking-wide">
              🏆 Event Snapshot
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              <div className="bg-slate-950/55 p-4 rounded-xl border border-cyan-300/15 text-center">
                <p className="text-cyan-300 text-xs sm:text-sm uppercase tracking-[0.18em]">Venue</p>
                <p className="text-white font-semibold mt-1">
                  Mini Hall 2, SRMIST
                </p>
              </div>

              <div className="bg-slate-950/55 p-4 rounded-xl border border-cyan-300/15 text-center">
                <p className="text-cyan-300 text-xs sm:text-sm uppercase tracking-[0.18em]">Date</p>
                <p className="text-white font-semibold mt-1">
                  April 17 - 18, 2026
                </p>
              </div>

              <div className="bg-slate-950/55 p-4 rounded-xl border border-cyan-300/15 text-center">
                <p className="text-cyan-300 text-xs sm:text-sm uppercase tracking-[0.18em]">Time</p>
                <p className="text-white font-semibold mt-1">
                  9 AM Onwards
                </p>
              </div>

              <div className="bg-slate-950/55 p-4 rounded-xl border border-cyan-300/15 text-center">
                <p className="text-cyan-300 text-xs sm:text-sm uppercase tracking-[0.18em]">Registration</p>
                <p className="text-white font-semibold mt-1">
                  ₹250 Per Team
                </p>
              </div>

            </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default EventDetails;
