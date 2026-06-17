const features = [
  {
    icon: "🫀",
    title: "Voice preservation",
    desc: "Your humor, warmth, and emotional depth survive the translation. Messages sound like you — not a dictionary.",
  },
  {
    icon: "🌾",
    title: "Cultural context on demand",
    desc: "Hold any message to see a plain-language explanation of what a phrase or expression really means in that culture.",
  },
  {
    icon: "💬",
    title: "Conversation-aware",
    desc: "The AI knows the tone, the flow, and the relationship — so a daughter texting her mother reads differently than two coworkers.",
  },
  {
    icon: "🎚️",
    title: "Formality controls",
    desc: "Set a formality level per conversation — casual, neutral, or formal — so a message to grandma sounds respectful, not robotic.",
  },
  {
    icon: "👆",
    title: "Tap to see original",
    desc: "Every translated message lets you reveal the original with a tap — turning every conversation into a quiet language lesson.",
  },
  {
    icon: "✨",
    title: "Made with love",
    desc: "Yumi isn't a vibe-coded cash grab. Every detail — from the hand-drawn corn mascot to the onboarding — was made with care.",
  },
];

export default function Features() {
  return (
    <section id="how" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--green-mid)",
            marginBottom: "16px",
          }}
        >
          How it works
        </p>

        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--green-dark)",
            marginBottom: "20px",
          }}
        >
          Built for the{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            relationship
          </em>
          ,
          <br />
          not just the message
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "var(--ink-soft)",
            lineHeight: 1.7,
            maxWidth: "580px",
          }}
        >
          Yumi translates with the whole conversation in mind — who&apos;s
          talking, what&apos;s been said, and what the relationship means — so
          every message lands the way it was meant to.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "60px",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "28px",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  marginBottom: "16px",
                  display: "block",
                }}
              >
                {f.icon}
              </span>
              <div
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: "22px",
                  color: "var(--green-dark)",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--ink-soft)",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
