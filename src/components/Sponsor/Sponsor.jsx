export default function Sponsor() {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      subtitle: "Primary partner powering the event",
      accent: "from-cyan-300 to-sky-400",
    },
    {
      tier: "Education Sponsor",
      subtitle: "Supporting innovation and outreach",
      accent: "from-sky-300 to-blue-400",
    },
    {
      tier: "Food Sponsor",
      subtitle: "Backing builders and student talent",
      accent: "from-indigo-300 to-cyan-300",
    },
  ];

  return (
    <section className="relative w-screen min-h-screen py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-linear-to-b from-[#020617] via-[#020617] to-black">
      <div className="pointer-events-none absolute -top-28 -left-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-10 sm:space-y-16 max-w-7xl mx-auto">
        
        {/* HEADING AND SUBHEADING */}
        <div className="space-y-4 max-w-3xl">
          <p className="inline-flex px-4 py-1.5 rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-100 text-[11px] sm:text-xs tracking-[0.24em] uppercase">
            Partnerships
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-linear-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              SPONSORS
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
            We have partnered with some incredible sponsors to elevate your hackathon experience
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 w-full place-items-center">
          {sponsorTiers.map((item) => (
            <div
              key={item.tier}
              className="group relative w-full max-w-sm h-72 md:h-80 rounded-2xl border border-cyan-300/25 bg-linear-to-br from-slate-900/80 via-blue-950/65 to-slate-900/75 backdrop-blur-xl flex flex-col items-center justify-center px-6 overflow-hidden hover:-translate-y-2 hover:border-cyan-200/40 hover:shadow-[0_18px_50px_rgba(6,20,38,0.55)] transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_0%,rgba(103,232,249,0.16),transparent_36%),radial-gradient(circle_at_90%_100%,rgba(99,102,241,0.16),transparent_42%)]" />

              <div className="relative z-10 w-full flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl border border-cyan-200/30 bg-slate-950/55 grid place-items-center mb-5 shadow-[inset_0_1px_0_rgba(186,230,253,0.2)]">
                  <div className={`text-transparent bg-clip-text bg-linear-to-r ${item.accent} text-xs uppercase tracking-[0.18em] font-bold`}>
                    Logo
                  </div>
                </div>

                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                  {item.tier}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed max-w-60">
                  {item.subtitle}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cyan-200/90 border border-cyan-300/25 bg-cyan-400/10 rounded-full px-3 py-1">
                  Coming Soon
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}