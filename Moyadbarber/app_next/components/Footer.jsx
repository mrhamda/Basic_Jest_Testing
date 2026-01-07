"use client";

import React, { useRef } from "react";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock,
  Scissors,
  Linkedin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useGSAP(
    () => {
      // Animera huvudkolumnerna
      gsap.from(".footer-column", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      // Animera bottenraden separat
      gsap.from(".footer-bottom", {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 95%",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* BRAND SECTION */}
          <div className="footer-column flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-sm shrink-0">
                <Scissors size={20} className="text-black" />
              </div>
              <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">
                Tina{" "}
                <span className="text-outline-white text-transparent">
                  Barbershop
                </span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed tracking-wide max-w-xs">
              Hantverk, precision och stil. Vi definierar modern barberarkonst i
              varje klippning.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/moayyad_barber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 rounded-full border border-white/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/p/Domanto_barber-61551751187641/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 rounded-full border border-white/10"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* OPENING HOURS */}
          <div className="footer-column flex flex-col items-center sm:items-start space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white/40 flex items-center gap-3">
              <Clock size={14} /> Öppettider
            </h4>
            <ul className="w-full max-w-[240px] sm:max-w-none space-y-3 text-sm font-bold uppercase tracking-widest text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mån - Fre</span>
                <span className="text-white">10:30 - 18:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Lördag</span>
                <span className="text-white">19:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Söndag</span>
                <span className="text-white text-right leading-tight">
                  11:30 - 16:30
                  <br />
                  19:00 - 23:00
                </span>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column flex flex-col items-center sm:items-start space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white/40 flex items-center gap-3">
              <Phone size={14} /> Kontakt
            </h4>
            <div className="text-center sm:text-left space-y-4 text-sm font-bold">
              <a
                href="https://wa.me/46722872261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-colors tracking-widest gap-2"
              >
                0700424280
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="footer-column flex flex-col items-center sm:items-start space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white/40 flex items-center gap-3">
              <MapPin size={14} /> Hitta Hit
            </h4>
            <div className="text-center sm:text-left space-y-4">
              <address className="not-italic text-gray-400 text-sm font-bold tracking-widest leading-relaxed uppercase">
                Blåkullagatan 3, <br />
                254 26 Helsingborg <br />
                Sverige
              </address>
              <a
                href="https://www.google.com/maps?hl=sv&gl=se&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x4652339452c9c433:0x9df23f330fc3e035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] uppercase tracking-[0.3em] font-black text-white border-b border-white/20 pb-1 hover:border-white transition-all"
              >
                Visa på karta
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold order-2 md:order-1">
            © {currentYear} Moayyad Barber. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/abdullah-hamdan-b2ab463a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black hover:text-white transition-all duration-300 order-1 md:order-2"
          >
            <span className="text-gray-700 font-bold uppercase tracking-widest group-hover:text-gray-400">
              Skapad av
            </span>
            Abdullah Hamdan
            <Linkedin
              size={12}
              className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-white {
          -webkit-text-stroke: 1px white;
        }
        @media (max-width: 640px) {
          .text-outline-white {
            -webkit-text-stroke: 0.5px white;
          }
        }
      `}</style>
    </footer>
  );
}
