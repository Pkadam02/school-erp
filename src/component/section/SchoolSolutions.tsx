"use client";
import Image from "next/image";

export default function SchoolSolutions() {
  const leftItems = [
    { title: "Admission", desc: "Boost your admission turnover 10X with minimal efforts." },
    { title: "Fee Collection", desc: "Swift online fee payment collection supports continuous schooling." },
    { title: "Communication", desc: "Lead improved school engagement with uninterrupted communications." },
    { title: "Transport", desc: "Ensure a virtual safety net around your school bus with real-time GPS tracking." },
    { title: "HR & Payroll", desc: "Enhance your workplace culture with automated payroll and staffing needs." },
  ];

  const rightItems = [
    { title: "Visitor Management", desc: "Smartly regulate the flow of visitors to reduce the chances of unauthorized entries." },
    { title: "Gradebook", desc: "Switch to intelligent automation for fair & unbiased grading for exams or assignments." },
    { title: "Student Information System", desc: "Digitally organize student details for quick reference through the student digital database." },
    { title: "Inventory Management", desc: "Smartly manage inventory resources, purchasing, and distributing assets across departments." },
  ];

  const demoBoxes = [
    {
      title: "Product Knowledge",
      desc: "Understand our product in and out.",
      icon: "/Product_k.png"
    },
    {
      title: "Resolution",
      desc: "Know how our product aligns with your challenges to resolve them.",
      icon: "/Resolution.png"
    },
    {
      title: "Benefits",
      desc: "Discover unique features to advance your school operations.",
      icon: "/Benefits.png"
    },
  ];

  return (
    <>
    

      {/* DEMO BOXES */}
      <section className="w-full bg-white py-10">
      <h2 className="text-center text-3xl font-bold text-gray-900 pb-20">
          What you will gain from our demo
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {demoBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-white border border-slate-900 hover:border-pink-400 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex justify-center mb-6">
                <Image src={box.icon} alt={box.title} width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">
                {box.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {box.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SMART SCHOOL HEADING */}
    

      {/* MAIN 3-COLUMN SECTION WITH BOXES */}
      <section className="w-full bg-white py-24">
      <h2 className="text-center text-3xl font-bold pb-20 text-gray-900">
          Your Smart School Partner
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">

          {/* LEFT SIDE BOXES */}
          <div className="flex flex-col gap-8">
            
            {leftItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-white hover:border-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-[20px] font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex items-center justify-center">
            <Image
              src="/call.png"
              alt="Solutions"
              width={380}
              height={450}
              className="object-contain"
            />
          </div>

          {/* RIGHT SIDE BOXES */}
          <div className="flex flex-col gap-8">
            {rightItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 hover:border-gray-400 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-[20px] font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
