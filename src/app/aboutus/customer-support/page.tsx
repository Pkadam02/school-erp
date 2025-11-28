"use client";
import { useState } from "react";
import Image from "next/image";

export default function CustomerSupport() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Go to the login page → click “Forgot Password” → enter your registered mobile number/email. You'll receive an OTP or reset link to set a new password. Admins can reset staff/parent/student passwords from User Management → Reset Password."
    },
    {
      q: "How do I generate a student report card?",
      a: "Navigate to Examinations → Report Cards → Generate Report Card → Select academic year, class, section & exam type → Click 'Generate'. Report cards can be downloaded or shared with parents instantly."
    },
    {
      q: "Can I customize the parent portal?",
      a: "Yes. Go to Settings → Parent Portal Configuration to enable/disable modules, control visibility for attendance, fees, announcements, homework & communication, and personalize the parent experience."
    },
    {
      q: "Where can I find billing and invoice history?",
      a: "Go to Finance → Student Fees → Transaction History. Search by student ID, invoice, or class to view or download invoices, receipts & outstanding dues. Parents can also access billing history via the mobile app."
    },
    {
      q: "How is student attendance recorded?",
      a: "Teachers can record attendance via Attendance → Daily Attendance on the web portal or app. Biometric & RFID integrations are also supported. Parents receive instant absence alerts through the Connect App."
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-30">
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">How can we help you?</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Find answers to your questions, connect with our support team,
            and get the most out of our system.
          </p>
        </div>

     

        {/* COMMITMENT SECTION */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Our Commitment to Your Success
          </h2>
          <p className="text-gray-600 mb-8">
            We’re enhancing our support structure to provide you with faster, more effective solutions.
            Here’s what you need to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-xl bg-gray-50">
              <h3 className="font-bold text-lg mb-2">How to Raise a Support Ticket</h3>
              <p className="text-gray-600 mb-4">
                All support requests must be logged via our official ticketing system to ensure prompt and structured resolution.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition">
                Create a New Ticket
              </button>
            </div>

            <div className="border p-6 rounded-xl bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Your Relationship Manager</h3>
              <p className="text-gray-600">
                Your Relationship Manager is your strategic partner for escalations and account management —
                they ensure continued success and personalized support.
              </p>
            </div>
          </div>
        </div>

        {/* SELF HELP + TRAINING */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Self-Help & Training Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { title: "Online Training", desc: "Book a session with our experts.", img: "/about/off.png" },
            { title: "Knowledge Base", desc: "Find articles and guides.", img: "/about/know.png" },
            { title: "Video Tutorials", desc: "Watch step-by-step videos.", img: "/about/on.png" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 shadow-md rounded-2xl text-center flex flex-col items-center">
              <img src={item.img} alt={item.title} className="w-16 h-16 mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ + CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT — SUPPORT */}
          <div>
            <Image
              src="/About/customer.jpg"
              alt="Customer Support"
              width={400}
              height={400}
              className="rounded-xl w-full mb-8"
            />

            <div className="bg-white p-6 shadow-md rounded-xl mb-6">
              <p className="font-bold text-gray-900 mb-2">💬 Live Chat</p>
              <p className="text-gray-600 mb-4">
                Get instant answers from our support team.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-50 py-2 rounded-lg font-medium">
                Chat with an Agent
              </button>
            </div>

            <div className="bg-white p-6 shadow-md rounded-xl">
              <p className="font-bold text-gray-900 mb-2">📩 Email Support</p>
              <p className="text-gray-600 mb-4">
                Reference your ticket number for faster help.
              </p>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-50 py-2 rounded-lg font-medium">
                Send us an Email
              </button>
            </div>
          </div>

          {/* RIGHT — FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Top FAQs</h2>

            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white shadow-sm rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 font-medium text-gray-900 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.q}
                  <span>{openFAQ === index ? "−" : "+"}</span>
                </button>

                {openFAQ === index && (
                  <div className="px-5 pb-4 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
