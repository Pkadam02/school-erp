// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";
import { useState } from "react";


// Optimized Google Fonts — no external request, zero render-blocking
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduNestify | Where Learning Finds Its Nest.",
  description:
    "...",
  keywords: [
    "...",
    "....",
    
  ],
  openGraph: {
    title: "EduNestify | Where Learning Finds Its Nest.",
    description:
      "EduNestify is a modern, intelligent, and student-friendly digital learning platform designed to simplify the way students learn and teachers teach.",
    url: "https://edunestify.com",
    siteName: "EduNestify",
    images: [
      {
        url: "https://qloax.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduNestify - Where Learning Finds Its Nest.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduNestify | Where Learning Finds Its Nest.",
    description:
      "AI-first innovation studio crafting intelligent systems, web apps, and digital ecosystems.",
    creator: "@qloaxofficial",
    images: ["https://qloax.com/og-image.jpg"],
  },
  icons: {
    icon: "/Logo1.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://edunestify.com"),
  robots: { index: true, follow: true },
  category: "Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
   

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* All pages share page transition */}
       {children}

        <Footer setIsOpen={setIsOpen} />
     
        
      </body>
    </html>
  );
}
