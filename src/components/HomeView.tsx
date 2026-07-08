import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, Phone, ArrowRight, Star, MapPin, ChevronRight, ChevronLeft,
  HelpCircle, MessageCircle, Mail, Clock, Calendar, Compass, ShieldCheck, 
  Users, Award, Cpu, BookOpen, GraduationCap, Quote, Sparkles,
  ClipboardCheck, Facebook, Instagram, Youtube, MessageSquare
} from 'lucide-react';
import { SUBJECTS, CLASSES_COVERED, TESTIMONIALS } from '../data';
import EducationIllustration from './EducationIllustration';
import { ActivePage } from '../types';

interface HomeViewProps {
  onRequestTutor: () => void;
  onNavigate: (page: ActivePage) => void;
}

export default function HomeView({ onRequestTutor, onNavigate }: HomeViewProps) {
  const [selectedGrade, setSelectedGrade] = useState<'primary' | 'middle' | 'high' | 'higher'>('high');
  const [selectedGoal, setSelectedGoal] = useState<'exams' | 'concepts' | 'homework'>('exams');

  // Auto flipping sequence state for 3 small boxes
  const [autoFlipped, setAutoFlipped] = useState<boolean[]>([false, false, false]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const homeTestimonials = TESTIMONIALS.slice(0, 3); // 3 featured reviews on home screen

  useEffect(() => {
    // If the user's cursor reaches a card, do not auto flip
    if (hoveredIndex !== null) return;

    // Start a timer to flip cards sequentially
    let activeIndex = 0;
    const interval = setInterval(() => {
      setAutoFlipped((prev) => {
        const next = [false, false, false];
        next[activeIndex] = true;
        return next;
      });
      activeIndex = (activeIndex + 1) % 3;
    }, 3500);

    return () => {
      clearInterval(interval);
      setAutoFlipped([false, false, false]);
    };
  }, [hoveredIndex]);



  return (
    <div id="home-view" className="w-full">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-teal-50/50 via-white to-slate-50 overflow-hidden">
        
        {/* Abstract Background Design Ornaments */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Highlight Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100 mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
                <span>Active Home Tutoring Network</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-800 leading-tight">
                India's Trusted <br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700">
                  Home Tutor & Academic Support Platform
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Quality Education at Your Doorstep. Connect with professional, highly vetted home tutors. Tailored lesson planning, expert board prep (CBSE, ICSE, State Boards), and absolute conceptual clarity in the comfort of your home.
              </p>

              {/* Trust Points (Grid) */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 text-left pt-2">
                {[
                  "Verified Tutors Only",
                  "Experienced Educators",
                  "Affordable Tuition Fees",
                  "1-on-1 In-Home / Online"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-teal-100/80 flex items-center justify-center text-teal-600 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <button
                  onClick={onRequestTutor}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl hover:from-teal-600 hover:to-teal-700 transition shadow-lg shadow-teal-500/20 text-sm cursor-pointer"
                >
                  Request Tutor Now
                </button>
                <a
                  href="https://wa.me/918858807008?text=Hi%20Navodaya%20Tutorial%2C%20I%20want%20to%20request%20a%20home%20tutor%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition flex items-center justify-center gap-2 text-sm shadow-md shadow-emerald-500/10"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="relative">
              <EducationIllustration />
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US & NUMBERS (MERGED) */}
      <section id="why-choose-us" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Our Premium Standards</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-800 tracking-tight">
              Why Parents Choose Navodaya Tutorial
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We go beyond matching profiles. We construct custom tutoring ecosystems designed specifically around your child's natural learning speed and academic goals.
            </p>
          </div>

          {/* Cards Grid (5 Columns on Desktop, 2+2+1 layout on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            
            {/* Card 1 */}
            <div 
              onClick={() => onNavigate('about')}
              className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-500/20 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-800 mb-2 leading-snug">Quality Education at Your Doorstep</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Enjoy premier, standardized academic coaching right in the safe and comfortable environment of your home.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => onNavigate('classes')}
              className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-500/20 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-800 mb-2 leading-snug">1-on-1 Personalized Attention</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Customized teaching styles mapping directly to your child's textbook, board syllabus, and learning speed.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => onNavigate('subjects')}
              className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-500/20 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-800 mb-2 leading-snug">Expert & Result-Oriented Tutors</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Learn from highly qualified educators and subject masters with proven success in enhancing student scores and boards performance.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div 
              onClick={() => onNavigate('how-it-works')}
              className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-500/20 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-800 mb-2 leading-snug">Regular Progress Tracking</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Continuous performance monitoring, homework reviews, and detailed feedback logs to guarantee consistent student improvement.
                </p>
              </div>
            </div>

            {/* Card 5 - New Premium Card */}
            <div 
              onClick={() => onNavigate('about')}
              className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-500/20 transition-all duration-300 group flex flex-col h-full md:col-span-2 xl:col-span-1 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 flex-shrink-0">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-800 mb-2 leading-snug">Regular Tutor Monitoring</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We regularly monitor every tutor's teaching quality, punctuality, communication, and student progress to ensure consistent academic excellence.
                </p>
              </div>
            </div>

          </div>

          {/* Navodaya Tutorial in Numbers Sub-section */}
          <div className="text-center max-w-3xl mx-auto mt-16 mb-8 space-y-3">
            <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full inline-block">Lucknow's Trusted Choice</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-800 tracking-tight">
              Navodaya Tutorial in Numbers
            </h2>
            <p className="text-slate-500 text-xs">
              Our commitment to quality education is reflected in the trust of hundreds of students and parents.
            </p>
          </div>

          {/* Compact Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
            
            {/* Stat Card 1 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 text-center space-y-1 group hover:scale-[1.02] flex flex-col justify-center min-h-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-600 group-hover:scale-105 transition-transform duration-300 leading-none">500+</span>
              <span className="block text-xs font-bold text-slate-800 pt-1">Students Guided</span>
              <span className="block text-[10px] text-slate-400">Academic success stories</span>
            </div>

            {/* Stat Card 2 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 text-center space-y-1 group hover:scale-[1.02] flex flex-col justify-center min-h-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-600 group-hover:scale-105 transition-transform duration-300 leading-none">150+</span>
              <span className="block text-xs font-bold text-slate-800 pt-1">Verified Tutors</span>
              <span className="block text-[10px] text-slate-400">Experienced & Qualified</span>
            </div>

            {/* Stat Card 3 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 text-center space-y-1 group hover:scale-[1.02] flex flex-col justify-center min-h-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-600 group-hover:scale-105 transition-transform duration-300 leading-none">14+</span>
              <span className="block text-xs font-bold text-slate-800 pt-1">Years Experience</span>
              <span className="block text-[10px] text-slate-400">Teaching Since 2012</span>
            </div>

            {/* Stat Card 4 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 text-center space-y-1 group hover:scale-[1.02] flex flex-col justify-center min-h-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-600 group-hover:scale-105 transition-transform duration-300 leading-none">100%</span>
              <span className="block text-xs font-bold text-slate-800 pt-1">Verified Tutors</span>
              <span className="block text-[10px] text-slate-400">Background Checked</span>
            </div>

            {/* Stat Card 5 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 text-center space-y-1 group hover:scale-[1.02] flex flex-col justify-center min-h-[120px]">
              <span className="block text-xs sm:text-sm md:text-base font-extrabold font-display text-teal-600 group-hover:scale-105 transition-transform duration-300 leading-tight">CBSE • UP Board • ISC • ICSE • IB • NIOS</span>
              <span className="block text-xs font-bold text-slate-800 pt-1">Boards Covered</span>
              <span className="block text-[10px] text-slate-400">All Major Curriculums</span>
            </div>

            {/* Stat Card 6 */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 text-center space-y-1 group hover:scale-[1.02] flex flex-col justify-center min-h-[120px]">
              <span className="block text-sm sm:text-base font-extrabold font-display text-teal-600 group-hover:scale-105 transition-transform duration-300 leading-tight">Home & Online</span>
              <span className="block text-xs font-bold text-slate-800 pt-1">Flexible Learning</span>
              <span className="block text-[10px] text-slate-400">Available Across Lucknow</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2.1 CORE SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl mr-auto ml-0 mb-16 space-y-3">
            <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Our Educational Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-800 tracking-tight">
              Premium Academic Services
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Explore our structured tutoring formats curated to deliver result-oriented support for school, board, and entrance exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div 
              onClick={() => onNavigate('classes')}
              className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/20 transition flex flex-col h-full justify-between cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 font-display">Home Tuition</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Personalized 1-on-1 tutoring covering CBSE, ICSE, and State Boards for students from Nursery to Class 12.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] bg-teal-50 text-teal-700 px-2.5 py-1 rounded font-bold">Nursery to 12th</span>
              </div>
            </div>

            {/* Service 2 */}
            <div 
              onClick={() => onNavigate('subjects')}
              className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/20 transition flex flex-col h-full justify-between cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 font-display">School Subjects</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Targeted conceptual clarity for foundational disciplines: Mathematics, Science, English, Commerce & more.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] bg-teal-50 text-teal-700 px-2.5 py-1 rounded font-bold">Comprehensive Curriculum</span>
              </div>
            </div>

            {/* Service 3 */}
            <div 
              onClick={() => {
                sessionStorage.setItem('subject_search', 'Competitive Exams');
                onNavigate('subjects');
              }}
              className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/20 transition flex flex-col h-full justify-between cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 flex-shrink-0">
                  <Award className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 font-display">Competitive Exams</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Intensive preparation for competitive entrances including JEE, NEET, CUET, and early foundation courses.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] bg-teal-50 text-teal-700 px-2.5 py-1 rounded font-bold">JEE / NEET / CUET</span>
              </div>
            </div>

            {/* Service 4 */}
            <div 
              onClick={() => onNavigate('contact')}
              className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/20 transition flex flex-col h-full justify-between cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 flex-shrink-0">
                  <Cpu className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 font-display">Online Classes</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Interactive, live 1-on-1 sessions matching high global standards for students across any distance or curriculum.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] bg-teal-50 text-teal-700 px-2.5 py-1 rounded font-bold">1-on-1 Live Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 TUTOR CATEGORIES SECTION */}
      <section id="tutor-categories" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl mr-auto ml-0 mb-16 space-y-3">
            <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Our Qualified Educators</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-800 tracking-tight">
              Tutor Categories
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We maintain an extensive, certified network of male, female, and specialized faculty to suit every student comfort level and learning pace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div 
              onClick={() => {
                sessionStorage.setItem('faq_search', 'male');
                onNavigate('faq');
              }}
              className="bg-slate-50 p-7 rounded-2xl border border-slate-100 hover:bg-white hover:border-teal-500/20 hover:shadow-lg transition duration-300 flex flex-col h-full justify-between cursor-pointer"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-display">Male Tutors</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                Highly disciplined, experienced male mentors focusing on senior high school classes, boards prep, and advanced problem-solving.
              </p>
            </div>

            {/* Category 2 */}
            <div 
              onClick={() => {
                sessionStorage.setItem('faq_search', 'female');
                onNavigate('faq');
              }}
              className="bg-slate-50 p-7 rounded-2xl border border-slate-100 hover:bg-white hover:border-teal-500/20 hover:shadow-lg transition duration-300 flex flex-col h-full justify-between cursor-pointer"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-display">Female Tutors</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                Nurturing, patient female instructors specializing in primary levels, junior school conceptual foundations, and girls' boarding layouts.
              </p>
            </div>

            {/* Category 3 */}
            <div 
              onClick={() => onNavigate('about')}
              className="bg-slate-50 p-7 rounded-2xl border border-slate-100 hover:bg-white hover:border-teal-500/20 hover:shadow-lg transition duration-300 flex flex-col h-full justify-between cursor-pointer"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-display">Expert Faculty</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                Verified school teachers, professors, and professional coaching lecturers possessing rich, long-term dedicated teaching experience.
              </p>
            </div>

            {/* Category 4 */}
            <div 
              onClick={() => onNavigate('subjects')}
              className="bg-slate-50 p-7 rounded-2xl border border-slate-100 hover:bg-white hover:border-teal-500/20 hover:shadow-lg transition duration-300 flex flex-col h-full justify-between cursor-pointer"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-display">Specialized Tutors</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                Domain experts for specialized requirements: high-stake entrances, Olympiad training, coding/computer science, or commercial balance sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR SUBJECTS */}
      <section id="popular-subjects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Extensive Domain Expertise</span>
              <h2 className="text-3xl font-bold font-display text-slate-800 tracking-tight">
                Subject Specialist Home Tutors
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                We assign specialist tutors for each individual domain to ensure students learn from masters who hold conceptual depth.
              </p>
            </div>
            <button
              onClick={() => onNavigate('subjects')}
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition cursor-pointer self-start md:self-auto"
            >
              <span>View All Subjects</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUBJECTS.slice(0, 4).map((sub, index) => (
              <div 
                key={index} 
                onClick={() => {
                  sessionStorage.setItem('subject_search', sub.name);
                  onNavigate('subjects');
                }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-500/20 transition group flex flex-col h-full justify-between cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-105 transition flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-1.5 font-display">{sub.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {sub.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-50">
                  {sub.classes.slice(0, 3).map((cl, i) => (
                    <span key={i} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded font-medium border border-slate-100">
                      {cl}
                    </span>
                  ))}
                  {sub.classes.length > 3 && (
                    <span className="text-[10px] text-teal-600 font-bold px-1.5 py-0.5">
                      +{sub.classes.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLASSES COVERED */}
      <section id="classes-covered" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Class Levels Assumed</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-800 tracking-tight">
                Pre-School To College & Board Preparation
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl">
                We match specialized tutors according to board requirements, school standards, and student age dynamics.
              </p>
            </div>
            <button
              onClick={() => onNavigate('classes')}
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition cursor-pointer self-start md:self-auto"
            >
              <span>View All Classes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLASSES_COVERED.slice(0, 3).map((cls, index) => (
              <div 
                key={index} 
                onClick={() => onNavigate('classes')}
                className="bg-white p-7 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition flex flex-col h-full justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                      <GraduationCap className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 font-display">{cls.grade}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {cls.description}
                  </p>
                </div>
                
                <div className="space-y-3 border-t border-slate-100 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Subjects:</span>
                    {cls.subjects.map((sub, i) => (
                      <span key={i} className="text-[10px] text-slate-600 font-semibold bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider">Boards:</span>
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

          {/* Competitive exams alert */}
          <div className="mt-12 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
                <Star className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 font-display">Targeting Entrance Exams like JEE, NEET, or CUET?</h4>
                <p className="text-xs text-slate-500 mt-1">We match specialized competitive-exam coaches who conduct custom speed-trick training sessions.</p>
              </div>
            </div>
            <button
              onClick={onRequestTutor}
              className="bg-teal-600 text-white font-bold text-xs py-2.5 px-5 rounded-lg hover:bg-teal-700 transition flex items-center gap-1 cursor-pointer flex-shrink-0"
            >
              <span>Request Competitive Prep</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Smooth Operations</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-800 tracking-tight">
              Our 4-Step Matching Protocol
            </h2>
            <p className="text-slate-500 text-sm">
              We have streamlined the path to matching your child with their perfect home tutor down to a fast, reliable, 4-step workflow.
            </p>
          </div>

          {/* Visual Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-500 text-white font-display font-extrabold text-xl flex items-center justify-center mx-auto shadow-md shadow-teal-500/10 z-10 relative">
                1
              </div>
              <h3 className="text-base font-bold text-slate-800 font-display">Request Tutor</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                Submit details such as class, subject, and area in Lucknow via our quick popup request form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white font-display font-extrabold text-xl flex items-center justify-center mx-auto shadow-md shadow-teal-600/10 z-10 relative">
                2
              </div>
              <h3 className="text-base font-bold text-slate-800 font-display">Expert Consult Call</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                Our academic manager calls you back in 2 hours to confirm textbook details, fee options, and tutor requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white font-display font-extrabold text-xl flex items-center justify-center mx-auto shadow-md shadow-amber-500/10 z-10 relative">
                3
              </div>
              <h3 className="text-base font-bold text-slate-800 font-display">Free 1-Hour Trial</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                The tutor comes to your home to conduct a dedicated mock trial class allowing direct student evaluation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white font-display font-extrabold text-xl flex items-center justify-center mx-auto shadow-md z-10 relative">
                4
              </div>
              <h3 className="text-base font-bold text-slate-800 font-display">Confirm & Advance</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                Confirm your schedule, setup preferred fee arrangements, and begin highly structured regular home tuitions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section id="testimonials" className="pt-16 pb-10 bg-gradient-to-b from-slate-50 to-slate-100/50 border-y border-slate-100 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="text-left max-w-2xl space-y-3">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full inline-block">Parent Success Stories</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-800 tracking-tight">
                Real Reviews From Lucknow Families
              </h2>
              <p className="text-slate-500 text-sm">
                Read how specialized in-home academic guidance from Navodaya Tutorials helped children score top ranks and build study consistency.
              </p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right">
              <button
                onClick={() => onNavigate('testimonials')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition cursor-pointer bg-white px-4 py-2.5 rounded-xl shadow-xs border border-slate-100 hover:shadow-sm"
              >
                <span>View All 10+ Reviews</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Testimonial Flipping Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeTestimonials.map((test, index) => {
              const isCardFlipped = autoFlipped[index] || hoveredIndex === index;
              return (
                <div 
                  key={test.id}
                  className="relative h-80 w-full [perspective:1000px] cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    // Manual click flip toggle support for touch devices
                    setAutoFlipped(prev => {
                      const next = [...prev];
                      next[index] = !next[index];
                      return next;
                    });
                  }}
                >
                  <div 
                    className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
                      isCardFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    {/* Front side of flip card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(test.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <Quote className="w-5 h-5 text-teal-100" />
                        </div>
                        <p className="text-[12px] text-slate-600 italic leading-relaxed">
                          "{test.quote.length > 140 ? test.quote.substring(0, 135) + "..." : test.quote}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-4">
                        <img
                          src={test.avatarUrl}
                          alt={test.name}
                          className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{test.name}</h4>
                          <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                            {test.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back side of flip card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-2xl shadow-lg flex flex-col justify-between text-white">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-widest bg-teal-500/30 text-teal-50 px-2.5 py-0.5 rounded-full uppercase border border-teal-400/20">
                            Verified Match
                          </span>
                          <Sparkles className="w-4 h-4 text-teal-200" />
                        </div>
                        <div className="text-left space-y-1">
                          <p className="text-[10px] text-teal-200 font-semibold tracking-wider uppercase">Class & Subject:</p>
                          <p className="text-xs font-bold text-white">{test.classTaught}</p>
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] text-teal-200 font-semibold tracking-wider uppercase mb-0.5">Full Review:</p>
                          <p className="text-[11px] leading-relaxed text-teal-50 italic">
                            "{test.quote}"
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-teal-500/30 pt-3 mt-auto text-[9px] font-bold text-teal-100 tracking-wide flex justify-between items-center">
                        <span>100% VERIFIED</span>
                        <span className="text-teal-300">LUCKNOW</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>
      </section>


      {/* 9. CTA BANNER */}
      <section id="cta-banner" className="py-16 bg-slate-900 relative overflow-hidden">
        {/* Ornaments */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Find the Right Home Tutor Today
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Cultivate study consistency, secure maximum exam percentages, and remove children's study fear. Book your 100% free home demo class now.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto pt-3">
            <button
              onClick={onRequestTutor}
              className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition text-xs cursor-pointer shadow-md shadow-teal-500/10"
            >
              Request Tutor
            </button>
            <a
              href="https://wa.me/918858807008?text=Hi%20Navodaya%20Tutorial%20I%20want%20to%20request%20a%20home%20tutor%20trial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side: Contact Information */}
            <div className="space-y-6 lg:space-y-0 lg:flex lg:flex-col h-full">
              <div className="space-y-3 lg:mb-6">
                <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Get In Touch</span>
                <h2 className="text-3xl font-bold font-display text-slate-800 tracking-tight">
                  Reach Out To Navodaya Tutorial
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Have questions about trial classes, tutor matching timings, or fee models? Feel free to contact our administrative office or leave a quick enquiry below.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-2 lg:pt-0 lg:space-y-0 lg:flex lg:flex-col lg:justify-between lg:flex-1 lg:gap-4">
                <div 
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition w-full text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800">
                      Location / Service Area
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <a 
                  href="tel:+917317444730"
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/20 transition group w-full cursor-pointer text-left block"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition">
                    <Phone className="w-5 h-5 text-teal-500 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800">
                      Phone Helplines
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 font-semibold group-hover:text-teal-600 transition">
                      +91 73174 44730
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Available 9:00 AM - 8:00 PM (Monday - Sunday)</p>
                  </div>
                </a>

                <a 
                  href="mailto:navodayatutorialsindia@gmail.com"
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/20 transition group w-full cursor-pointer text-left block"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition">
                    <Mail className="w-5 h-5 text-teal-500 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800">
                      Official Email
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 group-hover:text-teal-600 transition break-all font-medium">
                      navodayatutorialsindia@gmail.com
                    </p>
                  </div>
                </a>
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

            {/* Right Side: Interactive Tutor Matcher & Plan Selector */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[9px] font-bold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3 h-3" />
                  Instant Matcher
                </div>
                <h3 className="text-base font-bold font-display text-slate-800 leading-tight">Interactive Tutor Matcher</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Select requirements to calculate customized schedule & strategy matches.</p>
              </div>

              {/* Step 1: Grade Group */}
              <div className="space-y-1.5">
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">1. Student's Grade level</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'primary', label: 'Primary', desc: 'Class 1-5' },
                    { id: 'middle', label: 'Middle', desc: 'Class 6-8' },
                    { id: 'high', label: 'High School', desc: 'Class 9-10' },
                    { id: 'higher', label: 'Higher Sec / NEET', desc: 'Class 11-12' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGrade(g.id as any)}
                      className={`p-1.5 sm:p-2 rounded-xl border text-left transition cursor-pointer ${
                        selectedGrade === g.id
                          ? 'border-teal-500 bg-teal-50/40 ring-1 ring-teal-500/30'
                          : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-xs font-bold text-slate-800">{g.label}</span>
                      <span className="block text-[9px] text-slate-400 leading-none mt-0.5">{g.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Goal Group */}
              <div className="space-y-1.5">
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">2. Core Academic Goal</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'exams', label: 'Board & Exams' },
                    { id: 'concepts', label: 'Concept Build' },
                    { id: 'homework', label: 'Mentoring' },
                  ].map((gl) => (
                    <button
                      key={gl.id}
                      onClick={() => setSelectedGoal(gl.id as any)}
                      className={`py-1.5 px-1 rounded-lg border text-center transition cursor-pointer text-[10px] font-semibold ${
                        selectedGoal === gl.id
                          ? 'border-teal-500 bg-teal-50/40 text-teal-700 font-bold'
                          : 'border-slate-100 bg-slate-50/50 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {gl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Preview Card */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 relative text-slate-700">
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">Your Tutor Match Profile</span>
                  <span className="text-[8px] font-black uppercase text-teal-600 bg-teal-50 px-1 py-0.5 rounded">Verified Profile</span>
                </div>
                
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-baseline gap-2 text-[11px]">
                    <span className="text-slate-400 text-[10px] font-medium">Schedule:</span>
                    <span className="font-bold text-slate-800 text-right">
                      {selectedGrade === 'primary' && "3-4 Sessions/wk (1.5 Hr)"}
                      {selectedGrade === 'middle' && "3-4 Sessions/wk (1.5 Hr)"}
                      {selectedGrade === 'high' && "4-5 Sessions/wk (1.5-2 Hr)"}
                      {selectedGrade === 'higher' && "5-6 Sessions/wk (2 Hr)"}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline gap-2 text-[11px]">
                    <span className="text-slate-400 text-[10px] font-medium">Ideal Mentor:</span>
                    <span className="font-bold text-slate-800 text-right">
                      {selectedGrade === 'primary' && "Primary Ed Specialist"}
                      {selectedGrade === 'middle' && "Graduate Specialist"}
                      {selectedGrade === 'high' && "Board Exam Coach"}
                      {selectedGrade === 'higher' && "Elite PG/NEET Guide"}
                    </span>
                  </div>

                  <div className="border-t border-slate-200/50 pt-1.5 mt-1 text-[11px]">
                    <span className="text-[10px] text-slate-400 block font-medium">Focus Strategy:</span>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {selectedGoal === 'exams' && "Solving past 10-year question papers, exam time-management, & mock test series."}
                      {selectedGoal === 'concepts' && "Clearing fundamental doubts, using real-world interactive analogies, and formula drills."}
                      {selectedGoal === 'homework' && "Daily worksheet assistance, regular mental check-ins, curriculum sync, and grade audits."}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-1.5 pt-0.5">
                <a
                  href={`https://wa.me/918858807008?text=${encodeURIComponent(
                    `Hi Navodaya Tutorial, I used your Instant Planner. I am looking for a home tutor for ${
                      selectedGrade === 'primary' ? 'Primary Classes (Class 1-5)' :
                      selectedGrade === 'middle' ? 'Middle School (Class 6-8)' :
                      selectedGrade === 'high' ? 'High School (Class 9-10)' :
                      'Higher Secondary (Class 11-12 / NEET / JEE)'
                    } focused on ${
                      selectedGoal === 'exams' ? 'Syllabus & Exams' :
                      selectedGoal === 'concepts' ? 'Concept Building' :
                      'Regular Mentoring & Homework Support'
                    }. Please schedule a demo session.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-extrabold rounded-xl transition text-[11px] shadow-md shadow-teal-500/10 flex items-center justify-center gap-1.5 group cursor-pointer"
                >
                  <span>Book Free Trial Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </a>

                <button 
                  onClick={onRequestTutor}
                  className="w-full py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/50 font-bold rounded-xl transition text-[10px] cursor-pointer"
                >
                  Or let a coordinator call you
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
