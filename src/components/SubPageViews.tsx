import React, { useState } from 'react';
import { 
  Compass, ShieldCheck, Users, Target, BookOpen, GraduationCap, MapPin, 
  Phone, Mail, Clock, Search, Star, HelpCircle, ChevronRight, Check, ArrowRight,
  Shield, BookOpenText, Sparkles, Building, UserCheck,
  Facebook, Instagram, Youtube, MessageSquare
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

              <div className="border-t border-slate-50 pt-4 mt-auto">
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
            From kindergarten play-based reading habits up to higher undergraduate specializations and intensive competitive board tests (CBSE, ICSE, UP Board).
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
  return (
    <div id="how-it-works-view" className="py-24 bg-slate-50 min-h-screen">
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
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
          
          {/* Step 1 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0">
            <div className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sm:text-right">
              <span className="text-xs font-bold text-teal-600 block">Step 01</span>
              <h3 className="text-base font-bold text-slate-800 font-display">Submit Enquiry Profile</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fill out our simple form with child name, class, subject requirements, and residential sector in Lucknow.
              </p>
            </div>
            {/* Center Node */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <div className="hidden sm:block w-[45%]" />
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0">
            <div className="hidden sm:block w-[45%]" />
            {/* Center Node */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal-600 border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <div className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-xs font-bold text-teal-600 block">Step 02</span>
              <h3 className="text-base font-bold text-slate-800 font-display">Academic Counselor Consultation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our counselor calls you back to gather book list specifications, current score logs, specific learning difficulties, and comfortable timing slots.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0">
            <div className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sm:text-right">
              <span className="text-xs font-bold text-teal-600 block">Step 03</span>
              <h3 className="text-base font-bold text-slate-800 font-display">Free 1-Hour Trial Lesson</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The handpicked tutor visits your home. We encourage parents to actively observe the tutor's instruction pattern and rapport building during trial class.
              </p>
            </div>
            {/* Center Node */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <div className="hidden sm:block w-[45%]" />
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-6 sm:gap-0">
            <div className="hidden sm:block w-[45%]" />
            {/* Center Node */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-50 text-white flex items-center justify-center font-bold text-xs">
              4
            </div>
            <div className="w-full sm:w-[45%] space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-xs font-bold text-teal-600 block">Step 04</span>
              <h3 className="text-base font-bold text-slate-800 font-display">Confirm & Progress Tracking</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Resume regular schedules. We stay in close touch with periodic performance audits to ensure homework trackers and weekly tests are maintained.
              </p>
            </div>
          </div>

        </div>

        {/* Trust seal */}
        <div className="bg-teal-50 border border-teal-100/40 p-6 rounded-2xl text-center space-y-2 max-w-2xl mx-auto pt-8">
          <Shield className="w-8 h-8 text-teal-600 mx-auto" />
          <h4 className="text-sm font-bold text-slate-800 font-display">Complete Tutor Replacement Cover</h4>
          <p className="text-xs text-slate-500">
            If at any point during regular sessions you feel the tutor's alignment is slowing down, our support desk replaces the tutor within 48 hours without any hassle or extra fees.
          </p>
        </div>

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
            Find answers covering tuition fees calculation, tutor qualifications, backup trial policies, and CBSE/ICSE board tracking.
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
            <a href="tel:+917317444730" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs transition">
              Call: +91 73174 44730
            </a>
            <a href="https://wa.me/918858807008" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs transition">
              WhatsApp Coordinator
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

              <a 
                href="tel:+917317444730"
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4 hover:shadow-md hover:border-teal-500/20 transition group text-left block w-full cursor-pointer"
              >
                <Phone className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0 group-hover:text-teal-600 transition" />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider group-hover:text-teal-600 transition">Tutor Booking Hotline</h4>
                  <p className="text-xs font-bold text-slate-800 mt-1 group-hover:text-teal-600 transition">
                    +91 73174 44730
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Active 9:00 AM - 8:00 PM Daily</p>
                </div>
              </a>

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
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/918858807008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-500 hover:text-white rounded-xl text-xs font-semibold transition duration-200 cursor-pointer shadow-xs border border-emerald-100/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/navodayatutorial?igsh=MXIwMWg0ODFxZXBvNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-pink-50 text-pink-700 hover:bg-pink-500 hover:text-white rounded-xl text-xs font-semibold transition duration-200 cursor-pointer shadow-xs border border-pink-100/30"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1DG4FhvotR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 text-blue-700 hover:bg-blue-500 hover:text-white rounded-xl text-xs font-semibold transition duration-200 cursor-pointer shadow-xs border border-blue-100/30"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@Nt-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-red-50 text-red-700 hover:bg-red-500 hover:text-white rounded-xl text-xs font-semibold transition duration-200 cursor-pointer shadow-xs border border-red-100/30"
                >
                  <Youtube className="w-4 h-4" />
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
          At Navodaya Tutorial (navodayatutorial.com), your privacy is of paramount importance to us. This Privacy Policy documents the types of personal data we collect, how we manage it, and the security protocols we deploy to keep your tutor requirements protected.
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
          By accessing navodayatutorial.com and requesting a home tutor match, you agree to comply with the following formal Terms of Service.
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
