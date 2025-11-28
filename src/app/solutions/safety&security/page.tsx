"use client";
import Image from "next/image";

export default function SafetySecurity() {
  return (
    <section className="w-full bg-gray-50 pb-28">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto px-6 pt-24 mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Safety & Security Solutions
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ensuring the safety of students, staff, and assets is our top priority. 
          Our ERP integrates advanced technologies to create secure, monitored, and responsive campus environments.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Campus Security</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Smart ID cards & biometric authentication</li>
            <li>🟢 Secure visitor & gate management system</li>
            <li>🟢 Real-time location tracking for school buses</li>
            <li>🟢 Restricted access zones & monitoring</li>
          </ul>
        </div>
        {/* RIGHT IMAGE */}
        <Image
          src="/safety/img1.jpg"
          alt="Campus Security"
          width={430}
          height={350}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* SECTION 2 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        {/* IMAGE FIRST */}
        <Image
          src="/safety/img2.jpg"
          alt="Student Safety"
          width={430}
          height={350}
          className="rounded-xl shadow-md order-2 md:order-1"
        />
        {/* TEXT */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Student Safety</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Live bus tracking & safe boarding alerts</li>
            <li>🟢 Attendance alerts for parents & staff</li>
            <li>🟢 Real-time student movement tracking inside the campus</li>
            <li>🟢 Emergency alerts & escalation protocols</li>
          </ul>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Surveillance & Monitoring</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 CCTV integration with central monitoring</li>
            <li>🟢 AI-based threat & intrusion detection</li>
            <li>🟢 Fire & hazard detection system automation</li>
            <li>🟢 24×7 campus monitoring dashboard</li>
          </ul>
        </div>
        {/* IMAGE */}
        <Image
          src="/safety/img3.jpg"
          alt="Surveillance & Monitoring"
          width={430}
          height={350}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* SECTION 4 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        {/* IMAGE FIRST */}
        <Image
          src="/safety/img4.jpg"
          alt="Compliance & Safety Protocols"
          width={430}
          height={350}
          className="rounded-xl shadow-md order-2 md:order-1"
        />
        {/* TEXT */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Compliance & Safety Protocols</h2>
          <ul className="space-y-3 text-gray-600">
            <li>🟢 Fire & safety audit reports</li>
            <li>🟢 Evacuation & emergency protocols</li>
            <li>🟢 Access & role-based permissions for staff</li>
            <li>🟢 Safety certification & documentation tracking</li>
          </ul>
        </div>
      </div>

      {/* OUTCOME SECTION */}
      <div className="bg-emerald-50 max-w-6xl mx-auto px-6 py-16 rounded-2xl text-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Outcome: A Secure & Trusted Campus
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          By integrating these safety & security tools, schools benefit from stronger protection,
          improved transparency, and complete peace of mind—for students, parents, and staff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-semibold text-gray-800">
          <p>🛡️ Safer Environment</p>
          <p>💬 Improved Parent Trust</p>
          <p>👁️ Reduced Risks</p>
          <p>📊 Complete Visibility</p>
        </div>
      </div>
    </section>
  );
}
