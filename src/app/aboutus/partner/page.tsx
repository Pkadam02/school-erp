"use client";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section className="w-full bg-gray-50 py-30">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0C3E59] via-[#1D6A8A] to-[#3DC7C9] rounded-3xl text-center py-24 px-6 mb-20 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Bringing It All Together for Your School
          </h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg mb-10">
            Our integrated ERP solution simplifies school management, empowers educators,
            and fosters a connected community — all from one unified platform.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              href="#partners"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Explore Our Partnerships
            </Link>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold transition">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* 3 FEATURE CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
        {[
          {
            title: "Streamlined Operations",
            desc: "Unify all your administrative tasks, from admissions to finance — in one seamless system.",
            icon: "/icons/stack.png",
          },
          {
            title: "Empowered Educators",
            desc: "Provide teachers with the tools they need for efficient classroom management and student engagement.",
            icon: "/icons/teacher.png",
          },
          {
            title: "Engaged Community",
            desc: "Connect students, parents, and staff with transparent communication & easy access to information.",
            icon: "/icons/group.png",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm text-center"
          >
            <img src={card.icon} alt={card.title} className="w-12 h-12 mx-auto mb-5" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* POWER OF PARTNERSHIP SECTION */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
          Stronger Together: The Power of Partnership
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Our ERP’s strength is amplified by a robust ecosystem of integrated partners.
          Discover how our collaborative network enhances functionality and provides
          tailored solutions for every aspect of your institution.
        </p>

        <Link
          href="#partners"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          See Our Partners
        </Link>
      </div>

      {/* PARTNERS GRID */}
      <div id="partners" className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Our Valued Partners & Collaborations
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          We collaborate with leading educational technology providers, academic institutions,
          and organizations to enhance our ERP ecosystem.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            { name: "EduTech Solutions", tag: "Learning Management System" },
            { name: "Digital Learning Inc.", tag: "E-Learning Content Provider" },
            { name: "CampusSecure", tag: "Student Safety & Security" },
            { name: "Global Tech University", tag: "Academic Curriculum Partner" },
            { name: "Innovate Academy", tag: "Research & Development" },
            { name: "SmartClass Analytics", tag: "Data Analytics Integration" },
            { name: "National School Board", tag: "Accreditation & Standards" },
            { name: "ParentConnect App", tag: "Parent Communication Platform", },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="w-full h-14 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-700 font-semibold">
                {item.name.slice(0, 2)}
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{item.name}</h4>
              <p className="text-gray-600 text-xs">{item.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
