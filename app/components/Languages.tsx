const languages = [
  { flag: "🇺🇸", name: "English", coming: false },
  { flag: "🇪🇸", name: "Spanish", coming: false },
  { flag: "🇨🇳", name: "Chinese (Simplified)", coming: false },
  { flag: "🇹🇼", name: "Chinese (Traditional)", coming: false },
  { flag: "🇻🇳", name: "Vietnamese", coming: false },
  { flag: "🇵🇭", name: "Tagalog · Coming soon", coming: true },
  { flag: "🇰🇷", name: "Korean · Coming soon", coming: true },
  { flag: "🇯🇵", name: "Japanese · Coming soon", coming: true },
  { flag: "🇮🇳", name: "Hindi · Coming soon", coming: true },
];

export default function Languages() {
  return (
    <section style={{ padding: "100px 2rem" }}>
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
          Language support
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
          Starting with the communities
          <br />
          that need it most
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "var(--ink-soft)",
            lineHeight: 1.7,
            maxWidth: "580px",
          }}
        >
          Yumi launches with Tier 1 languages serving the Asian American
          diaspora and Latin American communities — with more on the way based
          on community input.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                background: "white",
                border: `1px ${lang.coming ? "dashed" : "solid"} var(--border)`,
                borderRadius: "100px",
                fontSize: "14px",
                color: "var(--ink-soft)",
                opacity: lang.coming ? 0.55 : 1,
              }}
            >
              <span style={{ fontSize: "18px" }}>{lang.flag}</span>
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
