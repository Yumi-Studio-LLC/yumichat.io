export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 2rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="16" cy="18" rx="8" ry="11" fill="#E8A020" />
          <ellipse cx="13" cy="14" rx="2.5" ry="3" fill="#FDF3DF" />
          <ellipse cx="19" cy="14" rx="2.5" ry="3" fill="#FDF3DF" />
          <ellipse cx="13" cy="20" rx="2.5" ry="3" fill="#FDF3DF" />
          <ellipse cx="19" cy="20" rx="2.5" ry="3" fill="#FDF3DF" />
          <ellipse cx="16" cy="25" rx="2.5" ry="3" fill="#FDF3DF" />
          <path
            d="M16 7 C14 4 10 3 9 5"
            stroke="#2A4A35"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M16 7 C18 4 22 3 23 5"
            stroke="#3D6B4F"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "18px",
            color: "var(--green-dark)",
          }}
        >
          Yumi
        </span>
      </a>

      <ul
        style={{
          display: "flex",
          gap: "24px",
          listStyle: "none",
        }}
      >
        <li>
          <a
            href="mailto:irene@yumichat.io"
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              textDecoration: "none",
            }}
          >
            Privacy
          </a>
        </li>
      </ul>

      <p style={{ fontSize: "13px", color: "var(--muted)" }}>
        © 2026 Yumi Chat LLC. All rights reserved.
      </p>
    </footer>
  );
}
