"use client";
import { useState } from "react";
import Image from "next/image";

export default function Team() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Administration", "Academics", "IT Support"];

  const teamMembers = [
    {
      name: "Dr. Evelyn Reed",
      role: "Principal",
      category: "Administration",
      desc: "With over 20 years in educational leadership, Dr. Reed is dedicated to fostering an environment of academic excellence.",
      img: "/team/team1.jpg",
    },
    {
      name: "Mr. Marcus Thorne",
      role: "Vice Principal",
      category: "Administration",
      desc: "Mr. Thorne oversees daily operations and student affairs, ensuring a safe and productive learning atmosphere for all.",
      img: "/team/team2.jpg",
    },
    {
      name: "Dr. Anya Sharma",
      role: "Head of Academics",
      category: "Academics",
      desc: "Dr. Sharma develops and oversees our innovative curriculum, ensuring it meets the highest academic standards.",
      img: "/team/team6.jpg",
    },
    {
      name: "Mr. David Chen",
      role: "Director of Admissions",
      category: "Administration",
      desc: "Mr. Chen is the first point of contact for prospective families, guiding them through the admissions process.",
      img: "/team/team3.jpg",
    },
    {
      name: "Ms. Maria Rodriguez",
      role: "Lead Counselor",
      category: "Academics",
      desc: "Ms. Rodriguez leads our student support services, providing guidance and mentoring to help students thrive.",
      img: "/team/team5.jpg",
    },
    {
      name: "Mr. Samuel Jones",
      role: "IT Director",
      category: "IT Support",
      desc: "Mr. Jones manages the school’s technology infrastructure to ensure seamless learning and digital access.",
      img: "/team/team4.jpg",
    },
  ];

  const filteredTeam =
    filter === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === filter);

  return (
    <section className="bg-white min-h-screen py-20">

      {/* HERO */}
      <div className="bg-emerald-300 text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Meet Our Dedicated Team
        </h1>
        <p className="text-gray-800 max-w-2xl mx-auto text-lg">
          The passionate and experienced professionals dedicated to fostering innovation
          and a supportive learning environment for our students.
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Leadership & Administration
        </h2>

        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                filter === cat
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {filteredTeam.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.img}
              alt={member.name}
              width={220}
              height={220}
              className="w-48 h-48 rounded-full mx-auto object-cover mb-6 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
