"use client";
import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">

        {/* TITLE */}
        <span className="text-[var(--hero-text)] font-light text-sm tracking-wide">
          SOLUTION
        </span>

        {/* HEADER AREA */}
        <div className="text-center mb-16 mt-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Explore Our Premier ERP & LMS Solutions
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed text-[15px] md:text-[16px] max-w-5xl mx-auto text-center md:text-start">
            Discover how our innovative solutions can transform your educational environment.
            We prioritize Safety & Security with Visitor Management, Transport Management,
            and RFID systems to ensure a safe and secure learning atmosphere.
            Our Mobile Apps for School ERP provide flexibility and convenience for
            students and educators — anytime, anywhere.
            We support Curriculum-Based grading systems including CBSE, State Board, IB,
            IGCSE, ICSE & Higher Education to foster aligned academic growth.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">

          {/* CARD 1 */}
          <div className="p-8 text-center group transition-all duration-300 bg-white rounded-lg md:bg-transparent">
            <Image
              src="/Safety.jpg"
              alt="Safety & Security"
              width={200}
              height={160}
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Safety & Security</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Prioritize campus safety with robust measures & protocols.
            </p>
            <Link href="/safety-and-security" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </Link>
          </div>

          {/* LINE IMAGE (SHOWN ONLY ON DESKTOP) */}
          <div className="hidden md:flex justify-center">
            <img src="/line-1.png" alt="line" className="h-[380px]" />
          </div>

          {/* CARD 2 */}
          <div className="p-8 text-center group transition-all duration-300 bg-white rounded-lg md:bg-transparent">
            <Image
              src="/Mobile.jpg"
              alt="Mobile Apps"
              width={120}
              height={160}
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Enhance accessibility & engagement with dedicated mobile applications.
            </p>
            <Link href="/mobile-apps" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </Link>
          </div>

          {/* LINE IMAGE (SHOWN ONLY ON DESKTOP) */}
          <div className="hidden md:flex justify-center">
            <img src="/line-1.png" alt="line" className="h-[380px]" />
          </div>

          {/* CARD 3 */}
          <div className="p-8 text-center group transition-all duration-300 bg-white rounded-lg md:bg-transparent">
            <Image
              src="/Based.jpg"
              alt="Curriculum Based"
              width={200}
              height={160}
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Curriculum Based</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tailor content & grading systems to CBSE, IB, IGCSE, ICSE & more.
            </p>
            <Link href="/lms" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </Link>
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="px-6 py-4 bg-[var(--hero-btn)] text-slate-900 font-semibold hover:bg-emerald-300 transition-all rounded-md inline-block"
          >
            Explore Our Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
