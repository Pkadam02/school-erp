"use client";
import { useState } from "react";
import Image from "next/image";
import CTA from "@/component/section/CTA";

export default function NewsletterHero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-white py-24">
        <div className="lg:w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              NEWS LETTERS
            </h2>

            <p className="text-gray-600 text-m leading-relaxed lg:mb-10">
              Sign up for our renowned newsletters for monthly updates on our products,
              news, and the latest events. Stay updated with the latest improvements
              to your school’s digital ecosystem.
            </p>
        <br />
            {/* Subscribe Form */}
            {submitted ? (
              <p className="text-green-600 font-semibold text-xl">🎉 You’re subscribed! Thank you!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 border border-gray-300 text-gray-700 focus:ring-2 focus:ring-[var(--hero-btn)] outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[var(--hero-btn)] hover:bg-[var(--hero-btn)]/40 text-black font-semibold transition"
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/about/news.jpg"
              alt="Newsletter Banner"
              width={350}
              height={300}
              className="w-full lg:h-100 mt-20"
            />
          </div>

        </div>
      </section>

      {/* CONTENT SECTION (without boxes) */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:mt-20 lg:mt-[-30] text-center">

         

          {/* Latest Updates */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Updates</h3>
          <ul className="space-y-3 text-gray-700 text-lg mb-16">
            <li>• Faster attendance & real-time analytics</li>
            <li>• Enhanced online admissions with auto-verification</li>
            <li>• Improved HR payroll & leave workflows</li>
            <li>• Upgraded Connect App for homework, notifications & events</li>
          </ul>

          {/* Coming Soon */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h3>
          <ul className="space-y-3 text-gray-700 text-lg mb-16">
            <li>• AI-based performance insights</li>
            <li>• Live bus tracking</li>
            <li>• Smart exam evaluator</li>
          </ul>

          {/* Subscribe Line */}
          <p className="text-lg font-medium text-gray-900">
            📧 Subscribe for updates: Get monthly insights, new features & product announcements.
          </p>
        </div>
      </section>

     
    </>
  );
}
