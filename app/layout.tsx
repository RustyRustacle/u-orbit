import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
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
    <html lang="en" className={`${inter.variable} ${anton.variable} scroll-smooth`}>
      <body className="font-sans bg-orbit-deep text-text-primary min-h-screen flex flex-col antialiased">
        <StarField />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
