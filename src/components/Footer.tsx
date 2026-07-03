import React from 'react';
import { GraduationCap, Mail, MapPin, Phone, MessageSquare, Facebook, Instagram, Youtube } from 'lucide-react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onRequestTutor: () => void;
}

export default function Footer({ onNavigate, onRequestTutor }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* DESKTOP FOOTER (Visible on lg and up - 1024px and above) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        
        {/* Main Grid: 4 columns on desktop */}
        <div className="grid grid-cols-4 gap-x-6 gap-y-8 mb-8">
          
          {/* Logo & Description Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-extrabold font-display text-white tracking-tight">
                  Navodaya <span className="text-teal-400">Tutorial</span>
                </span>
                <p className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase -mt-0.5">
                  Quality Education at Your Doorstep
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              India's trusted Home Tuition & Online Learning platform for Nursery to PG, All Boards, All Subjects & Competitive Exams.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition hover:scale-105 active:scale-95 text-slate-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.facebook.com/share/1DG4FhvotR/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition hover:scale-105 active:scale-95 text-slate-400"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.youtube.com/@Nt-online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition hover:scale-105 active:scale-95 text-slate-400"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Subjects Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Subjects We Cover</h4>
            <ul className="space-y-1.5 text-xs">
              {["Mathematics", "Science", "English", "Commerce", "Computer Science", "Competitive Exams"].map((sub, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('subjects')}
                    className="hover:text-teal-400 transition cursor-pointer text-left text-slate-400 hover:translate-x-0.5 inline-block"
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Classes Covered</h4>
            <ul className="space-y-1.5 text-xs">
              {["Nursery–UKG", "Class 1–5", "Class 6–8", "Class 9–10", "Class 11–12", "Graduation & PG"].map((cls, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('classes')}
                    className="hover:text-teal-400 transition cursor-pointer text-left text-slate-400 hover:translate-x-0.5 inline-block"
                  >
                    {cls}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Agency</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-400">Lucknow, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+917317444730" className="hover:text-teal-400 transition text-slate-400 hover:translate-x-0.5 inline-block">
                  +91 73174 44730
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="mailto:navodayatutorialsindia@gmail.com" className="hover:text-teal-400 transition break-all text-slate-400 hover:translate-x-0.5 inline-block">
                  navodayatutorialsindia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/918858807008?text=Hi%20Navodaya%20Tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition hover:translate-x-0.5 inline-block"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center">
            <span>© {currentYear} Navodaya Tutorial. All Rights Reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onNavigate('terms-and-conditions')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              Instagram
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.facebook.com/share/1DG4FhvotR/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              Facebook
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.youtube.com/@Nt-online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* TABLET FOOTER (Visible on md to lg - 768px to 1023px) */}
      <div className="hidden md:block lg:hidden max-w-4xl mx-auto px-6 py-6 pb-24">
        {/* Main 2-column grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-6 text-left">
          
          {/* Column 1: Logo, Description & Socials */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-extrabold font-display text-white tracking-tight">
                  Navodaya <span className="text-teal-400">Tutorial</span>
                </span>
                <p className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase -mt-0.5">
                  Quality Education at Your Doorstep
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India's trusted Home Tuition & Online Learning platform for Nursery to PG, All Boards, All Subjects & Competitive Exams.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition hover:scale-105 active:scale-95 text-slate-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.facebook.com/share/1DG4FhvotR/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition hover:scale-105 active:scale-95 text-slate-400"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.youtube.com/@Nt-online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition hover:scale-105 active:scale-95 text-slate-400"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Agency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Agency</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Lucknow, Uttar Pradesh</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+917317444730" className="hover:text-teal-400 transition text-slate-400 hover:translate-x-0.5 inline-block">
                  +91 73174 44730
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:navodayatutorialsindia@gmail.com" className="hover:text-teal-400 transition break-all text-slate-400 hover:translate-x-0.5 inline-block">
                  navodayatutorialsindia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/918858807008?text=Hi%20Navodaya%20Tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition hover:translate-x-0.5 inline-block"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Subjects We Cover */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Subjects We Cover</h4>
            <ul className="space-y-1.5 text-xs">
              {["Mathematics", "Science", "English", "Commerce", "Computer Science", "Competitive Exams"].map((sub, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('subjects')}
                    className="hover:text-teal-400 transition cursor-pointer text-left text-slate-400 hover:translate-x-0.5 inline-block"
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Classes Covered */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Classes Covered</h4>
            <ul className="space-y-1.5 text-xs">
              {["Nursery–UKG", "Class 1–5", "Class 6–8", "Class 9–10", "Class 11–12", "Graduation & PG"].map((cls, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('classes')}
                    className="hover:text-teal-400 transition cursor-pointer text-left text-slate-400 hover:translate-x-0.5 inline-block"
                  >
                    {cls}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar for tablet */}
        <div className="border-t border-slate-800 pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            <span>© {currentYear} Navodaya Tutorial. All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onNavigate('terms-and-conditions')}
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY FOOTER (Visible on screens below md - 768px) */}
      <div className="md:hidden max-w-xl mx-auto px-4 pt-6 pb-[110px] text-center flex flex-col items-center justify-center gap-3">
        
        {/* 1. Logo & Brand */}
        <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
            <GraduationCap className="w-4.5 h-4.5" />
          </div>
          <span className="text-sm font-extrabold font-display text-white tracking-tight leading-none">
            Navodaya <span className="text-teal-400">Tutorial</span>
          </span>
          <p className="text-[8px] text-slate-400 font-bold tracking-wider uppercase">
            Quality Education at Your Doorstep
          </p>
        </div>

        {/* 2. Short Description */}
        <p className="text-[11px] text-slate-400 leading-normal max-w-[280px] mx-auto">
          India's Trusted Home Tuition & Online Learning Platform.
        </p>

        {/* 3. Contact Information */}
        <div className="flex flex-col items-center gap-2 text-xs text-slate-400 w-full mt-1">
          <div className="flex items-center gap-1.5 justify-center">
            <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
            <span className="leading-none">Lucknow, Uttar Pradesh</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <Phone className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
            <a href="tel:+917317444730" className="leading-none hover:text-teal-400 transition">
              +91 73174 44730
            </a>
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <Mail className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
            <a href="mailto:navodayatutorialsindia@gmail.com" className="leading-none hover:text-teal-400 transition break-all px-2">
              navodayatutorialsindia@gmail.com
            </a>
          </div>
        </div>

        {/* 4. Social Icons */}
        <div className="flex items-center justify-center gap-3.5 py-0.5">
          <a
            href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-slate-400"
            aria-label="Instagram"
          >
            <Instagram className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://www.facebook.com/share/1DG4FhvotR/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-slate-400"
            aria-label="Facebook"
          >
            <Facebook className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://www.youtube.com/@Nt-online"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-slate-400"
            aria-label="YouTube"
          >
            <Youtube className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* 5. Divider */}
        <div className="border-t border-slate-800/60 w-full my-1"></div>

        {/* 6. Copyright */}
        <div className="text-[10px] text-slate-500 w-full pt-1">
          <span>© {currentYear} Navodaya Tutorial. All Rights Reserved.</span>
        </div>

      </div>

    </footer>
  );
}
