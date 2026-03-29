import { useState, useEffect, useRef } from "react";

const events = [
  {
    date: "28th March",
    title: "Registrations Begin",
    description:
      "Form your duos or squads — gear up, brainstorm, and register for the challenge of innovation!",
    side: "right",
  },
  {
    date: "11th April",
    title: "Forms Close & WhatsApp Group Access",
    description:
      "Registration closes. Participants will be added to the WhatsApp group and drive link shared.",
    side: "left",
  },
  {
    date: "12th April",
    title: "PPT Submission Deadline",
    description: "Submit your presentation decks. Deadline: 4:00 PM.",
    side: "right",
  },
  {
    date: "13th April",
    title: "Shortlisted Teams Announced",
    description: "Top teams selected to pitch their ideas.",
    side: "left",
  },
  {
    date: "17th – 18th April",
    title: "Hack Day 🚀",
    description: "Final showdown. Build, present, win.",
    side: "right",
  },
];

// 👀 Scroll Animation Hook
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

// 📱 Responsive Hook
function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

// 🎯 Timeline Card
function TimelineCard({ event, index, isMobile }) {
  const [ref, visible] = useInView(0.15);
  const isRight = event.side === "right";

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isMobile
          ? "flex-start"
          : isRight
          ? "flex-end"
          : "flex-start",
        marginBottom: isMobile ? "1.5rem" : "2.2rem",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : isMobile
          ? "translateY(26px)"
          : isRight
          ? "translateX(60px)"
          : "translateX(-60px)",
        transition: `all 0.62s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.12}s`,
        position: "relative",
      }}
    >
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "8px" : "50%",
          transform: isMobile
            ? "none"
            : "translateX(-50%)",
          top: "28px",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: "2px solid rgba(165, 243, 252, 0.9)",
          background: "radial-gradient(circle, #22d3ee 20%, #0284c7 90%)",
          boxShadow: "0 0 18px rgba(34, 211, 238, 0.7)",
          zIndex: 3,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: isMobile ? "6px" : "50%",
          transform: isMobile ? "none" : "translateX(-50%)",
          top: "26px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "rgba(34, 211, 238, 0.25)",
          filter: "blur(3px)",
          zIndex: 2,
        }}
      />

      {/* Card */}
      <div
        style={{
          width: isMobile ? "100%" : "46%",
          marginLeft: isMobile ? "2.15rem" : "0",
          background:
            "linear-gradient(145deg, rgba(8, 24, 48, 0.82), rgba(13, 38, 68, 0.62))",
          backdropFilter: "blur(22px)",
          border: "1px solid rgba(125, 211, 252, 0.28)",
          borderRadius: "18px",
          padding: isMobile ? "1.05rem" : "1.3rem 1.4rem",
          boxShadow:
            "0 14px 38px rgba(2, 8, 23, 0.5), inset 0 1px 0 rgba(207, 250, 254, 0.18), inset 0 -1px 0 rgba(14, 165, 233, 0.25)",
          color: "#e6f7ff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 10% 0%, rgba(103, 232, 249, 0.16), transparent 38%), radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.14), transparent 44%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "28px",
            height: "28px",
            borderRadius: "999px",
            display: "grid",
            placeItems: "center",
            fontSize: "0.72rem",
            fontWeight: 800,
            color: "#a5f3fc",
            border: "1px solid rgba(125, 211, 252, 0.35)",
            background: "rgba(8, 27, 54, 0.6)",
            zIndex: 2,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Date */}
        <h4
          style={{
            color: "#67e8f9",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            marginBottom: "0.5rem",
            fontWeight: "700",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 2,
          }}
        >
          {event.date}
        </h4>

        {/* Title */}
        <h3
          style={{
            fontSize: isMobile ? "1.15rem" : "1.32rem",
            fontWeight: "800",
            marginBottom: "0.45rem",
            lineHeight: 1.25,
            position: "relative",
            zIndex: 2,
          }}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: isMobile ? "0.9rem" : "0.94rem",
            lineHeight: "1.62",
            color: "rgba(186, 230, 253, 0.82)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {event.description}
        </p>
      </div>
    </div>
  );
}

// 🚀 Main Component
export default function EventTimeline() {
  const isMobile = useMobile();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020b18 0%, #030d1f 100%)",
        padding: isMobile ? "3.25rem 0.9rem" : "4.3rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "320px" : "560px",
          height: isMobile ? "320px" : "560px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.22), rgba(2, 132, 199, 0) 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1, marginBottom: isMobile ? "2rem" : "2.8rem" }}>
        <p
          style={{
            display: "inline-flex",
            padding: "0.38rem 0.8rem",
            borderRadius: "999px",
            border: "1px solid rgba(125, 211, 252, 0.35)",
            background: "rgba(8, 27, 54, 0.5)",
            color: "#a5f3fc",
            fontSize: "0.68rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            marginBottom: "0.8rem",
            fontWeight: 700,
          }}
        >
          Key Milestones
        </p>
        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: "900",
            marginBottom: "0.65rem",
            background: "linear-gradient(90deg, #a5f3fc, #60a5fa, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.01em",
          }}
        >
          Event Timeline
        </h1>
        <p style={{ color: "rgba(186, 230, 253, 0.8)", fontSize: isMobile ? "0.86rem" : "0.98rem" }}>
          Track each major stage from registrations to final build day.
        </p>
      </div>

      <div style={{ position: "relative", maxWidth: 940, margin: "auto", zIndex: 1 }}>
        {/* Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? "15px" : "50%",
            top: 0,
            bottom: 0,
            width: "3px",
            borderRadius: "999px",
            background: "linear-gradient(180deg, rgba(34, 211, 238, 0.9), rgba(37, 99, 235, 0.7), rgba(99, 102, 241, 0.8))",
            transform: isMobile ? "none" : "translateX(-50%)",
            opacity: 0.75,
            boxShadow: "0 0 18px rgba(34, 211, 238, 0.45)",
          }}
        />

        {events.map((event, i) => (
          <TimelineCard
            key={i}
            event={event}
            index={i}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}