"use client";
import React from "react";
import { Facebook, Instagram, Music2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Om Oss / Logotyp */}
          <div>
            <h3 className="text-gray-900 text-2xl font-black uppercase tracking-tighter mb-6">
              Helsingborgs <span className="text-emerald-600">Moské</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              En plats för gemenskap, lärande och andlig utveckling i hjärtat av
              Helsingborg. Vi välkomnar alla som vill veta mer om vår
              verksamhet.
            </p>

            {/* Sociala Medier */}
            <div className="flex gap-4">
              {[
                {
                  icon: <Facebook size={18} />,
                  label: "Facebook",
                  href: "https://www.facebook.com/helsingborgsmoske",
                },
                {
                  icon: <Instagram size={18} />,
                  label: "Instagram",
                  href: "https://www.instagram.com/helsingborgsmoske",
                },
                {
                  icon: <Music2 size={18} />,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@helsingborgsmoske.se",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tom kolumn för balans */}
          <div className="hidden md:block"></div>

          {/* Kontaktinfo */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin className="text-emerald-600 shrink-0" size={18} />
                <span>Grusvägen 15, 254 64 Helsingborg</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="text-emerald-600 shrink-0" size={18} />
                <span>+46 70 467 52 34</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail className="text-emerald-600 shrink-0" size={18} />
                <a
                  href="mailto:kontakt@helsingborgsmoske.se"
                  className="hover:text-emerald-600 transition-colors"
                >
                  kontakt@helsingborgsmoske.se
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-emerald-600 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.44 19.333c-3.134 0-5.756-1.921-5.756-4.225 0-1.077.57-2.072 1.55-2.822L12.44 9.043l4.206 3.243c.98.75 1.55 1.745 1.55 2.822 0 2.304-2.622 4.225-5.756 4.225zM12.44 4.667c3.134 0 5.756 1.921 5.756 4.225 0 1.077-.57 2.072-1.55 2.822L12.44 14.957l-4.206-3.243c-.98-.75-1.55-1.745-1.55-2.822 0-2.304 2.622-4.225 5.756-4.225z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-500">
                  Swish:{" "}
                  <span className="text-gray-900 font-bold">123 319 54 50</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 justify-center">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} Helsingborgs Moské. Alla rättigheter förbehållna.
            </p>
            <p className="mt-1">
              Skapad av{" "}
              <span className="font-medium">
                <a
                  href="https://www.linkedin.com/in/abdullah-hamdan-b2ab463a0/"
                  target="_blank"
                  className="hover:text-emerald-600"
                >
                  Abdullah Hamdan
                </a>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
