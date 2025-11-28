"use client";
import Image from "next/image";

export default function MobileApps() {
  return (
    <section className="w-full bg-gray-50 pb-28">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto px-6 pt-24 mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Mobile Apps for All Stakeholders
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          A fully integrated mobile experience that keeps every stakeholder connected in real time, ensuring
          accessibility, transparency, and alignment with the School ERP.
        </p>
      </div>

      {/* PARENT APP */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Parent App</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Attendance & academic progress tracking</li>
            <li>🟢 Digital homework, assignments & school announcements</li>
            <li>🟢 Bus tracking & communication with teachers</li>
            <li>🟢 Online fee payments & digital receipts</li>
            <li>🟢 Events, photo gallery & exam results</li>
          </ul>
        </div>
        <Image
          src="/apps/a1.jpg"
          alt="Parent App"
          width={430}
          height={350}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* STUDENT APP */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <Image
          src="/apps/a2.jpg"
          alt="Student App"
          width={430}
          height={350}
          className="rounded-xl shadow-md order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Student App</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Time-table, attendance, homework & assignments</li>
            <li>🟢 Digital ID card & online learning resources</li>
            <li>🟢 Exam schedule, hall tickets & results</li>
            <li>🟢 Communication with teachers & support team</li>
            <li>🟢 Online fee payments (optional)</li>
          </ul>
        </div>
      </div>

      {/* TEACHER APP */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Teacher App</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Attendance & marks entry from mobile device</li>
            <li>🟢 Lesson planning & academic performance reporting</li>
            <li>🟢 Homework uploads & classroom announcements</li>
            <li>🟢 Parent messaging & grievance resolution</li>
            <li>🟢 Reports dashboard & analytics</li>
          </ul>
        </div>
        <Image
          src="/apps/a3.jpg"
          alt="Teacher App"
          width={430}
          height={350}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* ADMIN APP */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <Image
          src="/apps/a4.jpg"
          alt="Admin App"
          width={430}
          height={350}
          className="rounded-xl shadow-md order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Admin App</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Complete school-wide performance & activity monitoring</li>
            <li>🟢 Attendance, timetable & communication dashboards</li>
            <li>🟢 Student, teacher & parent data management</li>
            <li>🟢 Approvals, notifications & workload insights</li>
            <li>🟢 Reports & analytics for better decisions</li>
          </ul>
        </div>
      </div>

      {/* OUTCOME SECTION */}
      <div className="bg-emerald-50 max-w-6xl mx-auto px-6 py-16 rounded-2xl text-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Outcome: A Fully Connected School Ecosystem
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          By empowering all stakeholders with real-time mobile access, schools improve transparency, 
          communication, and productivity — creating a unified learning ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-semibold text-gray-800">
          <p>📱 Higher Engagement</p>
          <p>👨‍👩‍👧 Better Parent-Teacher Connection</p>
          <p>⚡ Faster Communication</p>
          <p>🎯 Improved Performance Across School</p>
        </div>
      </div>
    </section>
  );
}
