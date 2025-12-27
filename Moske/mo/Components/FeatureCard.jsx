import React from "react";

export default function FeatureCard({ item, onClick }) {
  const { title, description, imageUrl, isSpecial, social } = item;

  const Icons = {
    Facebook: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    Instagram: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    TikTok: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  };

  return (
    <div
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-xl border flex flex-col h-[420px] w-full
        ${
          isSpecial
            ? "border-emerald-500 bg-emerald-50/40 shadow-emerald-100 shadow-lg"
            : "border-gray-100 bg-white shadow-sm"
        }`}
    >
      {/* Förbättrad Scrollbar Styling */}
      <style jsx>{`
        .better-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
        .better-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .better-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .better-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(
            209,
            213,
            219,
            0.8
          ); /* gray-300 med transparens */
          border-radius: 20px;
          border: 1px solid transparent;
        }
        .better-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af; /* gray-400 */
        }
      `}</style>

      {/* Special Badge */}
      {isSpecial && (
        <div className="absolute top-3 right-3 z-20 bg-emerald-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md animate-pulse">
          Rekommenderad
        </div>
      )}

      {/* Image Section */}
      <div className="h-44 w-full overflow-hidden bg-gray-200 relative shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow min-h-0">
        <h3
          className={`text-lg font-black mb-2 shrink-0 ${
            isSpecial ? "text-emerald-900" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        {/* Scrollable Description Area - e.stopPropagation är viktig här */}
        <div
          className="flex-grow overflow-y-auto better-scrollbar pr-2 mb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-gray-600 text-[13px] leading-relaxed italic">
            {description}
          </p>
        </div>

        {/* Social Icons */}
        {isSpecial && social && (
          <div className="mt-auto pt-3 flex gap-4 border-t border-emerald-100/50 shrink-0">
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-emerald-700 hover:text-emerald-500 transition-all hover:scale-110"
              >
                <Icons.Facebook />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-emerald-700 hover:text-emerald-500 transition-all hover:scale-110"
              >
                <Icons.Instagram />
              </a>
            )}
            {social.tiktok && (
              <a
                href={social.tiktok}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-emerald-700 hover:text-emerald-500 transition-all hover:scale-110"
              >
                <Icons.TikTok />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
