import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Compass, ShieldCheck, Users, Target, BookOpen, GraduationCap, MapPin, 
  Phone, Mail, Clock, Search, Star, HelpCircle, ChevronRight, Check, ArrowRight,
  Shield, BookOpenText, Sparkles, Building, UserCheck,
  Facebook, Instagram, Youtube, MessageSquare,
  FlaskConical, Trophy, Presentation, ClipboardCheck, Lightbulb, X
} from 'lucide-react';
import { SUBJECTS, CLASSES_COVERED, SERVICE_AREAS, TESTIMONIALS, FAQS } from '../data';
import { ActivePage } from '../types';

interface SubPageViewProps {
  onRequestTutor: () => void;
  onNavigate: (page: ActivePage) => void;
}

// ==========================================
// 1. ABOUT VIEW
// ==========================================
export function AboutView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  return (
    <div id="about-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">About Us</span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full">Who We Are</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight leading-tight">
            Cultivating Academic Breakthroughs Since 2012
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Navodaya Tutorial is India's trusted platform for high-quality, in-home tutoring and academic support, connecting families with expert subject matter mentors.
          </p>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-slate-800">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                To provide affordable, high-quality and personalized education that helps students achieve academic excellence and career success.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <h2 className="text-2xl font-bold font-display text-slate-800">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                To become one of India's most trusted educational service providers by delivering exceptional learning experiences through qualified educators and innovative teaching methods.
              </p>
            </div>
          </div>
          <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">The Navodaya Pledge</h3>
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>100% Verified Credentials:</strong> Every degree and boarding profile verified manually.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Free Trial Evaluation:</strong> Evaluate teacher match with absolutely zero upfront obligations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Seamless Safe Replacements:</strong> Swap matched tutors instantly if student performance slows down.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>No Brokerage:</strong> Complete transparency in fee mapping with absolute affordability.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-teal-600 font-display">14+ Years</span>
            <span className="text-xs text-slate-500 font-semibold mt-1 block">Teaching Since 2012</span>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-teal-600 font-display">150+</span>
            <span className="text-xs text-slate-500 font-semibold mt-1 block">Verified Tutors Onboarded</span>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-teal-600 font-display">500+</span>
            <span className="text-xs text-slate-500 font-semibold mt-1 block">Students Guided in Lucknow</span>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-teal-600 font-display">100%</span>
            <span className="text-xs text-slate-500 font-semibold mt-1 block">Verified Tutors (Background Checked)</span>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-slate-900 rounded-3xl text-center space-y-4 text-white">
          <h3 className="text-xl font-bold font-display">Experience Customized 1-on-1 In-Home Learning Today</h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">Book a free demo class with Lucknow's finest subject specialist tutors.</p>
          <button
            onClick={onRequestTutor}
            className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl text-xs transition cursor-pointer"
          >
            Schedule Free Trial Class
          </button>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 2. SUBJECTS VIEW
// ==========================================
export function SubjectsView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  const [searchQuery, setSearchQuery] = useState(() => {
    const saved = sessionStorage.getItem('subject_search');
    if (saved) {
      sessionStorage.removeItem('subject_search');
      return saved;
    }
    return '';
  });

  const filteredSubjects = SUBJECTS.filter(sub =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="subjects-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Subjects</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Our Academic Coverage</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Specialist Home Tutors for All Domains
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            We assign dedicated subject-matter experts who understand how to untangle complex formulas, chemical reaction mechanisms, coding algorithms, and financial sheets.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-6 relative">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search subject (e.g. Physics, Coding, Hindi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition text-sm text-slate-800 font-medium bg-white"
              />
            </div>
          </div>
        </div>

        {/* Subjects List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((sub, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-500/10 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                  <BookOpenText className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 font-display">{sub.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {sub.description}
                </p>
              </div>

              <div className="border-t border-slate-50 pt-4 mt-auto space-y-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
                    Classes Supported
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {sub.classes.map((cls, i) => (
                      <span key={i} className="text-[10px] text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded font-medium">
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/918858807008?text=Hello%2C%0AI%20would%20like%20to%20book%20a%20demo%20class%20for%20${encodeURIComponent(sub.name)}.%0APlease%20share%20the%20tutor%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-teal-500/10 hover:bg-teal-500 text-teal-700 hover:text-white rounded-xl text-[11px] font-bold transition-all duration-200 flex flex-col items-center justify-center text-center gap-0.5 border border-teal-500/20 group/btn"
                >
                  <span className="text-slate-500 group-hover/btn:text-teal-100 transition-colors text-[9px] font-medium leading-none">Want to book a demo class for {sub.name}?</span>
                  <span className="flex items-center gap-1 font-extrabold text-[11px]">Book Now <span className="text-sm font-normal">→</span></span>
                </a>
              </div>
            </div>
          ))}

          {filteredSubjects.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 text-xs font-semibold">
              No matching subjects found for "{searchQuery}". We can still map custom requirements! Please contact us.
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="bg-teal-50 p-6 sm:p-8 rounded-3xl border border-teal-100/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-800">Need multiple subject tutors?</h3>
            <p className="text-xs text-slate-500">We offer multi-subject combined packages with discounted coordinator rates.</p>
          </div>
          <button
            onClick={onRequestTutor}
            className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Custom Combined Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 3. CLASSES VIEW
// ==========================================
export function ClassesView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  return (
    <div id="classes-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Classes</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Class Levels Assumed</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Academic Syllabi and Board Curricula Covered
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            From kindergarten play-based reading habits up to higher undergraduate specializations and intensive competitive board tests (CBSE, UP Board, ISC, ICSE, NIOS, IB).
          </p>
        </div>

        {/* Classes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLASSES_COVERED.map((cls, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-800 leading-tight">
                    {cls.grade}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cls.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5 mt-6 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Subjects:</span>
                  {cls.subjects.map((sub, i) => (
                    <span key={i} className="text-[10px] text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider block">Boards:</span>
                  {cls.board.map((bd, i) => (
                    <span key={i} className="text-[10px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded font-bold">
                      {bd}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive exams banner */}
        <div className="bg-slate-900 p-8 rounded-3xl text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Board Milestones</span>
            <h3 className="text-lg font-bold font-display">Targeting Class 10 & 12 Boards (2026-2027)?</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              We arrange customized speed training sessions, complete pre-board test paper simulations, and formula cheat charts to secure a 95%+ score.
            </p>
          </div>
          <button
            onClick={onRequestTutor}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl text-xs transition cursor-pointer flex-shrink-0"
          >
            Enquire Board Prep Specialist
          </button>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 4. HOW IT WORKS VIEW
// ==========================================
export function HowItWorksView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [coords, setCoords] = useState<{ x: number; y: number }[]>([]);
  const [screenType, setScreenType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const setNodeRef = (index: number) => (el: HTMLDivElement | null) => {
    nodeRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let currentScreen: 'desktop' | 'tablet' | 'mobile' = 'desktop';
      if (width < 640) {
        currentScreen = 'mobile';
      } else if (width < 1024) {
        currentScreen = 'tablet';
      }
      setScreenType(currentScreen);

      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newCoords = nodeRefs.current.map((node) => {
        if (!node) return { x: 0, y: 0 };
        const rect = node.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });
      setCoords(newCoords);
    };

    window.addEventListener('resize', handleResize);
    const timer = setTimeout(handleResize, 150);

    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  const pathD = useMemo(() => {
    if (coords.length < 5 || coords.some(c => c.x === 0 && c.y === 0)) {
      return '';
    }

    let d = `M ${coords[0].x} ${coords[0].y}`;
    
    for (let i = 0; i < coords.length - 1; i++) {
      const pStart = coords[i];
      const pEnd = coords[i + 1];
      const h = pEnd.y - pStart.y;
      
      if (screenType === 'mobile') {
        d += ` L ${pEnd.x} ${pEnd.y}`;
      } else {
        const dir = i % 2 === 0 ? -1 : 1;
        const offset = screenType === 'desktop' ? 120 : 60;
        
        const c1x = pStart.x + dir * offset;
        const c1y = pStart.y + h * 0.25;
        const c2x = pEnd.x + dir * offset;
        const c2y = pStart.y + h * 0.75;
        
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${pEnd.x} ${pEnd.y}`;
      }
    }
    return d;
  }, [coords, screenType]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [activeSteps, setActiveSteps] = useState<boolean[]>([false, false, false, false, false]);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const unsubscribe = pathLength.on("change", (latest) => {
      if (pathRef.current) {
        try {
          const totalLength = pathRef.current.getTotalLength();
          const point = pathRef.current.getPointAtLength(latest * totalLength);
          if (point && !isNaN(point.x) && !isNaN(point.y)) {
            setDotPos({ x: point.x, y: point.y });
          }
        } catch (e) {}
      }

      setActiveSteps((prev) => {
        let changed = false;
        const next = [...prev];
        for (let i = 0; i < 5; i++) {
          const threshold = i / 4;
          const isReached = latest >= Math.max(0, threshold - 0.05);
          if (isReached && !next[i]) {
            next[i] = true;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    });

    return () => unsubscribe();
  }, [pathLength]);

  useEffect(() => {
    if (pathRef.current && pathD) {
      try {
        const totalLength = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(pathLength.get() * totalLength);
        if (point && !isNaN(point.x) && !isNaN(point.y)) {
          setDotPos({ x: point.x, y: point.y });
        }
      } catch (e) {}
    }
  }, [pathD, pathLength]);

  const isFinished = activeSteps[4];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.45, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.05
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.35, ease: 'easeOut' } 
    }
  };

  return (
    <div id="how-it-works-view" className="py-24 bg-slate-50 min-h-screen overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">How It Works</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full">Booking Guide</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight leading-tight">
            How We Find The Ultimate Home Tutor Match
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our academic screening process ensures your child gets mapped with a tutor who perfectly aligns with their school syllabus and personality.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-6">
          <h2 className="text-2xl font-bold font-display text-slate-800">Our 5-Step Matching Protocol</h2>
        </div>

        <div ref={containerRef} className="space-y-8 relative pb-8">
          {/* Journey SVG Paths Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {pathD && (
              <>
                {/* Background trace line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(13, 148, 136, 0.08)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Animated foreground drawing line */}
                <motion.path
                  ref={pathRef}
                  d={pathD}
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    pathLength,
                    filter: isFinished ? 'drop-shadow(0 0 6px rgba(13, 148, 136, 0.4))' : 'none',
                  }}
                  className="transition-all duration-500"
                />
              </>
            )}
          </svg>

          {/* Moving Glow Dot */}
          {pathD && dotPos.x !== 0 && dotPos.y !== 0 && (
            <div
              style={{
                position: 'absolute',
                left: dotPos.x,
                top: dotPos.y,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 30,
                willChange: 'transform',
              }}
              className="transform-gpu"
            >
              <div className="w-3.5 h-3.5 bg-white rounded-full relative flex items-center justify-center shadow-lg shadow-teal-500/50">
                <div className="absolute w-6.5 h-6.5 bg-teal-400 rounded-full blur-sm opacity-80 -z-10 animate-pulse" />
                <div className="absolute w-8.5 h-8.5 bg-teal-500/30 rounded-full -z-20 animate-ping [animation-duration:1.5s]" />
              </div>
            </div>
          )}
          
          {/* Step 1 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0 min-h-[140px] z-10">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={activeSteps[0] ? "visible" : "hidden"}
              className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sm:text-right"
            >
              <motion.span variants={itemVariants} className="text-xs font-bold text-teal-600 block">Step 01</motion.span>
              <motion.h3 variants={itemVariants} className="text-base font-bold text-slate-800 font-display">Submit Enquiry Profile</motion.h3>
              <motion.p variants={itemVariants} className="text-xs text-slate-500 leading-relaxed">
                Fill out our simple form with child name, class, subject requirements, and residential sector in Lucknow.
              </motion.p>
            </motion.div>

            {/* Center Node 1 */}
            <motion.div
              ref={setNodeRef(0)}
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={activeSteps[0] ? { scale: [0.8, 1.25, 1], opacity: 1 } : { scale: 0.8, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs shadow-md z-20 ${
                activeSteps[0] ? 'bg-teal-500 ring-4 ring-teal-500/20' : 'bg-slate-300'
              }`}
            >
              <span>1</span>
              {activeSteps[0] && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-teal-500/30 -z-10"
                />
              )}
            </motion.div>
            <div className="hidden sm:block w-[45%]" />
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0 min-h-[140px] z-10">
            <div className="hidden sm:block w-[45%]" />
            {/* Center Node 2 */}
            <motion.div
              ref={setNodeRef(1)}
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={activeSteps[1] ? { scale: [0.8, 1.25, 1], opacity: 1 } : { scale: 0.8, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs shadow-md z-20 ${
                activeSteps[1] ? 'bg-teal-600 ring-4 ring-teal-600/20' : 'bg-slate-300'
              }`}
            >
              <span>2</span>
              {activeSteps[1] && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-teal-600/30 -z-10"
                />
              )}
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={activeSteps[1] ? "visible" : "hidden"}
              className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
            >
              <motion.span variants={itemVariants} className="text-xs font-bold text-teal-600 block">Step 02</motion.span>
              <motion.h3 variants={itemVariants} className="text-base font-bold text-slate-800 font-display">Academic Counselor Consultation</motion.h3>
              <motion.p variants={itemVariants} className="text-xs text-slate-500 leading-relaxed">
                Our counselor calls you back to gather book list specifications, current score logs, specific learning difficulties, and comfortable timing slots.
              </motion.p>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0 min-h-[140px] z-10">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={activeSteps[2] ? "visible" : "hidden"}
              className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sm:text-right"
            >
              <motion.span variants={itemVariants} className="text-xs font-bold text-teal-600 block">Step 03</motion.span>
              <motion.h3 variants={itemVariants} className="text-base font-bold text-slate-800 font-display">Free 1-Hour Trial Lesson</motion.h3>
              <motion.p variants={itemVariants} className="text-xs text-slate-500 leading-relaxed">
                The handpicked tutor visits your home. We encourage parents to actively observe the tutor's instruction pattern and rapport building during trial class.
              </motion.p>
            </motion.div>

            {/* Center Node 3 */}
            <motion.div
              ref={setNodeRef(2)}
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={activeSteps[2] ? { scale: [0.8, 1.25, 1], opacity: 1 } : { scale: 0.8, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs shadow-md z-20 ${
                activeSteps[2] ? 'bg-amber-500 ring-4 ring-amber-500/20' : 'bg-slate-300'
              }`}
            >
              <span>3</span>
              {activeSteps[2] && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-amber-500/30 -z-10"
                />
              )}
            </motion.div>
            <div className="hidden sm:block w-[45%]" />
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0 min-h-[140px] z-10">
            <div className="hidden sm:block w-[45%]" />
            {/* Center Node 4 */}
            <motion.div
              ref={setNodeRef(3)}
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={activeSteps[3] ? { scale: [0.8, 1.25, 1], opacity: 1 } : { scale: 0.8, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs shadow-md z-20 ${
                activeSteps[3] ? 'bg-slate-800 ring-4 ring-slate-800/20' : 'bg-slate-300'
              }`}
            >
              <span>4</span>
              {activeSteps[3] && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-slate-800/30 -z-10"
                />
              )}
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={activeSteps[3] ? "visible" : "hidden"}
              className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
            >
              <motion.span variants={itemVariants} className="text-xs font-bold text-teal-600 block">Step 04</motion.span>
              <motion.h3 variants={itemVariants} className="text-base font-bold text-slate-800 font-display">Confirm & Progress Tracking</motion.h3>
              <motion.p variants={itemVariants} className="text-xs text-slate-500 leading-relaxed">
                Resume regular schedules. We stay in close touch with periodic performance audits to ensure homework trackers and weekly tests are maintained.
              </motion.p>
            </motion.div>
          </div>

          {/* Step 5 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0 min-h-[140px] z-10">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={activeSteps[4] ? "visible" : "hidden"}
              className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sm:text-right"
            >
              <motion.span variants={itemVariants} className="text-xs font-bold text-teal-600 block">Step 05</motion.span>
              <motion.h3 variants={itemVariants} className="text-base font-bold text-slate-800 font-display">Start Regular Classes</motion.h3>
              <motion.p variants={itemVariants} className="text-xs text-slate-500 leading-relaxed">
                Your assigned tutor begins the regular academic syllabus classes at your home under coordinator monitoring.
              </motion.p>
            </motion.div>

            {/* Center Node 5 */}
            <motion.div
              ref={setNodeRef(4)}
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={activeSteps[4] ? { scale: [0.8, 1.25, 1], opacity: 1 } : { scale: 0.8, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs shadow-md z-20 ${
                activeSteps[4] ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-slate-300'
              }`}
            >
              <span>5</span>
              {activeSteps[4] && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-emerald-500/30 -z-10"
                />
              )}
            </motion.div>
            <div className="hidden sm:block w-[45%]" />
          </div>

        </div>

        {/* Centered Footer note */}
        <div className="text-center py-4">
          <p className="text-sm font-extrabold font-display text-teal-600 tracking-wide uppercase italic">
            All the Best for Your Kids' Career.
          </p>
        </div>

        {/* Trust seal */}
        <motion.div
          animate={isFinished ? { scale: [1, 1.04, 1] } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
          className="bg-teal-50 border border-teal-100/40 p-6 rounded-2xl text-center space-y-2 max-w-2xl mx-auto pt-8"
        >
          <Shield className="w-8 h-8 text-teal-600 mx-auto" />
          <h4 className="text-sm font-bold text-slate-800 font-display">Complete Tutor Replacement Cover</h4>
          <p className="text-xs text-slate-500">
            If at any point during regular sessions you feel the tutor's alignment is slowing down, our support desk replaces the tutor within 48 hours without any hassle or extra fees.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

// ==========================================
// 5. TESTIMONIALS VIEW
// ==========================================
export function TestimonialsView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  return (
    <div id="testimonials-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Testimonials</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full">Success Feed</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Trust Reports from Lucknow Parents
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Read honest feedbacks from families in Hazratganj, Gomti Nagar, Aliganj, and Indira Nagar detailing academic confidence shifts under Navodaya Tutorials.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-5 mt-6">
                <img
                  src={test.avatarUrl}
                  alt={test.name}
                  className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800">{test.name}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold mt-0.5">
                    <span>{test.location}</span>
                    <span>•</span>
                    <span className="text-teal-600 font-semibold">{test.classTaught}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call out stats box */}
        <div className="bg-slate-900 rounded-3xl p-8 text-center text-white space-y-4 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold font-display">Join 500+ Satisfied Lucknow Parents</h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Book your 100% risk-free home demonstration session. We are confident we hold the ideal matched subject tutor.
          </p>
          <button
            onClick={onRequestTutor}
            className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Book Free Trial Now
          </button>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 6. FAQ VIEW
// ==========================================
export function FaqView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState(() => {
    const saved = sessionStorage.getItem('faq_search');
    if (saved) {
      sessionStorage.removeItem('faq_search');
      return saved;
    }
    return '';
  });

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div id="faq-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">FAQ</span>
        </div>

        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Got Questions?</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Find answers covering tuition fees calculation, tutor qualifications, backup trial policies, and CBSE, UP Board, ISC, ICSE, NIOS, IB board tracking.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto pt-6">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search queries (e.g., Trial, Fees, Online)..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition text-sm text-slate-800 font-medium bg-white"
              />
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition duration-300 ${
                  isOpen ? 'border-teal-500 bg-teal-50/10' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 text-xs sm:text-sm font-display cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-teal-600 bg-teal-50 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-teal-500 text-white' : ''}`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs font-semibold">
              No matching questions found for "{faqSearch}". Please reach out to us directly.
            </div>
          )}
        </div>

        {/* Helpline Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center space-y-3 max-w-xl mx-auto pt-8 shadow-sm">
          <HelpCircle className="w-7 h-7 text-teal-500 mx-auto" />
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Still have questions?</h4>
          <p className="text-xs text-slate-500">Contact our senior academic consultant directly via telephone hotline.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <div className="flex flex-col gap-1 px-5 py-2.5 bg-slate-800 text-white font-bold rounded-xl text-xs transition min-w-[180px] text-center justify-center">
              <span className="text-[9px] text-slate-400 font-medium">Call Us Directly</span>
              <a href="tel:+917317444730" className="hover:text-teal-400 transition leading-none py-0.5">
                +91 73174 44730
              </a>
              <a href="tel:+917891326223" className="hover:text-teal-400 transition leading-none py-0.5">
                +91 78913 26223
              </a>
            </div>
            <a href="https://wa.me/918858807008" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs transition flex flex-col items-center justify-center min-w-[180px]">
              <span className="text-[9px] text-emerald-100 font-medium leading-none mb-0.5">Instant Chat</span>
              <span className="leading-none">WhatsApp Coordinator</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 7. CONTACT VIEW
// ==========================================
export function ContactView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <div id="contact-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Contact Us</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Reach Out</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Contact Navodaya Tutorial
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Reach out to our administrative team for booking schedules, tutor feedback, or payment mapping.
          </p>
        </div>

        {/* Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
          
          {/* Left Column: Direct info channels */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-display text-slate-800">Helpline Direct Channels</h2>
            
            <div className="space-y-4">
              <div 
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4 text-left w-full"
              >
                <MapPin className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Location / Service Area</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div 
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4 text-left w-full"
              >
                <Phone className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Tutor Booking Hotline</h4>
                  <div className="flex flex-col gap-1.5 mt-1.5">
                    <a href="tel:+917317444730" className="text-xs text-slate-600 hover:text-teal-600 font-bold transition block">
                      +91 73174 44730
                    </a>
                    <a href="tel:+917891326223" className="text-xs text-slate-600 hover:text-teal-600 font-bold transition block">
                      +91 78913 26223
                    </a>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1.5">Active 9:00 AM - 8:00 PM Daily</p>
                </div>
              </div>

              <a 
                href="mailto:navodayatutorialsindia@gmail.com"
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4 hover:shadow-md hover:border-teal-500/20 transition group text-left block w-full cursor-pointer"
              >
                <Mail className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0 group-hover:text-teal-600 transition" />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider group-hover:text-teal-600 transition">Official Email</h4>
                  <p className="text-xs text-slate-500 mt-1 group-hover:text-teal-600 transition break-all">
                    navodayatutorialsindia@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Service Areas Info Box */}
            <div 
              className="h-[180px] bg-teal-50/40 border border-teal-100/40 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center p-4 text-center"
            >
              <div className="space-y-2">
                <Building className="w-6 h-6 text-teal-600 mx-auto" />
                <h4 className="text-xs font-bold text-slate-800">Centrally Active Tutoring</h4>
                <p className="text-[10px] text-slate-500">Connecting Hazratganj, Gomti Nagar, Aliganj, and all major areas of Lucknow with top verified tutors.</p>
              </div>
            </div>

            {/* Follow Us Block */}
            <div className="pt-6 border-t border-slate-200/60 mt-6 text-left">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Follow Us</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="https://wa.me/918858807008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 px-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-500 hover:text-white rounded-xl text-xs font-bold transition duration-200 cursor-pointer shadow-xs border border-emerald-100/30"
                >
                  <MessageSquare className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 px-4 bg-pink-50 text-pink-700 hover:bg-pink-500 hover:text-white rounded-xl text-xs font-bold transition duration-200 cursor-pointer shadow-xs border border-pink-100/30"
                >
                  <Instagram className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1DG4FhvotR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 px-4 bg-blue-50 text-blue-700 hover:bg-blue-500 hover:text-white rounded-xl text-xs font-bold transition duration-200 cursor-pointer shadow-xs border border-blue-100/30"
                >
                  <Facebook className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@Nt-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 px-4 bg-red-50 text-red-700 hover:bg-red-500 hover:text-white rounded-xl text-xs font-bold transition duration-200 cursor-pointer shadow-xs border border-red-100/30"
                >
                  <Youtube className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Counselor Desk & Trust Cards */}
          <div className="space-y-6">
            {/* Main counselor card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  Coordinators Online
                </div>
                <h3 className="text-lg font-bold font-display text-slate-800 leading-tight">Academic Counseling Desk</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Connect directly with Lucknow's elite tutoring coordinators to discuss syllabus targets, trial scheduling, or tutor allocations.
                </p>
              </div>

              {/* Steps or highlights */}
              <div className="space-y-4 pt-2 text-left">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Discuss Your Syllabus Targets</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">Define your child's class, subject, and school syllabus requirements.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Book Your Free Trial Class</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">We dispatch a certified, handpicked local tutor for a risk-free 1-hour demo.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Review and Start Lessons</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">Begin classes with full backup support, replacement assurance & periodic grade audits.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-50 text-left">
                <button 
                  onClick={onRequestTutor}
                  className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-extrabold rounded-xl transition text-xs shadow-md shadow-teal-500/10 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Launch Tutor Matching Assistant</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://wa.me/918858807008?text=Hi%20Navodaya%20Tutorial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-700 font-bold rounded-xl transition text-xs flex items-center justify-center gap-1.5 border border-emerald-100/50 cursor-pointer"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                  <a 
                    href="tel:+917317444730"
                    className="py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition text-xs flex items-center justify-center gap-1.5 border border-slate-100 cursor-pointer"
                  >
                    <span>Direct Call Helpline</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quality assurance box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl text-white space-y-4 shadow-sm border border-slate-800 relative overflow-hidden text-left">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Guaranteed Tutor Vetting</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Tutors match strict academic and safety audits</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                We are Lucknow's premier educational agency because we verify address proofs, academic certifications, and train teachers in pedagogical skills before allocation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// ==========================================
// 8. PRIVACY POLICY
// ==========================================
export function PrivacyPolicyView({ onNavigate }: { onNavigate: (page: ActivePage) => void }) {
  return (
    <div id="privacy-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-6 text-xs text-slate-600 leading-relaxed text-left">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2 mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Privacy Policy</span>
        </div>

        <h1 className="text-2xl font-bold font-display text-slate-800 mb-4">Privacy Policy</h1>
        
        <p><strong>Effective Date:</strong> June 28, 2026</p>
        <p>
          At Navodaya Tutorial (navodayatutorial.in), your privacy is of paramount importance to us. This Privacy Policy documents the types of personal data we collect, how we manage it, and the security protocols we deploy to keep your tutor requirements protected.
        </p>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">1. Data We Collect</h3>
        <p>
          When you submit a tutor request enquiry or general query on our website, we collect personal identity values including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full Name of the parent or student</li>
          <li>Class / Grade level of study</li>
          <li>Contact details (WhatsApp phone number, email ID)</li>
          <li>Residential Sector or general address</li>
        </ul>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">2. How We Use Your Data</h3>
        <p>
          We use your submitted data strictly for the following operational workflows:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Understanding and mapping specific academic requirements</li>
          <li>Contacting you via telephone or WhatsApp to schedule free 1-hour trial classes</li>
          <li>Recording the data securely on Google Sheets via Google Apps Script</li>
          <li>Monitoring tutor replacement logs or session feedbacks</li>
        </ul>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">3. Data Security</h3>
        <p>
          We strictly do not share, sell, distribute, or leak parent/student contact databases to third-party marketing networks. Your data stays restricted strictly to our coordinator team and the assigned, verified home tutor matched for your child's lessons.
        </p>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">4. Cookies</h3>
        <p>
          Our platform does not deploy complex trackers. We only deploy basic essential cookies to assist route transitions, browser caching, and basic analytical parameters.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 9. TERMS AND CONDITIONS
// ==========================================
export function TermsAndConditionsView({ onNavigate }: { onNavigate: (page: ActivePage) => void }) {
  return (
    <div id="terms-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-6 text-xs text-slate-600 leading-relaxed text-left">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2 mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Terms & Conditions</span>
        </div>

        <h1 className="text-2xl font-bold font-display text-slate-800 mb-4">Terms & Conditions</h1>
        
        <p><strong>Effective Date:</strong> June 28, 2026</p>
        <p>
          By accessing navodayatutorial.in and requesting a home tutor match, you agree to comply with the following formal Terms of Service.
        </p>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">1. Tutor Matching Services</h3>
        <p>
          Navodaya Tutorial serves as an elite coordinator network matching parents with verified independent home tutors. While we perform thorough credential audits, parents are highly encouraged to review tutor behavior and student rapport during the provided free 1-hour trials before confirming regular monthly cycles.
        </p>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">2. Tuition Fee Guidelines</h3>
        <p>
          Monthly fees are discussed transparently and established by the academic coordinator during the consulting call based on class levels, boards, and frequency. Parents are requested to process fee payments strictly via established pathways to avoid accounting discrepancies.
        </p>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">3. Tutor Replacement Coverage</h3>
        <p>
          If a matched tutor is absent or performance is deemed unsatisfactory, parents must contact our centralized coordinator desk to schedule free tutor replacements. Directly entering private out-of-loop arrangements with matched tutors is strictly discouraged.
        </p>

        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-4">4. Code of Conduct</h3>
        <p>
          Parents must provide a safe, respectful, and quiet in-home study environment for the visiting tutor to deliver high-quality, focused instruction.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 10. GALLERY VIEW
// ==========================================
export function GalleryView({ onRequestTutor, onNavigate }: SubPageViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'classroom' | 'hometuition' | 'cocurricular' | 'group' | 'celebration'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string; tag: string } | null>(null);

  const GALLERY_ITEMS = [
    {
      id: 1,
      category: 'classroom',
      title: 'Classroom Interactive Session',
      desc: 'Our dynamic group classrooms in Lucknow focusing on logic-building and conceptual clarity.',
      icon: 'BookOpen',
      tag: 'Classroom Learning',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'hometuition',
      title: '1-to-1 Home Guidance',
      desc: 'Individualized academic attention focusing on deep custom syllabus tracking and pacing.',
      icon: 'UserCheck',
      tag: 'One-to-One Home Tuition',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'cocurricular',
      title: 'Science Project Demonstration',
      desc: 'Fostering practical curiosity and hands-on scientific projects beyond pure rote-learning.',
      icon: 'FlaskConical',
      tag: 'Co-curricular Activities',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      category: 'group',
      title: 'Collaborative Study Circles',
      desc: 'Students collaborating on board exam mock series under senior coordinator invigilation.',
      icon: 'Users',
      tag: 'Group Study Sessions',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      category: 'celebration',
      title: 'Annual Academic Merits',
      desc: 'Recognizing student rank achievements and board toppers of CBSE, UP Board & ICSE.',
      icon: 'Trophy',
      tag: 'Testimonials & Celebrations',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      category: 'classroom',
      title: 'Digital Tech Classroom',
      desc: 'Integrating advanced projection and visualization modules for physical chemistry classes.',
      icon: 'Presentation',
      tag: 'Classroom Learning',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 7,
      category: 'hometuition',
      title: 'Home Mock-Test Series',
      desc: 'In-home progress tracking with strictly timed exam simulators under parent visibility.',
      icon: 'ClipboardCheck',
      tag: 'One-to-One Home Tuition',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 8,
      category: 'cocurricular',
      title: 'Brainstorming Quiz Contests',
      desc: 'Engaging brain puzzles and mental mathematics exercises to boost analytical reflexes.',
      icon: 'Lightbulb',
      tag: 'Co-curricular Activities',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 9,
      category: 'celebration',
      title: 'NEET Qualified Students',
      desc: 'Our brilliant students secure top ranks in NEET medical entrance exams in Lucknow.',
      icon: 'Trophy',
      tag: 'Academic Achievements',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 10,
      category: 'celebration',
      title: 'IIT-JEE Selected Students',
      desc: 'Rigorous engineering training results in outstanding selection rates for premier IIT campuses.',
      icon: 'Trophy',
      tag: 'Academic Achievements',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 11,
      category: 'celebration',
      title: 'JEE Advanced Achievers',
      desc: 'Cracking the toughest engineering test with dedicated mentorship and customized study schedules.',
      icon: 'Trophy',
      tag: 'Academic Achievements',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 12,
      category: 'celebration',
      title: 'CUET Success Stories',
      desc: 'Securing admissions into top-tier central universities with comprehensive general test prep.',
      icon: 'Trophy',
      tag: 'Academic Achievements',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 13,
      category: 'celebration',
      title: 'NDA Selection',
      desc: 'Guiding candidates to clear military entrance tests with robust academic discipline.',
      icon: 'Trophy',
      tag: 'Academic Achievements',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 14,
      category: 'cocurricular',
      title: 'Olympiad Winners',
      desc: 'Students showcasing exceptional critical thinking in state and national mathematical Olympiads.',
      icon: 'Lightbulb',
      tag: 'Co-curricular Activities',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 15,
      category: 'cocurricular',
      title: 'NTSE Scholars',
      desc: 'Nurturing talent early to win the prestigious National Talent Search Examination scholarships.',
      icon: 'Lightbulb',
      tag: 'Co-curricular Activities',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 16,
      category: 'celebration',
      title: 'Board Exam Toppers',
      desc: 'Lucknow district ranks secured in CBSE, ISC, and UP Board high school curricula.',
      icon: 'Trophy',
      tag: 'Testimonials & Celebrations',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 17,
      category: 'celebration',
      title: '95%+ Scorers',
      desc: 'Celebrating our high-schoolers who crossed the coveted 95% threshold in cumulative finals.',
      icon: 'Trophy',
      tag: 'Testimonials & Celebrations',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e84589d90?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 18,
      category: 'celebration',
      title: 'Student Award Ceremony',
      desc: 'Our annual merit ceremony honoring outstanding performance, dedication, and consistent progress.',
      icon: 'Trophy',
      tag: 'Testimonials & Celebrations',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 19,
      category: 'group',
      title: 'Parent Appreciation Meet',
      desc: 'Regular interaction sessions with local Lucknow families to align student guidance plans.',
      icon: 'Users',
      tag: 'Group Study Sessions',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 20,
      category: 'celebration',
      title: 'Annual Academic Celebration',
      desc: 'Celebrating educational breakthroughs and milestones with parents, tutors, and alumni.',
      icon: 'Trophy',
      tag: 'Testimonials & Celebrations',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 21,
      category: 'hometuition',
      title: 'Tutor Excellence Awards',
      desc: 'Recognizing home tutors who went above and beyond to achieve monumental grade boosts.',
      icon: 'UserCheck',
      tag: 'One-to-One Home Tuition',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <div id="gallery-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition">Home</button>
          <span>/</span>
          <span className="text-slate-600">Gallery</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full">Academic Life</span>
          <h1 className="text-4xl font-extrabold font-display text-slate-800 tracking-tight">
            Our Learning Gallery
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Explore glimpses of classroom sessions, one-on-one personal home tutoring, group simulations, and merit celebrations across Lucknow.
          </p>
        </div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {[
            { id: 'all', label: 'All Glimpses' },
            { id: 'classroom', label: 'Classroom' },
            { id: 'hometuition', label: '1-to-1 Tuitions' },
            { id: 'cocurricular', label: 'Co-Curricular' },
            { id: 'group', label: 'Group Studies' },
            { id: 'celebration', label: 'Celebrations' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/10'
                  : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxImage({ src: item.image, title: item.title, desc: item.desc, tag: item.tag })}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:border-teal-500/20 transition duration-300 flex flex-col justify-between cursor-pointer group"
              >
                {/* Visual Image Area */}
                <div className="h-44 relative bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300" />
                  
                  {/* Subtle top-left icon overlay */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-teal-500/90 backdrop-blur-xs flex items-center justify-center text-white shadow-md shadow-teal-500/20 z-10">
                    {item.icon === 'BookOpen' && <BookOpen className="w-4 h-4" />}
                    {item.icon === 'UserCheck' && <UserCheck className="w-4 h-4" />}
                    {item.icon === 'FlaskConical' && <FlaskConical className="w-4 h-4" />}
                    {item.icon === 'Users' && <Users className="w-4 h-4" />}
                    {item.icon === 'Trophy' && <Trophy className="w-4 h-4" />}
                    {item.icon === 'Presentation' && <Presentation className="w-4 h-4" />}
                    {item.icon === 'ClipboardCheck' && <ClipboardCheck className="w-4 h-4" />}
                    {item.icon === 'Lightbulb' && <Lightbulb className="w-4 h-4" />}
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[9px] font-black tracking-widest text-teal-400 uppercase bg-slate-900/90 border border-teal-500/25 px-2.5 py-1 rounded-md leading-none">
                      {item.tag}
                    </span>
                  </div>

                  {/* Search/Zoom overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Search className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-5 space-y-2 text-left">
                  <h3 className="text-sm font-bold text-slate-800 font-display leading-tight group-hover:text-teal-600 transition-colors">{item.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 bg-slate-900 rounded-3xl text-center space-y-4 text-white">
          <h3 className="text-xl font-bold font-display">Witness the Academic Excellence Live</h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">Book a free demo lesson with Lucknow's premier tutoring network and boost your child's grades today.</p>
          <button
            onClick={onRequestTutor}
            className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl text-xs transition cursor-pointer"
          >
            Schedule Free Trial Class
          </button>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div 
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-100/10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition z-10 cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Large Image */}
              <div className="md:w-3/5 h-64 md:h-96 relative bg-slate-950">
                <img 
                  src={lightboxImage.src} 
                  alt={lightboxImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Details */}
              <div className="p-8 md:w-2/5 flex flex-col justify-center text-left space-y-4">
                <span className="text-[9px] font-black tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-md w-fit leading-none">
                  {lightboxImage.tag}
                </span>
                <h3 className="text-xl font-extrabold font-display text-slate-800 leading-snug">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {lightboxImage.desc}
                </p>
                <button
                  onClick={() => {
                    setLightboxImage(null);
                    onRequestTutor();
                  }}
                  className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition cursor-pointer text-center"
                >
                  Request Tutor Details
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
