"use client";

import Image from "next/image";

export default function Product() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mt-10 md:mt-[-150]">

        {/* PRODUCT TITLE */}
        <span className="text-[var(--hero-text)] font-light text-sm tracking-wide">
          PRODUCT
        </span>

        {/* HEADER */}
        <h1 className="text-2xl md:text-[32px] font-extrabold text-gray-900 leading-tight mb-6 px-2">
          Smart Technology for a Smarter Learning Ecosystem
        </h1>

        {/* PARAGRAPH */}
        <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed mb-14 max-w-5xl mx-auto text-center md:text-start">
          A unified School ERP designed to streamline academic, operational, and administrative processes
          across educational institutions. Built with modern technology, automation, and analytics,
          it empowers schools, colleges, coaching institutes, and universities to manage their entire
          ecosystem from a single dashboard. A powerful all-in-one platform that simplifies academic,
          administrative, and communication workflows. Manage everything—from admissions to attendance,
          HR to parent communication on one unified system.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* ERP */}
          <div className="p-6 md:p-8 border flex gap-4 items-start border-blue-200 bg-blue-50 hover:bg-blue-100 transition-all shadow-sm rounded-lg">
            <Image src="/erp.png" alt="ERP icon" width={45} height={45} />
            <div className="text-left">
              <h3 className="text-[18px] md:text-xl font-semibold text-gray-900 mb-2">ERP Management</h3>
              <p className="text-gray-700 text-[14.5px] md:text-[15px] leading-relaxed">
                Streamline daily operations with centralized student data, attendance tracking, exams,
                timetables, fees, transport, and reporting—all in one dashboard.
              </p>
            </div>
          </div>

          {/* Digital Admissions */}
          <div className="p-6 md:p-8 border flex gap-4 items-start border-yellow-200 bg-yellow-50 hover:bg-yellow-100 transition-all shadow-sm rounded-lg">
            <Image src="/Admission.png" alt="Admission icon" width={45} height={45} />
            <div className="text-left">
              <h3 className="text-[18px] md:text-xl font-semibold text-gray-900 mb-2">Digital Admissions</h3>
              <p className="text-gray-700 text-[14.5px] md:text-[15px] leading-relaxed">
                Transform your admission process with online forms, enquiry management, automated verification,
                tracking, and effortless enrollment to boost conversions.
              </p>
            </div>
          </div>

          {/* HR & Payroll */}
          <div className="p-6 md:p-8 border flex gap-4 items-start border-pink-200 bg-pink-50 hover:bg-pink-100 transition-all shadow-sm rounded-lg">
            <Image src="/Hr.png" alt="HR icon" width={45} height={45} />
            <div className="text-left">
              <h3 className="text-[18px] md:text-xl font-semibold text-gray-900 mb-2">HR & Payroll</h3>
              <p className="text-gray-700 text-[14.5px] md:text-[15px] leading-relaxed">
                Manage staff records, attendance, leave, payroll, performance, and compliance effortlessly
                with a complete HR suite designed for educational institutions.
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="p-6 md:p-8 border flex gap-4 items-start border-green-200 bg-green-50 hover:bg-green-100 transition-all shadow-sm rounded-lg">
            <Image src="/Contact.png" alt="Connect icon" width={45} height={45} />
            <div className="text-left">
              <h3 className="text-[18px] md:text-xl font-semibold text-gray-900 mb-2">Connect & Communication</h3>
              <p className="text-gray-700 text-[14.5px] md:text-[15px] leading-relaxed">
                Keep parents, students, and teachers connected through real-time notifications, homework
                updates, results, fee alerts, events & more via mobile app & portal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
