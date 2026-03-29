export default function Sponsor() {
  return (
    <section className="relative w-screen min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-black">
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-16 max-w-7xl mx-auto">
        
        {/* HEADING AND SUBHEADING */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              SPONSORS
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We have partnered with some incredible sponsors to elevate your hackathon experience
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full place-items-center">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-full max-w-sm h-72 md:h-80 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Placeholder for Sponsor Logo */}
              <div className="text-gray-500 font-medium tracking-widest text-sm uppercase">
                Sponsor tier
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}