import type { Metadata } from "next";
import { Inter, Anton, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import Web3Provider from "@/components/Web3Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "U-ORBIT — Web3 Talent Ecosystem",
  description: "U-ORBIT transforms students into ASTRO — global-ready Web3 talent through a structured pipeline: Learn, Build, and Earn.",
  keywords: ["Web3", "Blockchain", "UNTAR", "Education", "U-ORBIT", "ASTRO", "Talent Pool"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-orbit-deep text-text-primary min-h-screen flex flex-col antialiased">
        <Web3Provider>
          <StarField />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
