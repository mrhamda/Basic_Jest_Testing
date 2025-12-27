"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./FeatureCard";

// Registrera GSAP-plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function FeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const modalBodyRef = useRef(null);
  const sectionRef = useRef(null);

  // GSAP Animation för att scrolla fram korten
  useGSAP(
    () => {
      gsap.from(".feature-card-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          // Ersätt toggleActions med once: true
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  useLayoutEffect(() => {
    if (selectedFeature && modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [selectedFeature]);
  const features = [
    {
      title: "Young Light",

      description:
        "Välkommen att deltaga i allt från föreläsningar och workshops till läger och bad.",

      longDescription: `

        <p>Vår ungdomsverksamhet är hjärtat i föreningen. Vi arbetar aktivt för att skapa en trygg miljö där ungdomar i Helsingborg kan mötas och utvecklas.</p>

        <ul class="list-disc ml-5 mt-4 space-y-2">

          <li>Regelbundna träffar och workshops</li>

          <li>Ledarskapsutbildning</li>

          <li>Utflykter, läger och bad</li>

          <li>Young Light håller i föreläsningar på svenska varje fredagskväll.</li>

        </ul>

        <p class="mt-4">Vårt mål är att stärka den muslimska identiteten i en svensk kontext och ge verktyg för en framgångsrik framtid.</p>

      `,

      imageUrl: "Young Light.jpg",

      isSpecial: true,

      social: {
        facebook: "https://www.facebook.com/YoungLight.se",

        instagram: "https://www.instagram.com/younglight_hbg",

        tiktok: "https://www.tiktok.com/@younglighthelsingborg",
      },
    },

    {
      title: "Kvinnosektion",
      description:
        "Vår växande kvinnogemenskap välkomnar dig med dina nya idéer och initiativ.",
      longDescription: `
    <p>Kvinnosektionen i Helsingborgs moské är en dynamisk och inkluderande mötesplats för kvinnor i alla åldrar. Vi strävar efter att skapa en miljö som främjar både personlig och andlig utveckling.</p>
    
    <ul class="list-disc ml-5 mt-4 space-y-2">
      <li><strong>Föreläsningar & Studiecirklar:</strong> Vi arrangerar regelbundna träffar om islamisk kunskap, föräldraskap och hälsa.</li>
      <li><strong>Social Gemenskap:</strong> Allt från gemensamma frukostar och utflykter till kreativa workshops.</li>
      <li><strong>Stöd & Vägledning:</strong> En trygg plats för systrar att dela erfarenheter och få stöd i vardagen.</li>
      <li><strong>Samhällsengagemang:</strong> Vi uppmuntrar till initiativ som stärker kvinnans roll i både moskén och samhället.</li>
    </ul>
    
    <p class="mt-4">Vi tror på kraften i samarbete och välkomnar alltid nya idéer som kan berika vår verksamhet. Oavsett om du vill lära dig något nytt eller bara söker en meningsfull gemenskap, är du varmt välkommen till oss.</p>
  `,
      imageUrl: "kvinnor.webp",
      isSpecial: false,
      social: { facebook: "#", instagram: "#", tiktok: "#" },
    },

    {
      title: "Helgundervisning",

      description:
        "Helsingborgs moské skola erbjuder lektioner i arabiska och Koranen för barn 6-14 år.",

      longDescription: `

    <p class="text-lg text-gray-600 mb-6">Helsingborgs moské skola erbjuder lektioner i arabiska och Koranen till dina barn, samt ett brett utbud av roliga aktiviteter.</p>

   

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

      <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">

        <h2 class="font-bold text-emerald-900 flex items-center gap-2 text-base">

          <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>

          För barn (6 - 11 år)

        </h2>

        <p class="text-emerald-800 mt-1 text-sm">Undervisning på lördagar och söndagar.</p>

      </div>

      <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">

        <h2 class="font-bold text-emerald-900 flex items-center gap-2 text-base">

          <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>

          För barn (12 - 14 år)

        </h2>

        <p class="text-emerald-800 mt-1 text-sm">Undervisning på fredagar.</p>

      </div>

    </div>



    <div class="bg-white border-2 border-gray-100 rounded-3xl p-6 mb-8 shadow-sm">

      <h3 class="text-xl font-black text-gray-900 mb-4">Information för nya elever</h3>

      <div class="space-y-4 text-gray-700 text-sm">

        <p class="flex items-start gap-3">

          <strong class="text-emerald-600">Period:</strong>

          Nyanmälan sker endast under juni månad. Sista dag: 29 Juni 2025.

        </p>

        <p class="flex items-start gap-3">

          <strong class="text-emerald-600">Krav:</strong>

          Medlemskap i FIFS krävs för ansökan.

        </p>

        <p class="flex items-start gap-3">

          <strong class="text-emerald-600">Tid:</strong>

          Kl. 09:45 – 13:45 (en dag i veckan).

        </p>

      </div>

     

      <div class="mt-6 flex flex-wrap gap-3">

        <a href="https://medlem.fifs.se/AAFH" target="_blank" class="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-700 transition-colors no-underline">

          Bli medlem hos FIFS

        </a>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMdU7eMXAE9xAOB0Q6LKBOVSfH1XkXGhbT-hFkebRfQ774CQ/closedform?pli=1" target="_blank" class="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-black transition-colors no-underline">

          Anmäl Nu

        </a>

      </div>

    </div>



    <h3 class="text-xl font-black text-gray-900 mb-4">Avgifter & Betalning</h3>

    <div class="space-y-3 mb-8">

      <div class="flex justify-between border-b border-gray-100 pb-2">

        <span class="text-sm">Månadsavgift</span>

        <span class="font-bold text-emerald-700 text-sm">150 kr / barn</span>

      </div>

      <p class="text-xs text-gray-500 italic mt-2 text-center bg-gray-50 py-2 rounded-lg">

        Betalning sker via Swish: <span class="font-bold text-gray-900">123 320 7156</span>

      </p>

    </div>



    <div class="bg-emerald-900 text-white p-6 rounded-3xl">

      <h3 class="text-lg font-bold mb-3">Har du frågor?</h3>

      <div class="space-y-2 text-sm">

        <p class="flex items-center gap-3">

          <span class="opacity-70">Telefon:</span>

          <a href="tel:0703599533" class="text-white hover:underline">070-359 95 33</a>

        </p>

        <p class="flex items-center gap-3">

          <span class="opacity-70">E-post:</span>

          <a href="mailto:skola@helsingborgsmoske.se" class="text-white hover:underline">skola@helsingborgsmoske.se</a>

        </p>

      </div>

    </div>

  `,

      imageUrl: "Helgundervisning.jpg",

      isSpecial: false,

      social: { facebook: "#", instagram: "#", tiktok: "#" },
    },

    {
      title: "Eidfest",
      description:
        "Helsingborgs Moské anordnar en Eidfest för allmänheten årligen efter varje Ramadhan.",
      longDescription: `
    <p>Eid-ul-Fitr är en av årets absoluta höjdpunkter i Helsingborgs moské. Efter en månad av fasta och andlighet bjuder vi in hela staden – medlemmar såväl som grannar och vänner – till en stor folkfest fylld av glädje och gemenskap.</p>
    
    <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 my-6">
      <h3 class="font-bold text-emerald-900 mb-2 italic uppercase">Vad du kan förvänta dig:</h3>
      <ul class="list-disc ml-5 space-y-2 text-emerald-800 text-sm">
        <li><strong>Barnens favorit:</strong> Hoppborgar, ansiktsmålning, godisregn och roliga tävlingar.</li>
        <li><strong>Mat & Dryck:</strong> Försäljning av mat från olika kulturer, fika och delikatesser.</li>
        <li><strong>Gemenskap:</strong> En unik möjlighet för människor från alla bakgrunder att mötas och fira tillsammans.</li>
        <li><strong>Aktiviteter:</strong> Uppvisningar, henna-målning och stånd med hantverk.</li>
      </ul>
    </div>
    
    <p>Vårt mål med Eidfesten är att sprida kärlek och broderskap i Helsingborg. Det är en dag då vi öppnar våra dörrar extra brett för att visa upp den vackra gemenskap som finns i vår församling.</p>
    
    <p class="mt-4 font-bold text-gray-900">Håll utkik på våra sociala medier för datum, tid och plats när det närmar sig slutet av Ramadhan!</p>
  `,
      imageUrl: "eidfest.jpeg",
      isSpecial: false,
      social: { facebook: "#", instagram: "#", tiktok: "#" },
    },

    {
      title: "Öppet hus",
      description:
        "Vi håller öppet hus första söndagen varje månad för de som vill komma på besök.",
      longDescription: `
    <p>Är du nyfiken på vad som händer i en moské eller vill du veta mer om islam? Helsingborgs moské strävar efter att vara en öppen och transparent del av staden. Därför bjuder vi in till Öppet hus den första söndagen i varje månad.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
        <h3 class="font-bold text-gray-900 flex items-center gap-2 mb-2">
          <span class="text-emerald-500">●</span> Rundvandring
        </h3>
        <p class="text-sm text-gray-600">Se våra vackra lokaler och lär dig om arkitekturen och bönens betydelse.</p>
      </div>
      <div class="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
        <h3 class="font-bold text-gray-900 flex items-center gap-2 mb-2">
          <span class="text-emerald-500">●</span> Frågestund
        </h3>
        <p class="text-sm text-gray-600">Vi svarar på dina frågor om islam, vår verksamhet och muslimers liv i Sverige.</p>
      </div>
    </div>

    <p>Under besöket bjuder vi på fika och en chans att möta våra imamer och medlemmar under avslappnade former. Det krävs ingen föranmälan – det är bara att komma förbi!</p>

    <div class="mt-6 p-4 bg-emerald-900 text-white rounded-2xl">
      <p class="text-xs opacity-80 uppercase tracking-widest mb-1">Bra att veta</p>
      <p class="text-sm">Vi ber alla besökare att ta av sig skorna vid ingången. Täckande klädsel rekommenderas som respekt för lokalens syfte, men vi har även lånesjalar på plats vid behov.</p>
    </div>
  `,
      imageUrl: "oppet_hus.webp",
      isSpecial: false,
      social: { facebook: "#", instagram: "#", tiktok: "#" },
    },
    {
      title: "Gruppen för mångreligiös dialog",
      description:
        "Helsingborgs Moské är en viktig del av gruppen för mångreligiös dialog i Helsingborg.",
      longDescription: `
    <p>Helsingborgs moské tror starkt på att samverkan och förståelse mellan olika trosuppfattningar är nyckeln till ett harmoniskt samhälle. Vi deltar aktivt i Helsingborgs mångreligiösa råd för att främja respekt och fredlig samexistens.</p>
    
    <div class="bg-gray-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-2xl">
      <h3 class="font-bold text-gray-900 mb-2 italic uppercase">Vårt arbete i gruppen:</h3>
      <ul class="space-y-3 text-sm text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold">→</span> 
          <span><strong>Brobyggande:</strong> Skapa plattformar där människor från olika religioner kan mötas och lära känna varandra.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold">→</span> 
          <span><strong>Gemensamma värderingar:</strong> Fokusera på det som förenar oss, såsom medmänsklighet, fred och social rättvisa.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold">→</span> 
          <span><strong>Krisberedskap:</strong> Samverka vid lokala eller globala händelser för att motverka fördomar och spänningar i staden.</span>
        </li>
      </ul>
    </div>

    <p>Genom föreläsningar, gemensamma uttalanden och lokala samarbeten arbetar vi för att Helsingborg ska vara en stad där alla, oavsett tro, känner sig trygga och respekterade.</p>
    
    <p class="mt-4 italic text-sm text-gray-500 underline">
      Detta arbete sker i nära samarbete med Svenska kyrkan, andra religiösa samfund och Helsingborgs stad.
    </p>
  `,
      imageUrl: "3.webp",
      isSpecial: false,
      social: { facebook: "#", instagram: "#", tiktok: "#" },
    },

    {
      title: "Studiebesök",
      description:
        "Vi tar gärna emot studiebesök från alla årsklasser. Kontakta oss nedan för tidsbokning.",
      longDescription: `
    <p>Helsingborgs moské välkomnar varje år ett stort antal skolklasser, studenter, myndigheter och föreningar som vill lära sig mer om islam och vår verksamhet. Ett studiebesök hos oss är ett utmärkt sätt att få en levande bild av hur religionen praktiseras i vardagen.</p>
    
    <div class="bg-emerald-900 text-white p-6 rounded-3xl my-6 shadow-md">
      <h3 class="font-bold mb-3 italic uppercase tracking-wider text-emerald-400">Ett typiskt besök innefattar:</h3>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center gap-2">
          <span class="text-emerald-500">✔</span> Rundvandring i bönelokalerna och biblioteket.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-emerald-500">✔</span> Grundläggande genomgång av islams pelare och historia.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-emerald-500">✔</span> Frågestund där elever och lärare får svar på sina funderingar.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-emerald-500">✔</span> Diskussion kring moskéns roll i det lokala samhället.
        </li>
      </ul>
    </div>

    <p>Vi anpassar alltid nivån på informationen efter gruppens ålder och förkunskaper – från förskola till universitet. Besöket är kostnadsfritt för utbildningssyften.</p>

    <div class="mt-8 p-6 border-2 border-dashed border-emerald-100 rounded-3xl bg-emerald-50/30">
      <h4 class="font-black text-gray-900 mb-2">Vill du boka ett besök?</h4>
      <p class="text-sm text-gray-600 mb-4">Maila oss med önskat datum, tid och antal deltagare så återkommer vi med en bekräftelse.</p>
      <a href="mailto:kontakt@helsingborgsmoske.se" class="inline-block bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-emerald-700 transition-all no-underline">
        Skicka bokningsförfrågan
      </a>
    </div>
  `,
      imageUrl: "5.webp",
      isSpecial: false,
      social: { facebook: "#", instagram: "#", tiktok: "#" },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50 min-h-screen"
      id="aktiviteter"
    >
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            // Vi lägger animation-klassen här
            <div key={i} className="feature-card-anim">
              <FeatureCard item={f} onClick={() => setSelectedFeature(f)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[85vh] shadow-2xl relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 z-30 text-gray-400 hover:text-emerald-600 p-2 hover:bg-emerald-50 rounded-full transition-all cursor-pointer"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div
                ref={modalBodyRef}
                className="overflow-y-auto no-scrollbar p-8 lg:p-12"
              >
                <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-8 pr-10 italic uppercase">
                  {selectedFeature.title}
                </h2>
                <div
                  className="prose prose-emerald max-w-none text-gray-600 leading-relaxed pb-4"
                  dangerouslySetInnerHTML={{
                    __html: selectedFeature.longDescription,
                  }}
                />
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="mt-8 w-full py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  Stäng fönstret
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
