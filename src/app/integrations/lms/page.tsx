"use client";
import { useState } from "react";

export default function LMSIntegration() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const toggle = (i: number) => setOpenFAQ(openFAQ === i ? null : i);

  const faqs = [
    {
      title: "Auto-sync Student & Teacher Data",
      desc: "Automatically sync students, classes, subjects, and batches between the ERP and LMS, eliminating the need for manual importing or exporting of data and ensuring information is always up-to-date."
    },
    {
      title: "Content & Learning Plans",
      desc: "Upload and organize video lessons, PDFs, worksheets, live sessions, and competency-based learning plans, all mapped to school curriculum structures."
    },
    {
      title: "Assignments & Submissions",
      desc: "Create assignments, enable online submissions, apply auto-grading wherever possible, and track submission analytics — all synced with ERP academics."
    },
    {
      title: "Exams & Assessments",
      desc: "Conduct online quizzes, practice tests, and summative assessments with automated scoring and result sync to the ERP for report generation."
    },
    {
      title: "Analytics & Progress Tracking",
      desc: "Get dashboards for course progress, completion ratio, engagement, assessment history, student activity logs, and learning insights."
    }
  ];

  return (
    <section className="w-full bg-gray-50 pb-32">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <div className="bg-gradient-to-r from-[#0b3b46] to-[#166f6b] rounded-2xl p-12 text-center shadow-lg text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Seamless LMS Integration
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Empower digital learning by connecting your school ERP with a powerful Learning
            Management System for a unified educational experience.
          </p>
          <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-200 transition">
            Learn More →
          </button>
        </div>
      </div>


      {/* WHAT IT DOES */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What It Does
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Our integration seamlessly connects academic, assessment, and student data between the
          ERP and LMS, streamlining workflows and creating a single source of truth for your institution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Unified Data",
              desc: "Sync academic, assessment, and student data between the ERP and LMS."
            },
            {
              title: "Streamlined Workflows",
              desc: "Minimize manual data entry and reduce workload through automated workflows."
            },
            {
              title: "Enhanced Analytics",
              desc: "Gain comprehensive academic and engagement insights across both platforms."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-7 shadow-md rounded-xl border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* DEEP FEATURES */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Deep Features
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white border rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 font-semibold flex justify-between items-center text-gray-900"
                onClick={() => toggle(i)}
              >
                {item.title}
                <span className="text-2xl font-bold">{openFAQ === i ? "−" : "+"}</span>
              </button>
              {openFAQ === i && (
                <div className="px-6 pb-5 text-gray-600 text-[15px] leading-relaxed">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* OUTCOME */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-white p-12 shadow-md border border-gray-100 rounded-2xl text-center">
          <div className="text-4xl mb-4">🧩</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Outcome
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Achieve a unified learning experience where the ERP handles administration and the
            LMS handles teaching & learning — without data duplication. This creates a single
            source of truth for all academic activities, providing staff, students, and parents
            with seamless access to information.
          </p>
        </div>
      </div>
    </section>
  );
}
