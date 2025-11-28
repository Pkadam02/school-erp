"use client";
import Image from "next/image";

export default function HRManagementPage() {
  return (
    <section className="w-full bg-gray-50 py-28">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-14 mt-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Complete HR & Staff<br />
            Management Automation<br />
            for Your Institution
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            Streamline every aspect of your people operations, from hiring and
            onboarding to payroll, performance, and compliance — all in one
            integrated platform.
          </p>

          <button className="px-7 py-4 bg-[var(--hero-btn)] text-[var(--hero-text)] font-semibold hover:bg-[var(--hero-btn)]/40 transition">
            Request a Demo
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/hr.jpg"
            alt="HR Management Banner"
            width={450}
            height={350}
            className="object-cover"
          />
        </div>
      </div>

      {/* FEATURES HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-16 mt-20">
        <h4 className="text-sm text-blue-600 font-semibold tracking-wide text-center mb-3">
          DEEP FEATURES
        </h4>
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Total Control Over Your People Operations
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our HR & Staff Management module is equipped with powerful, intuitive features
          designed to automate manual tasks, ensure compliance, and empower your
          administrative team.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Recruitment & Hiring",
              desc: "Digitize hiring by managing job postings, applications, interviews, onboarding & employee profiles.",
            },
            {
              title: "Staff Attendance & Leaves",
              desc: "Automated attendance tracking with biometric / RFID integration and leave approval workflows.",
            },
            {
              title: "Payroll Automation",
              desc: "Auto-generate payroll with attendance-based salary, deductions, compliance rules & payslips.",
            },
            {
              title: "Staff Performance",
              desc: "Evaluate performance using analytics, skill graphs, goal tracking, and regular feedback.",
            },
            {
              title: "Document Management",
              desc: "Store all employee documents securely — contracts, certificates, IDs, compliance docs & more.",
            },
            {
              title: "Training & Appraisals",
              desc: "Plan staff development through training, certifications, KPIs and appraisal cycles.",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-24 bg-blue-50 rounded-2xl max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Ready to Transform Your School's HR<br />Operations?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          See our powerful, all-in-one ERP in action. Schedule a personalized
          demo with one of our specialists today.
        </p>

        <button className="px-7 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Schedule a Personalized Demo
        </button>
      </div>
    </section>
  );
}
