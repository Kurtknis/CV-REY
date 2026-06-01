import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadraihanakbar.com"),
  title: {
    default: "Muhammad Raihan Akbar | Fullstack Engineer",
    template: "%s | Muhammad Raihan Akbar",
  },
  description:
    "A readable portfolio and CV for Muhammad Raihan Akbar, an Information Systems undergraduate at Universitas Pembangunan Jaya and Fullstack Engineer focused on React, Next.js, databases, Flask API integration, technical SEO, and mobile-first web systems.",
  applicationName: "Muhammad Raihan Akbar Portfolio",
  authors: [{ name: "Muhammad Raihan Akbar" }],
  creator: "Muhammad Raihan Akbar",
  publisher: "Muhammad Raihan Akbar",
  keywords: [
    "Muhammad Raihan Akbar",
    "Fullstack Engineer Indonesia",
    "Information Systems UPJ",
    "Flask API Developer",
    "Next.js Developer",
    "React Developer",
    "PostgreSQL Prisma Developer",
    "Technical SEO",
    "Portfolio",
    "Jakarta Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Raihan Akbar",
    title: "Muhammad Raihan Akbar | Fullstack Engineer Portfolio",
    description:
      "Portfolio and CV for a Fullstack Engineer building React and Next.js applications, database-backed systems, Flask API integrations, and technical SEO foundations.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Muhammad Raihan Akbar futuristic portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Raihan Akbar | Fullstack Engineer Portfolio",
    description:
      "Fullstack Engineer focused on React, Next.js, PostgreSQL, Prisma, Supabase, MySQL, PHP OOP, Flask middleware, OpenRouter API, REST APIs, technical SEO, and mobile-first optimization.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050509",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
