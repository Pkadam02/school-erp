"use client";
import Image from "next/image";

export default function AdmissionIntegration() {
  return (
    <section className="w-full bg-gray-50 pb-28">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Seamless <br /> Admission <br /> Integration
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Connect your digital admission system with our ERP for
            faster, error-free onboarding and a streamlined enrollment process.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
            Book a Free Demo →
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/about/admission-banner.png"
            alt="Admission Integration Banner"
            className="rounded-xl w-full md:max-w-md shadow-md"
          />
        </div>
      </div>


      {/* WHAT IT DOES */}
      <div className="max-w-6xl mx-auto px-6 mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What It Does</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our Admission Integration module automates and synchronizes the entire student journey from
          initial contact to final enrollment. It seamlessly connects your enquiry, application, document,
          and enrollment data directly with the ERP, eliminating manual entry and ensuring data integrity.
        </p>
      </div>


      {/* DEEP FEATURES */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Deep Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "💬",
              title: "Enquiry Sync",
              desc: "Capture web, WhatsApp, and offline enquiries and sync them directly into the ERP."
            },
            {
              icon: "📄",
              title: "Application & Form Data",
              desc: "Sync submitted admission forms along with uploaded documents and personal details."
            },
            {
              icon: "🧾",
              title: "Fee Mapping",
              desc: "Map fee categories defined in ERP and ensure validation during admission workflow."
            },
            {
              icon: "📌",
              title: "Seat Availability Sync",
              desc: "Real-time updates of available seats based on approvals and rejected applications."
            },
            {
              icon: "⚙️",
              title: "Enrollment Automation",
              desc: "Auto-creation of student profiles, sections, admission numbers, and parent login."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-7 shadow-md rounded-xl border border-gray-100 flex flex-col gap-3"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* OUTCOME STRIP */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 text-center">
          <h2 className="font-bold text-2xl text-gray-900 mb-8">The Outcome: Flawless Onboarding</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {[
              { icon: "🧾", label: "Zero Paperwork" },
              { icon: "♾️", label: "Zero Duplication" },
              { icon: "⚡", label: "Faster Admissions" },
              { icon: "✔️", label: "100% Accuracy" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-4xl">{item.icon}</div>
                <p className="font-semibold text-gray-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
