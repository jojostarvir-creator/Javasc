import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevDonald — Développeur Web & Mobile Full Stack",
  description:
    "Portfolio professionnel d'un Développeur Web & Mobile Full Stack. Spécialisé en React, Next.js, Node.js et Flutter. Disponible pour missions freelance et opportunités.",
  keywords: [
    "développeur web",
    "développeur mobile",
    "full stack",
    "react",
    "next.js",
    "flutter",
    "freelance",
    "portfolio",
  ],
  authors: [{ name: "DevDonald" }],
  openGraph: {
    title: "DevDonald — Développeur Web & Mobile",
    description: "Portfolio professionnel — Applications modernes, performantes et évolutives.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDonald — Développeur Web & Mobile",
    description: "Portfolio professionnel — Applications modernes, performantes et évolutives.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-white dark:bg-slate-900 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
