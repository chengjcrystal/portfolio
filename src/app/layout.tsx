import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Nunito, Fredoka } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
});

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
  title: "Crystal Cheng Portfolio",
  description: "CS + Applied Math at UC Berkeley. Full-stack, AWS, and ML work.",
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
        className={`${nunito.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${fredoka.variable}`}
      >
        <Nav />
        {children}
        <Footer />
        <ScrollHandler />
      </body>
    </html>
  );
}