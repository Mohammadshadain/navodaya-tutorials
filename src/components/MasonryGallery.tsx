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
      image: 'https://images.unsplash.com/photo-1758687126499-9ff30d1c5762?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[320px]'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/5303515/pexels-photo-5303515.jpeg',
      heightClass: 'h-[260px]'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1758598737505-90a3084105ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[280px]'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1758525861793-9258e09708e2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[340px]'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1584697964479-60a5a1d11307?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[270px]'
    },
    {
      id: 6,
      image: 'https://plus.unsplash.com/premium_photo-1665579886413-8b8f027f384d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[300px]'
    },
    {
      id: 7,
      image: 'https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[280px]'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1623076189461-f7706b741c04?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[330px]'
    },
    {
      id: 9,
      image: 'https://plus.unsplash.com/premium_photo-1684179668432-c9e8e884b197?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[250px]'
    },
    {
      id: 10,
      image: 'https://plus.unsplash.com/premium_photo-1661903149361-d044d3b71632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[310px]'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[290px]'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      heightClass: 'h-[320px]'
    },
    {
      id: 13,
      image: 'https://plus.unsplash.com/premium_photo-1683124226167-6d79bd64d725?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[270px]'
    },
    {
      id: 14,
      image: 'https://plus.unsplash.com/premium_photo-1733342492614-21ae0fe15efc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[330px]'
    },
    {
      id: 15,
      image: 'https://plus.unsplash.com/premium_photo-1663013500813-328e1ab77be7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[290px]'
    },
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[310px]'
    },
    {
      id: 17,
      image: 'https://plus.unsplash.com/premium_photo-1666299779122-d13dd1018dc8?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[340px]'
    },
    {
      id: 18,
      image: 'https://images.pexels.com/photos/7079144/pexels-photo-7079144.jpeg',
      heightClass: 'h-[280px]'
    },
    {
      id: 19,
      image: 'https://plus.unsplash.com/premium_photo-1741521488385-4f9ad4d2da37?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[300px]'
    },
    {
      id: 20,
      image: 'https://plus.unsplash.com/premium_photo-1664285865043-d97f7dbc1ed7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[260px]'
    },
    {
      id: 21,
      image: 'https://plus.unsplash.com/premium_photo-1666299729298-c45849643135?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[310px]'
    },
    {
      id: 22,
      image: 'https://plus.unsplash.com/premium_photo-1681842721494-4ef7bf15c73a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[295px]'
    },
    {
      id: 23,
      image: 'https://plus.unsplash.com/premium_photo-1661962988901-3ae08e74a76c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[320px]'
    },
    {
      id: 24,
      image: 'https://plus.unsplash.com/premium_photo-1663089323954-77f6eeb75de4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heightClass: 'h-[270px]'
    },
   
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
