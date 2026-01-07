"use client";

import React, { useRef } from "react";
import { Scissors, Ruler, Baby, Bath, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registrera plugin utanför komponenten för att undvika dubbelregistrering
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Herrklippning",
    price: "200 kr",
    description:
      "Klassisk eller modern herrklippning. Konsultation och styling ingår alltid.",
    icon: <Scissors className="w-5 h-5" />,
    category: "Hår",
  },
  {
    title: "Barnklippning",
    price: "150 kr",
    description:
      "För gentlemän upp till 15 år. En trygg upplevelse med ett proffsigt resultat.",
    icon: <Baby className="w-5 h-5" />,
    category: "Barn",
  },
  {
    title: "Skäggtrimning",
    price: "300 kr",
    description:
      "Formning och linjer med maskin och rakkniv. Avslutas med vårdande skäggolja.",
    icon: <Ruler className="w-5 h-5" />,
    category: "Skägg",
  },
  {
    title: "Tvätt & Lyxstyling",
    price: "200 kr",
    description:
      "Djupgående hårtvätt med skalpmassage följt av en noggrann styling.",
    icon: <Bath className="w-5 h-5" />,
    category: "Hårtvätt",
  },
  {
    title: "Hår & Skägg Paket",
    price: "500 kr",
    description:
      "Den kompletta behandlingen. Vi tar hand om både hår och skägg för en helt ny look.",
    icon: <Sparkles className="w-5 h-5" />,
    category: "Kombination",
  },
  {
    title: "Traditionell Knivrakning",
    price: "400 kr",
    description:
      "Klassisk rakning med varma omslag och rakkniv för en silkeslen känsla.",
    icon: <Scissors className="w-5 h-5" />,
    category: "Rakning",
  },
];

export default function Cost() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Tvinga ScrollTrigger att räkna om positioner
      ScrollTrigger.refresh();

      // 1. Header Animation
      gsap.fromTo(
        ".cost-header-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. Grid Cards Animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        }
      );

      // 3. Info Box Animation
      gsap.fromTo(
        ".info-box",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".info-box",
            start: "top 95%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 border-t border-white/5"
      id="kostnad"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="cost-header-item flex items-center gap-4 text-white/40 tracking-[0.5em] uppercase text-[10px] font-black">
            <span className="w-8 h-[1px] bg-white/30"></span>
            Kostnad
            <span className="w-8 h-[1px] bg-white/30"></span>
          </div>
          <h2 className="cost-header-item text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter text-white">
            Vår <br />
            <span className="text-outline-white text-transparent">
              Prislista
            </span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-black p-8 transition-colors duration-500 hover:bg-[#0a0a0a]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 text-white/60 group-hover:bg-white group-hover:text-black transition-all duration-500 rounded-sm">
                  {service.icon}
                </div>
                <span className="text-2xl font-black italic text-white tracking-tighter">
                  {service.price}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/30 italic">
                  {service.category}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:translate-x-1 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="info-box mt-16 p-8 border border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 bg-gradient-to-r from-transparent via-white/5 to-transparent">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-white font-bold uppercase text-xs tracking-widest">
              Behöver du en specialbehandling?
            </p>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Vi erbjuder även skräddarsydda bokningar vid behov.
            </p>
          </div>
          <a
            href="https://wa.me/46722872261?text=Hej!%20Jag%20skulle%20vilja%20boka%20en%20tid."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block whitespace-nowrap px-12 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-gray-200 transition-all duration-300"
          >
            Boka tid
          </a>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-white {
          -webkit-text-stroke: 1.5px white;
        }
      `}</style>
    </section>
  );
}
