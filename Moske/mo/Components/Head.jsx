"use client";

import React, { useState, useEffect } from "react";

export default function Head() {
  const slides = [
    {
      url: "moske.png",
      title: "Välkommen till Helsingborg Moské",
      description: "En plats för gemenskap och andlighet",
    },
    {
      url: "6.webp",
      title: "Våra Aktiviteter",
      description: "Utforska våra program för alla åldrar",
    },
    {
      url: "safety.jpg",
      title: "Donera",
      description:
        "Vill du vara med och donera för att hjälpa dem som behöver hjälp? Här är vårt Swish-nummer: 123 319 54 50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePos({ x: moveX, y: moveY });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="hem"
      onMouseMove={handleMouseMove}
      className="relative w-full h-[650px] mt-[72px] group overflow-hidden bg-white cursor-default"
    >
      {/* Mobile Tap Areas - Only visible/active on small screens */}
      <div className="absolute inset-0 flex z-20 lg:hidden">
        <div
          className="w-1/2 h-full cursor-pointer touch-none"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
        />
        <div
          className="w-1/2 h-full cursor-pointer touch-none"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
        />
      </div>

      {/* Background Slides */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-[10000ms] ease-linear"
              style={{
                backgroundImage: `url(${slide.url})`,
                transform: index === currentIndex ? "scale(1.15)" : "scale(1)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />

            <div className="relative max-w-screen-xl mx-auto h-full flex items-center px-4 md:px-8">
              <div
                style={{
                  transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                  transition: "transform 0.15s ease-out",
                }}
                className={`max-w-2xl transition-all duration-1000 delay-300 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <div className="inline-flex items-center space-x-3 mb-4 md:mb-6 overflow-hidden text-z-30">
                  <div
                    className={`h-1 bg-emerald-600 transition-all duration-1000 delay-500 ${
                      index === currentIndex ? "w-12" : "w-0"
                    }`}
                  />
                  <span className="text-emerald-700 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">
                    Helsingborg moské
                  </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-4 md:mb-6 leading-[1.1] relative z-30">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed font-medium relative z-30">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Side Navigation - Hidden on mobile */}
      <div className="hidden lg:flex absolute inset-y-0 left-6 right-6 items-center justify-between pointer-events-none z-30">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-4 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-gray-800 shadow-xl hover:bg-emerald-600 hover:text-white transition-all group opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-4 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-gray-800 shadow-xl hover:bg-emerald-600 hover:text-white transition-all group opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        >
          <svg
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pill Selector */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 px-5 py-3 md:px-6 md:py-4 bg-white/40 backdrop-blur-xl rounded-full border border-white/40 shadow-2xl flex items-center space-x-4 md:space-x-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative flex items-center z-50"
          >
            <div
              className={`h-2 rounded-full bg-gray-300 transition-all duration-500 overflow-hidden ${
                index === currentIndex
                  ? "w-12 md:w-16 bg-gray-200"
                  : "w-2 md:w-3 hover:bg-emerald-300"
              }`}
            >
              {index === currentIndex && (
                <div className="h-full bg-emerald-600 animate-[progress_8s_linear] origin-left" />
              )}
            </div>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
