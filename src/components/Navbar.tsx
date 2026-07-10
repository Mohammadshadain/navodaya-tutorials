import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Instagram, Youtube } from 'lucide-react';
import { ActivePage, RouteConfig } from '../types';
import { ROUTES } from '../useRouter';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onRequestTutor: () => void;
}

interface DockItemProps {
  key?: any;
  mouseX: any;
  screenType: 'desktop' | 'tablet' | 'mobile';
  label?: string;
  children: React.ReactNode;
  className?: string;
  maxScale?: number;
}

// macOS Dock Magnification Item Component
function DockItem({ mouseX, screenType, label, children, className = "", maxScale }: DockItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Compute distance from cursor X to element's horizontal center
  const distance = useTransform(mouseX, (val: number) => {
    if (!ref.current) return 0;
    const bounds = ref.current.getBoundingClientRect();
    return val - bounds.left - bounds.width / 2;
  });

  const max = maxScale ?? 1.35;
  const desktopNeighbor = 1 + (max - 1) * 0.514;
  const desktopFar = 1 + (max - 1) * 0.143;

  const tabletMax = 1 + (max - 1) * 0.514;
  const tabletNeighbor = 1 + (max - 1) * 0.257;
  const tabletFar = 1 + (max - 1) * 0.057;

  // Calculate scales responsively
  // Desktop: Max 1.35, Neighbor 1.18, Far 1.05, Default 1
  // Tablet: Max 1.18, Neighbor 1.09, Far 1.02, Default 1
  // Mobile: Disabled (always 1)
  const scaleTransform = useTransform(
    distance,
    [-200, -120, -60, 0, 60, 120, 200],
    screenType === 'mobile'
      ? [1, 1, 1, 1, 1, 1, 1]
      : screenType === 'tablet'
      ? [1, tabletFar, tabletNeighbor, tabletMax, tabletNeighbor, tabletFar, 1]
      : [1, desktopFar, desktopNeighbor, max, desktopNeighbor, desktopFar, 1]
  );

  // Apply specified Spring physics
  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center justify-center"
    >
      <motion.div
        style={{ 
          scale,
          zIndex: isHovered ? 50 : 10,
          willChange: 'transform'
        }}
        className={`inline-flex items-center justify-center transform-gpu ${className}`}
      >
        {children}
      </motion.div>

      {/* Tooltip fades upward on desktop/tablet hover */}
      <AnimatePresence>
        {isHovered && label && screenType !== 'mobile' && (
          <motion.span
            initial={{ opacity: 0, y: 8, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -8, x: '-50%' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute -top-10 left-1/2 px-2.5 py-1 rounded-md bg-slate-900/95 backdrop-blur-sm text-white text-[10px] font-bold tracking-wide whitespace-nowrap shadow-md pointer-events-none z-50 border border-slate-800"
          >
            {label}
            {/* Tooltip arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95" />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar({ activePage, onNavigate, onRequestTutor }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenType, setScreenType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Track cursor X coordinate across the entire navbar
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenType('mobile');
      } else if (width < 1024) {
        setScreenType('tablet');
      } else {
        setScreenType('desktop');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial calls
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (pageId: ActivePage) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  // Main nav items (excluding legal policies from the navbar)
  const navItems = ROUTES.filter(
    route => route.id !== 'privacy-policy' && route.id !== 'terms-and-conditions'
  );

  return (
    <header
      id="main-header"
      onMouseMove={(e) => {
        if (screenType !== 'mobile') {
          mouseX.set(e.clientX);
        }
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Home item (Completely Static Logo) */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group text-left"
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
              <DockItem 
                key={item.id} 
                mouseX={mouseX} 
                screenType={screenType} 
                label={item.name}
              >
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer relative flex flex-col items-center justify-center ${
                    activePage === item.id
                      ? 'text-teal-600 bg-teal-50/60 font-bold'
                      : isScrolled
                      ? 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                      : 'text-slate-700 hover:text-teal-600 hover:bg-white/40'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activePage === item.id && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute bottom-0.5 h-[2.5px] bg-teal-500 rounded-full left-3.5 right-3.5"
                      style={{ originY: 0 }}
                      transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
                    />
                  )}
                </button>
              </DockItem>
            ))}
          </nav>

          {/* Call-to-Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <DockItem mouseX={mouseX} screenType={screenType} label="Helpline">
              <a
                href="tel:+917317444730"
                title="Call Helpline: +91 73174 44730"
                className="flex items-center justify-center w-10 h-10 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold rounded-xl border border-teal-100/80 transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4 text-teal-600 animate-pulse" />
              </a>
            </DockItem>

            <DockItem mouseX={mouseX} screenType={screenType} label="Instagram">
              <a
                href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-pink-600 transition flex items-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </DockItem>

            <DockItem mouseX={mouseX} screenType={screenType} label="YouTube">
              <a
                href="https://www.youtube.com/@Nt-online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-red-600 transition flex items-center"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </DockItem>

            <DockItem mouseX={mouseX} screenType={screenType} label="Apply Now" maxScale={1.15}>
              <button
                onClick={onRequestTutor}
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:from-teal-600 hover:to-teal-700 transition shadow-md shadow-teal-500/10 cursor-pointer whitespace-nowrap"
              >
                Request Tutor
              </button>
            </DockItem>
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
                className={`text-sm font-semibold w-full text-left py-2.5 px-3 rounded-lg transition-all relative flex items-center ${
                  activePage === item.id
                    ? 'text-teal-600 bg-teal-50 font-bold'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex flex-col items-start relative">
                  <span className="relative z-10">{item.name}</span>
                  {activePage === item.id && (
                    <motion.div
                      layoutId="active-underline-mobile"
                      className="absolute -bottom-1 h-[2px] bg-teal-500 rounded-full left-0 right-0"
                      transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
                    />
                  )}
                </div>
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
