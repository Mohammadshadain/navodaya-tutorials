/**
 * Types for Navodaya Tutorials
 */

export type ActivePage = 
  | 'home'
  | 'about'
  | 'subjects'
  | 'classes'
  | 'how-it-works'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions';

export interface RouteConfig {
  path: string;
  name: string;
  id: ActivePage;
}

export interface TutorEnquiryInput {
  fullName: string;
  classGrade: string;
  phoneNumber: string;
  locationAddress: string;
}

export interface SubjectItem {
  name: string;
  icon: string;
  description: string;
  classes: string[];
}

export interface ClassLevelItem {
  grade: string;
  description: string;
  subjects: string[];
  board: string[];
}

export interface ServiceArea {
  name: string;
  description: string;
  pincode?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatarUrl?: string;
  classTaught?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
