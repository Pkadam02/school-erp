"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className="w-full fixed top-0 z-[999] bg-[var(--nav-bg)] transition-all shadow-[0_4px_25px_rgba(0,0,0,0.1)]"
      ref={menuRef}
    >
      <div className="max-w-[1450px] h-20 mx-auto flex items-center justify-between py-4 px-4 xl:px-0">
        <Link href="/" className="flex items-center gap-2">
          <img src="/Navbar.png" alt="Logo" width={120} className="h-25 mt-4 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-15">
          <MegaMenu
            label="About"
            id="about"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            title="About Us"
            links={[
              ["My Class Board", "/about/my-class-board"],
              ["News Letter", "/about/news-letter"],
              ["Team", "/about/team"],
              ["Partner", "/about/partner"],
              ["Customer Support", "/about/customer-support"],
            ]}
            explore="/about"
            descTitle="Who We Are"
            desc="Learn about our journey, leadership team, partners, and global support ecosystem."
            banner="/about.jpg"
          />

          <MegaMenu
            label="Product"
            id="product"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            title="Products"
            links={[
              ["ERP", "/products/erp"],
              ["Admission", "/products/admission"],
              ["HR", "/products/hr"],
              ["Connect", "/products/connect"],
            ]}
            explore="/products"
            descTitle="Why Our Product Suite"
            desc="Centralize operations with ERP, streamline admissions, empower HR, and stay connected — all in one platform."
            banner="/product.jpg"
          />

          <MegaMenu
            label="Solution"
            id="solution"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            title="Solutions"
            links={[
              ["Safety & Security", "/solutions/safety-security"],
              ["Mobile Apps", "/solutions/mobile-apps"],
              ["Based on Curriculum", "/solutions/based-on-curriculum"],
            ]}
            explore="/solutions"
            descTitle="Designed for Schools"
            desc="Ensure safety, boost engagement, and align every learning experience."
            banner="/solution.jpg"
          />

          <MegaMenu
            label="Integration"
            id="integration"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            title="Integrations"
            links={[
              ["LMS Integration", "/integrations/lms"],
              ["Admission Integration", "/integrations/admission"],
              ["Payment Integration", "/integrations/payment"],
              ["Attendance Integration", "/integrations/attendance"],
            ]}
            explore="/integrations"
            descTitle="Connect Your Ecosystem"
            desc="Seamlessly connect LMS, admissions, payments & attendance with your core."
            banner="/integration.jpg"
          />

          <Link href="/blog" className="text-[var(--nav-text)] hover:text-[var(--nav-btn)] transition">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden xl:inline-flex px-6 py-4 bg-[var(--nav-btn)] text-slate-900 text-sm font-semibold hover:bg-[var(--nav-btn)]/40 transition"
          >
            Book a demo
          </Link>
          <button
            className="xl:hidden mr-5 text-slate-900 text-4xl"
            onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="xl:hidden bg-slate-950 text-slate-100 border-t border-slate-800 h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 transition-all duration-300">
          <div className="px-5 py-6 space-y-15 text-sm">
            {[
              {
                id: "about",
                title: "About",
                links: [
                  ["My Class Board", "/about/my-class-board"],
                  ["News Letter", "/about/news-letter"],
                  ["Team", "/about/team"],
                  ["Partner", "/about/partner"],
                  ["Customer Support", "/about/customer-support"],
                ],
              },
              {
                id: "product",
                title: "Product",
                links: [
                  ["ERP", "/products/erp"],
                  ["Admission", "/products/admission"],
                  ["HR", "/products/hr"],
                  ["Connect", "/products/connect"],
                  ["Explore All Products", "/products"],
                ],
              },
              {
                id: "solution",
                title: "Solution",
                links: [
                  ["Safety & Security", "/solutions/safety-security"],
                  ["Mobile Apps", "/solutions/mobile-apps"],
                  ["Based on Curriculum", "/solutions/based-on-curriculum"],
                  ["Explore All Solutions", "/solutions"],
                ],
              },
              {
                id: "integration",
                title: "Integration",
                links: [
                  ["LMS Integration", "/integrations/lms"],
                  ["Admission Integration", "/integrations/admission"],
                  ["Payment Integration", "/integrations/payment"],
                  ["Attendance Integration", "/integrations/attendance"],
                  ["Explore All Integrations", "/integrations"],
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <button
                  className="w-full mt-5 flex items-center justify-between text-left text-[var(--nav-btn)]font-semibold transition-all"
                  onClick={() => setOpenMenu(openMenu === section.id ? null : section.id)}
                >
                  {section.title}
                  <span className=" text-s transition-all">
                    {openMenu === section.id ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    openMenu === section.id ? "h-44 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 flex flex-col gap-2 pl-3 border-l border-slate-700">
                    {section.links.map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        className={`block py-1 ${
                          label.includes("Explore") ? "text-emerald-300 font-medium" : ""
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="mb-10 flex flex-col gap-15">
              <Link href="/blog" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-5 w-60 ml-15 text-center bg-emerald-400 text-[var(--nav-btn)] font-semibold hover:bg-emerald-300 transition-all"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* Desktop Mega Menu */
const MegaMenu = ({
  label,
  id,
  openMenu,
  setOpenMenu,
  title,
  links,
  explore,
  descTitle,
  desc,
  banner,
}: any) => {
  const timeoutRef = useRef<any>(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(id);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 100);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex p-6 items-center gap-1 text-[var(--nav-text)] hover:text-emerald-300 transition">
        {label} ▾
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-24  -translate-x-1/2 w-[1000px] mt-[-11] transition-all duration-300 ease-out origin-top
        ${openMenu === id ? "opacity-100 translate-y-4 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
        style={{ zIndex: 40 }}
      >
        <div className="bg-[var(--nav-bg0)] text-slate-100 shadow-2xl py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-16">
            <div>
              <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-3">{title}</h4>
              <ul className="space-y-2 text-sm">
                {links.map(([label, href]: any) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-emerald-300 transition"
                      onClick={() => setOpenMenu(null)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={explore}
                onClick={() => setOpenMenu(null)}
                className="block mt-4 text-xs uppercase font-semibold text-emerald-300 hover:text-emerald-200 transition"
              >
                Explore All →
              </Link>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-3">{descTitle}</h4>
              <p className="text-sm leading-relaxed">{desc}</p>
            </div>

            <div className="hidden md:flex items-center justify-center p-0 overflow-hidden bg-slate-800 rounded-xl">
              <img
                src={banner}
                alt="banner"
                className="object-cover w-full h-full transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
