"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


export default function About() {
  const [tab, setTab] = useState("about");

  return (
    <section className="w-full py-30 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <span className="text-[var(--hero-text)] font-light text-sm tracking-wide">
            ABOUT US
          </span>

          <h2 className="text-4xl font-bold leading-tight mt-2">
          Connecting Knowledge & <span className="text-[var(--hero-para)]">Technology for a Smarter Future</span> 
          </h2>

          {/* TABS */}
          <div className="flex gap-4 mt-8 font-semibold text-lg border-b border-gray-200">
            {["about", "mission", "vision"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`pb-3 transition ${
                  tab === item
                    ? "text-[var(--hero-para)] border-b-2 border-[var(--hero-para)]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item === "about" && "About EduNestify"}
                {item === "mission" && "Our Mission"}
                {item === "vision" && "Our Vision"}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          {/* TAB CONTENT WITH SLIDE EFFECT */}
<div className="mt-6 text-gray-600 space-y-4 min-h-[330px]">
  <AnimatePresence mode="wait">
    {tab === "about" && (
      <motion.div
        key="about"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35 }}
      >
        {/* ABOUT CONTENT */}
        <p>
          EduNestify is a next-generation digital learning ecosystem built to empower
          educational institutions with modern tools, smart technology, and seamless
          user experiences. We bridge the gap between traditional education and
          modern innovation by integrating LMS capabilities, ERP management, and
          dynamic content delivery into one unified platform.
        </p>
       <br />
        <ul className="space-y-2">
          <li><span className="text-[var(--hero-para)]">✔</span> 5000+ Students empowered through smart learning</li>
          <li><span className="text-[var(--hero-para)]">✔</span> 200+ Institutions digitally transformed</li>
          <li><span className="text-[var(--hero-para)]">✔</span> End-to-end LMS + ERP solutions in one platform</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Trusted by educators, parents, and administrators</li>
        </ul>
      </motion.div>
    )}

    {tab === "mission" && (
      <motion.div
        key="mission"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35 }}
      >
        {/* MISSION CONTENT */}
        <p>
          Our mission is to revolutionize education by leveraging technology that makes
          learning smarter, personalized, and accessible for every student...
        </p>
        <br />
        <p>
          By blending innovation with simplicity, EduNestify stands committed to
          building a world where quality education is a universal right.
        </p>
        <br />
        <ul className="space-y-2">
          <li><span className="text-[var(--hero-para)]">✔</span> Making high-quality education accessible to everyone</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Encouraging innovation in classrooms & institutions</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Empowering teachers with time-saving digital tools</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Supporting students with personalized learning journeys</li>
        </ul>
      </motion.div>
    )}

    {tab === "vision" && (
      <motion.div
        key="vision"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35 }}
      >
        {/* VISION CONTENT */}
        <p>
          Our vision is to create a globally connected learning world where institutions,
          learners, and educators collaborate seamlessly through intelligent digital
          ecosystems.
        </p>
        <br />
        <p>
          EduNestify envisions a future where technology amplifies human potential.
        </p> 
        <br />
        <ul className="space-y-2">
          <li><span className="text-[var(--hero-para)]">✔</span> Empower communities through technology-driven learning</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Build a globally connected education ecosystem</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Inspire innovation and progress for future generations</li>
          <li><span className="text-[var(--hero-para)]">✔</span> Shape a smarter educational world</li>
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            <Image
              src="/Hero.jpg"
              alt="About Section"
              width={420}
              height={420}
              className=" shadow-xl z-10"
            />
            {/* Background Shapes (optional) */}
            <div className="absolute -top-10 -left-6 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-[1] w-28 h-28 bg-yellow-200 rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
