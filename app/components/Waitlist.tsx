"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (!email || !email.includes("@")) {
      setError(true);
      setTimeout(() => setError(false), 800);
      return;
    }
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      style={{
        padding: "100px 2rem",
        background: "var(--green-dark)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold-mid)",
            marginBottom: "16px",
          }}
        >
          Early access
        </p>

        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Be the first to
          <br />
          bring Yumi home
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "20px auto 40px",
          }}
        >
          We&apos;re building Yumi for families first. Join the waitlist and
          help us shape the experience before we launch.
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            maxWidth: "440px",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            disabled={submitted}
            style={{
              flex: 1,
              minWidth: "220px",
              padding: "14px 20px",
              borderRadius: "100px",
              border: "none",
              fontSize: "15px",
              fontFamily: "inherit",
              background: error
                ? "rgba(220,80,80,0.2)"
                : "rgba(255,255,255,0.12)",
              color: "white",
              outline: "none",
              transition: "background 0.2s",
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={submitted}
            className="btn-gold"
            style={
              submitted
                ? { background: "var(--green-mid)", color: "white" }
                : {}
            }
          >
            {submitted ? "🌽 You're on the list!" : "Join waitlist"}
          </button>
        </div>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.45)",
            marginTop: "16px",
          }}
        >
          No spam. Just a heads up when you can try it.
        </p>
      </div>
    </section>
  );
}
