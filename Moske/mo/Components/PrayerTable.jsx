"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// FIX: Avrunda uppåt till närmaste minut
function getTimeRemaining(targetTimeStr) {
  if (!targetTimeStr) return "";
  const now = new Date();
  const [tHours, tMinutes] = targetTimeStr.split(":").map(Number);

  let target = new Date(now);
  target.setHours(tHours, tMinutes, 0, 0);

  // Om tiden redan har passerat idag, sätt den till imorgon
  if (target < now) {
    target.setDate(target.getDate() + 1);
  }

  const diffMs = target - now;

  // Använd Math.ceil för att avrunda UPPÅT (t.ex. 61 sekunder blir 2m)
  const totalMinutes = Math.ceil(diffMs / 60000);

  const hrs = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  if (hrs > 0) {
    return `${hrs}t ${mins}m`;
  }
  return `${mins}m`;
}

export default function PrayerTable({ initialData }) {
  const [now, setNow] = useState(null);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      if (!mounted) return;
      gsap.set(".animate-item", { y: 30, opacity: 0 });
      ScrollTrigger.batch(".animate-item", {
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            overwrite: true,
          });
        },
        start: "top 85%",
        once: true,
      });
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  if (!mounted || !now)
    return <div ref={containerRef} className="min-h-[500px]" />;

  const getSulahTime = (obj) => {
    if (!obj || !Array.isArray(obj) || obj.length === 0) return "--:--";
    return obj[0].salahTime || obj[0].SalahTime || "--:--";
  };

  const isFriday = now.getDay() === 5;
  const timeComparison = now.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const prayers = [
    {
      name: "Fajr",
      time: getSulahTime(initialData.fajr || initialData.Fajr),
      isAthon: true,
    },
    {
      name: "Shorouk",
      time: getSulahTime(initialData.shouruq || initialData.Shouruq),
      isAthon: false,
    },
    {
      name: isFriday ? "Jummah" : "Dhuhr",
      time: getSulahTime(initialData.zuhr || initialData.Zuhr),
      isAthon: true,
    },
    {
      name: "Asr",
      time: getSulahTime(initialData.asr || initialData.Asr),
      isAthon: true,
    },
    {
      name: "Maghrib",
      time: getSulahTime(initialData.maghrib || initialData.Maghrib),
      isAthon: true,
    },
    {
      name: "Isha",
      time: getSulahTime(initialData.isha || initialData.Isha),
      isAthon: true,
    },
  ];

  // Hitta nästa bön
  let nextIndex = prayers.findIndex(
    (p) => p.isAthon && p.time > timeComparison
  );
  if (nextIndex === -1) nextIndex = 0;

  const timeUntilNext = getTimeRemaining(prayers[nextIndex]?.time);

  return (
    <div
      ref={containerRef}
      className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12"
    >
      <div className="text-center mb-8 animate-item">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-2 tracking-tighter">
          {now.toLocaleTimeString("sv-SE", { hour12: false })}
        </h1>
        <p className="text-emerald-700 font-bold uppercase tracking-widest text-[9px] sm:text-xs md:text-sm px-2">
          {now.toLocaleDateString("sv-SE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="bg-white rounded-[2rem] shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100 animate-item">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
          {prayers.map((prayer, index) => {
            const isNext = index === nextIndex;
            return (
              <div
                key={prayer.name}
                className={`animate-item py-4 px-2 sm:py-6 rounded-2xl text-center border transition-all duration-500 flex flex-col justify-center min-h-[110px] sm:min-h-[140px] ${
                  isNext
                    ? "bg-emerald-600 border-emerald-600 shadow-lg scale-[1.02] sm:scale-105 z-10"
                    : "bg-gray-50 border-gray-100"
                }`}
              >
                <p
                  className={`text-[9px] lg:text-xs uppercase font-bold mb-1 ${
                    isNext ? "text-emerald-100" : "text-emerald-700"
                  }`}
                >
                  {prayer.name}
                </p>
                <p
                  className={`text-xl sm:text-2xl lg:text-3xl font-black ${
                    isNext ? "text-white" : "text-gray-800"
                  }`}
                >
                  {prayer.time}
                </p>
                {isNext && (
                  <div className="mt-2">
                    <p className="text-[8px] sm:text-[10px] text-white font-bold uppercase opacity-90">
                      Nästa
                    </p>
                    <p className="text-[10px] sm:text-xs text-emerald-100 font-black bg-black/10 rounded-full py-0.5">
                      om {timeUntilNext}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
