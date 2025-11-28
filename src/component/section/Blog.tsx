"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title:
      "Back to School, Made Simple: How MyClassboard Powers a Seamless Start",
    excerpt:
      "The first day of school is electric, students walk in with fresh uniforms, holding new textbooks, their voices ringing out through the Intent.",
    image: "/Blog/1.jpg",
  },
  {
    id: 2,
    title:
      "Back to School 2025: How to Turn the First Week into a Winning Start",
    excerpt:
      "June. New shoes, new notebooks, and a classroom full of new faces. For students, “back to school” is a season of excitement with completing more.",
    image: "/Blog/2.jpg",
  },
  {
    id: 3,
    title: "How AI is Quietly Transforming Classrooms Worldwide!",
    excerpt:
      "Education is evolving, and AI is the connects local classrooms with global ideas. Artificial intelligence in education is developing area.",
    image: "/Blog/3.jpg",
  },
];

export default function Blogs() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1500px] mx-auto text-center px-4 sm:px-6 lg:px-10">

        {/* TAG */}
        <span className="text-[var(--hero-text)] font-light text-sm tracking-wide">
          BLOGS
        </span>

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Transforming Learning, One Article at a Time
          </h2>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative">
              
              {/* IMAGE */}
              <div className="w-full h-[250px] md:h-[290px] relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* white card */}
              <div className="bg-white border shadow-sm w-[92%] mx-auto px-6 py-7 md:px-8 md:py-8 rounded-md relative -mt-[70px] md:-mt-[90px]">
                <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-800 leading-snug mb-4">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* ensures equal bottom spacing */}
              <div className="h-[20px]" />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/explore-all-products"
            className="bg-[var(--hero-btn)] text-[var(--hero-text)] px-8 py-4 text-lg hover:bg-[var(--hero-btn)]/30 hover:text-black transition-all inline-block"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
