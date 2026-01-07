"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Calendar } from "lucide-react";

const slides = [
  {
    url: "./photos/01.jpg",
    subtitle: "Tidlös stil möter modern precision och hantverk i världsklass.",
  },
  {
    url: "./photos/02.jpg",
    subtitle: "Experter på fades och skarpa silhuetter för varje hårtyp.",
  },
  {
    url: "./photos/03.jpg",
    subtitle: "Lyxig behandling för den moderna mannen i en avslappnad miljö.",
  },
  {
    url: "./photos/04.jpg",
    subtitle: "Skarpa linjer och perfekt finish vid varje besök.",
  },
  {
    url: "./photos/05.jpg",
    subtitle: "Traditionella tekniker blandat med samtida finess.",
  },
  {
    url: "./photos/06.jpg",
    subtitle: "Den ultimata groomingupplevelsen med fokus på detaljer.",
  },
  {
    url: "./photos/07.jpg",
    subtitle: "Vi skapar en look som är skräddarsydd efter din personlighet.",
  },
  {
    url: "./photos/08.jpg",
    subtitle: "Där genuint hantverk möter den moderna barberarkonsten.",
  },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const AUTO_PLAY_INTERVAL = 3800;

  const handleSlideChange = useCallback(
    (index) => {
      if (isChanging) return;
      setIsChanging(true);
      setCurrentIndex(index);
      setTimeout(() => setIsChanging(false), 600);
    },
    [isChanging]
  );

  const nextSlide = useCallback(() => {
    handleSlideChange(
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  }, [currentIndex, handleSlideChange]);

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(slideTimer);
  }, [nextSlide]);

  return (
    <header
      id="boka"
      className="relative h-[95vh] w-full overflow-hidden bg-black font-sans group"
    >
      {/* Slide Container - Bilderna glider horisontellt */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1100ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full h-full overflow-hidden"
          >
            {/* Vinjett och gradient för textfokus */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />

            <img
              src={slide.url}
              alt={`Frisyr ${index + 1}`}
              className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out
                ${index === currentIndex ? "scale-110" : "scale-100"}`}
            />
          </div>
        ))}
      </div>

      {/* Innehåll i mitten */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center items-center text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isChanging
              ? "opacity-0 translate-y-8 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {/* Liten text ovanför siffran */}
          <div className="inline-flex items-center gap-4 text-white font-medium tracking-[0.6em] uppercase text-[10px] mb-8 opacity-60">
            <span className="w-10 h-[1px] bg-white"></span>
            Elite Barber Service
            <span className="w-10 h-[1px] bg-white"></span>
          </div>

          {/* Stor siffra (01, 02...) */}
          <h1 className="text-white text-[10rem] md:text-[15rem] font-black uppercase tracking-tighter leading-none italic mb-6 select-none">
            <span className="text-outline-white text-transparent">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
          </h1>

          {/* Undertext på svenska */}
          <div className="max-w-xl mx-auto">
            <p className="text-gray-200 text-sm md:text-base font-bold tracking-[0.25em] leading-relaxed uppercase">
              {slides[currentIndex].subtitle}
            </p>
          </div>

          {/* Huvudknapp ändrad till WhatsApp-länk */}
          <div className="mt-12">
            <a
              href="https://wa.me/46722872261?text=Hej!%20Jag%20skulle%20vilja%20boka%20en%20tid."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block overflow-hidden bg-white text-black px-16 py-6 font-black uppercase text-xs tracking-[0.3em] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                Boka tid <Calendar size={16} />
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(1,0,0,1)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Sidnummer nere till vänster */}
      <div className="absolute left-12 bottom-12 z-30 hidden md:flex items-baseline gap-2 text-white italic">
        <span className="text-5xl font-black">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="text-white/20 text-xl font-light not-italic tracking-widest">
          / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Progressbar längst ner */}
      <div className="absolute bottom-0 left-0 w-full z-30 flex gap-[2px]">
        {slides.map((_, index) => (
          <div
            key={index}
            className="relative h-[4px] flex-1 bg-white/10 cursor-pointer"
            onClick={() => handleSlideChange(index)}
          >
            {index === currentIndex && (
              <div
                className="absolute top-0 left-0 h-full bg-white animate-progress"
                style={{ animationDuration: `${AUTO_PLAY_INTERVAL}ms` }}
              />
            )}
          </div>
        ))}
      </div>

      <style jsx global>{`
        .text-outline-white {
          -webkit-text-stroke: 2px white;
        }
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation-name: progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </header>
  );
}
