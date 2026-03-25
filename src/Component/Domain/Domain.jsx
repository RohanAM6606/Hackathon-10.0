import { useState } from "react";

const domains = [
  { id: 1, title: "", desc: "" },
  { id: 2, title: "", desc: "" },
  { id: 3, title: "", desc: "" },
  { id: 4, title: "", desc: "" },
  { id: 5, title: "", desc: "" },
];

const config = [
  { number: "01", accent: "#aa3bff", glow: "rgba(170,59,255,0.18)", icon: "⬡" },
  { number: "02", accent: "#3b82f6", glow: "rgba(59,130,246,0.18)", icon: "◈" },
  { number: "03", accent: "#10b981", glow: "rgba(16,185,129,0.18)", icon: "◎" },
  { number: "04", accent: "#f59e0b", glow: "rgba(245,158,11,0.18)", icon: "◇" },
  { number: "05", accent: "#ef4444", glow: "rgba(239,68,68,0.18)", icon: "△" },
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
        border: `1px solid ${hovered ? cfg.accent : "var(--border)"}`,
        borderRadius: "16px",
        background: hovered
          ? `linear-gradient(135deg, var(--bg) 50%, ${cfg.glow})`
          : "var(--bg)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 40px ${cfg.glow}` : "none",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minHeight: gridArea === "c5" ? "160px" : "auto",
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "130px", height: "130px", borderRadius: "50%",
        background: cfg.glow, filter: "blur(45px)",
        opacity: hovered ? 1 : 0.35, transition: "opacity 0.3s",
        pointerEvents: "none",
      }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{
          fontSize: "11px", fontWeight: "700", letterSpacing: "2px",
          color: cfg.accent, background: cfg.glow,
          border: `1px solid ${cfg.accent}44`, borderRadius: "8px", padding: "3px 10px",
        }}>
          {cfg.number}
        </span>
        <span style={{
          fontSize: "26px", color: cfg.accent,
          opacity: hovered ? 1 : 0.25,
          transition: "opacity 0.3s, transform 0.3s",
          transform: hovered ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
        }}>
          {cfg.icon}
        </span>
      </div>

      {/* Content */}
      <div style={{ marginTop: gridArea === "c5" ? "0" : "20px" }}>
        <h2 style={{
          fontSize: gridArea === "c5" ? "28px" : "18px",
          fontWeight: "600",
          color: domain.title ? "var(--text-h)" : `${cfg.accent}55`,
          marginBottom: "6px", letterSpacing: "-0.3px",
        }}>
          {domain.title || "Domain Name"}
        </h2>
        <p style={{
          fontSize: gridArea === "c5" ? "16px" : "13px",
          color: domain.desc ? "var(--text)" : "var(--border)",
          lineHeight: "1.6",
        }}>
          {domain.desc || "Description coming soon..."}
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: hovered ? "3px" : "2px",
        background: `linear-gradient(90deg, ${cfg.accent}, transparent)`,
        borderRadius: "0 0 16px 16px", transition: "height 0.3s",
      }} />
    </div>
  );
};

const Domain = () => {
  return (
    <>
      <style>{`
        #domains-wrapper {
          padding: 64px 32px;
          border-top: 1px solid var(--border);
          text-align: center;
          box-sizing: border-box;
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

        @media (max-width: 900px) {
          #domains-wrapper {
            padding: 48px 24px;
          }
          #domains-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "c1 c2"
              "c3 c4"
              "c5 c5";
          }
        }

        @media (max-width: 480px) {
          #domains-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "c1" "c2" "c3" "c4" "c5";
          }
        }
      `}</style>

      <div id="domains-wrapper">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            fontSize: "11px", fontWeight: "700", letterSpacing: "2.5px",
            textTransform: "uppercase", color: "var(--accent)",
            background: "var(--accent-bg)", border: "1px solid var(--accent-border)",
            borderRadius: "999px", padding: "5px 16px", marginBottom: "20px",
          }}>
            ✦ Hackathon Tracks
          </span>

          <h1 style={{
            margin: "0 0 12px", fontSize: "72px", letterSpacing: "-2.5px",
            lineHeight: "1.1", paddingBottom: "4px",
            background: "linear-gradient(135deg, var(--text-h) 40%, var(--accent))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", color: "transparent",
          }}>
            Domains
          </h1>

          <p style={{ color: "var(--text)", fontSize: "18px", lineHeight: "1.6", margin: 0 }}>
            Pick your domain. Build something extraordinary.
          </p>

          <div style={{ display: "flex", gap: "8px", marginTop: "16px", justifyContent: "center" }}>
            {config.map((c) => (
              <div key={c.number} style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: c.accent, opacity: 0.7,
              }} />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div id="domains-grid">
          {domains.map((d, i) => (
            <DomainCard key={d.id} domain={d} cfg={config[i]} gridArea={`c${i + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Domain;
