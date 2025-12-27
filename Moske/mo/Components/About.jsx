"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrera pluginet
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          // once: true gör att animationen körs klart och sedan raderas triggern
          once: true,
        },
      });

      // 1. Animera rubrik och text (glid upp och fade)
      tl.from(".animate-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 2. Animera bildbehållaren med en "Image Reveal" (clip-path)
      // Detta gör att bilden ser ut att expandera utåt
      tl.from(
        ".animate-image",
        {
          clipPath: "inset(100% 0% 0% 0%)", // Börjar helt dold från botten
          scale: 1.2, // Startar lite inzoomad för en parallax-känsla
          opacity: 0,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.6"
      );

      // 3. Animera det flytande kortet (poppa upp med bounce)
      tl.from(
        ".animate-card",
        {
          y: 40,
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(2)",
        },
        "-=0.4"
      );

      // 4. Den kontinuerliga loopen (Svävande rörelse)
      // Vi startar denna separat så den inte blockeras av timelinen
      gsap.to(".animate-card", {
        y: "-=12",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative bg-white overflow-hidden"
      id="om-oss"
    >
      <div className="max-w-screen-xl mx-auto px-8 py-16 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="animate-text text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Välkommen till <br />
            <span className="text-emerald-600">Vår Församling</span>
          </h1>
          <p className="animate-text text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Vi är en mötesplats för andlig växt, gemenskap och stöd. Utforska
            våra aktiviteter, bönestunder och hur vi tillsammans bygger en
            starkare framtid för vårt lokalsamhälle. Föreningen Helsingborgs
            Moské Ahel Alsunnah är den största och äldsta muslimska församlingen
            i Helsingborg. Den grundades 1993 och har för närvarande 2 000
            medlemmar. Församlingen är en demokratisk ideell allmännyttig
            förening och bedrivs utan några vinstintressen.
          </p>
          <div className="animate-text flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://medlem.fifs.se/AAFH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 transition-all hover:scale-105 cursor-pointer">
                Bli medlem hos FIFS
              </button>
            </a>
          </div>
        </div>

        {/* Hero Image Area */}
        <div className="flex-1 w-full relative mt-12 lg:mt-0">
          {/* Bildbehållare */}
          <div className="animate-image relative aspect-square max-w-[500px] mx-auto bg-white rounded-[3rem] overflow-hidden border-8 border-gray-50 shadow-2xl flex items-center justify-center p-8">
            <img
              src="fifs-logo.png"
              alt="FIFS Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Floating Card */}
          <div className="animate-card absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-[-20%] bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 z-20 min-w-[160px] text-center lg:text-left">
            <p className="text-emerald-600 font-black text-3xl mb-1">100%</p>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
              Öppet för alla
            </p>
          </div>

          {/* Dekoration bakom bilden */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
}
