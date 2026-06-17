export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 2rem 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative corn — left */}
      <svg
        className="hero-corn hero-corn-left"
        viewBox="0 0 200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="100" cy="200" rx="60" ry="110" fill="#2A4A35" />
        <ellipse cx="82" cy="160" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="118" cy="160" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="82" cy="205" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="118" cy="205" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="100" cy="250" rx="18" ry="22" fill="#3D6B4F" />
        <path
          d="M100 90 C85 50 55 35 50 55"
          stroke="#2A4A35"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 90 C115 50 145 35 150 55"
          stroke="#3D6B4F"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Decorative corn — right */}
      <svg
        className="hero-corn hero-corn-right"
        viewBox="0 0 200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="100" cy="200" rx="60" ry="110" fill="#2A4A35" />
        <ellipse cx="82" cy="160" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="118" cy="160" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="82" cy="205" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="118" cy="205" rx="18" ry="22" fill="#3D6B4F" />
        <ellipse cx="100" cy="250" rx="18" ry="22" fill="#3D6B4F" />
      </svg>

      <span
        style={{
          display: "inline-block",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--green-mid)",
          background: "var(--green-light)",
          padding: "6px 16px",
          borderRadius: "100px",
          marginBottom: "28px",
        }}
      >
        Coming soon · Yumi Chat
      </span>

      <h1
        style={{
          fontFamily: "var(--font-instrument-serif), serif",
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--green-dark)",
          maxWidth: "900px",
          marginBottom: "8px",
        }}
      >
        Say it like
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
          you mean it
        </em>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "var(--ink-soft)",
          maxWidth: "560px",
          margin: "24px auto 48px",
          lineHeight: 1.65,
        }}
      >
        A messaging app that translates not just words — but meaning. Yumi
        preserves your voice, tone, and cultural context so every message feels
        like it was written in the language you think in.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="#waitlist" className="btn-primary">
          Join the waitlist
        </a>
        <a href="#how" className="btn-secondary">
          See how it works
        </a>
      </div>

      {/* Chat mockup */}
      <div className="chat-preview">
        <div className="chat-header">
          <div className="avatar">🌽</div>
          <div>
            <div className="chat-name">Mom</div>
            <div className="chat-lang">Translating: Chinese → English</div>
          </div>
        </div>

        <div className="msg msg-in">
          <div className="msg-bubble">望子成龙，妈妈一直都在支持你。</div>
          <div className="msg-translated">Translated · Tap to see original</div>
          <div
            className="msg-bubble"
            style={{
              background: "#EBF2ED",
              color: "#2A4A35",
              marginTop: "6px",
              borderBottomLeftRadius: "4px",
            }}
          >
            Mom has always dreamed of you soaring to the greatest heights — like
            a dragon.
          </div>
          <div className="cultural-pill">🌾 Hold for cultural context</div>
        </div>

        <div className="msg msg-out">
          <div className="msg-bubble">
            I know, Mom. That means everything to me. 我爱你 ❤️
          </div>
          <div className="msg-translated">
            Sent in English · Translated for Mom
          </div>
        </div>
      </div>
    </section>
  );
}
