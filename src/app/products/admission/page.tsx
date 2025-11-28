"use client";
import Image from "next/image";

export default function AdmissionPage() {
  return (
    <section className="w-full bg-gray-50 py-18">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-18 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT BLOCK */}
        <div>
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Admission Management:<br /> 
            A Seamless Digital<br />
            Onboarding Experience
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            Streamline your entire admission workflow. From enquiry to enrollment,
            our digital admission process ensures efficiency, transparency, and
            a better experience for parents and staff.
          </p>
          <button className="px-7 py-4 bg-[var(--hero-btn)] text-[var(--hero-text)] font-semibold hover:bg-[var(--hero-btn)]/40 transition">
            Request a Demo
          </button>
        </div>

        {/* RIGHT BANNER IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/add.jpg"
            alt="Admission Banner"
            width={450}
            height={350}
            className="object-cover"
          />
        </div>
      </div>

      {/* FEATURES TITLE */}
      <h2 className="text-3xl font-extrabold text-center mt-24 mb-4 text-gray-900">
        Deep Features
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Explore the powerful functional links that make our digital onboarding process
        the best choice for your institution.
      </p>

      {/* GRID FEATURES */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Enquiry & Lead Management",
            desc: "Track and manage all enquiries with real-time dashboards and automated follow-ups.",
          },
          {
            title: "Online Admission Forms",
            desc: "Paperless admission forms accessible anytime for parents with uploads for documents.",
          },
          {
            title: "Interview & Assessment",
            desc: "Schedule interviews and assessments with automated reminders and tracking.",
          },
          {
            title: "Merit & Approval Workflow",
            desc: "Configurable multi-level approval workflows to speed up selection and admission decisions.",
          },
          {
            title: "Onboarding & Enrollment",
            desc: "Auto-generate student records, roll numbers, and fee structure after confirmation.",
          },
          {
            title: "Document Verification",
            desc: "Seamless document collection, verification and digital safe storage.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-7 shadow-md rounded-2xl hover:shadow-lg transition cursor-pointer">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="mt-24 bg-white rounded-2xl shadow-sm max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Ready to Transform Your Admission<br />Process?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          See our platform in action and learn how it can cater to your school’s unique needs.
        </p>

        <button className="px-7 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Request a Demo
        </button>
      </div>
    </section>
  );
}
