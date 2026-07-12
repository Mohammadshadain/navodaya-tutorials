import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GalleryItem {
  id: number;
  image: string;
  heightClass: string; // Dynamic height for organic masonry rhythm
}

interface MasonryGalleryProps {
  onRequestTutor: () => void;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right';
  blurToFocus?: boolean;
  scaleOnHover?: boolean;
  hoverScale?: number;
  stagger?: number;
}

export function MasonryGallery({
  animateFrom = 'bottom',
  blurToFocus = true,
  scaleOnHover = true,
  hoverScale = 1.02,
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
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[260px]'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[280px]'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[340px]'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[270px]'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[300px]'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[280px]'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[330px]'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[250px]'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[310px]'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[290px]'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]'
    },
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[270px]'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[330px]'
    },
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[290px]'
    },
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[310px]'
    },
    {
      id: 17,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[340px]'
    },
    {
      id: 18,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[280px]'
    },
    {
      id: 19,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[300px]'
    },
    {
      id: 20,
      image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[260px]'
    },
    {
      id: 21,
      image: 'https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[310px]'
    },
    {
      id: 22,
      image: 'https://plus.unsplash.com/premium_photo-1690479510517-49f2c17b51f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[295px]'
    },
    {
      id: 23,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]'
    },
    {
      id: 24,
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[270px]'
    },
    {
      id: 25,
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[340px]'
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
    if (hasAnimatedRef.current) return;

    const cards = containerRef.current?.querySelectorAll('.masonry-card-item');
    if (!cards || cards.length === 0) return;

    let initialY = 0;
    let initialX = 0;
    if (animateFrom === 'bottom') initialY = 50;
    else if (animateFrom === 'top') initialY = -50;
    else if (animateFrom === 'left') initialX = -50;
    else if (animateFrom === 'right') initialX = 50;

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
          duration: 1.0,
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
              const absoluteIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(absoluteIndex)}
                  style={{
                    '--hover-scale': scaleOnHover ? hoverScale : 1.02,
                  } as React.CSSProperties}
                  className="masonry-card-item bg-slate-100 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col cursor-pointer group transform-gpu hover:scale-[var(--hover-scale)]"
                >
                  {/* Visual Image Area ONLY */}
                  <div className={`relative overflow-hidden w-full ${item.heightClass}`}>
                    <img
                      src={item.image}
                      alt="Educational Life"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                    />
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
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 select-none transition-all duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all duration-200 z-50 cursor-pointer shadow-lg backdrop-blur-xs border border-white/10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
            }}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-teal-500 active:scale-95 text-white flex items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-lg backdrop-blur-xs border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
            }}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-teal-500 active:scale-95 text-white flex items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-lg backdrop-blur-xs border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image-only Preview Content Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center overflow-hidden transition-all duration-500 transform scale-95 sm:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeLightboxItem.image} 
              alt="Educational Gallery Fullscreen Preview"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 transition-all duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}
