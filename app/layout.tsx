import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = productionHost
  ? `https://${productionHost}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adhvaid MV — Investigations",
    template: "%s — Adhvaid MV",
  },
  description:
    "A multidisciplinary portfolio exploring brand strategy, writing, film, photography and visual storytelling by Adhvaid MV.",
  openGraph: {
    type: "website",
    title: "Adhvaid MV — Investigations",
    description:
      "Questions explored through strategy, stories, images and experiences.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Adhvaid MV — Every person carries a different world.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhvaid MV — Investigations",
    description:
      "Questions explored through strategy, stories, images and experiences.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
