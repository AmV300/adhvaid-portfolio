import type { Metadata } from "next";
import localFont from "next/font/local";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-body",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  display: "swap",
  weight: "300 700",
  variable: "--font-display",
});

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = productionHost
  ? `https://${productionHost}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adhvaid MV — Creative Strategy & Content",
    template: "%s — Adhvaid MV",
  },
  description:
    "A multidisciplinary portfolio exploring brand strategy, writing, film, photography and visual storytelling by Adhvaid MV.",
  openGraph: {
    type: "website",
    title: "Adhvaid MV — Creative Strategy & Content",
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
    title: "Adhvaid MV — Creative Strategy & Content",
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
        <SmoothScroll>{children}</SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  );
}
