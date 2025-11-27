"use client";
import Image from "next/image";
import Link from "next/link";

export default function Voices() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Principal – Lotus International School",
      feedback:
        "This ERP system transformed our administrative workflow. From fee collection to examination — everything is now seamless and digitized.",
      img: "/parent1.png",
    },
    {
      name: "Priya Desai",
      role: "Teacher – Mount Valley Academy",
      feedback:
        "The LMS platform has completely changed the way we teach. Students are actively engaged and performance tracking is effortless.",
      img: "/parent2.png",
    },
    {
      name: "Anil Kumar",
      role: "Admin – Global Public School",
      feedback:
        "Mobile apps and Transport Management have drastically improved communication and safety for parents and students.",
      img: "/parent3.png",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <span className="text-black tracking-widest font-medium">
          VOICES
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          Hear What Schools & Educators Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-md">
          The trust of thousands of institutions drives us to constantly innovate.
          Explore feedback from principals, teachers, admins & parents using our ERP & LMS solutions.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 border  transition-all duration-300"
            >
              <Image
                src={item.img}
                width={90}
                height={90}
                alt={item.name}
                className="rounded-full mx-auto mb-6 border"
              />
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{item.feedback}"
              </p>
              <h4 className="font-semibold text-lg text-gray-900">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>

        

        {/* CTA */}
        <div className="mt-20">
        <Link
            href="/explore-all-products"
            className="bg-[var(--hero-btn)] text-[var(--hero-text)] px-8 py-4  text-lg  hover:bg-[var(--hero-btn)]/30 hover:text-black transition-all"
          >
            Share Your Experience →
          </Link>
        </div>
      </div>
    </section>
  );
}
