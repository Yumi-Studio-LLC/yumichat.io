import type { Metadata } from "next";
import { Noto_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yumi — Say it like you mean it",
  description:
    "Yumi is a messaging app that translates not just words, but meaning — preserving your voice, tone, and cultural context so every message feels like it was written in the language you think in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* CJK fonts for Chinese text in the chat preview */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Noto+Sans+TC&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans SC', 'Noto Sans TC', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
