import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Instagram, Youtube } from 'lucide-react';
import { ActivePage, RouteConfig } from '../types';
import { ROUTES } from '../useRouter';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onRequestTutor: () => void;
}

export default function Navbar({ activePage, onNavigate, onRequestTutor }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: ActivePage) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  // Main nav items (excluding legal policies from the navbar, which go in footer)
  const navItems = ROUTES.filter(
    route => route.id !== 'privacy-policy' && route.id !== 'terms-and-conditions'
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-500/10 group-hover:scale-105 transition">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight font-display text-slate-800 flex items-center gap-1 uppercase">
                NAVODAYA <span className="text-teal-600">TUTORIAL</span>
              </span>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider -mt-1">
                Quality Education At Your Doorstep
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.filter(item => item.id !== 'home').map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  activePage === item.id
                    ? 'text-teal-600 bg-teal-50/60'
                    : isScrolled
                    ? 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-white/40'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Call-to-Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917317444730"
              title="Call Helpline: +91 73174 44730"
              className="flex items-center justify-center w-10 h-10 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold rounded-xl border border-teal-100/80 transition-all duration-300 shadow-sm hover:scale-[1.05] active:scale-[0.95]"
            >
              <Phone className="w-4 h-4 text-teal-600 animate-pulse" />
            </a>
            <a
              href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-pink-600 transition flex items-center"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.youtube.com/@Nt-online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-600 transition flex items-center"
              aria-label="YouTube"
            >
              <Youtube className="w-4.5 h-4.5" />
            </a>
            <button
              onClick={onRequestTutor}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:from-teal-600 hover:to-teal-700 transition shadow-md shadow-teal-500/10 cursor-pointer"
            >
              Request Tutor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition mr-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg text-slate-500 hover:text-teal-600 hover:bg-slate-100 transition cursor-pointer`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden fixed inset-x-0 top-[64px] bg-white border-b border-slate-100 shadow-xl overflow-hidden py-4 px-6 animate-fade-in z-30">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-sm font-semibold w-full text-left py-2.5 px-3 rounded-lg transition-all ${
                  activePage === item.id
                    ? 'text-teal-600 bg-teal-50 font-bold'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-1 flex flex-col gap-2.5">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <a
                  href="tel:+917317444730"
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-slate-700 text-xs font-bold bg-slate-50 hover:bg-slate-100 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call: +91 73174 44730</span>
                </a>
                <a
                  href="tel:+917891326223"
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-slate-700 text-xs font-bold bg-slate-50 hover:bg-slate-100 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call: +91 78913 26223</span>
                </a>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestTutor();
                }}
                className="w-full py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold rounded-xl transition shadow-md shadow-teal-500/10 cursor-pointer"
              >
                Request Tutor Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
