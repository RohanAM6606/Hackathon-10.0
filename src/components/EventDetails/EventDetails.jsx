const EventDetails = () => {
  return (
   
 <section className="relative w-screen min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-black">
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-16 max-w-7xl mx-auto">
        
        {/* HEADING AND SUBHEADING */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Event Details
            </span>
          </h2>
              <div className="min-h-screen bg-gradient-to-br from-[#1a012b] via-[#22023a] to-[#0b0014] text-white p-6 flex items-center justify-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        
        {/* LEFT CARD */}
        <div className="bg-[#12001f]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between">
          
          <div>
            <h1 className="text-4xl font-bold tracking-wide">HACKATHON 10.0</h1>
            <p className="text-blue-400 mt-2 font-medium">
              From concept to creation in 36 hours
            </p>

            <p className="text-gray-300 mt-8 leading-relaxed">
             The battlefield of code is ready. Step in, come together, and turn bold ideas into real-world solutions. In just 36 hours, brainstorm, build, and bring concepts to life, driven by creativity, collaboration, and the thrill of rapid innovation.
            </p>
          </div>

          {/* Bottom Stats */}
          <div className="flex justify-between mt-10 border-t border-white/10 pt-6">
            <div>
              <h2 className="text-3xl font-bold text-blue-400">1L+</h2>
              <p className="text-gray-400 text-sm">Prize Pool</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">36 hrs</h2>
              <p className="text-gray-400 text-sm">Duration</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">2-4</h2>
              <p className="text-gray-400 text-sm">Team Size</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* Guidelines */}
          <div className="bg-[#12001f]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">⚡ Event Guidelines</h2>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
               Open to all students 
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
              Original ideas only 
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
             Prototype Optional 
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
            Final pitch to juges
              </li>
            </ul>
          </div>

          {/* Snapshot */}
          <div className="bg-[#12001f]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-xl font-semibold mb-6">🏆 Event Snapshot</h2>

            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Venue</p>
                <p className="mt-1 font-semibold">Mini Hall 2, SRMIST</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Date</p>
                <p className="mt-1 font-semibold">April 17 - 18, 2026</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Time</p>
                <p className="mt-1 font-semibold">9 AM Onwards</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Registration</p>
                <p className="mt-1 font-semibold">₹249 + Taxes</p>
              </div>

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