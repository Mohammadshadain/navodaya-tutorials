import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BookOpen, UserCheck, FlaskConical, Users, Trophy, Presentation, 
  ClipboardCheck, Lightbulb, ChevronLeft, ChevronRight, X, Search, 
  Sparkles, Award, GraduationCap, ShieldCheck
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GalleryItem {
  id: number;
  title: string;
  desc: string;
  tag: string;
  image: string;
  heightClass: string; // Dynamic height for organic masonry rhythm
  iconName: string;
}

interface MasonryGalleryProps {
  onRequestTutor: () => void;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right';
  blurToFocus?: boolean;
  scaleOnHover?: boolean;
  hoverScale?: number;
  colorShiftOnHover?: boolean;
  stagger?: number;
}

export function MasonryGallery({
  onRequestTutor,
  animateFrom = 'bottom',
  blurToFocus = true,
  scaleOnHover = true,
  hoverScale = 0.96,
  colorShiftOnHover = true,
  stagger = 0.08
}: MasonryGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columnsCount, setColumnsCount] = useState(5);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasAnimatedRef = useRef(false);

  // 25 premium, valid, high-quality educational images
  const GALLERY_ITEMS: GalleryItem[] = useMemo(() => [
    {
      id: 1,
      title: 'Interactive Classroom Learning',
      desc: 'Engaging, multimedia-driven physical lessons fostering peer-to-peer discussions and strong conceptual foundations.',
      tag: 'Classroom Learning',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]',
      iconName: 'BookOpen'
    },
    {
      id: 2,
      title: '1-to-1 Personal Home Tuition',
      desc: 'Custom-tailored home guidance with undivided attention matching the student\'s unique learning pace.',
      tag: 'Home Tuition',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[260px]',
      iconName: 'UserCheck'
    },
    {
      id: 3,
      title: 'Advanced Mathematics Excellence',
      desc: 'Deconstructing algebraic equations and calculus proofs through intuitive mental exercises and visual structures.',
      tag: 'Mathematics Excellence',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[280px]',
      iconName: 'Sparkles'
    },
    {
      id: 4,
      title: 'Physics Concepts & Theories',
      desc: 'Bridging abstract equations of kinematics, thermodynamics, and electromagnetism to observable real-world mechanics.',
      tag: 'Physics Concepts',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[340px]',
      iconName: 'Lightbulb'
    },
    {
      id: 5,
      title: 'Hands-on Chemistry Practical',
      desc: 'Visualizing atomic bonds, stoichiometry, and reaction profiles safely under direct coordinator supervision.',
      tag: 'Chemistry Practical',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[270px]',
      iconName: 'FlaskConical'
    },
    {
      id: 6,
      title: 'Microscopic Biology Exploration',
      desc: 'Understanding cytological structures, cellular divisions, and organic botanical processes using advanced digital lenses.',
      tag: 'Biology Sessions',
      image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[300px]',
      iconName: 'Award'
    },
    {
      id: 7,
      title: 'English Speech & Literature',
      desc: 'Refining grammar parameters, phonetics, reading vocabulary, and analytical essay-writing formats.',
      tag: 'English Communication',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[280px]',
      iconName: 'BookOpen'
    },
    {
      id: 8,
      title: 'Algorithms & Coding Lab',
      desc: 'Developing logical algorithmic pathways, functional scripting, and system design skills early.',
      tag: 'Computer Education',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[330px]',
      iconName: 'Presentation'
    },
    {
      id: 9,
      title: 'Next-Gen Smart Classrooms',
      desc: 'Empowering deep understanding via dynamic interactive 3D content projections and digitized syllabus slides.',
      tag: 'Smart Classroom',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[250px]',
      iconName: 'Presentation'
    },
    {
      id: 10,
      title: 'Live Online Mentorship Panels',
      desc: 'Delivering Lucknow\'s elite exam guides directly to household study desks through encrypted high-speed streams.',
      tag: 'Online Live Classes',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[310px]',
      iconName: 'Users'
    },
    {
      id: 11,
      title: 'Feedback Alignments with Parents',
      desc: 'Coordinating periodic review meetings with local families to adjust test schedules and feedback streams.',
      tag: 'Parent Interaction',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[290px]',
      iconName: 'Users'
    },
    {
      id: 12,
      title: 'Targeted Doubt Solving',
      desc: 'Resolving lingering classroom confusions systematically in micro-groups or individual sessions.',
      tag: 'Doubt Solving Session',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]',
      iconName: 'ClipboardCheck'
    },
    {
      id: 13,
      title: 'Synergistic Study Groups',
      desc: 'Fostering healthy intellectual competitiveness through peer discussion and coordinator-vetted mock series.',
      tag: 'Group Study',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[270px]',
      iconName: 'Users'
    },
    {
      id: 14,
      title: 'NEET Foundation & Prep',
      desc: 'Comprehensive medical coaching program mapping deep biological syllabus, and fast mock strategies.',
      tag: 'NEET Coaching',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[330px]',
      iconName: 'Trophy'
    },
    {
      id: 15,
      title: 'IIT-JEE Mathematics & Physics',
      desc: 'Elite training for engineering aspirants focusing on advanced-tier conceptual clarity and quick elimination rules.',
      tag: 'IIT-JEE Coaching',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[290px]',
      iconName: 'Trophy'
    },
    {
      id: 16,
      title: 'CUET Aptitude & Subject Mastery',
      desc: 'Preparing high-schoolers for premier central university admissions with general analytical and verbal tests.',
      tag: 'CUET Preparation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[310px]',
      iconName: 'GraduationCap'
    },
    {
      id: 17,
      title: 'National Olympiad Training',
      desc: 'Cultivating critical thinking to represent Lucknow on national science and mathematical Olympiad tables.',
      tag: 'Olympiad Training',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[340px]',
      iconName: 'Lightbulb'
    },
    {
      id: 18,
      title: 'NDA Foundation Drills',
      desc: 'Preparing defence aspirants with systematic academic pacing, English communication, and logical reasoning.',
      tag: 'NDA Foundation',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[280px]',
      iconName: 'ShieldCheck'
    },
    {
      id: 19,
      title: 'Board Syllabus Revisions',
      desc: 'Methodical revision charts, mock sample analysis, and exact writing presentations for CBSE & ICSE topper spots.',
      tag: 'Board Exam Preparation',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[300px]',
      iconName: 'ClipboardCheck'
    },
    {
      id: 20,
      title: 'Celebrating Merit Top Ranks',
      desc: 'Direct coordinator awards recognizing student grit, remarkable performance improvements, and score surges.',
      tag: 'Student Award Ceremony',
      image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[260px]',
      iconName: 'Trophy'
    },
    {
      id: 21,
      title: 'Annual District Merits',
      desc: 'A vibrant annual celebration honoring Lucknow board toppers, teachers, and proud parents.',
      tag: 'Merit Celebration',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[310px]',
      iconName: 'Trophy'
    },
    {
      id: 22,
      title: 'Academic Milestone Triumphs',
      desc: 'Transforming scores from average tiers to high merit standings through persistent weekly evaluations.',
      tag: 'Academic Excellence',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e84589d90?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[295px]',
      iconName: 'GraduationCap'
    },
    {
      id: 23,
      title: 'Tutor Training Seminars',
      desc: 'Fostering instructional excellence through ongoing seminars covering digital resources, teaching tools, and child psychology.',
      tag: 'Tutor Guidance',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]',
      iconName: 'Presentation'
    },
    {
      id: 24,
      title: 'Customized 1-on-1 Mentorship',
      desc: 'Developing hyper-focused study templates mapped perfectly to school schedules and student potential.',
      tag: 'Personal Mentoring',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[270px]',
      iconName: 'UserCheck'
    },
    {
      id: 25,
      title: 'Lucknow Topper Testimonials',
      desc: 'Our continuous track record of securing 95%+ averages across Lucknow schools year after year.',
      tag: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[340px]',
      iconName: 'Trophy'
    }
  ], []);

  // Determine number of columns dynamically on screen resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setColumnsCount(5); // Desktop
      } else if (width >= 1024) {
        setColumnsCount(4); // Large Tablet
      } else if (width >= 768) {
        setColumnsCount(3);  // Tablet
      } else if (width >= 480) {
        setColumnsCount(2);  // Mobile
      } else {
        setColumnsCount(1);  // Small Mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute items across columns to ensure clean vertical masonry without gaps
  const columnizedItems = useMemo(() => {
    const cols: GalleryItem[][] = Array.from({ length: columnsCount }, () => []);
    GALLERY_ITEMS.forEach((item, index) => {
      cols[index % columnsCount].push(item);
    });
    return cols;
  }, [columnsCount, GALLERY_ITEMS]);

  // Entrance scroll animations using GSAP
  useEffect(() => {
    // If we've already animated during this mount session, skip to prevent jumpiness on resize
    if (hasAnimatedRef.current) return;

    const cards = containerRef.current?.querySelectorAll('.masonry-card-item');
    if (!cards || cards.length === 0) return;

    // Determine initial transform values based on config
    let initialY = 0;
    let initialX = 0;
    if (animateFrom === 'bottom') initialY = 50;
    else if (animateFrom === 'top') initialY = -50;
    else if (animateFrom === 'left') initialX = -50;
    else if (animateFrom === 'right') initialX = 50;

    // Set initial layout states
    gsap.set(cards, {
      opacity: 0,
      y: initialY,
      x: initialX,
      filter: blurToFocus ? 'blur(20px)' : 'none',
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          x: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: stagger,
          ease: 'power3.out',
          overwrite: 'auto',
          onComplete: () => {
            hasAnimatedRef.current = true;
          }
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [columnsCount, animateFrom, blurToFocus, stagger]);

  // Lightbox Keyboard Support (Arrow left, Arrow right, ESC)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, GALLERY_ITEMS]);

  // Helper to render relevant category icons dynamically
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 text-white' };
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'FlaskConical': return <FlaskConical {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Trophy': return <Trophy {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      case 'ClipboardCheck': return <ClipboardCheck {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Award': return <Award {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <div className="space-y-12">
      {/* Masonry Container */}
      <div 
        ref={containerRef} 
        className="flex gap-4 sm:gap-6 justify-center w-full select-none"
      >
        {columnizedItems.map((column, colIndex) => (
          <div 
            key={colIndex} 
            className="flex flex-col gap-4 sm:gap-6 flex-1 max-w-[320px] transition-all duration-500"
          >
            {column.map((item) => {
              // Find the absolute index in the master array for lightbox navigation
              const absoluteIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(absoluteIndex)}
                  style={{
                    '--hover-scale': scaleOnHover ? hoverScale : 1,
                  } as React.CSSProperties}
                  className="masonry-card-item bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-teal-500/20 transition-all duration-300 flex flex-col cursor-pointer group transform-gpu md:hover:-translate-y-2 hover:scale-[var(--hover-scale)]"
                >
                  {/* Visual Image Area */}
                  <div className={`relative bg-slate-900 overflow-hidden w-full ${item.heightClass}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-all duration-700 ease-[0.16,1,0.3,1] ${
                        colorShiftOnHover ? 'saturate-40 group-hover:saturate-100 group-hover:scale-105' : 'group-hover:scale-105'
                      }`}
                    />
                    
                    {/* Dark gradient overlay that animates on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent group-hover:from-slate-950/95 transition-all duration-300" />
                    
                    {/* Floating top-left icon box */}
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-teal-500/90 backdrop-blur-xs flex items-center justify-center text-white shadow-md shadow-teal-500/20 z-10">
                      {renderIcon(item.iconName)}
                    </div>

                    {/* Category tag */}
                    <div className="absolute bottom-4 left-4 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="text-[9px] font-black tracking-widest text-teal-400 uppercase bg-slate-900/90 border border-teal-500/25 px-2.5 py-1 rounded-md leading-none">
                        {item.tag}
                      </span>
                    </div>

                    {/* Magnifier glass centered on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Search className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Descriptions Body */}
                  <div className="p-5 space-y-2 text-left bg-white relative z-10">
                    <h3 className="text-sm font-bold text-slate-800 font-display leading-tight group-hover:text-teal-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-all duration-200 z-50 cursor-pointer shadow-lg border border-white/10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
            }}
            className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-teal-500 text-white flex items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-lg border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
            }}
            className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-teal-500 text-white flex items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-lg border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Content Card container */}
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] md:max-h-none shadow-2xl relative border border-white/10 flex flex-col md:flex-row transition-all duration-500 transform scale-95 sm:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side: Large image displaying with full responsiveness */}
            <div className="md:w-3/5 h-64 sm:h-96 md:h-[480px] relative bg-slate-950 overflow-hidden flex items-center justify-center">
              <img 
                src={activeLightboxItem.image} 
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Right Side: Details and action button */}
            <div className="p-6 sm:p-8 md:w-2/5 flex flex-col justify-between text-left space-y-4 sm:space-y-6 bg-white">
              <div className="space-y-3 sm:space-y-4">
                <span className="inline-flex items-center gap-1 text-[9px] font-black tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-md w-fit leading-none">
                  <Sparkles className="w-3 h-3" />
                  {activeLightboxItem.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold font-display text-slate-800 leading-snug">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {activeLightboxItem.desc}
                </p>
                <div className="text-[10px] text-slate-400 font-semibold italic flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  Image { (lightboxIndex || 0) + 1 } of { GALLERY_ITEMS.length }
                </div>
              </div>

              <button
                onClick={() => {
                  setLightboxIndex(null);
                  onRequestTutor();
                }}
                className="w-full py-3 bg-teal-500 hover:bg-teal-600 active:scale-95 text-white font-bold rounded-xl text-xs transition duration-200 cursor-pointer text-center shadow-lg shadow-teal-500/20 hover:shadow-teal-600/30"
              >
                Request Tutor Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
