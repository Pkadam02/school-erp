"use client";
import Link from "next/link";

export default function ERP() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen pb-32">

      {/* HERO GRADIENT CARD */}
      <div className="max-w-6xl mx-auto px-6 pt-30">
        <div className="rounded-2xl w-full p-12 md:p-20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
          bg-gradient-to-br from-[#0C3E59] via-[#1D6A8A] to-[#3DC7C9] text-white">
          
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            The Central Engine for Your<br />School’s Operations
          </h1>

          <p className="text-lg md:text-xl opacity-95 max-w-3xl mb-10">
            Our ERP enables schools to manage and automate both their academic and administrative operations from one unified platform — simplifying work and improving efficiency across every process.
          </p>

          <Link
            href="#"
            className="bg-white hover:bg-gray-100 text-[#003B5C] font-semibold px-8 py-4 rounded-lg shadow transition"
          >
            Request a Live Demo
          </Link>
        </div>
      </div>

      {/* FEATURES SECTION TITLE */}
      <div className="max-w-6xl mx-auto text-center px-6 mt-20 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Deep Features</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore the core features designed to make ERP a complete solution.
        </p>
      </div>

      {/* FEATURES CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Student Information System",
            items: [
              "Centralized student profiles",
              "Attendance & academics",
              "Health records & certificates",
            ],
          },
          {
            title: "Academics & Timetable",
            items: [
              "Auto timetable generator",
              "Class & teacher allocation",
              "Academic year planning",
            ],
          },
          {
            title: "Attendance Tracking",
            items: [
              "Daily & subject-wise tracking",
              "Biometric / RFID support",
              "Parent app notifications",
            ],
          },
          {
            title: "Fees & Finance Management",
            items: [
              "Online fee collection",
              "Auto invoices & reminders",
              "Full finance reports",
            ],
          },
          {
            title: "Exams & Report Cards",
            items: [
              "Mark entry & gradebooks",
              "Smart report card formats",
              "CBSE / ICSE / IB supported",
            ],
          },
          {
            title: "Transport & Hostel",
            items: [
              "Student allocation",
              "Live route tracking",
              "Safety monitoring",
            ],
          },
          {
            title: "Library Management",
            items: [
              "Digital catalog",
              "Issue & return logs",
              "Auto fine calculation",
            ],
          },
        ].map((box, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-3">{box.title}</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {box.items.map((list, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA BOTTOM SECTION */}
      <div className="max-w-5xl mx-auto mt-24 px-6">
        <div className="bg-white shadow-md border border-gray-200 rounded-2xl text-center p-14">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your School’s Management?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Take a live product tour and see how automation empowers smarter school operations.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition"
            >
              Get Started Today
            </Link>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-lg transition">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
