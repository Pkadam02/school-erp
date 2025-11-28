"use client";
import Image from "next/image";

export default function PaymentIntegration() {
  return (
    <section className="w-full bg-gray-50 pb-28">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-3xl mx-auto leading-tight mb-6">
          Seamless Payment Integration for <br /> Your Institution
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Enable frictionless, secure, multi-mode fee payments with full financial reporting, all
          within your ERP.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
            Enable Payments
          </button>
          <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition">
            Request a Demo
          </button>
        </div>
      </div>


      {/* WHAT IT DOES */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What It Does</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "💳",
              title: "Connect Gateways",
              desc: "Integrate with preferred payment gateways for online and card collections."
            },
            {
              icon: "⚙️",
              title: "Automate Collections",
              desc: "Auto-reconcile every collection from the bank, avoiding manual errors."
            },
            {
              icon: "📊",
              title: "Simplify Management",
              desc: "View fee transactions and insights instantly, with full financial reporting."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <p className="text-3xl mb-3">{item.icon}</p>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* DEEP FEATURES */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Deep Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🧾",
              title: "Online Fee Collection",
              desc:
                "Accept payments through a wide array of digital methods including cards, UPI, wallets, net banking, etc. Automated receipts and instant ERP updates."
            },
            {
              icon: "🔄",
              title: "Split Fee Handling",
              desc:
                "Manage fee splits for transport, tuition, books, etc. Auto-allocation into correct heads for accurate reporting and compliance."
            },
            {
              icon: "⏳",
              title: "Real-time Payment Status",
              desc:
                "Track payment status live. Reduce disputes and manual reconciliation with real-time sync between payment gateway and ERP."
            },
            {
              icon: "📑",
              title: "Reconciliation & Reports",
              desc:
                "Transparent financial reporting with detailed insights on transactions, settlements, dues, overdue, and more — downloaded instantly."
            },
            {
              icon: "🛡️",
              title: "Secure & PCI-Compliant",
              desc:
                "Compliant with highest security standards. End-to-end encrypted transactions ensuring data safety and fraud protection."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col gap-3"
            >
              <p className="text-3xl">{item.icon}</p>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* OUTCOME */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Achieve Financial Clarity and Efficiency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {[
              { icon: "📈", title: "Higher Fee Collection", desc: "Increase collection rates with digital & automated payments." },
              { icon: "🤝", title: "Fewer Manual Errors", desc: "Automated reconciliation → no missing transactions." },
              { icon: "🔍", title: "Improved Transparency", desc: "Live status & reports across all stakeholders & payments." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <p className="text-4xl">{item.icon}</p>
                <p className="font-semibold text-gray-900 text-lg">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
