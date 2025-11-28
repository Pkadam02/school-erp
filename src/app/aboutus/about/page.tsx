"use client";
import CTA from "@/component/section/CTA";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative mt-20 w-full h-[70vh] md:h-[90vh]">
        <Image
          src="/About/MyCB.jpg"
          alt="About Us Banner"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-8xl font-bold tracking-wide mb-20 drop-shadow-lg relative">
            About Us
            <svg
              className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[260px] md:w-[460px] animate-draw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                stroke="#00ffc3"
                strokeWidth="12"
                fill="transparent"
              />
            </svg>
          </h1>

          <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-4 drop-shadow-sm">
            Welcome To EduNestify
          </h4>

          <p className="text-gray-200 text-lg md:text-xl max-w-3xl drop-shadow-md leading-relaxed">
            Empowering every institution with digital transformation to deliver a smarter learning experience.
          </p>
        </div>
      </section>

      {/* CORE MISSION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <h3 className="relative inline-block text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
            Our core mission?
            <svg
              className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[260px] md:w-[360px] animate-draw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                stroke="#00ffc3"
                strokeWidth="12"
                fill="transparent"
              />
            </svg>
          </h3>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Revolutionizing the educational experience with our cutting-edge School ERP Software.
              It is more than an instrument for schools, teachers, and students; it is a bridge that
              links them toward a future where efficiency, security, and connectivity redefine the
              paradigms of education.
            </p>

            <div className="flex justify-center">
              <Image
                src="/About/Mission.jpg"
                alt="ERP Illustration"
                width={450}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="w-full bg-white -mt-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extralight text-left">
            <span className="font-bold">Our Vision:</span> Empowering Education with Technology
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/About/Visions.jpg"
              alt="Vision Illustration"
              width={420}
              height={320}
              className="kn"
            />
          </div>

          <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
            At the heart of MyClassboard lies a vision that dreams of a world in which
            technology and education interlace seamlessly to propel schools toward their
            zenith of operational efficiency and educational quality. Our platform is a
            realization rich with over 40 comprehensive modules.
          </p>
        </div>
      </section>

      {/* 9 CARDS */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { img: 1, title: "Complete School Management:", desc: "Our platform does exactly what a complete solution for an institution says — ensures smooth operations through all departments." },
            { img: 2, title: "Accessibility That's Cloud-Based:", desc: "Access your school's operational backbone from anywhere to everywhere with MyClassboard — efficiency and flexibility at scale." },
            { img: 3, title: "Intuitive Multi-School Management:", desc: "Our system manages multiple branches and educational boards effortlessly with powerful multi-school management capabilities." },
            { img: 4, title: "User-Friendly Experience:", desc: "Designed with stakeholders in mind, the platform makes it easy for any of them to transition onto it." },
            { img: 5, title: "Unmatched Data Security:", desc: "Our highest preference is for data security, which puts multi-level protections in a multi-user environment." },
            { img: 6, title: "Role-Based Access Control:", desc: "Access permissions for each type of user and role are customizable with accountability and security." },
            { img: 7, title: "Franchise Management:", desc: "Our centralized management solutions provide streamlined approaches for managing the education chain." },
            { img: 8, title: "Cost-effective pricing:", desc: "MyClassboard offers very competitive and flexible pricing, meeting all budget requirements." },
            { img: 9, title: "Live Dashboards & Reports:", desc: "Make decisions with powerful insights and real-time data." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-5">
              <div className="flex justify-center">
                <Image src={`/About/${item.img}.png`} alt={item.title} width={80} height={80} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LAST 6 TAG CARDS */}
      <section className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="space-y-3 bg-[var(--hero-btn2)] rounded-3xl p-6 border border-[var(--hero-btn)] lg:w-125">
            <h3 className="text-2xl font-semibold text-gray-900">API Integration:</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Extend the school’s online reach through seamless integration of APIs in forms and applications.
            </p>
          </div>

          <div className="hidden md:block"></div>

          <div className="space-y-3 bg-[var(--hero-btn2)] rounded-3xl  p-6 border border-[var(--hero-btn)] lg:w-125 md:ml-[-155]">
            <h3 className="text-2xl font-semibold text-gray-900">Activity Logs & Productivity Tools:</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Monitor employee activity and increase productivity using our detailed logs and productivity tools.
            </p>
          </div>

          <div className="space-y-3 bg-[var(--hero-btn2)] rounded-3xl  p-6 border border-[var(--hero-btn)] lg:w-125">
            <h3 className="text-2xl font-semibold text-gray-900">Parental Engagement:</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Reinforce the home-school link through our purpose-developed parents app that keeps parents aware and engaged.
            </p>
          </div>

          <div className="hidden md:block"></div>

          <div className="space-y-3 bg-[var(--hero-btn2)] justify-center rounded-3xl  p-6 border border-[var(--hero-btn)] lg:w-125 md:ml-[-155]">
            <h3 className="text-2xl font-semibold text-gray-900">Reliable Support:</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We ensure that you get the assistance you need when you need it.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
