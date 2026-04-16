import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PANDITAAI | The Kaushal Marketplace",
  description:
    "The open marketplace where Kaushals — physical AI skills trained in NVIDIA Isaac Sim — are traded, deployed, and executed on robots.",
  keywords: [
    "physical AI",
    "robotics",
    "skills marketplace",
    "NVIDIA Isaac Sim",
    "Jetson",
    "IGX",
    "embodied intelligence",
    "sim-to-real",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-surface text-on-surface`}
      >
        <div className="data-grain" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
