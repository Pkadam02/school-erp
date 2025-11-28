"use client";
import Image from "next/image";

export default function ConnectPage() {
  return (
    <section className="w-full bg-gray-50 py-35">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-14 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Connect: Your School’s<br />
            Communication &<br />
            Engagement Suite
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            The most important module for connecting teachers, students,
            parents, and admins, ensuring transparency, engagement, and trust
            across your entire school community.
          </p>

          <button
          
            style={{ background: "var(--hero-btn)" }} 
            className="px-7 py-4 text-[var(--hero-text)] font-semibold  hover:opacity-90 transition"
          >
            Schedule a Free Demo
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/connect.jpg"
            alt="Connect Banner"
            width={450}
            height={330}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="text-center mt-24">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Explore the Power of Connect
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover the deep features that make Connect the most full-featured
          & value-packed communication suite available.
        </p>
      </div>

      {/* GRID FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-16">
        {[
          {
            title: "Unified Mobile App",
            desc: "All school operations in one app — homework, messaging, attendance, fee receipts & more."
          },
          {
            title: "Communication System",
            desc: "Push notifications, SMS, announcements & circulars for direct outreach."
          },
          {
            title: "Parent-Teacher Engagement",
            desc: "Direct chat, teacher remarks, parent queries & grievance tracking."
          },
          {
            title: "Learning & Classroom Tools",
            desc: "Homework upload, video classes, doubt clearing & learning resources."
          },
          {
            title: "Events & Gallery",
            desc: "Centralized event management and secure photo gallery for school memories."
          },
          {
            title: "Support & Helpdesk",
            desc: "Raise tickets directly within the app for technical, academic & admin concerns."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer text-left"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="mt-24 bg-blue-50 rounded-2xl max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Ready to Enhance Your School’s Communication?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Streamline interactions, build strong engagement, and build a stronger school
          community with our all-in-one Connect Suite.
        </p>

        <button
          style={{ background: "var(--hero-btn)" }}
          className="px-7 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Schedule a Free Demo
        </button>
      </div>
    </section>
  );
}
