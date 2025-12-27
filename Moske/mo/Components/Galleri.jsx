"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Galleri() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const galleryBoxRef = useRef(null);

  const images = [
    { id: 1, url: "1.webp", alt: "Bild 1" },
    { id: 2, url: "2.webp", alt: "Bild 2" },
    { id: 3, url: "03.webp", alt: "Bild 3" },
    { id: 4, url: "4.webp", alt: "Bild 4" },
    { id: 5, url: "5.webp", alt: "Bild 5" },
    { id: 6, url: "6.webp", alt: "Bild 6" },
    { id: 7, url: "7.webp", alt: "Bild 7" },
    { id: 8, url: "9.jpeg", alt: "Bild 8" },
    { id: 9, url: "10.webp", alt: "Bild 9" },
    { id: 10, url: "11.webp", alt: "Bild 10" },
    { id: 11, url: "12.webp", alt: "Bild 11" },
    { id: 12, url: "13.webp", alt: "Bild 12" },
    { id: 13, url: "14.jpeg", alt: "Bild 13" },
    { id: 14, url: "15.webp", alt: "Bild 14" },
    { id: 15, url: "16.jpeg", alt: "Bild 15" },
    { id: 16, url: "17.webp", alt: "Bild 16" },
    { id: 17, url: "18.webp", alt: "Bild 17" },
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = Math.abs(page % images.length);

  const paginate = useCallback(
    (newDirection) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  // GSAP Animationer som körs en gång vid scroll
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true, // Körs bara en gång
        },
      });

      // Text-elementen glider in
      tl.from(".animate-gallery-text", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Bildboxen växer fram (reveal)
      tl.from(
        galleryBoxRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50 min-h-screen flex items-center"
      id="galleri"
    >
      <div className="max-w-screen-xl mx-auto px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* VÄNSTER BOX - TEXTINNEHÅLL */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="animate-gallery-text text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">
              Moment & Minnen
            </h2>
            <h1 className="animate-gallery-text text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-6 leading-none">
              Vårt <span className="text-emerald-600">Galleri</span>
            </h1>
            <p className="animate-gallery-text text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Här samlar vi bilder från vår verksamhet, våra högtider och
              vardagliga stunder i moskén. Bläddra igenom bildspelet för att få
              en inblick i vår gemenskap.
            </p>

            <div className="animate-gallery-text hidden lg:flex items-center gap-4 text-emerald-700 font-bold text-sm bg-white shadow-sm w-fit px-6 py-4 rounded-2xl border border-emerald-100">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Klicka på bilden eller använd pilarna för att bläddra
            </div>
          </div>

          {/* HÖGER BOX - BILDSPELARE */}
          <div className="w-full max-w-md lg:max-w-lg" ref={galleryBoxRef}>
            <div className="relative group bg-black rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] aspect-[3/4] border-[10px] border-white select-none transition-transform duration-500 hover:scale-[1.02]">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              {/* Klickytor för navigation */}
              <div className="absolute inset-0 flex z-30">
                <div
                  onClick={() => paginate(-1)}
                  className="flex-1 cursor-pointer"
                />
                <div
                  onClick={() => paginate(1)}
                  className="flex-1 cursor-pointer"
                />
              </div>

              {/* Pil-indikationer (visas vid hovring) */}
              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-40">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>

              {/* Progress Bar (Indikatorer) */}
              <div className="absolute top-6 left-0 right-0 flex gap-1.5 z-50 px-10">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i === currentIndex
                        ? "bg-white shadow-sm scale-y-150"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Counter Pill */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-xl px-4 py-1.5 rounded-full text-white text-[10px] font-black tracking-widest border border-white/10 z-50">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
