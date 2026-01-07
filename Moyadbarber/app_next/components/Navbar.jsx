"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Om oss", href: "#om" },
    { name: "Galleri", href: "#galleri" },
    { name: "Kostnad", href: "#kostnad" },
    { name: "Kontakta", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Trigga kontakt direkt om vi är nära botten
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection("#contact");
        return;
      }

      navLinks.forEach((link) => {
        const targetId = link.href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
          const offsetTop = elem.offsetTop;
          const height = elem.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(link.href);
          }
        }
      });

      if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // OPTIMERAD: Ingen fördröjning
  const scrollToSection = (e, href) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 70,
        behavior: "smooth",
      });
    }

    // Stäng menyn omedelbart utan att vänta på scroll
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-[70] top-0 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-black/95 backdrop-blur-md py-4 shadow-2xl"
            : "bg-black py-6"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (isOpen) setIsOpen(false);
              }}
            >
              <div className="bg-white p-2 rounded-sm shrink-0 transition-transform group-hover:rotate-6">
                <Scissors size={20} className="text-black" />
              </div>
              <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white">
                Tina{" "}
                <span className="text-outline-white text-transparent">
                  Barbershop
                </span>
              </span>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[80] text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-black transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-10">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-5xl font-black uppercase italic tracking-tighter transition-all duration-500 ${
                  activeSection === link.href ? "text-white" : "text-white/20"
                }`}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                <span className="text-[10px] not-italic mr-4 text-white/10 font-black tracking-widest">
                  0{i + 1}
                </span>
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`mt-20 transition-all duration-700 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black mb-4">
              Kontakt
            </p>
            <a
              href="https://wa.me/46722872261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-black tracking-widest text-lg italic"
            >
              0722 - 87 22 61
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-white {
          -webkit-text-stroke: 1.5px white;
        }
        @media (max-width: 640px) {
          .text-outline-white {
            -webkit-text-stroke: 0.5px white;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
