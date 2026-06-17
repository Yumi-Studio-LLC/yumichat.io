export default function WhyYumi() {
  return (
    <section
      style={{
        padding: "100px 2rem",
        background: "var(--green-dark)",
        color: "white",
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
          Why we built this
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
          Some of the most important
          <br />
          conversations get lost in translation
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "700px",
            lineHeight: 1.75,
          }}
        >
          Over 65 million immigrants in the United States alone have family
          members they&apos;ve never been able to fully connect with — not
          because they don&apos;t love each other, but because language gets in
          the way. They default to short, simple messages. The conversations
          that matter most — the emotional ones, the funny ones, the deep ones —
          stay unspoken.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "700px",
            lineHeight: 1.75,
            marginTop: "20px",
          }}
        >
          Existing tools translate words. Yumi translates the person behind
          them.
        </p>

        <blockquote
          style={{
            marginTop: "48px",
            paddingLeft: "24px",
            borderLeft: "3px solid var(--gold)",
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 3vw, 28px)",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
            maxWidth: "640px",
          }}
        >
          &ldquo;She wants to have full conversations with her grandparents and
          understand their stories — but can&apos;t. That&apos;s our user.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
