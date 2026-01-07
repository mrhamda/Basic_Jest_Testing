"use client";

import React, { useRef } from "react";
// Fixad import här:
import { Scissors, Award, Clock, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef(null);

  const stats = [
    {
      label: "År av erfarenhet",
      value: "3+",
      icon: <Award className="w-5 h-5" />,
    },
    { label: "Nöjda kunder", value: "5k+", icon: <Star className="w-5 h-5" /> },
    {
      label: "Klippningar",
      value: "1k+",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      label: "Minuter per snitt",
      value: "45",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  useGSAP(
    () => {
      // 1. Initialt tillstånd (dölj bilder och text)
      gsap.set(".about-image", { opacity: 0, y: 40 });
      gsap.set(".about-content-inner > *", { opacity: 0, x: -20 });

      // 2. Animera in bilderna när man scrollar
      gsap.to(".about-image", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // 3. Animera in texten
      gsap.to(".about-content-inner > *", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // 4. Statistik-animation (pop-in effekt)
      gsap.from(".stat-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 95%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="om"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bildgalleri */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="overflow-hidden rounded-sm bg-zinc-900 aspect-[4/5]">
                  <img
                    src="/photos/04.jpg"
                    className="about-image w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Barber hantverk"
                  />
                </div>
                <div className="overflow-hidden rounded-sm bg-zinc-900 aspect-[4/6]">
                  <img
                    src="/photos/03.jpg"
                    className="about-image w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Detaljer"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="overflow-hidden rounded-sm bg-zinc-900 aspect-[4/6]">
                  <img
                    src="/photos/02.jpg"
                    className="about-image w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Salong"
                  />
                </div>
                <div className="overflow-hidden rounded-sm bg-zinc-900 aspect-[4/5]">
                  <img
                    src="/photos/07.jpg"
                    className="about-image w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Klassisk stil"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Textinnehåll */}
          <div className="about-content-inner space-y-8 md:space-y-10 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/40 tracking-[0.5em] uppercase text-[10px] font-bold">
                <span className="w-8 h-[1px] bg-white/30"></span>
                Om oss
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter">
                Hantverk <br />
                <span className="text-outline-white text-transparent">
                  Utan Gränser
                </span>
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light border-l-0 lg:border-l lg:border-white/20 pl-0 lg:pl-6 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Vi är inte bara en barbershop, vi är en destination för modern
              grooming. Sedan starten har vi fokuserat på att kombinera gamla
              skolans traditioner med dagens mest avancerade tekniker.
            </p>

            <div className="stats-grid grid grid-cols-2 gap-y-8 gap-x-4 pt-10 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item space-y-2">
                  <div className="flex items-center gap-3 text-white/30">
                    {stat.icon}
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black italic tracking-tighter">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-white {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
