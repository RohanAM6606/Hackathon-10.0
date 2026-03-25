import { useState } from "react";

const domains = [
  { id: 1, title: "", desc: "" },
  { id: 2, title: "", desc: "" },
  { id: 3, title: "", desc: "" },
  { id: 4, title: "", desc: "" },
  { id: 5, title: "", desc: "" },
];

const config = [
  { number: "01", accent: "#3b82f6", glow: "rgba(59,130,246,0.18)", icon: "⬡" },
  { number: "02", accent: "#60a5fa", glow: "rgba(96,165,250,0.18)", icon: "◈" },
  { number: "03", accent: "#38bdf8", glow: "rgba(56,189,248,0.18)", icon: "◎" },
  { number: "04", accent: "#0ea5e9", glow: "rgba(14,165,233,0.18)", icon: "◇" },
  { number: "05", accent: "#0284c7", glow: "rgba(2,132,199,0.18)", icon: "△" },
];

const DomainCard = ({ domain, cfg, gridArea }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridArea,
        position: "relative",
        padding: gridArea === "c5" ? "48px" : "28px",
        border: `1px solid ${hovered ? cfg.accent : "rgba(59,130,246,0.2)"}`,
        borderRadius: "16px",
        background: hovered
          ? `linear-gradient(135deg, #020617 60%, ${cfg.glow})`
          : "#020617",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 30px ${cfg.glow}` : "none",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minHeight: gridArea === "c5" ? "160px" : "auto",
      }}
    >
      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          background: cfg.glow,
          filter: "blur(45px)",
          opacity: hovered ? 1 : 0.35,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "2px",
            color: cfg.accent,
            background: "rgba(59,130,246,0.1)",
            border: `1px solid ${cfg.accent}44`,
            borderRadius: "8px",
            padding: "3px 10px",
          }}
        >
          {cfg.number}
        </span>

        <span
          style={{
            fontSize: "26px",
            color: cfg.accent,
            opacity: hovered ? 1 : 0.25,
            transition: "0.3s",
            transform: hovered ? "scale(1.2) rotate(10deg)" : "none",
          }}
        >
          {cfg.icon}
        </span>
      </div>

      {/* Content */}
      <div style={{ marginTop: gridArea === "c5" ? "0" : "20px" }}>
        <h2
          style={{
            fontSize: gridArea === "c5" ? "28px" : "18px",
            fontWeight: "600",
            color: domain.title ? "#e2e8f0" : `${cfg.accent}55`,
            marginBottom: "6px",
          }}
        >
          {domain.title || "Domain Name"}
        </h2>

        <p
          style={{
            fontSize: gridArea === "c5" ? "16px" : "13px",
            color: domain.desc ? "#94a3b8" : "rgba(59,130,246,0.3)",
            lineHeight: "1.6",
          }}
        >
          {domain.desc || "Description coming soon..."}
        </p>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: hovered ? "3px" : "2px",
          background: `linear-gradient(90deg, ${cfg.accent}, transparent)`,
          borderRadius: "0 0 16px 16px",
          transition: "height 0.3s",
        }}
      />
    </div>
  );
};

const Domain = () => {
  return (
    <>
      <style>{`
        :root {
          --bg: #020617;
          --text: #94a3b8;
          --text-h: #e2e8f0;
          --border: rgba(59,130,246,0.2);
          --accent: #3b82f6;
          --accent-bg: rgba(59,130,246,0.1);
          --accent-border: rgba(59,130,246,0.3);
        }

        body {
          background: radial-gradient(circle at top, #0f172a, #020617);
        }

        #domains-wrapper {
          padding: 64px 32px;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        #domains-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            "c1 c2"
            "c3 c4"
            "c5 c5";
          gap: 14px;
          max-width: 1062px;
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          #domains-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "c1"
              "c2"
              "c3"
              "c4"
              "c5";
          }
        }
      `}</style>

      <div id="domains-wrapper">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#3b82f6",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "999px",
              padding: "5px 16px",
              marginBottom: "20px",
              display: "inline-block",
            }}
          >
            ✦ Hackathon Tracks
          </span>

          <h1
            style={{
              fontSize: "72px",
              marginBottom: "12px",
              background: "linear-gradient(135deg, #e2e8f0, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Domains
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "18px" }}>
            Pick your domain. Build something extraordinary.
          </p>
        </div>

        {/* Cards */}
        <div id="domains-grid">
          {domains.map((d, i) => (
            <DomainCard
              key={d.id}
              domain={d}
              cfg={config[i]}
              gridArea={`c${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Domain;