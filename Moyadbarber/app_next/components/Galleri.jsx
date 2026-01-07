"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowDown,
  Instagram,
  Scissors,
  CheckCircle2,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INSTAGRAM_IDS = [
  "DGidvINM_I7",
  "C6mnESctCtM",
  "DEp5hgmM-5a",
  "C_GqGtUMB0H",
  "C_Gp5jTsZ4g",
  "C7M0UcnuQI_",
  "DJhRFT_s1EX",
  "DJv32bYM1su",
];

export default function ProfessionalSocialSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useGSAP(
    () => {
      // Animera rubrik och paragraf
      gsap.from(".social-text > *", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animera list-items (Checkmark-listan)
      gsap.from(".trust-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trust-container",
          start: "top 85%",
        },
      });

      // Animera mobil-mockupen (glider upp och tonar in)
      gsap.from(".mobile-mockup", {
        y: 100,
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black py-24 px-6 md:px-12 lg:px-24 border-t border-white/5"
      id="galleri"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* VÄNSTER SIDA: Professionell Text & Info */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="social-text space-y-6">
            <div className="flex items-center gap-4 text-white/40 tracking-[0.5em] uppercase text-[10px] font-black">
              <span className="w-8 h-[1px] bg-white/30"></span>
              Galleri
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter text-white">
              Se Konsten <br />
              <span className="text-outline-white text-transparent">
                Bakom Varje Klipp
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg pt-4">
              Vår Instagram är mer än bara bilder det är en levande portfolio.
              Följ vår resa, se våra senaste tekniker och få inspiration inför
              ditt nästa besök.
            </p>
          </div>

          {/* Egenskaper / Trust-markers */}
          <div className="trust-container space-y-4 pt-4">
            {[
              "Dagliga uppdateringar på nya stilar",
              "Behind-the-scenes från salongen",
              "Exklusiva erbjudanden för följare",
              "Tips för hårvård och styling",
            ].map((text, i) => (
              <div key={i} className="trust-item flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm uppercase tracking-widest font-bold text-white/70 group-hover:text-white transition-colors">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <a
              href="https://www.instagram.com/moayyad_barber"
              target="_blank"
              className="inline-flex items-center gap-6 px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all duration-500 group"
            >
              Följ @moayyad_barber
              <Instagram
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* HÖGER SIDA: Stor Mobil Mockup */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="mobile-mockup relative border-[14px] border-[#1a1a1a] rounded-[4rem] h-[750px] md:h-[850px] w-full max-w-[400px] shadow-[0_0_100px_rgba(255,255,255,0.08)] overflow-hidden bg-black transition-transform duration-700 hover:scale-[1.02]">
            {/* iPhone Notch */}
            <div className="absolute top-0 inset-x-0 h-8 bg-[#1a1a1a] z-30 flex justify-center items-end pb-1">
              <div className="w-24 h-5 bg-black rounded-b-3xl" />
            </div>

            {/* Scrollable Area */}
            <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-white pt-8">
              {INSTAGRAM_IDS.map((id) => (
                <div
                  key={id}
                  className="h-full w-full snap-start flex-shrink-0 bg-white border-b border-gray-100"
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`https://www.instagram.com/reel/${id}/`}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: "0",
                      margin: "0",
                      padding: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="flex items-center justify-center h-full text-black/10 text-[10px] font-black uppercase tracking-widest">
                      Laddar reel...
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Scroll Hint Overlay */}
            <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 z-20 pointer-events-none mix-blend-difference">
              <span className="text-[10px] text-white uppercase tracking-[0.4em] font-black opacity-60">
                Scrolla
              </span>
              <ArrowDown
                size={20}
                className="text-white opacity-60 animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-white {
          -webkit-text-stroke: 1.5px white;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .instagram-media,
        .instagram-media iframe {
          height: 100% !important;
          width: 100% !important;
          min-width: 100% !important;
          max-height: 100% !important;
        }
      `}</style>
    </section>
  );
}
