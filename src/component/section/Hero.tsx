"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--hero-bg)]">
        
      <div className="max-w-7xl mx-auto px-6 py-25 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-[50px] font-semibold leading-tight text-black">
          Empowering Education {" "}
          
            
          Through <span className="text-[var(--hero-para)]">Intelligent Technology.
            </span>
          </h1>

          <p className="text-black mt-6 max-w-lg">
          EduNestify is a modern, intelligent, and student-friendly digital learning platform designed to simplify the way students learn and teachers teach.
          </p>
       

          <div className="flex gap-4 mt-9 flex-wrap">
            <button className="bg-[var(--hero-btn)] text-black font-semibold px-6 py-3 hover:bg-[var(--hero-btn)]/40 transition">
              Explore Our Products →
            </button>
            <button className=" text-[var(--hero-text)] font-semibold px-6 py-3 hover:text-[var(--hero-btn)] transition">
              Book a Free Demo
            </button>
          </div>
        </div>





        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/Hero.webp"  // ⬅️ rename your uploaded image to this name
            alt="Students and Teacher"
            width={800}
            height={700}
            className="object-contain mt-20"
            priority
          />
        </div>
      </div>
      
    </section>
  );
}
