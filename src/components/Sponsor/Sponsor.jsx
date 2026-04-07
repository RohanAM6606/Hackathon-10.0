export default function Sponsor() {
  const sponsors = [
    {
      tier: "Knowledge Partner",
      logo: (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-sm text-black">
          <span className="text-[#20409a] font-black text-xl tracking-tight flex items-center gap-1">
            <span className="flex text-2xl -mt-1 relative">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-400 absolute -top-1 left-1.5" />
               d<span className="text-blue-500 mr-0.5">o</span><span className="text-blue-400">o</span>
            </span>
            dleblue
          </span>
          <span className="text-[6px] tracking-[0.2em] uppercase text-gray-500 mt-1">Digital Strategy & Technology</span>
        </div>
      ),
    },
    {
      tier: "Knowledge Partner",
      description: "Product-first AI startup building real software and scalable digital platforms.",
      logo: (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-sm">
           <div className="flex flex-col items-center text-sky-500 font-bold">
             <div className="w-8 h-8 rounded-full border-2 border-sky-400 flex items-center justify-center mb-1 relative">
                <span className="absolute -top-1.5 text-orange-400 text-lg">☝</span>
             </div>
             <span className="text-xl">DoubleTap</span>
           </div>
           <span className="text-[5px] text-gray-500">Innovations & Technologies Private Limited</span>
        </div>
      ),
    },
    {
      tier: "Knowledge Partner",
      description: "Since 2011, ABE delivers AI, ML, IoT, and automation solutions across industries worldwide.",
      logo: (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-sm">
          <div className="w-8 h-8 mb-1 flex items-center justify-center">
            <div className="text-cyan-400 text-2xl">💡</div>
          </div>
          <span className="text-[#102a5c] font-bold text-[10px] uppercase text-center leading-tight">ABY SEMICONDUCTOR DESIGNS</span>
          <span className="text-[6px] text-gray-500 tracking-widest mt-0.5">INNOVATING A SMART FUTURE!</span>
        </div>
      ),
    },
    {
      tier: "Goodies Partner",
      description: "Real-time team code duels built for fun, chaos, and bragging rights.",
      logo: (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#1e2023] rounded-sm">
           <span className="text-orange-500 font-bold text-3xl mb-1">&lt;/&gt;</span>
           <span className="text-orange-500 font-bold text-lg">CodePvP</span>
        </div>
      ),
    }
  ];

  return (
    <section className="relative w-screen min-h-screen py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-[#000411]">
      <div className="relative z-10 max-w-7xl mx-auto pl-0 md:pl-8 lg:pl-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-start">
          {/* Card 1 */}
          <div className="w-full max-w-[360px] h-auto min-h-[340px] rounded-[1.25rem] border border-indigo-400/20 bg-gradient-to-b from-[#111a3b] to-[#0a1128] flex flex-col items-center px-8 py-10 shadow-[0_4px_40px_rgba(30,58,138,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-44 h-32 mb-8 bg-white overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
              {sponsors[0].logo}
            </div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-wide text-center">
              {sponsors[0].tier}
            </h3>
            <p className="text-gray-300 text-[15px] leading-relaxed text-center font-medium opacity-90 max-w-[260px]">
              AI solutions for fast-moving teams across manufacturing, logistics, retail, and more.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[360px] h-auto min-h-[340px] rounded-[1.25rem] border border-indigo-400/20 bg-gradient-to-b from-[#111a3b] to-[#0a1128] flex flex-col items-center px-8 py-10 shadow-[0_4px_40px_rgba(30,58,138,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-44 h-32 mb-8 bg-white overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
               {sponsors[1].logo}
            </div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-wide text-center">
              {sponsors[1].tier}
            </h3>
            <p className="text-gray-300 text-[15px] leading-relaxed text-center font-medium opacity-90 max-w-[260px]">
              {sponsors[1].description}
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[360px] h-auto min-h-[340px] rounded-[1.25rem] border border-indigo-400/20 bg-gradient-to-b from-[#111a3b] to-[#0a1128] flex flex-col items-center px-8 py-10 shadow-[0_4px_40px_rgba(30,58,138,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-44 h-32 mb-8 bg-white overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
               {sponsors[2].logo}
            </div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-wide text-center">
              {sponsors[2].tier}
            </h3>
            <p className="text-gray-300 text-[15px] leading-relaxed text-center font-medium opacity-90 max-w-[260px]">
              {sponsors[2].description}
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-[360px] h-auto min-h-[340px] rounded-[1.25rem] border border-indigo-400/20 bg-gradient-to-b from-[#111a3b] to-[#0a1128] flex flex-col items-center px-8 py-10 shadow-[0_4px_40px_rgba(30,58,138,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-44 h-32 mb-8 bg-[#1e2023] overflow-hidden shadow-lg flex items-center justify-center">
               {sponsors[3].logo}
            </div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-wide text-center">
              {sponsors[3].tier}
            </h3>
            <p className="text-gray-300 text-[15px] leading-relaxed text-center font-medium opacity-90 max-w-[260px]">
              {sponsors[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}