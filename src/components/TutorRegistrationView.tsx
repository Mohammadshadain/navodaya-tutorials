import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, BookOpen, GraduationCap, MapPin, Briefcase, FileText, CheckCircle2, 
  AlertCircle, ArrowRight, Loader2, Calendar, Phone, Mail, Clock, Check, Info, ShieldCheck
} from 'lucide-react';
import { ActivePage } from '../types';

interface TutorRegistrationViewProps {
  onNavigate: (page: ActivePage) => void;
}

export default function TutorRegistrationView({ onNavigate }: TutorRegistrationViewProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [alternateMobileNumber, setAlternateMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [parentMobileNumber, setParentMobileNumber] = useState('');

  // Education State
  const [board10th, setBoard10th] = useState('');
  const [percentage10th, setPercentage10th] = useState('');
  const [board12th, setBoard12th] = useState('');
  const [percentage12th, setPercentage12th] = useState('');
  const [graduationUniversity, setGraduationUniversity] = useState('');
  const [graduationPercentage, setGraduationPercentage] = useState('');
  const [postGraduation, setPostGraduation] = useState('');
  const [otherQualification, setOtherQualification] = useState('');

  // Teaching details
  const [teachingExperience, setTeachingExperience] = useState('');
  const [preferredMode, setPreferredMode] = useState<'home' | 'online' | 'both' | ''>('');
  const [classesCanTeach, setClassesCanTeach] = useState<string[]>([]);
  const [subjectsCanTeach, setSubjectsCanTeach] = useState<string[]>([]);
  const [preferredArea, setPreferredArea] = useState('');
  const [languagesKnown, setLanguagesKnown] = useState('');

  // Address Details
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [sameAsCurrent, setSameAsCurrent] = useState(false);

  // Professional Details
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [certificateLink, setCertificateLink] = useState('');
  const [profilePhotoLink, setProfilePhotoLink] = useState('');
  const [expectedFees, setExpectedFees] = useState('');
  const [availableDays, setAvailableDays] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [canTravel, setCanTravel] = useState('');
  const [ownVehicle, setOwnVehicle] = useState('');

  // Declaration State
  const [declarationConfirmed, setDeclarationConfirmed] = useState(false);

  // Status & Validation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const CLASSES_LIST = [
    "Nursery & Kindergarten",
    "Primary School (Class 1-5)",
    "Middle School (Class 6-8)",
    "High School (Class 9-10)",
    "Higher Secondary (Class 11-12)",
    "Graduation / College",
    "Competitive Exams (JEE/NEET/CUET/NDA)"
  ];

  const SUBJECTS_LIST = [
    "Mathematics",
    "Science (General)",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Hindi",
    "Social Science / Humanities",
    "Commerce (Accounts, Economics, BST)",
    "Computer Science / Coding",
    "Sanskrit",
    "Spoken English / Personality Dev"
  ];

  const LUCKNOW_AREAS = [
    "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", 
    "Jankipuram", "Alambagh", "Ashiyana", "Mahanagar", "Vikas Nagar", "Chowk"
  ];

  // Sync permanent address when "Same as current" is toggled
  const handleSameAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setSameAsCurrent(checked);
    if (checked) {
      setPermanentAddress(currentAddress);
    }
  };

  const handleCurrentAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCurrentAddress(val);
    if (sameAsCurrent) {
      setPermanentAddress(val);
    }
  };

  const toggleClassSelection = (cls: string) => {
    setClassesCanTeach(prev => 
      prev.includes(cls) ? prev.filter(c => c !== cls) : [...prev, cls]
    );
  };

  const toggleSubjectSelection = (sub: string) => {
    setSubjectsCanTeach(prev => 
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    );
  };

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long';
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber.trim())) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!teachingExperience.trim()) {
      newErrors.teachingExperience = 'Teaching experience is required';
    }

    if (!preferredMode) {
      newErrors.preferredMode = 'Preferred teaching mode is required';
    }

    if (classesCanTeach.length === 0) {
      newErrors.classes = 'Please select at least one class you can teach';
    }

    if (subjectsCanTeach.length === 0) {
      newErrors.subjects = 'Please select at least one subject you can teach';
    }

    if (!declarationConfirmed) {
      newErrors.declaration = 'You must confirm and accept the declaration to register';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({
        message: "Please fill out all required fields and correct any validation errors.",
        type: 'error'
      });
      // Scroll to top of form or first error
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    // Retrieve API Endpoint
    const SCRIPT_URL = import.meta.env.VITE_TUTOR_GOOGLE_SCRIPT_URL || import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

    try {
      const payload = {
        formType: 'tutor_registration',
        // 1. Personal Details
        fullName: fullName.trim(),
        dob: dob,
        gender: gender,
        mobileNumber: mobileNumber.trim(),
        alternateMobileNumber: alternateMobileNumber.trim(),
        email: email.trim(),
        fatherName: fatherName.trim(),
        parentMobileNumber: parentMobileNumber.trim(),
        
        // 2. Educational Qualification
        board10th: board10th,
        percentage10th: percentage10th,
        board12th: board12th,
        percentage12th: percentage12th,
        graduationUniversity: graduationUniversity,
        graduationPercentage: graduationPercentage,
        postGraduation: postGraduation,
        otherQualification: otherQualification,
        
        // 3. Teaching Details
        teachingExperience: teachingExperience,
        preferredMode: preferredMode,
        classesCanTeach: classesCanTeach.join(', '),
        subjectsCanTeach: subjectsCanTeach.join(', '),
        preferredArea: preferredArea,
        languagesKnown: languagesKnown,
        
        // 4. Address
        currentAddress: currentAddress,
        permanentAddress: permanentAddress,
        
        // 5. Professional Details
        aadhaarNumber: aadhaarNumber,
        panNumber: panNumber,
        resumeLink: resumeLink,
        certificateLink: certificateLink,
        profilePhotoLink: profilePhotoLink,
        expectedFees: expectedFees,
        availableDays: availableDays,
        availableTime: availableTime,
        canTravel: canTravel,
        ownVehicle: ownVehicle,
        
        // Timestamp & Submission Date
        submittedAt: new Date().toISOString()
      };

      if (!SCRIPT_URL) {
        console.warn("Google script URL is not configured. Simulating submission in demo environment.");
        await new Promise(resolve => setTimeout(resolve, 1500)); // simulate latency
      } else {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      // Success Reset & Toast
      setToast({
        message: "Congratulations! Your Tutor Registration has been successfully submitted. Our onboarding team will contact you soon.",
        type: 'success'
      });

      // Reset All Form Fields
      setFullName('');
      setDob('');
      setGender('');
      setMobileNumber('');
      setAlternateMobileNumber('');
      setEmail('');
      setFatherName('');
      setParentMobileNumber('');
      setBoard10th('');
      setPercentage10th('');
      setBoard12th('');
      setPercentage12th('');
      setGraduationUniversity('');
      setGraduationPercentage('');
      setPostGraduation('');
      setOtherQualification('');
      setTeachingExperience('');
      setPreferredMode('');
      setClassesCanTeach([]);
      setSubjectsCanTeach([]);
      setPreferredArea('');
      setLanguagesKnown('');
      setCurrentAddress('');
      setPermanentAddress('');
      setSameAsCurrent(false);
      setAadhaarNumber('');
      setPanNumber('');
      setResumeLink('');
      setCertificateLink('');
      setProfilePhotoLink('');
      setExpectedFees('');
      setAvailableDays('');
      setAvailableTime('');
      setCanTravel('');
      setOwnVehicle('');
      setDeclarationConfirmed(false);
      setErrors({});

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error("Error submitting tutor registration:", error);
      setToast({
        message: "Submission failed. Please check your network connection and try again.",
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="tutor-registration-view" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-slate-400 font-semibold flex items-center gap-2 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition cursor-pointer">Home</button>
          <span>/</span>
          <span className="text-slate-600">Tutor Registration</span>
        </div>

        {/* Heading Block */}
        <div className="text-center md:text-left space-y-3 mb-10">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full inline-block">Join Our Elite Team</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-800 tracking-tight leading-none">
            Tutor Onboarding Portal
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">
            Register as a premium tutor with Lucknow's most trusted educational service platform. Share your experience, qualifications, and preferences to begin receiving high-matching student requirements.
          </p>
        </div>

        {/* Floating Toast Notification inside page */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-2xl mb-8 flex gap-3 items-start border shadow-sm ${
                toast.type === 'success' 
                  ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                  : 'bg-rose-50 border-rose-100 text-rose-800'
              }`}
            >
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 text-xs sm:text-sm font-medium leading-relaxed">
                <span className="font-bold block mb-0.5">
                  {toast.type === 'success' ? 'Success!' : 'Registration Alert'}
                </span>
                {toast.message}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Onboarding Steps Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* ==========================================
                SECTION 1: PERSONAL DETAILS
               ========================================== */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-teal-50 rounded-xl text-teal-600 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">1. Personal Details</h3>
                  <p className="text-xs text-slate-400">Provide basic demographic and contact information</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium bg-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number (e.g. 9876543210)"
                    value={mobileNumber}
                    maxLength={10}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.mobileNumber ? 'border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Alternate Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Alternate Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Optional backup phone number"
                    value={alternateMobileNumber}
                    maxLength={10}
                    onChange={(e) => setAlternateMobileNumber(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. anand@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.email ? 'border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Father's full name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Parent's Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Parent's Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Parent/Guardian contact number"
                    value={parentMobileNumber}
                    maxLength={10}
                    onChange={(e) => setParentMobileNumber(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

              </div>
            </div>

            {/* ==========================================
                SECTION 2: EDUCATIONAL QUALIFICATION
               ========================================== */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-teal-50 rounded-xl text-teal-600 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">2. Educational Qualification</h3>
                  <p className="text-xs text-slate-400">Share your board credentials and academic percentages</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* 10th Board */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    10th Board Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CBSE / ICSE / UP Board"
                    value={board10th}
                    onChange={(e) => setBoard10th(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* 10th Percentage */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    10th Percentage / CGPA
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 92% or 9.5 CGPA"
                    value={percentage10th}
                    onChange={(e) => setPercentage10th(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* 12th Board */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    12th Board Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CBSE / ISC / UP Board"
                    value={board12th}
                    onChange={(e) => setBoard12th(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* 12th Percentage */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    12th Percentage
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 88%"
                    value={percentage12th}
                    onChange={(e) => setPercentage12th(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Graduation University */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Graduation University
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lucknow University, AKTU"
                    value={graduationUniversity}
                    onChange={(e) => setGraduationUniversity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Graduation Percentage */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Graduation Percentage / CGPA
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 78% or 8.2 CGPA"
                    value={graduationPercentage}
                    onChange={(e) => setGraduationPercentage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Post Graduation */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Post Graduation Details
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. M.Sc Physics (Lucknow Univ), M.Com"
                    value={postGraduation}
                    onChange={(e) => setPostGraduation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Other Qualification */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Other Qualifications
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B.Ed, CTET qualified, NEET Rank holder"
                    value={otherQualification}
                    onChange={(e) => setOtherQualification(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

              </div>
            </div>

            {/* ==========================================
                SECTION 3: TEACHING DETAILS
               ========================================== */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-teal-50 rounded-xl text-teal-600 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">3. Teaching Details</h3>
                  <p className="text-xs text-slate-400">Specify what, where, and how you want to teach</p>
                </div>
              </div>

              <div className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Teaching Experience */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Teaching Experience <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={teachingExperience}
                      onChange={(e) => setTeachingExperience(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white ${
                        errors.teachingExperience ? 'border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-teal-500'
                      } focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium`}
                    >
                      <option value="">Select Experience</option>
                      <option value="Freshman / No Experience">Freshman / No prior tutoring</option>
                      <option value="1-2 Years">1 to 2 Years</option>
                      <option value="3-5 Years">3 to 5 Years</option>
                      <option value="6-10 Years">6 to 10 Years</option>
                      <option value="10+ Years">Over 10 Years</option>
                    </select>
                    {errors.teachingExperience && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.teachingExperience}
                      </p>
                    )}
                  </div>

                  {/* Preferred Mode */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Preferred Mode <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'home', label: 'Home Tuition' },
                        { id: 'online', label: 'Online' },
                        { id: 'both', label: 'Both' }
                      ].map((modeOption) => (
                        <button
                          key={modeOption.id}
                          type="button"
                          onClick={() => setPreferredMode(modeOption.id as any)}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                            preferredMode === modeOption.id
                              ? 'bg-teal-500 border-teal-500 text-white shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {modeOption.label}
                        </button>
                      ))}
                    </div>
                    {errors.preferredMode && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.preferredMode}
                      </p>
                    )}
                  </div>
                </div>

                {/* Classes Can Teach */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Classes You Can Teach <span className="text-rose-500">*</span> (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {CLASSES_LIST.map((cls) => {
                      const isSelected = classesCanTeach.includes(cls);
                      return (
                        <button
                          key={cls}
                          type="button"
                          onClick={() => toggleClassSelection(cls)}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-semibold transition cursor-pointer ${
                            isSelected
                              ? 'bg-teal-500/10 border-teal-500 text-teal-800 font-bold'
                              : 'bg-white border-slate-150 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                            isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{cls}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.classes && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.classes}
                    </p>
                  )}
                </div>

                {/* Subjects Can Teach */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Subjects You Can Teach <span className="text-rose-500">*</span> (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                    {SUBJECTS_LIST.map((sub) => {
                      const isSelected = subjectsCanTeach.includes(sub);
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => toggleSubjectSelection(sub)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-semibold transition cursor-pointer ${
                            isSelected
                              ? 'bg-teal-500/10 border-teal-500 text-teal-800 font-bold'
                              : 'bg-white border-slate-150 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border shrink-0 ${
                            isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <span className="truncate">{sub}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.subjects && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.subjects}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Preferred Area */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Preferred Service Areas in Lucknow
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Gomti Nagar, Indira Nagar, Aliganj"
                      value={preferredArea}
                      onChange={(e) => setPreferredArea(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">Specify preferred societies, pin codes, or landmarks in Lucknow</p>
                  </div>

                  {/* Languages Known */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Languages Known
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hindi, English"
                      value={languagesKnown}
                      onChange={(e) => setLanguagesKnown(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ==========================================
                SECTION 4: ADDRESS
               ========================================== */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-teal-50 rounded-xl text-teal-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">4. Address</h3>
                  <p className="text-xs text-slate-400">Your current and permanent residences</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Current Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Current Address
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter complete current residential address in Lucknow"
                    value={currentAddress}
                    onChange={handleCurrentAddressChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium resize-none"
                  />
                </div>

                {/* Copy checkbox */}
                <div className="flex items-center gap-2 pb-1">
                  <input
                    type="checkbox"
                    id="same-address"
                    checked={sameAsCurrent}
                    onChange={handleSameAddressChange}
                    className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="same-address" className="text-xs font-semibold text-slate-700 select-none cursor-pointer">
                    Permanent Address is same as Current Address
                  </label>
                </div>

                {/* Permanent Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Permanent Address
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter permanent address as mentioned in official proofs"
                    value={permanentAddress}
                    disabled={sameAsCurrent}
                    onChange={(e) => setPermanentAddress(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      sameAsCurrent ? 'bg-slate-50 text-slate-450 border-slate-200' : 'border-slate-200 focus:border-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium resize-none`}
                  />
                </div>
              </div>
            </div>

            {/* ==========================================
                SECTION 5: PROFESSIONAL DETAILS
               ========================================== */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2 bg-teal-50 rounded-xl text-teal-600 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">5. Professional Details & Verifications</h3>
                  <p className="text-xs text-slate-400">Details for matching security clearance and payouts</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Aadhaar Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Aadhaar Card Number
                  </label>
                  <input
                    type="text"
                    maxLength={12}
                    placeholder="12-digit Aadhaar number"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* PAN Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    PAN Card Number
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="10-digit PAN string"
                    value={panNumber.toUpperCase()}
                    onChange={(e) => setPanNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium uppercase"
                  />
                </div>

                {/* Resume Link */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Resume Drive / Cloud Link
                  </label>
                  <input
                    type="url"
                    placeholder="Google Drive, Dropbox, or OneDrive shareable link"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Certificate Link */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Degree Certificate Shareable Link
                  </label>
                  <input
                    type="url"
                    placeholder="Link to your graduation/qualification degree proof"
                    value={certificateLink}
                    onChange={(e) => setCertificateLink(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Profile Photo Link */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Profile Photo Shareable Link
                  </label>
                  <input
                    type="url"
                    placeholder="Link to professional, passport-sized photo"
                    value={profilePhotoLink}
                    onChange={(e) => setProfilePhotoLink(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Expected Fees */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Expected Monthly Fees (INR)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹4,000 - ₹6,000 / month"
                    value={expectedFees}
                    onChange={(e) => setExpectedFees(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Available Days */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Available Days
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mon-Fri, Alternate Days, Weekends"
                    value={availableDays}
                    onChange={(e) => setAvailableDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Available Time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Available Time Slots
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4:00 PM - 7:00 PM, Mornings"
                    value={availableTime}
                    onChange={(e) => setAvailableTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition text-sm text-slate-800 font-medium"
                  />
                </div>

                {/* Can Travel */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Can Travel to Student's Home?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setCanTravel(opt)}
                        className={`py-2.5 px-3.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                          canTravel === opt
                            ? 'bg-teal-500 border-teal-500 text-white shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Own Vehicle */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Do you have your own vehicle?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setOwnVehicle(opt)}
                        className={`py-2.5 px-3.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                          ownVehicle === opt
                            ? 'bg-teal-500 border-teal-500 text-white shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ==========================================
                SECTION 6: DECLARATION & SUBMIT
               ========================================== */}
            <div className="pt-6 border-t border-slate-100 space-y-6">
              
              {/* Declaration block */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-150 space-y-3 text-left">
                <div className="flex gap-2.5 items-start">
                  <input
                    type="checkbox"
                    id="declaration-checkbox"
                    checked={declarationConfirmed}
                    onChange={(e) => setDeclarationConfirmed(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-0.5"
                  />
                  <label htmlFor="declaration-checkbox" className="text-xs font-bold text-slate-800 select-none cursor-pointer leading-tight">
                    Declaration <span className="text-rose-500">*</span>
                  </label>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed pl-6">
                  I confirm that all information provided in this registration form is complete, accurate, and correct to the best of my knowledge. I understand that any misrepresentation of certification, credentials, or personal facts will lead to immediate onboarding cancellation or platform suspension.
                </p>
                {errors.declaration && (
                  <p className="text-xs text-rose-500 pl-6 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.declaration}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500">Secure 256-bit SSL Data Onboarding</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-md shadow-teal-500/10 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Tutor Registration</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
              </div>

            </div>

          </form>
        </div>

        {/* Security & Verification Guidelines footer card */}
        <div className="bg-slate-100/70 rounded-2xl p-5 border border-slate-200/50 flex gap-4 items-start text-left">
          <div className="p-2 bg-white rounded-xl text-teal-600 shrink-0 shadow-xs">
            <Info className="w-4.5 h-4.5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Onboarding Guidelines</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
              After submitting this registration, our academic coordinators will review your qualifications. If shortlisted, you will receive a call within 48 hours for a brief screening interview, followed by identity verification of your Aadhaar card and high school / graduation credentials before trial classes are assigned.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
