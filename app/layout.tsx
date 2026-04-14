import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: "AvuruduNakath — Sinhala & Tamil New Year 2026",
  description:
    "Auspicious Nakath times for Sinhala & Tamil New Year 2026. සිංහල හා දෙමළ අළුත් අවුරුදු නකත් වේලාවන්. சிங்கள மற்றும் தமிழ் புத்தாண்டு 2026.",
  keywords: ["Avurudu", "Nakath", "Sinhala New Year", "Tamil New Year", "2026", "Sri Lanka"],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "AvuruduNakath 2026 — Sinhala & Tamil New Year",
    description: "Auspicious Nakath times for Sinhala & Tamil New Year 2026. සිංහල හා දෙමළ අළුත් අවුරුදු නකත් වේලාවන්.",
    images: [
      {
        url: "/logo.jpg",
        width: 406,
        height: 395,
        alt: "AvuruduNakath 2026",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AvuruduNakath 2026",
    description: "Auspicious times for Sinhala & Tamil New Year 2026",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
