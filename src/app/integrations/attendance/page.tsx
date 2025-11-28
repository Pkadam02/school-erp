"use client";
export default function AttendancePage() {
  return (
    <section className="w-full bg-gray-50 pb-28">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-3xl mx-auto leading-tight mb-6">
          Seamless Attendance Integration<br />for Your Institution
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Enable effortless, accurate, real-time attendance tracking for students and staff — fully integrated with your ERP.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
            Enable Attendance
          </button>
          <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition">
            Request a Demo
          </button>
        </div>
      </div>


      {/* WHAT IT DOES */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What It Does</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📌",
              title: "Automated Attendance",
              desc: "Mark attendance from mobile apps, biometric devices, RFID, or web dashboards instantly."
            },
            {
              icon: "🔄",
              title: "Real-Time Sync",
              desc: "Instant ERP synchronization — no manual imports or updates required."
            },
            {
              icon: "⏱️",
              title: "Live Tracking",
              desc: "View daily, weekly, and monthly attendance statistics for students and staff."
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <p className="text-3xl mb-3">{item.icon}</p>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* DEEP FEATURES */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Deep Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📍",
              title: "Biometric & RFID Attendance",
              desc:
                "Instant biometric and RFID device sync for students and staff with automatic ERP update."
            },
            {
              icon: "📱",
              title: "Mobile App Attendance",
              desc:
                "Teachers and staff can mark attendance from mobile apps — perfect for field trips, buses, and remote activities."
            },
            {
              icon: "✏️",
              title: "Class & Period-Wise Tracking",
              desc:
                "Track multiple attendance types — full day, half day, late arrival, early exit, and section-wise attendance."
            },
            {
              icon: "🚍",
              title: "Bus Boarding Attendance",
              desc:
                "Track who boarded / deboarded each bus in real time to ensure student safety."
            },
            {
              icon: "🔔",
              title: "Notifications & Alerts",
              desc:
                "Send auto-alerts to parents for absenteeism, late arrival, and early exit directly via app or SMS."
            },
            {
              icon: "📊",
              title: "Reports & Analytics",
              desc:
                "Detailed reports for monthly, semester, custom periods & export-ready analytics for audits and compliance."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col gap-3"
            >
              <p className="text-3xl">{item.icon}</p>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* OUTCOME */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Achieve Accuracy, Accountability & Safety
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {[
              { icon: "✔️", title: "Zero Manual Errors", desc: "Fully automated attendance eliminates errors and duplication." },
              { icon: "🚀", title: "Real-Time Visibility", desc: "Live tracking dashboards for parents, teachers, and management." },
              { icon: "🛡️", title: "Enhanced Safety", desc: "Accurate attendance ensures student safety at every moment." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <p className="text-4xl">{item.icon}</p>
                <p className="font-semibold text-gray-900 text-lg">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
