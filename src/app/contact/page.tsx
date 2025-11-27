"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SchoolSolutions from "@/component/section/SchoolSolutions";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get <span className="text-emerald-500">in Touch</span> with Us!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            We’d love to hear from you. Whether you have a question, a suggestion,
            or just want to say hello — we’re always here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left - Contact Details */}
          <div className="space-y-10">
            <div>
              <h5 className="text-lg font-semibold text-slate-800 mb-2">Address</h5>
              <p className="text-slate-600 leading-7">
                801, 8th floor, Interface-11, New Link Road,
                <br /> Malad West, Mumbai, MH 400064, India
                <br /> Mobile No: +91 8422887267
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-slate-800 mb-2">Email</h5>
              <p className="text-slate-600 leading-7 space-y-1">
                <a href="mailto:contact@hubblehox.com" className="hover:text-emerald-500 transition">
                  contact@hubblehox.com
                </a>
                <br />
                <a href="mailto:careers@hubblehox.com" className="hover:text-emerald-500 transition">
                  careers@hubblehox.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              {[
                ["facebook", "https://www.facebook.com/share/1AXqgvfz5w/"],
                ["youtube", "https://www.youtube.com/@HubbleHox"],
                ["linkedin", "https://www.linkedin.com/company/hubblehox/"],
                ["instagram", "https://www.instagram.com/hubblehox/"],
              ].map(([icon, link]) => (
                <Link href={link} key={icon} target="_blank">
                  <Image
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    width={28}
                    height={28}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 rounded-2xl shadow-lg space-y-6"
          >
            {[
              { label: "Name*", type: "text", id: "name" },
              { label: "Email*", type: "email", id: "email" },
              { label: "Phone*", type: "tel", id: "phone" },
            ].map((field) => (
              <div key={field.id}>
                <input
                  required
                  type={field.type}
                  placeholder={field.label}
                  className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  value={(form as any)[field.id]}
                  onChange={(e) =>
                    setForm({ ...form, [field.id]: e.target.value })
                  }
                />
              </div>
            ))}

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Shapes / BG Decorative — Optional */}
      <div className="pointer-events-none">
        <img src="/shapes/shape1.png" className="absolute top-12 right-24 w-28 opacity-40" />
        <img src="/shapes/shape2.png" className="absolute bottom-20 left-10 w-32 opacity-30" />
      </div>
    </section>
    <SchoolSolutions />
    </>
  );
}
