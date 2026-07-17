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
  title: "DevDonald — Développeur Web & Mobile Full Stack | Bénin",
  description:
    "Donald Fambo — Développeur Web & Mobile Full Stack basé au Bénin, Afrique de l'Ouest. Spécialisé en React, Next.js, Node.js et Flutter. Disponible pour missions freelance.",
  keywords: [
    "développeur web Bénin",
    "développeur mobile Bénin",
    "Donald Fambo",
    "DevDonald",
    "développeur full stack Afrique",
    "freelance développeur web",
    "react next.js développeur",
    "flutter développeur",
    "création site web Bénin",
    "application mobile Bénin",
  ],
  authors: [{ name: "Donald Fambo", url: "https://javasc-ten.vercel.app" }],
  creator: "Donald Fambo",
  openGraph: {
    title: "DevDonald — Développeur Web & Mobile Full Stack",
    description: "Donald Fambo — Développeur Full Stack basé au Bénin. React, Next.js, Flutter, Node.js. Disponible pour vos projets.",
    type: "website",
    locale: "fr_FR",
    url: "https://javasc-ten.vercel.app",
    siteName: "DevDonald Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDonald — Développeur Web & Mobile Full Stack",
    description: "Donald Fambo — Développeur Full Stack basé au Bénin. React, Next.js, Flutter, Node.js.",
    creator: "@devdonald",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://javasc-ten.vercel.app",
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
