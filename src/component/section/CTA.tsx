"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <section className="relative w-full bg-white py-14 overflow-hidden">

      {/* Soft Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-40 blur-2xl animate-pulse"></div>

      {/* Floating Glow Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl top-10 left-28 animate-bounce"></div>
        <div className="absolute w-52 h-52 bg-purple-300 rounded-full opacity-25 blur-3xl bottom-10 right-16 animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Smarter ERP & LMS to Power<br /> Your Institution's Growth
          </h2>
          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Digitize every academic and administrative process with automation,
            analytics, mobile apps & seamless communication.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
          <Link
            href="/explore-all-products"
            className="bg-[var(--hero-btn)] text-[var(--hero-text)] px-8 py-4  text-lg  hover:bg-[var(--hero-btn)]/30 hover:text-black transition-all"
          >
            Book A Demo →
          </Link>

            <Link
            href="/contact"
            className="bg-[var(--hero-white)] text-[var(--hero-text)] px-8 py-4  text-lg  hover:text-[var(--hero-btn)] transition-all"
          >
            Explore Product →
          </Link>
          </div>
        </div>

        {/* RIGHT IMAGE / ART ILLUSTRATION */}
        <div className="flex justify-center">
          <Image
            src="/CTA.jpg"     // change your own image
            alt="ERP Tech"
            width={300}
            height={300}
            className="w-90 h-120"
          />
        </div>
      </div>

      {/* POPUP FORM (Glassmorphism Card) */}
      

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/919359287285"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition-all z-50"
      >
        <svg width="23" height="23" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.8.73 5.54 2.16 7.96L.88 31.12 7.9 29.3c2.34 1.28 4.99 1.96 7.77 1.96 8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5z"/>
        </svg>
        
      </a>
    </section>
  );
}
