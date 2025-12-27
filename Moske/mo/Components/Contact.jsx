"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const containerRef = useRef(null);

  const staff = [
    { name: "Walid Hams", role: "Ordförande", phone: "+46 70 467 52 34" },
    {
      name: "Mahmoud Kaawach",
      role: "Vice-Ordförande",
      phone: "+46 70 710 70 35",
    },
    {
      name: "Jamil Doudar",
      role: "Sjukvårdskoordinator",
      phone: "+46 73 699 95 99",
    },
  ];

  useGSAP(
    () => {
      // 1. Sätt initialt tillstånd (dolda) direkt för att undvika "blink"
      gsap.set(".contact-card", { y: 50, opacity: 0 });
      gsap.set(".contact-header", { x: -30, opacity: 0 });

      // 2. Animera rubriken
      gsap.to(".contact-header", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 90%",
          once: true, // Körs bara en gång
        },
      });

      // 3. Använd BATCH för korten - detta är säkraste sättet för grids
      ScrollTrigger.batch(".contact-card", {
        start: "top 85%",
        once: true, // Triggar aldrig igen när man scrollar upp
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 bg-white" id="kontakt">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Rubrik */}
        <div className="max-w-2xl mb-16 contact-header">
          <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
            Kontakta <span className="text-emerald-600">Oss</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Har du frågor om vår verksamhet eller vill veta mer? Tveka inte att
            höra av dig till oss.
          </p>

          <a
            href="mailto:kontakt@helsingborgsmoske.se"
            className="inline-flex items-center gap-4 bg-gray-50 hover:bg-emerald-50 border border-gray-100 p-4 rounded-2xl transition-all group"
          >
            <div className="bg-emerald-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Allmänna frågor
              </p>
              <p className="text-gray-900 font-bold">
                kontakt@helsingborgsmoske.se
              </p>
            </div>
          </a>
        </div>

        {/* Grid med Personkort */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((person, index) => (
            <div
              key={index}
              className="contact-card group bg-gray-50 border border-gray-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  {person.role}
                </p>
              </div>

              {person.phone && (
                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-emerald-700 transition-colors font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  {person.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
