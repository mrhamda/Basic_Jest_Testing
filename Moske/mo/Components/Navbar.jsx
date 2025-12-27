"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hem");

  // Navigeringslänkar konfigurerade i en array för att enkelt kunna loopa
  const navItems = [
    { id: "hem", label: "Hem" },
    { id: "om-oss", label: "Om oss" },
    { id: "aktiviteter", label: "Aktiviteter" },
    { id: "galleri", label: "Galleri" },
    { id: "kontakt", label: "Kontakt" },
    { id: "sponsorer", label: "Sponsorer" },
  ];

  // ScrollSpy logik: Detekterar vilken sektion användaren är på
  useEffect(() => {
    const handleScroll = () => {
      const offset = 100; // Marginal för att byta aktiv länk lite innan man når toppen
      const scrollPosition = window.scrollY + offset;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  // Komponent för länkarna med aktivt tillstånd
  const NavLink = ({ targetId, children }) => {
    const isActive = activeSection === targetId;

    return (
      <li>
        <button
          onClick={(e) => scrollToSection(e, targetId)}
          className={`relative block py-2 px-3 transition-all duration-300 md:p-0 text-left w-full md:w-auto font-medium cursor-pointer
            ${
              isActive
                ? "text-emerald-600 scale-105"
                : "text-gray-700 hover:text-emerald-600 hover:scale-105"
            } group`}
        >
          {children}
          {/* Underlinje som alltid syns vid aktiv eller hovring */}
          <span
            className={`absolute left-0 bottom-[-4px] h-0.5 bg-emerald-600 transition-all duration-300 
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
          ></span>
        </button>
      </li>
    );
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 top-0 start-0 border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "hem")}
          className="flex items-center space-x-3 transition-transform hover:opacity-80 cursor-pointer"
        >
          <img src="moske.ico" className="h-8" alt="Helsingborg Logo" />
          <span className="self-center text-xl font-bold whitespace-nowrap text-gray-800 tracking-tight">
            Helsingborg <span className="text-emerald-600">moské</span>
          </span>
        </a>

        {/* Mobil-knapp */}
        <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          >
            <span className="sr-only">Öppna meny</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigeringslänkar */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0 md:max-h-full md:opacity-100 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-xl bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navItems.map((item) => (
              <NavLink key={item.id} targetId={item.id}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
