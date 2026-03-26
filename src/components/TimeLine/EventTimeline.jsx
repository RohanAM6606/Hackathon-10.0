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
        marginBottom: "2.5rem",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : isMobile
          ? "translateY(40px)"
          : isRight
          ? "translateX(60px)"
          : "translateX(-60px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
        position: "relative",
      }}
    >
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "6px" : "50%",
          transform: isMobile
            ? "none"
            : "translateX(-50%)",
          top: "20px",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "#00dcff",
          boxShadow: "0 0 10px #00dcff",
          zIndex: 2,
        }}
      />

      {/* Card */}
      <div
        style={{
          width: isMobile ? "100%" : "45%",
          marginLeft: isMobile ? "2rem" : "0",
          background:
            "linear-gradient(135deg, rgba(0,80,200,0.25), rgba(0,20,60,0.5))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0,220,255,0.4)",
          borderRadius: "16px",
          padding: "1.5rem",
          boxShadow:
            "0 10px 40px rgba(0,180,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          color: "#e0f4ff",
          position: "relative",
        }}
      >
        {/* Date */}
        <h4
          style={{
            color: "#00dcff",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
            fontWeight: "700",
          }}
        >
          {event.date}
        </h4>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "800",
            marginBottom: "0.5rem",
          }}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.6",
            color: "rgba(180,220,255,0.8)",
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
    <div
      style={{
        minHeight: "100vh",
        background: "#020b18",
        padding: "4rem 1.5rem",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: "900",
          marginBottom: "3rem",
          background: "linear-gradient(90deg, #00dcff, #4da6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        EVENT TIMELINE
      </h1>

      <div style={{ position: "relative", maxWidth: 900, margin: "auto" }}>
        {/* Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? "12px" : "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(#00dcff, #0060ff)",
            transform: isMobile ? "none" : "translateX(-50%)",
            opacity: 0.6,
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
    </div>
  );
}