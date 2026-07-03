import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Loader2, Copy, ExternalLink } from 'lucide-react';
import { TutorEnquiryInput } from '../types';

interface RequestTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
}

// Zod validation schema matching Lucknow's Indian telephone format and school grade systems
const enquirySchema = z.object({
  fullName: z.string()
    .trim()
    .min(3, { message: 'Full name must be at least 3 characters long' })
    .max(50, { message: 'Name is too long' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'Name should only contain alphabets and spaces' }),
  classGrade: z.string()
    .trim()
    .min(1, { message: 'Please select or enter a class/grade' }),
  phoneNumber: z.string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian phone number (starting with 6-9)' }),
  locationAddress: z.string()
    .trim()
    .min(4, { message: 'Please provide a valid location or society in Lucknow' })
    .max(120, { message: 'Address is too long' }),
});

const LUCKNOW_LOCATIONS = [
  "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", 
  "Jankipuram", "Alambagh", "Ashiyana", "Mahanagar"
];

const GRADE_PRESETS = [
  "Class 9–10", "Class 11–12", "Middle School", "Primary School", "JEE / NEET"
];

export default function RequestTutorModal({ isOpen, onClose, onSuccess, onError }: RequestTutorModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Retrieve API endpoint from environment variables only (no hardcoded fallbacks in codebase)
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TutorEnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      classGrade: '',
      phoneNumber: '',
      locationAddress: '',
    }
  });

  const selectedClass = watch('classGrade');
  const selectedLocation = watch('locationAddress');

  const onSubmit = async (data: TutorEnquiryInput) => {
    setIsSubmitting(true);

    try {
      // 4. Update the form submission logic to send a POST request with JSON in exact format
      const payload = {
        fullName: data.fullName,
        classGrade: data.classGrade,
        phoneNumber: data.phoneNumber,
        locationAddress: data.locationAddress
      };

      // 5. Use simple request ('text/plain' without custom non-standard headers) to avoid preflight (OPTIONS)
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

      // 6. After a successful response, reset form, close modal, show toast in App
      onSuccess();
      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting lead:", error);
      // 7. If the request fails, show error toast
      onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="request-tutor-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-800">Request a Home Tutor</h3>
                <p className="text-xs text-slate-500">Get a certified tutor at your home within 24 hours</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 flex-1">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Srivastava"
                    {...register('fullName')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition text-sm text-slate-800 font-medium`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                      • {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Class / Grade Selection */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Class / Grade
                    </label>
                    <span className="text-[10px] text-teal-600 font-bold">Select preset below</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Select a preset or type class (e.g., Class 10 CBSE)"
                    {...register('classGrade')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.classGrade ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition text-sm text-slate-800 font-medium`}
                  />
                  {/* Class presets */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {GRADE_PRESETS.map((grade) => (
                      <button
                        key={grade}
                        type="button"
                        onClick={() => setValue('classGrade', grade, { shouldValidate: true })}
                        className={`text-xs px-2.5 py-1 rounded-full border transition font-medium ${
                          selectedClass === grade
                            ? 'bg-teal-500 text-white border-teal-500'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                  {errors.classGrade && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                      • {errors.classGrade.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone Number (WhatsApp)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-semibold border-r border-slate-200 pr-2">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="88588XXXXX"
                      {...register('phoneNumber')}
                      className={`w-full pl-14 pr-4 py-2.5 rounded-xl border ${errors.phoneNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition text-sm text-slate-800 font-medium tracking-wide`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                      • {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Location / Address */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Location / Address (Lucknow)
                    </label>
                    <span className="text-[10px] text-teal-600 font-bold">Select area below</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Society, Sector, or area in Lucknow"
                    {...register('locationAddress')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.locationAddress ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition text-sm text-slate-800 font-medium`}
                  />
                  {/* Location Presets */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {LUCKNOW_LOCATIONS.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setValue('locationAddress', `${loc}, Lucknow`, { shouldValidate: true })}
                        className={`text-xs px-2.5 py-1 rounded-full border transition font-medium ${
                          selectedLocation === `${loc}, Lucknow`
                            ? 'bg-teal-500 text-white border-teal-500'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                  {errors.locationAddress && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                      • {errors.locationAddress.message}
                    </p>
                  )}
                </div>

                {/* Notice & Submit */}
                <div className="pt-2">
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed mb-3">
                    By submitting, you agree to allow Navodaya Tutorials academic counselors to contact you regarding home tuition matching.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl hover:from-teal-600 hover:to-teal-700 font-semibold transition shadow-md shadow-teal-500/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
