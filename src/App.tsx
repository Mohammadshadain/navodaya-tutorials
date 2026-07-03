import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RequestTutorModal from './components/RequestTutorModal';
import MobileBottomNav from './components/MobileBottomNav';
import HomeView from './components/HomeView';
import { 
  AboutView, SubjectsView, ClassesView, HowItWorksView, 
  TestimonialsView, FaqView, ContactView, PrivacyPolicyView, 
  TermsAndConditionsView 
} from './components/SubPageViews';
import { useRouter, updatePageSEO } from './useRouter';

export default function App() {
  const { activePage, navigate } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Synchronize SEO titles, descriptions, and JSON-LD Schemas dynamically on route changes
  useEffect(() => {
    updatePageSEO(activePage);
  }, [activePage]);

  // Auto-dismiss toast message after 6 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Handler to open Request Tutor Popup from anywhere
  const handleRequestTutor = () => {
    setIsModalOpen(true);
  };

  // Render the active view component
  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'about':
        return <AboutView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'subjects':
        return <SubjectsView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'classes':
        return <ClassesView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'how-it-works':
        return <HowItWorksView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'testimonials':
        return <TestimonialsView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'faq':
        return <FaqView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'contact':
        return <ContactView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyView onNavigate={navigate} />;
      case 'terms-and-conditions':
        return <TermsAndConditionsView onNavigate={navigate} />;
      default:
        return <HomeView onRequestTutor={handleRequestTutor} onNavigate={navigate} />;
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900 overflow-x-hidden">
      
      {/* 1. STICKY GLASSMORPHIC NAVBAR */}
      <Navbar 
        activePage={activePage} 
        onNavigate={navigate} 
        onRequestTutor={handleRequestTutor} 
      />

      {/* 2. MAIN SCROLLABLE VIEW STAGE */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. PREMIUM ACCESSIBLE FOOTER */}
      <Footer 
        onNavigate={navigate} 
        onRequestTutor={handleRequestTutor} 
      />

      {/* 4. MOBILE-ONLY BOTTOM FLOATING NAVIGATION (Home, Floating Book Now, WhatsApp) */}
      <MobileBottomNav 
        onNavigate={navigate} 
        onRequestTutor={handleRequestTutor} 
      />

      {/* 5. REQUEST TUTOR FORM MODAL OVERLAY */}
      <RequestTutorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={() => {
          setToast({
            message: "Thank you! Your request has been received. Our team will contact you shortly.",
            type: 'success'
          });
        }}
        onError={() => {
          setToast({
            message: "Something went wrong. Please try again.",
            type: 'error'
          });
        }}
      />

      {/* FLOATING TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 w-[calc(100%-2rem)] max-w-md bg-white/95 backdrop-blur-md border rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] p-4 border-slate-100 flex gap-3.5 items-start"
          >
            {toast.type === 'success' ? (
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
            ) : (
              <div className="p-2 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                <AlertCircle className="w-5 h-5 stroke-[2.5]" />
              </div>
            )}
            
            <div className="flex-1 min-w-0 pr-1 pt-0.5">
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                {toast.type === 'success' ? 'Success' : 'Submission Failed'}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => setToast(null)}
              className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer shrink-0 animate-fade-in"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
