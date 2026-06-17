const examples = [
  {
    phrase: "望子成龙",
    pinyin: "Wàng zǐ chéng lóng",
    bad: '"I wish your child success."',
    good: '"Mom has always dreamed of you soaring to the greatest heights — like a dragon."',
    note: '🌾 Dragons in Chinese culture represent ultimate power and greatness — this phrase captures the depth of parental ambition that "wishing success" misses entirely.',
  },
  {
    phrase: "撒娇",
    pinyin: "Sā jiāo",
    bad: '"Being cute."',
    good: '"Acting playfully helpless to get attention or affection from someone you\'re close to."',
    note: '🌾 撒娇 has no English equivalent. It\'s a playful, affectionate behavior common in close relationships — "being cute" completely loses the intimacy it implies.',
  },
];

export default function TranslationDemo() {
  return (
    <section style={{ padding: "100px 2rem", background: "var(--gold-light)" }}>
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
          The difference
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
          Words that carry
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            the whole meaning
          </em>
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "var(--ink-soft)",
            lineHeight: 1.7,
            maxWidth: "580px",
          }}
        >
          Generic tools simplify. Yumi understands. Here&apos;s what that looks
          like in practice.
        </p>

        <div
          className="demo-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "48px",
            alignItems: "center",
          }}
        >
          {examples.map((ex) => (
            <div key={ex.phrase} className="demo-example">
              <div className="demo-label">Chinese phrase</div>
              <div className="demo-original">{ex.phrase}</div>
              <div className="demo-pinyin">{ex.pinyin}</div>
              <div className="demo-divider" />
              <div className="demo-bad-label">❌ Generic translation</div>
              <div className="demo-bad">{ex.bad}</div>
              <div className="demo-good-label">✓ Yumi translation</div>
              <div className="demo-good">{ex.good}</div>
              <div className="demo-note">
                <strong>Cultural context:</strong> {ex.note.replace(/^🌾 /, "")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
