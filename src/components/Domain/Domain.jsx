import { useState } from "react";

import health from "../../assets/images/health.png";
import iot from "../../assets/images/ir.png";
import ai from "../../assets/images/ai.png";
import ir from "../../assets/images/ir.png";
import socio from "../../assets/images/socio.png";
import appai from "../../assets/images/appai.png";
import newIcon from "../../assets/images/new.png";

const domains = [
  {
    id: 1,
    title: "HealthTech",
    desc: "Build impactful healthcare solutions such as AI diagnostics, telemedicine platforms, wearable monitoring systems, and digital health assistants.",
  },
  {
    id: 2,
    title: "Scalable Systems",
    desc: "Design and build highly scalable, reliable, and distributed systems capable of handling large-scale data, traffic, and real-time processing.",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    desc: "Create intelligent applications using machine learning, deep learning, NLP, and computer vision to solve complex real-world challenges.",
  },
  {
    id: 4,
    title: "Innovation & Research",
    desc: "Explore cutting-edge technologies, prototype experimental ideas, and develop futuristic solutions driven by strong research and creativity.",
  },
  {
    id: 5,
    title: "Applied AI (LLMs)",
    desc: "Leverage large language models to build chatbots, AI copilots, automation tools, and intelligent assistants for real-world applications.",
  },
  {
    id: 6,
    title: "SocioSphere",
    desc: "Develop solutions addressing societal challenges in education, sustainability, accessibility, public health, and community development.",
  },
];

const config = [
  { accent: "#3b82f6", glow: "rgba(59,130,246,0.18)", icon: health },
  { accent: "#60a5fa", glow: "rgba(96,165,250,0.18)", icon: iot },
  { accent: "#38bdf8", glow: "rgba(56,189,248,0.18)", icon: ai },
  { accent: "#0ea5e9", glow: "rgba(14,165,233,0.18)", icon: newIcon },
  { accent: "#6366f1", glow: "rgba(99,102,241,0.18)", icon: appai },
  { accent: "#0284c7", glow: "rgba(2,132,199,0.18)", icon: socio },
];

const DomainCard = ({ domain, cfg }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "32px",
        border: `1px solid ${hovered ? cfg.accent : "rgba(59,130,246,0.2)"}`,
        borderRadius: "18px",
        background: hovered
          ? `linear-gradient(135deg, #020617 60%, ${cfg.glow})`
          : "#020617",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 15px 35px ${cfg.glow}` : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: cfg.glow,
          filter: "blur(50px)",
          opacity: hovered ? 1 : 0.3,
        }}
      />

      <img
        src={cfg.icon}
        alt="icon"
        style={{
          width: "90px",
          height: "90px",
          marginBottom: "20px",
          transform: hovered ? "scale(1.15)" : "scale(1)",
          transition: "0.3s",
          filter: hovered ? "drop-shadow(0 0 12px #3b82f6)" : "none",
        }}
      />

      <h2 style={{ color: "#e2e8f0", fontSize: "22px", marginBottom: "10px" }}>
        {domain.title}
      </h2>

      <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>
        {domain.desc}
      </p>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: hovered ? "3px" : "2px",
          background: `linear-gradient(90deg, ${cfg.accent}, transparent)`,
        }}
      />
    </div>
  );
};

const Domain = () => {
  return (
    <>
      <style>{`
        body {
          background: radial-gradient(circle at top, #0f172a, #020617);
        }

        #domains-wrapper {
          padding: 64px 32px;
          text-align: center;
        }

        #domains-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          #domains-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          #domains-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div id="domains-wrapper">
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "12px",
            background: "linear-gradient(135deg, #e2e8f0, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Domains
        </h1>

        <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
          Choose your domain. Build something impactful.
        </p>

        <div id="domains-grid">
          {domains.map((d, i) => (
            <DomainCard key={d.id} domain={d} cfg={config[i]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Domain;