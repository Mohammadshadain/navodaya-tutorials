import React from 'react';

export default function EducationIllustration() {
  return (
    <div 
      id="education-illustration-container" 
      className="relative w-full flex items-center justify-center p-4 transition-all duration-300"
      style={{ height: 'var(--illustration-height, 480px)' }}
    >
      <style>{`
        #education-illustration-container {
          --illustration-svg-max-w: 440px;
          --illustration-height: 480px;
        }

        /* 480px and below (Mobile standard) */
        @media (max-width: 767px) {
          #education-illustration-container {
            --illustration-svg-max-w: 360px;
            --illustration-height: 410px;

            --badge-p-aplus: 6px;
            --badge-r-aplus: 10px;
            --badge-g-aplus: 4px;
            --badge-top-aplus: 48px;
            --badge-left-aplus: 24px;
            --badge-f1-aplus: 11px;
            --badge-f2-aplus: 9px;

            --badge-p-focused: 8px;
            --badge-r-focused: 10px;
            --badge-g-focused: 6px;
            --badge-bottom-focused: 40px;
            --badge-left-focused: 24px;
            --badge-dot-focused: 8px;
            --badge-f-focused: 11px;

            --badge-p-toprated: 8px;
            --badge-r-toprated: 10px;
            --badge-g-toprated: 6px;
            --badge-top-toprated: 64px;
            --badge-right-toprated: 24px;
            --badge-f1-toprated: 11px;
            --badge-f2-toprated: 9px;
          }
        }

        /* 425px - 479px */
        @media (max-width: 479px) {
          #education-illustration-container {
            --illustration-svg-max-w: 320px;
            --illustration-height: 370px;

            --badge-top-aplus: 42px;
            --badge-left-aplus: 20px;

            --badge-bottom-focused: 32px;
            --badge-left-focused: 20px;

            --badge-top-toprated: 56px;
            --badge-right-toprated: 20px;
          }
        }

        /* 412px - 424px */
        @media (max-width: 424px) {
          #education-illustration-container {
            --illustration-svg-max-w: 310px;
            --illustration-height: 360px;

            --badge-p-aplus: 5px;
            --badge-top-aplus: 40px;
            --badge-left-aplus: 16px;
            --badge-f1-aplus: 10px;
            --badge-f2-aplus: 8px;

            --badge-p-focused: 7px;
            --badge-bottom-focused: 28px;
            --badge-left-focused: 16px;
            --badge-f-focused: 10px;

            --badge-p-toprated: 7px;
            --badge-top-toprated: 52px;
            --badge-right-toprated: 16px;
            --badge-f1-toprated: 10px;
            --badge-f2-toprated: 8px;
          }
        }

        /* 390px - 411px */
        @media (max-width: 411px) {
          #education-illustration-container {
            --illustration-svg-max-w: 290px;
            --illustration-height: 350px;

            --badge-top-aplus: 36px;
            --badge-left-aplus: 12px;

            --badge-bottom-focused: 24px;
            --badge-left-focused: 12px;

            --badge-top-toprated: 48px;
            --badge-right-toprated: 12px;
          }
        }

        /* 375px - 389px */
        @media (max-width: 389px) {
          #education-illustration-container {
            --illustration-svg-max-w: 280px;
            --illustration-height: 340px;

            --badge-top-aplus: 32px;
            --badge-left-aplus: 10px;

            --badge-bottom-focused: 20px;
            --badge-left-focused: 10px;

            --badge-top-toprated: 44px;
            --badge-right-toprated: 10px;
          }
        }

        /* 360px - 374px */
        @media (max-width: 374px) {
          #education-illustration-container {
            --illustration-svg-max-w: 260px;
            --illustration-height: 330px;

            --badge-p-aplus: 4px;
            --badge-top-aplus: 28px;
            --badge-left-aplus: 8px;

            --badge-p-focused: 6px;
            --badge-bottom-focused: 16px;
            --badge-left-focused: 8px;

            --badge-p-toprated: 6px;
            --badge-top-toprated: 40px;
            --badge-right-toprated: 8px;
          }
        }

        /* 320px - 359px */
        @media (max-width: 359px) {
          #education-illustration-container {
            --illustration-svg-max-w: 230px;
            --illustration-height: 300px;

            --badge-p-aplus: 4px;
            --badge-top-aplus: 24px;
            --badge-left-aplus: 4px;
            --badge-f1-aplus: 9px;
            --badge-f2-aplus: 7.5px;

            --badge-p-focused: 6px;
            --badge-bottom-focused: 12px;
            --badge-left-focused: 4px;
            --badge-f-focused: 9.5px;
            --badge-dot-focused: 6px;

            --badge-p-toprated: 6px;
            --badge-top-toprated: 36px;
            --badge-right-toprated: 4px;
            --badge-f1-toprated: 9.5px;
            --badge-f2-toprated: 7.5px;
          }
        }
      `}</style>

      {/* Soft Ambient Background Glows */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Floating Sparkles & Icons */}
      <div 
        id="badge-aplus" 
        className="absolute animate-bounce duration-1000 bg-white shadow-md border border-slate-100 flex items-center z-20 transition-all duration-300"
        style={{
          padding: 'var(--badge-p-aplus, 8px)',
          borderRadius: 'var(--badge-r-aplus, 12px)',
          gap: 'var(--badge-g-aplus, 6px)',
          top: 'var(--badge-top-aplus, 48px)',
          left: 'var(--badge-left-aplus, 40px)',
        }}
      >
        <span className="text-emerald-500 font-bold" style={{ fontSize: 'var(--badge-f1-aplus, 12px)' }}>A+</span>
        <span className="text-slate-500 font-medium" style={{ fontSize: 'var(--badge-f2-aplus, 10px)' }}>Result</span>
      </div>

      <div 
        id="badge-focused" 
        className="absolute bg-white shadow-lg border border-slate-100 flex items-center z-20 transition-all duration-300"
        style={{
          padding: 'var(--badge-p-focused, 10px)',
          borderRadius: 'var(--badge-r-focused, 12px)',
          gap: 'var(--badge-g-focused, 8px)',
          bottom: 'var(--badge-bottom-focused, 64px)',
          left: 'var(--badge-left-focused, 16px)',
        }}
      >
        <div 
          className="rounded-full bg-amber-500 animate-ping"
          style={{
            width: 'var(--badge-dot-focused, 10px)',
            height: 'var(--badge-dot-focused, 10px)',
          }}
        ></div>
        <span className="font-semibold text-slate-700" style={{ fontSize: 'var(--badge-f-focused, 12px)' }}>1-on-1 Focused</span>
      </div>

      <div 
        id="badge-toprated" 
        className="absolute bg-white shadow-md border border-slate-100 flex items-center z-20 transition-all duration-300"
        style={{
          padding: 'var(--badge-p-toprated, 10px)',
          borderRadius: 'var(--badge-r-toprated, 12px)',
          gap: 'var(--badge-g-toprated, 8px)',
          top: 'var(--badge-top-toprated, 80px)',
          right: 'var(--badge-right-toprated, 32px)',
        }}
      >
        <span className="text-amber-500 font-bold" style={{ fontSize: 'var(--badge-f1-toprated, 12px)' }}>★ 4.9</span>
        <span className="text-slate-500 font-medium" style={{ fontSize: 'var(--badge-f2-toprated, 10px)' }}>Top Rated</span>
      </div>

      {/* Core SVG Modern Illustration */}
      <svg
        id="core-education-svg"
        viewBox="0 0 500 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 filter drop-shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300"
        style={{ maxWidth: 'var(--illustration-svg-max-w, 440px)' }}
      >
        {/* Background Geometric Grid Structure */}
        <circle cx="250" cy="225" r="170" fill="url(#circleGrad)" />
        <rect x="130" y="290" width="240" height="120" rx="20" fill="white" fillOpacity="0.8" className="backdrop-blur-md" />
        <line x1="160" y1="330" x2="340" y2="330" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="160" y1="360" x2="300" y2="360" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />

        {/* The Teacher Representation */}
        <g id="teacher-vector">
          {/* Chair Backdrop */}
          <path d="M120 280C120 240 150 210 190 210H210C210 210 210 280 210 280H120V280Z" fill="#F1F5F9" />
          {/* Teacher body & blazer */}
          <path d="M140 330C140 290 160 270 200 270H220C240 270 245 290 245 330H140Z" fill="#14B8A6" />
          <path d="M185 270L192.5 300L200 270H185Z" fill="#F8FAFC" /> {/* Collar */}
          <circle cx="192.5" cy="235" r="25" fill="#FDBA74" /> {/* Face skin */}
          {/* Teacher Hair */}
          <path d="M167.5 235C167.5 215 180 205 192.5 205C205 205 217.5 215 217.5 235C217.5 240 210 245 192.5 245C175 245 167.5 240 167.5 235Z" fill="#1E293B" />
          {/* Glasses */}
          <rect x="180" y="228" width="10" height="6" rx="2" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="195" y="228" width="10" height="6" rx="2" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="190" y1="231" x2="195" y2="231" stroke="#0F172A" strokeWidth="1.5" />
          {/* Smile */}
          <path d="M189 242C191 244 194 244 196 242" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* The Student Representation */}
        <g id="student-vector">
          {/* Student body */}
          <path d="M280 340C280 310 295 295 325 295H345C360 295 365 310 365 340H280Z" fill="#0D9488" />
          <circle cx="322.5" cy="265" r="22" fill="#FED7AA" /> {/* Face skin */}
          {/* Student Hair */}
          <path d="M300.5 265C300.5 248 312 238 322.5 238C333 238 344.5 248 344.5 265V270H300.5V265Z" fill="#475569" />
          {/* Smile & Eyes */}
          <circle cx="316" cy="262" r="1.5" fill="#0F172A" />
          <circle cx="329" cy="262" r="1.5" fill="#0F172A" />
          <path d="M320 270C321.5 271.5 323.5 271.5 325 270" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Large Central Interactive Board */}
        <rect x="160" y="80" width="180" height="110" rx="16" fill="white" stroke="#14B8A6" strokeWidth="3" className="filter drop-shadow-md" />
        {/* Board Internal Graphics */}
        <path d="M180 120L210 145L250 110L300 150" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="210" cy="145" r="4" fill="#0D9488" />
        <circle cx="250" cy="110" r="4" fill="#0D9488" />
        <text x="180" y="105" fill="#0F172A" fontSize="11" fontWeight="bold" fontFamily="system-ui">E = mc²</text>
        <text x="270" y="105" fill="#14B8A6" fontSize="10" fontWeight="bold" fontFamily="system-ui">Growth</text>

        {/* Floating Books & Learning Materials */}
        <g id="book-1" className="animate-pulse">
          <path d="M360 160H400V180H360V160Z" fill="#F59E0B" rx="2" />
          <path d="M365 160V180" stroke="white" strokeWidth="1.5" />
          <path d="M372 160V180" stroke="white" strokeWidth="1.5" />
          <rect x="358" y="176" width="44" height="6" rx="2" fill="#E2E8F0" />
        </g>

        <g id="book-2">
          <path d="M90 150H130V170H90V150Z" fill="#14B8A6" rx="2" />
          <path d="M125 150V170" stroke="white" strokeWidth="1.5" />
          <path d="M118 150V170" stroke="white" strokeWidth="1.5" />
          <rect x="88" y="166" width="44" height="6" rx="2" fill="#E2E8F0" />
        </g>

        {/* Graduation Cap at Top */}
        <g id="grad-cap" className="animate-bounce duration-1000 delay-500">
          <path d="M250 25L295 40L250 55L205 40L250 25Z" fill="#1E293B" />
          <path d="M220 45V60C220 65 235 68 250 68C265 68 280 65 280 60V45" fill="#1E293B" />
          <path d="M295 40V65" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="295" cy="65" r="3" fill="#F59E0B" />
        </g>

        {/* Atom structure */}
        <ellipse cx="400" cy="270" rx="25" ry="8" transform="rotate(-30 400 270)" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="2 2" />
        <ellipse cx="400" cy="270" rx="25" ry="8" transform="rotate(30 400 270)" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="400" cy="270" r="5" fill="#F59E0B" />

        {/* Math compass element */}
        <path d="M90 240L105 270M120 240L105 270" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
        <circle cx="105" cy="270" r="2.5" fill="#14B8A6" />

        {/* Defs for gradients */}
        <defs>
          <linearGradient id="circleGrad" x1="250" y1="55" x2="250" y2="395" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CCFBF1" stopOpacity="0.4" />
            <stop offset="1" stopColor="#CCFBF1" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
