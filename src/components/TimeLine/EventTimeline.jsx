import { useState, useEffect, useRef } from "react";

const events = [
  {
    date: "28th March",
    title: "Registrations Begin",
    description: "Form your duos or squads — gear up, brainstorm, and register for the challenge of innovation!",
    side: "right",
    icon: "🎯",
  },
  {
    date: "11th April",
    title: "Forms Close & WhatsApp Group Access",
    description: "Registration closes. Participants will be added to the WhatsApp group and the drive link will be shared for PPT submission.",
    side: "left",
    icon: "🔒",
  },
  {
    date: "12th April",
    title: "PPT Submission Deadline",
    description: "Submit your presentation decks showcasing your innovative solutions and project details. Deadline: 4:00 PM.",
    side: "right",
    icon: "📊",
  },
  {
    date: "13th April",
    title: "Shortlisted Teams Announced",
    description: "Top teams selected to pitch their ideas. Check if your team made it to the next round!",
    side: "left",
    icon: "🏆",
  },
  {
    date: "17th – 18th April",
    title: "Hack Day 🚀",
    description: "The grand finale! Present your ideas to judges, build your solutions, and compete for the ultimate prize.",
    side: "right",
    icon: "🚀",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function TimelineCard({ event, index }) {
  const [ref, visible] = useInView(0.15);
  const isRight = event.side === "right";

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isRight ? "flex-end" : "flex-start",
        alignItems: "center",
        position: "relative",
        marginBottom: "3rem",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : isRight
          ? "translateX(60px)"
          : "translateX(-60px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Card */}
      <div
        style={{
          width: "44%",
          background: "linear-gradient(135deg, rgba(10,20,40,0.96) 0%, rgba(8,30,60,0.92) 100%)",
          border: "1px solid rgba(0,220,255,0.18)",
          borderRadius: "12px",
          padding: "1.6rem 2rem",
          boxShadow: "0 8px 40px rgba(0,180,255,0.08), inset 0 1px 0 rgba(0,220,255,0.06)",
          backdropFilter: "blur(16px)",
          position: "relative",
          cursor: "default",
          transition: "box-shadow 0.3s, transform 0.3s, border-color 0.3s",
          overflow: "hidden",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = "0 12px 60px rgba(0,220,255,0.22), inset 0 1px 0 rgba(0,220,255,0.1)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.borderColor = "rgba(0,220,255,0.45)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,180,255,0.08), inset 0 1px 0 rgba(0,220,255,0.06)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "rgba(0,220,255,0.18)";
        }}
      >
        {/* Top shimmer line */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,220,255,0.5), rgba(100,200,255,0.5), transparent)",
        }} />

        {/* Corner accent */}
        <div style={{
          position: "absolute",
          top: 0,
          ...(isRight ? { right: 0 } : { left: 0 }),
          width: 40,
          height: 40,
          background: isRight
            ? "linear-gradient(225deg, rgba(0,220,255,0.12) 0%, transparent 70%)"
            : "linear-gradient(315deg, rgba(0,220,255,0.12) 0%, transparent 70%)",
        }} />

        {/* Date badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "linear-gradient(135deg, #00dcff, #0080ff)",
            boxShadow: "0 0 8px #00dcff",
            display: "inline-block",
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
            fontSize: "0.72rem",
            color: "#00dcff",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>{event.date}</span>
        </div>

        <h3 style={{
          fontFamily: "'Rajdhani', 'Orbitron', sans-serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#e0f4ff",
          margin: "0 0 0.6rem 0",
          lineHeight: 1.3,
          textAlign: isRight ? "right" : "left",
          letterSpacing: "0.02em",
        }}>{event.title}</h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.85rem",
          color: "rgba(160,210,240,0.7)",
          margin: 0,
          lineHeight: 1.65,
          textAlign: isRight ? "right" : "left",
        }}>{event.description}</p>
      </div>

      {/* Center dot */}
      <div style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00dcff 0%, #0060ff 100%)",
        boxShadow: visible
          ? "0 0 0 6px rgba(0,200,255,0.15), 0 0 30px rgba(0,200,255,0.55)"
          : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        transition: `box-shadow 0.6s ease ${index * 0.15 + 0.4}s`,
      }}>
        <div style={{
          width: 18, height: 18, borderRadius: "50%",
          background: "rgba(0,10,30,0.85)",
          border: "2px solid rgba(255,255,255,0.3)",
        }} />
      </div>
    </div>
  );
}

export default function App() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [scanY, setScanY] = useState(-10);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let frame;
    let y = -10;
    const animate = () => {
      y = (y + 0.15) % 110;
      setScanY(y);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #020b18 0%, #040e20 35%, #050d1e 65%, #030a16 100%)",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #020b18; }
        ::-webkit-scrollbar { width: 4px; background: #020b18; }
        ::-webkit-scrollbar-thumb { background: #00dcff; border-radius: 4px; }
      `}</style>

      {/* Animated wave SVG background (matching hackathon site) */}
      <svg
        style={{ position: "fixed", bottom: 0, left: 0, width: "100%", height: "55%", pointerEvents: "none", zIndex: 0, opacity: 0.5 }}
        viewBox="0 0 1440 400" preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,200 C360,100 720,320 1080,180 C1260,110 1380,220 1440,200 L1440,400 L0,400 Z"
          fill="none" stroke="rgba(0,180,255,0.15)" strokeWidth="1.5" />
        <path d="M0,260 C300,160 700,370 1100,240 C1280,180 1380,280 1440,260 L1440,400 L0,400 Z"
          fill="none" stroke="rgba(0,220,255,0.1)" strokeWidth="1.5" />
        <path d="M0,310 C400,220 800,400 1200,300 C1340,260 1400,330 1440,310 L1440,400 L0,400 Z"
          fill="none" stroke="rgba(0,150,255,0.08)" strokeWidth="1.5" />
      </svg>

      {/* Grid dots */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(0,180,255,0.09) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      {/* Scan line */}
      <div style={{
        position: "fixed",
        left: 0, right: 0,
        top: `${scanY}%`,
        height: 1,
        background: "linear-gradient(90deg, transparent 0%, rgba(0,220,255,0.3) 20%, rgba(0,220,255,0.6) 50%, rgba(0,220,255,0.3) 80%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* Ambient glow blobs */}
      <div style={{
        position: "fixed", top: "8%", right: "3%", width: 380, height: 380,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,150,255,0.14) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
        filter: "blur(50px)",
      }} />
      <div style={{
        position: "fixed", bottom: "15%", left: "0%", width: 300, height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,80,200,0.12) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "fixed", top: "45%", left: "50%", transform: "translateX(-50%)",
        width: 500, height: 200,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
        filter: "blur(40px)",
      }} />

      {/* Navbar-like top bar to match site */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(2,10,24,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,180,255,0.12)",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "linear-gradient(135deg, #00dcff, #0060ff)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1rem", fontWeight: 900,
            color: "#fff",
          }}>H</div>
          <span style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#e0f4ff",
            letterSpacing: "0.05em",
          }}>
            TEAM SRM <span style={{ color: "#00dcff" }}>HACKATHON</span>
          </span>
        </div>
        <nav style={{ display: "flex", gap: "0.5rem" }}>
          {["Home", "About", "Timeline", "Register"].map(item => (
            <span key={item} style={{
              padding: "0.4rem 1rem",
              borderRadius: 6,
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              color: item === "Timeline" ? "#020b18" : "rgba(160,210,240,0.7)",
              background: item === "Timeline"
                ? "linear-gradient(135deg, #00dcff, #0080ff)"
                : "transparent",
              cursor: "pointer",
              transition: "color 0.2s",
            }}>{item}</span>
          ))}
        </nav>
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", padding: "0 2rem 6rem" }}>

        {/* Header */}
        <div style={{
          textAlign: "center",
          paddingTop: "4.5rem",
          paddingBottom: "4rem",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}>
          {/* Pill badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 1.2rem",
            borderRadius: 999,
            border: "1px solid rgba(0,220,255,0.25)",
            background: "rgba(0,180,255,0.07)",
            marginBottom: "1.5rem",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#00dcff",
              boxShadow: "0 0 6px #00dcff",
              display: "inline-block",
            }} />
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.65rem",
              color: "#00dcff",
              letterSpacing: "0.12em",
              fontWeight: 600,
            }}>TEAM SRM HACKATHON PRESENTS</span>
          </div>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            fontWeight: 800,
            color: "#e0f4ff",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          }}>EVENT <span style={{
            background: "linear-gradient(90deg, #00dcff, #4da6ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>TIMELINE</span></h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(160,210,240,0.6)",
            fontSize: "1rem",
            letterSpacing: "0.02em",
          }}>Follow the journey from registration to the grand finale</p>

          {/* Decorative line */}
          <div style={{
            margin: "1.5rem auto 0",
            width: 80,
            height: 1,
            background: "linear-gradient(90deg, transparent, #00dcff, #4da6ff, transparent)",
          }} />
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical spine */}
          <div style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, transparent 0%, #00dcff 8%, #0080ff 92%, transparent 100%)",
            opacity: 0.35,
            zIndex: 1,
          }} />

          {events.map((event, i) => (
            <TimelineCard key={i} event={event} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button style={{
            padding: "0.85rem 2.5rem",
            borderRadius: 999,
            background: "linear-gradient(135deg, #00dcff, #0060ff)",
            border: "none",
            color: "#020b18",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.08em",
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(0,200,255,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(0,200,255,0.55)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0,200,255,0.35)";
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
