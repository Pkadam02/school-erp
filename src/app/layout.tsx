"use client";

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
