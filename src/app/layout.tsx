import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Nunito } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Crystal Cheng — AI/ML Engineer",
  description:
    "Crystal is a CS and Applied Math student at UC Berkeley building ML systems at the intersection of research and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body
        className={`${nunito.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      >
        <Nav />
        {children}
        <Footer />
        <ScrollHandler />
      </body>
    </html>
  );
}
