import { useState, useEffect, useRef } from "react";

const events = [
  {
    date: "28th March",
    title: "Registrations Begin",
    description: "Form your duos or squads — gear up, brainstorm, and register for the challenge of innovation!",
    side: "right",
  },
  {
    date: "11th April",
    title: "Forms Close & WhatsApp Group Access",
    description: "Registration closes. Participants will be added to the WhatsApp group and drive link shared.",
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

function TimelineCard({ event, index }) {
  const [ref, visible] = useInView(0.15);
  const isRight = event.side === "right";

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isRight ? "flex-end" : "flex-start",
        marginBottom: "3rem",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : isRight
          ? "translateX(60px)"
          : "translateX(-60px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div
        style={{
          width: "45%",
          background:
            "linear-gradient(135deg, rgba(0,80,200,0.25), rgba(0,20,60,0.5))",
          backdropFilter: "blur(22px)",
          border: "1px solid rgba(0,220,255,0.45)",
          borderRadius: "16px",
          padding: "1.8rem",
          boxShadow:
            "0 15px 50px rgba(0,180,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
          color: "#e0f4ff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Inner Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(0,220,255,0.15), transparent)",
            opacity: 0.4,
          }}
        />

        {/* Date */}
        <h4
          style={{
            color: "#00dcff",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
            fontWeight: "700",
          }}
        >
          {event.date}
        </h4>

        {/* Title + Glow Dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "0.6rem",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00dcff, #0080ff)",
              boxShadow:
                "0 0 10px #00dcff, 0 0 20px rgba(0,220,255,0.8), 0 0 30px rgba(0,180,255,0.6)",
            }}
          />

          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "900",
              color: "#e6faff",
              margin: 0,
            }}
          >
            {event.title}
          </h3>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.7",
            color: "rgba(180,220,255,0.8)",
          }}
        >
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function EventTimeline() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020b18",
        padding: "4rem 2rem",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: "900",
          marginBottom: "3.5rem",
          background: "linear-gradient(90deg, #00dcff, #4da6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 25px rgba(0,220,255,0.6)",
        }}
      >
        EVENT TIMELINE
      </h1>

      <div style={{ position: "relative", maxWidth: 900, margin: "auto" }}>
        {/* Center Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(#00dcff, #0060ff)",
            transform: "translateX(-50%)",
            opacity: 0.6,
          }}
        />

        {events.map((event, i) => (
          <TimelineCard key={i} event={event} index={i} />
        ))}
      </div>
    </div>
  );
}