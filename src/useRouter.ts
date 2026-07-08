import { useState, useEffect, useCallback } from 'react';
import { ActivePage, RouteConfig } from './types';
import { FAQS } from './data';

export const ROUTES: RouteConfig[] = [
  { path: '/', name: 'Home', id: 'home' },
  { path: '/about', name: 'About Us', id: 'about' },
  { path: '/subjects', name: 'Subjects', id: 'subjects' },
  { path: '/classes', name: 'Classes', id: 'classes' },
  { path: '/how-it-works', name: 'How It Works', id: 'how-it-works' },
  { path: '/testimonials', name: 'Testimonials', id: 'testimonials' },
  { path: '/faq', name: 'FAQ', id: 'faq' },
  { path: '/contact', name: 'Contact Us', id: 'contact' },
  { path: '/privacy-policy', name: 'Privacy Policy', id: 'privacy-policy' },
  { path: '/terms-and-conditions', name: 'Terms & Conditions', id: 'terms-and-conditions' }
];

export function useRouter() {
  const [activePage, setActivePageState] = useState<ActivePage>(() => {
    const path = window.location.pathname;
    const matchedRoute = ROUTES.find(r => r.path === path);
    return matchedRoute ? matchedRoute.id : 'home';
  });

  const navigate = useCallback((page: ActivePage) => {
    const targetRoute = ROUTES.find(r => r.id === page);
    if (targetRoute) {
      if (window.location.pathname !== targetRoute.path) {
        window.history.pushState(null, '', targetRoute.path);
      }
      setActivePageState(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const matchedRoute = ROUTES.find(r => r.path === path);
      if (matchedRoute) {
        setActivePageState(matchedRoute.id);
        window.scrollTo({ top: 0 });
      } else {
        setActivePageState('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { activePage, navigate };
}

// SEO Meta Data Configurator
export function updatePageSEO(page: ActivePage) {
  let title = "Navodaya Tutorial - India's Trusted Home Tutor Platform";
  let description = "Get verified, highly experienced home tutors for Mathematics, Science, CBSE, ICSE, and competitive exams. Free trial class with the best tutors.";
  const canonicalUrl = `https://navodayatutorial.in${page === 'home' ? '' : `/${page}`}`;

  switch (page) {
    case 'home':
      title = "Navodaya Tutorial - Verified Home Tutors & Academic Support";
      description = "Book premium, experienced home tutors for Nursery to Class 12, CBSE, ICSE & competitive exams. Request a free trial home tutor class today!";
      break;
    case 'about':
      title = "About Us - Navodaya Tutorial | Premier Tutoring Service";
      description = "Learn more about Navodaya Tutorial. Our mission is to connect students with certified, high-quality, professional home and online tutors.";
      break;
    case 'subjects':
      title = "Subjects We Teach - Navodaya Tutorial | Mathematics, Science, Coding";
      description = "Explore the range of subjects covered by our home tutors: Physics, Chemistry, Maths, Biology, Commerce, Coding, Hindi, English and more.";
      break;
    case 'classes':
      title = "Classes Covered - Nursery to Class 12 & Competitive Exams";
      description = "We offer professional home tuitions for CBSE, ICSE, UP Board, and competitive exams like JEE, NEET, and CUET.";
      break;
    case 'how-it-works':
      title = "How It Works - Simple 4-Step Home Tutor Booking Process";
      description = "Discover how easy it is to find the perfect tutor: 1. Request, 2. Expert matching call, 3. Free trial class, and 4. Start personalized tutoring.";
      break;
    case 'testimonials':
      title = "Success Stories & Parent Testimonials - Navodaya Tutorial";
      description = "Read realistic, honest reviews from parents and students about our expert home tutoring.";
      break;
    case 'faq':
      title = "Frequently Asked Questions (FAQ) - Navodaya Tutorial";
      description = "Got questions about fees, trial classes, tutor screening, or board selection? Find answers in our complete, detailed Home Tutor FAQ.";
      break;
    case 'contact':
      title = "Contact Us - Navodaya Tutorial | Find Home Tutors";
      description = "Reach out to Navodaya Tutorial for home tutor requirements. Get details on contact numbers, location address, and expert consultation.";
      break;
    case 'privacy-policy':
      title = "Privacy Policy - Navodaya Tutorial";
      description = "Understand our data policies and how we secure and manage your tutor request and enquiry details.";
      break;
    case 'terms-and-conditions':
      title = "Terms & Conditions - Navodaya Tutorial";
      description = "Review the guidelines, rules, and terms of service for parents, students, and matched tutors at Navodaya Tutorial.";
      break;
  }

  // Set Title
  document.title = "Navodaya Tutorial";

  // Set Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Set Canonical Link
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);

  // Set Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  // Set Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', description);

  // Set Open Graph URL
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', canonicalUrl);

  // Set Twitter Card Title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute('content', title);

  // Set Twitter Card Description
  let twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (!twitterDesc) {
    twitterDesc = document.createElement('meta');
    twitterDesc.setAttribute('name', 'twitter:description');
    document.head.appendChild(twitterDesc);
  }
  twitterDesc.setAttribute('content', description);

  // Remove existing JSON-LD schemas
  const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
  existingSchemas.forEach(el => el.remove());

  // Inject Organization JSON-LD Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Navodaya Tutorial",
    "url": "https://navodayatutorial.in",
    "logo": "https://navodayatutorial.in/logo.png",
    "description": "Premium, verified Home Tutor agency providing expert personalized tuition for CBSE, ICSE, and Board students.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-73174-44730",
      "contactType": "customer service"
    }
  };

  const scriptOrg = document.createElement('script');
  scriptOrg.type = 'application/ld+json';
  scriptOrg.text = JSON.stringify(orgSchema);
  document.head.appendChild(scriptOrg);

  // Inject Breadcrumb JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://navodayatutorial.in"
      },
      ...(page !== 'home' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title.split(' - ')[0],
        "item": canonicalUrl
      }] : [])
    ]
  };

  const scriptBreadcrumb = document.createElement('script');
  scriptBreadcrumb.type = 'application/ld+json';
  scriptBreadcrumb.text = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(scriptBreadcrumb);

  // If page is FAQ, inject FAQ Schema
  if (page === 'faq') {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);
  }
}
