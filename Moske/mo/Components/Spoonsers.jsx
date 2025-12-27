"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Sponsors() {
  const containerRef = useRef(null);

  const sponsorData = [
    { name: "Åkesson", img: "ackesson.webp", url: "" },
    {
      name: "Aldo Supermarket",
      img: "ALDO.webp",
      url: "https://www.aldosupermarket.se/",
    },
    {
      name: "Åtta Electric",
      img: "atta_electric.webp",
      url: "https://www.attaelectric.se",
    },
    { name: "Aya Beautysalong", img: "aya_beautysalong.png", url: "" },
    { name: "Baaken", img: "Baaken.webp", url: "http://baaken.se/" },
    {
      name: "Belle Bilgaraget",
      img: "belle_bilgaraget.webp",
      url: "http://belle-bilgaraget.com/",
    },
    {
      name: "Beta Ekonomi",
      img: "beta_ekonomi.webp",
      url: "https://nordiskhjalp.org/",
    },
    { name: "Color Glo", img: "color_glo.webp", url: "http://colorglo.se/" },
    { name: "CSC Smart IPTV", img: "CSC.webp", url: "http://cscsmartiptv.se/" },
    { name: "Dackline", img: "dackline.webp", url: "http://dackline.se/" },
    { name: "Damas Taste", img: "damas.webp", url: "http://damastaste.se/" },
    {
      name: "Ekonomikontoret",
      img: "ekonomikontoret.webp",
      url: "http://ekonomikontoret.com/",
    },
    { name: "Fly Center", img: "fly_center.webp", url: "" },
    { name: "Golden Star", img: "golden_star.webp", url: "" },
    { name: "HA Arkitekt", img: "ha_arkitekt.webp", url: "" },
    { name: "Hälsopraktiken", img: "halsopraktiken.webp", url: "" },
    {
      name: "Helsingborgs Elservice",
      img: "helsingborgs_elservice.webp",
      url: "",
    },
    { name: "Ingenjörsbyrån HBG", img: "ingenjorsbyran_hbg.webp", url: "" },
    { name: "Islamic Relief", img: "islamic_relief.webp", url: "" },
    { name: "JC Flytt", img: "jcflytt.webp", url: "https://jcflytt.se/" },
    { name: "Kebabkungen", img: "kebabkungen.webp", url: "" },
    { name: "Kebabkungen Söder", img: "kebabkungen_soder.webp", url: "" },
    { name: "Lucu Food", img: "lucu_food.webp", url: "" },
    {
      name: "Muslimska Begravningsbyrån",
      img: "muslimska_begravningsbyra.webp",
      url: "https://www.muslimskabegravningsbyra.se/",
    },
    { name: "Myra Assistans", img: "myra_assistans.webp", url: "" },
    {
      name: "Nordisk Hjälp",
      img: "nordisk_hjalp.webp",
      url: "https://nordiskhjalp.org/",
    },
    { name: "PBUM", img: "PBUM.webp", url: "https://www.barnmott.se/" },
    {
      name: "Pizzeria Dalhem",
      img: "pizzeria_dalhem.webp",
      url: "http://pizzeriadalhem.se/",
    },
    {
      name: "Rehamco",
      img: "Rehamco.webp",
      url: "https://www.facebook.com/Rehamco",
    },
    { name: "Salat.nu", img: "salat_nu.webp", url: "http://salat.nu/" },
    { name: "Sammys Bil", img: "sammys_bil.webp", url: "" },
    { name: "Sky Dentallab", img: "sky_dentallab.webp", url: "" },
    {
      name: "Swedish Aid",
      img: "swedish_aid.webp",
      url: "http://www.swedishaid.org/sv",
    },
    { name: "Sweet House", img: "sweet_house.webp", url: "" },
    { name: "Venedig", img: "venedig.webp", url: "" },
    { name: "Workfind", img: "workfind.webp", url: "" },
    { name: "Zrail", img: "zrail.webp", url: "https://www.zrail.se" },
    { name: "Zstudio", img: "Zstudio.webp", url: "http://zstudio.se/" },
  ];

  useGSAP(
    () => {
      // Sätt initialt tillstånd: lite mindre skala och osynliga
      gsap.set(".sponsor-card", {
        opacity: 0,
        y: 20,
        scale: 0.95,
      });

      // Batch-animera sponsorerna
      ScrollTrigger.batch(".sponsor-card", {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.05, // Snabbare stagger eftersom det är många logotyper
            duration: 0.6,
            ease: "back.out(1.7)", // Ger en liten studseffekt när de poppar fram
            overwrite: true,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 bg-gray-50" id="sponsorer">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
            Våra <span className="text-emerald-600">Sponsorer</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Vi tackar alla företag som stödjer vår verksamhet
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sponsorData.map((sponsor, index) => {
            const hasUrl = sponsor.url && sponsor.url !== "";

            const cardClasses = `sponsor-card group relative bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-center aspect-[3/2] transition-all duration-300 ${
              hasUrl
                ? "hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-100 hover:-translate-y-1 cursor-pointer"
                : "cursor-default"
            }`;

            const imageContent = (
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className={`max-w-full max-h-full object-contain filter grayscale transition-all duration-500 ${
                  hasUrl ? "group-hover:grayscale-0" : ""
                }`}
              />
            );

            return hasUrl ? (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {imageContent}
              </a>
            ) : (
              <div key={index} className={cardClasses}>
                {imageContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


