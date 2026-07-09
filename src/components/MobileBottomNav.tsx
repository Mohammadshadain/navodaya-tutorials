import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface MobileBottomNavProps {
  onNavigate: (page: ActivePage) => void;
  onRequestTutor: () => void;
}

export default function MobileBottomNav({ onNavigate, onRequestTutor }: MobileBottomNavProps) {
  return (
    <div
      id="mobile-bottom-navigation"
      className="block sm:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-[340px] bg-white border border-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.15)] px-4 py-2.5 rounded-[30px] transition-all duration-300"
    >
      <div className="grid grid-cols-3 items-end justify-between">
        
        {/* Left Column: CALL */}
        <a
          href="tel:+917317444730"
          className="flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 group mb-0.5"
          aria-label="Call Helpline"
        >
          <div className="w-13 h-13 rounded-[18px] bg-teal-50/80 border border-teal-100/50 flex items-center justify-center shadow-sm group-hover:bg-teal-100/80 transition duration-200">
            <Phone className="w-5.5 h-5.5 text-teal-600 stroke-[2.25]" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.1em] text-teal-600 uppercase transition mt-1">
            Call
          </span>
        </a>

        {/* Center Column: Book Demo Class (Large raised circular button) */}
        <div className="flex flex-col items-center relative z-10">
          {/* Raised Circle Button */}
          <button
            onClick={onRequestTutor}
            className="w-[66px] h-[66px] rounded-full bg-teal-600 border-4 border-white shadow-[0_8px_20px_rgba(13,148,136,0.35)] flex items-center justify-center -mt-9 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Book Demo Class"
          >
            <Sparkles className="w-7 h-7 text-white stroke-[2.25] animate-pulse" />
          </button>
          
          {/* Capsule Pill Button below */}
          <button
            onClick={onRequestTutor}
            className="bg-white border border-teal-100 rounded-full px-2.5 py-1 shadow-[0_2px_6px_rgba(13,148,136,0.1)] mt-1.5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="text-[8.5px] font-black tracking-[0.02em] text-teal-600 whitespace-nowrap">
              Book Demo
            </span>
          </button>
        </div>

        {/* Right Column: WHATSAPP */}
        <a
          href="https://wa.me/918858807008?text=Hi%20Navodaya%20Tutorial%2C%20I%20want%20to%20request%20a%20home%20tutor%20for%20my%20child."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 group mb-0.5"
          aria-label="Chat on WhatsApp"
        >
          {/* Official WhatsApp Logo styled nicely */}
          <div className="w-13 h-13 flex items-center justify-center transition duration-200">
            <svg 
              className="w-8 h-8 text-[#25D366] fill-current drop-shadow-sm filter" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.989-1.874-1.874-4.354-2.905-6.993-2.907-5.441 0-9.866 4.425-9.87 9.871-.001 1.78.468 3.52 1.36 5.068l-.944 3.447 3.528-.925zm11.234-7.53c-.307-.154-1.82-.9-2.1-.1c-.28-.1-.482-.15-.69.15-.207.3-.802.99-.982 1.19-.18.2-.36.22-.667.07-.307-.15-1.3-.48-2.475-1.53-.915-.81-1.53-1.82-1.71-2.12-.18-.3-.02-.46.133-.61.138-.13.307-.36.46-.54.154-.18.2-.3.307-.5.103-.2.05-.38-.025-.53-.077-.15-.69-1.66-.945-2.27-.25-.6-.52-.52-.7-.53-.18-.01-.387-.01-.595-.01-.207 0-.547.08-.833.4-.287.32-1.097 1.07-1.097 2.62 0 1.55 1.13 3.05 1.282 3.25.153.2 2.224 3.4 5.39 4.76.753.32 1.342.52 1.8.66.758.24 1.448.2 1.993.12.61-.09 1.82-.74 2.078-1.46.257-.71.257-1.33.18-1.46-.077-.13-.287-.21-.595-.36z" />
            </svg>
          </div>
          <span className="text-[10px] font-extrabold tracking-[0.08em] text-[#25D366] uppercase mt-1">
            WhatsApp
          </span>
        </a>

      </div>
    </div>
  );
}
