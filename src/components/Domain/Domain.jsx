import { useState } from "react";
import { Globe, Lightbulb, Box, Computer, Layout, Settings, Database, Brain, Cpu, ServerCog, MonitorSmartphone, Monitor, CpuIcon, Layers, Server } from "lucide-react";

const domains = [
  {
    id: 1,
    title: "Geospatial Intelligence",
    desc: "Analyze maps, satellite imagery, and geographic patterns to generate insights for real-world decisions.",
    icon: Globe,
  },
  {
    id: 2,
    title: "AI / ML",
    desc: "Build intelligent systems that learn from data, make predictions, automate processes, and solve complex problems.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "IoT (Internet of Things)",
    desc: "Connect devices and sensors to collect, exchange, and act on real-time data for smarter automation.",
    icon: ServerCog,
  },
  {
    id: 4,
    title: "Full Stack Development",
    desc: "Develop complete web apps with frontend interfaces and backend systems, including databases and APIs.",
    icon: Layers,
  }
];

const DomainCard = ({ domain, onClick, isSelected }) => {
  const [hovered, setHovered] = useState(false);
  const active = hovered || isSelected;

  const Icon = domain.icon;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 w-full max-w-[360px] h-auto min-h-[280px] bg-gradient-to-b from-[#111a3b] to-[#0a1128] overflow-hidden ${
        active 
          ? "border border-cyan-400 shadow-[0_4px_40px_rgba(34,211,238,0.15)] -translate-y-1" 
          : "border border-indigo-400/20"
      }`}
    >
      {/* Bottom glowing accent line */}
      <div className={`absolute bottom-0 left-0 h-1 bg-cyan-400 transition-all duration-300 ${active ? "w-full" : "w-1/3"}`} />

      {/* Glow behind icon */}
      <div
        className={`absolute top-4 w-32 h-32 rounded-full bg-cyan-400/20 blur-[40px] transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mb-6 relative z-10 text-white">
        <Icon size={64} strokeWidth={1.5} className={active ? "text-cyan-400" : "text-white"} />
      </div>

      <h2 className="text-[22px] mb-4 text-[#e2e8f0] font-semibold tracking-wide relative z-10">
        {domain.title}
      </h2>

      <p className="text-[#94a3b8] text-[15px] leading-relaxed relative z-10">
        {domain.desc}
      </p>
    </div>
  );
};

const Domain = () => {
  const [selected, setSelected] = useState(1); // Set second as selected defaults to show the blue outline seen in image

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        #domains-wrapper {
          padding: 80px 32px;
          text-align: left;
          background-color: #000411;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
        }

        .domain-subtitle {
          color: #94a3b8;
          margin-bottom: 50px;
          font-size: 1.1rem;
        }

        #domains-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1280px;
        }

        @media (max-width: 1024px) {
          #domains-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          #domains-grid {
            grid-template-columns: 1fr;
            place-items: center;
          }
        }
      `}</style>

      <div id="domains-wrapper">
        <div className="max-w-7xl mx-auto pl-0 md:pl-8 lg:pl-12">
          {/* Header section explicitly centered */}
          <div className="text-center w-full mb-12 flex flex-col items-center">
            <h1
              className="text-[#9bbcff] text-6xl md:text-[72px] tracking-wide mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                letterSpacing: "0.01em"
              }}
            >
              Domains
            </h1>
            <p className="domain-subtitle text-center">
              Choose your domain. Build something impactful.
            </p>
          </div>

          <div id="domains-grid">
            {domains.map((d, i) => (
              <DomainCard
                key={d.id}
                domain={d}
                onClick={() => setSelected(i)}
                isSelected={selected === i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;