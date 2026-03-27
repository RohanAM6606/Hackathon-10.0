import React from "react";

const EventDetails = () => {
  return (
    <div className="min-h-screen w-screen bg-[#020617] flex flex-col items-center justify-center px-6 py-16">

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Event Details
      </h1>

      {/* Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-10 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

          <h2 className="text-4xl font-bold text-center text-white">
            HACKATHON 10.0
          </h2>

          <p className="text-blue-300 text-center mt-2">
            From concept to creation in 36 hours
          </p>

          <p className="text-gray-300 mt-6 text-center leading-relaxed">
            The battlefield of code is ready. Step in, come together, and turn
            bold ideas into real-world solutions. In just 36 hours, brainstorm,
            build, and bring concepts to life, driven by creativity,
            collaboration, and the thrill of rapid innovation.
          </p>

          {/* Divider */}
          <div className="border-t border-blue-500/20 my-8"></div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 text-center">

            <div>
              <p className="text-3xl font-bold text-blue-400">1L+</p>
              <p className="text-gray-400 text-sm mt-1">Prize Pool</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-400">36 hrs</p>
              <p className="text-gray-400 text-sm mt-1">Duration</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-400">2-4</p>
              <p className="text-gray-400 text-sm mt-1">Team Size</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Guidelines */}
          <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)]">

            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              ⚡ Event Guidelines
            </h3>

            <ul className="text-gray-300 space-y-2">
              <li>• Open to all students</li>
              <li>• Original ideas only</li>
              <li>• Prototype Optional</li>
              <li>• Final pitch to judges</li>
            </ul>
          </div>

          {/* Snapshot */}
          <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)]">

            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              🏆 Event Snapshot
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#020617] p-4 rounded-xl border border-blue-500/10 text-center">
                <p className="text-blue-400 text-sm">Venue</p>
                <p className="text-white font-semibold">
                  Mini Hall 2, SRMIST
                </p>
              </div>

              <div className="bg-[#020617] p-4 rounded-xl border border-blue-500/10 text-center">
                <p className="text-blue-400 text-sm">Date</p>
                <p className="text-white font-semibold">
                  April 17 - 18, 2026
                </p>
              </div>

              <div className="bg-[#020617] p-4 rounded-xl border border-blue-500/10 text-center">
                <p className="text-blue-400 text-sm">Time</p>
                <p className="text-white font-semibold">
                  9 AM Onwards
                </p>
              </div>

              <div className="bg-[#020617] p-4 rounded-xl border border-blue-500/10 text-center">
                <p className="text-blue-400 text-sm">Registration</p>
                <p className="text-white font-semibold">
                  ₹249 Per Team
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;
