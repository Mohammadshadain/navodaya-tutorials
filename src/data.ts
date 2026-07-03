import { SubjectItem, ClassLevelItem, ServiceArea, TestimonialItem, FAQItem } from './types';

export const SUBJECTS: SubjectItem[] = [
  {
    name: "Mathematics",
    icon: "Calculator",
    description: "From basic arithmetic to advanced calculus, algebra, and geometry. Customized formulas and problem-solving tricks.",
    classes: ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "JEE", "CUET"]
  },
  {
    name: "Science",
    icon: "FlaskConical",
    description: "Foundational conceptual understanding of physics, chemistry, and biology for junior and middle school levels.",
    classes: ["Primary", "Middle School", "Class 9-10"]
  },
  {
    name: "Physics",
    icon: "Zap",
    description: "In-depth mechanics, thermodynamics, optics, electromagnetism, and modern physics with practical concept mapping.",
    classes: ["Class 11-12", "JEE", "NEET", "Graduation"]
  },
  {
    name: "Chemistry",
    icon: "Atom",
    description: "Organic, inorganic, and physical chemistry made easy with visual reaction mechanisms and periodic properties.",
    classes: ["Class 11-12", "JEE", "NEET", "Graduation"]
  },
  {
    name: "Biology",
    icon: "Dna",
    description: "Detailed study of botany, zoology, human anatomy, genetics, and ecology for high school and pre-medical coaching.",
    classes: ["Class 11-12", "NEET", "Graduation"]
  },
  {
    name: "English",
    icon: "BookOpen",
    description: "Spoken English, grammar mastery, creative writing, and full literature syllabus for school curricula and boards.",
    classes: ["Nursery", "Primary", "Middle", "Class 9-12"]
  },
  {
    name: "Hindi",
    icon: "Languages",
    description: "Complete Hindi literature, advanced grammar, essay writing, and board exam preparation to secure maximum marks.",
    classes: ["Primary", "Middle School", "Class 9-10", "Class 11-12"]
  },
  {
    name: "Commerce",
    icon: "TrendingUp",
    description: "Accountancy, Business Studies, and Economics with detailed numerical problems, balance sheets, and theoretical models.",
    classes: ["Class 11-12", "Graduation", "CUET"]
  },
  {
    name: "Computer Science",
    icon: "Monitor",
    description: "School level computer applications, basic networking, web design, and database systems aligned with board curricula.",
    classes: ["Middle School", "Class 9-10", "Class 11-12", "Graduation"]
  },
  {
    name: "Coding",
    icon: "Code",
    description: "Practical programming in Python, Java, C++, Scratch for juniors, and algorithm building for early tech leaders. Also available: Scratch Programming, Python, Java, C++, Coding for School Students.",
    classes: ["Primary", "Middle School", "Class 9-10", "Class 11-12"]
  },
  {
    name: "Competitive Exams",
    icon: "Trophy",
    description: "Targeted tutor mapping for high-stake exams: IIT-JEE Foundation, IIT-JEE Main, IIT-JEE Advanced, NEET, CUET, NDA, Olympiads, NTSE, and Scholarship Exams.",
    classes: ["IIT-JEE", "NEET", "CUET", "NDA", "Olympiads", "NTSE", "Scholarships"]
  },
  {
    name: "EVS",
    icon: "Compass",
    description: "Environmental Studies for primary students with activity-based learning, observation skills, and strong conceptual understanding.",
    classes: ["Class 1-5"]
  },
  {
    name: "Social Science",
    icon: "BookOpen",
    description: "History, Geography, Civics, and Economics taught through concept-based learning and exam-focused preparation.",
    classes: ["Class 6-8", "Class 9-10"]
  },
  {
    name: "Sanskrit",
    icon: "Languages",
    description: "Grammar, vocabulary, translation, literature, and complete board examination preparation.",
    classes: ["Class 6-8"]
  },
  {
    name: "Accountancy",
    icon: "TrendingUp",
    description: "Journal entries, ledger, balance sheet, financial accounting, partnership, and company accounts with practical problem solving.",
    classes: ["Class 11-12 (Commerce)"]
  },
  {
    name: "Business Studies",
    icon: "Award",
    description: "Business management principles, marketing, finance, entrepreneurship, and board examination preparation.",
    classes: ["Class 11-12 (Commerce)"]
  },
  {
    name: "Economics",
    icon: "Cpu",
    description: "Microeconomics, Macroeconomics, Statistics, Indian Economy, and board examination preparation.",
    classes: ["Class 11-12", "CUET"]
  },
  {
    name: "History",
    icon: "BookOpen",
    description: "Ancient, Medieval, Modern Indian History, and World History with conceptual understanding and board-focused preparation.",
    classes: ["Class 11-12 (Arts)"]
  },
  {
    name: "Geography",
    icon: "Compass",
    description: "Physical Geography, Human Geography, Maps, Environment, and board examination preparation.",
    classes: ["Class 11-12 (Arts)"]
  },
  {
    name: "Political Science",
    icon: "ShieldCheck",
    description: "Indian Constitution, Political Theory, International Relations, Public Administration, and board preparation.",
    classes: ["Class 11-12 (Arts)"]
  },
  {
    name: "Sociology",
    icon: "Users",
    description: "Society, Culture, Social Institutions, Research Methods, and complete board syllabus coverage.",
    classes: ["Class 11-12 (Arts)"]
  },
  {
    name: "Psychology",
    icon: "Sparkles",
    description: "Human Behaviour, Learning, Intelligence, Personality, and board examination preparation.",
    classes: ["Class 11-12 (Arts)"]
  },
  {
    name: "Spoken English",
    icon: "Languages",
    description: "Improve spoken English, pronunciation, fluency, communication skills, interview confidence, and personality development.",
    classes: ["Students", "College", "Working Professionals"]
  },
  {
    name: "Computer Basics",
    icon: "Monitor",
    description: "Fundamentals of computers, MS Office, Internet, Email, Typing, Digital Literacy, and practical computer skills.",
    classes: ["Beginners", "School Students", "College Students"]
  }
];

export const CLASSES_COVERED: ClassLevelItem[] = [
  {
    grade: "Nursery & Kindergarten",
    description: "Gentle, interactive foundational learning. Focuses on phonics, basic counting, handwriting, and interactive motor skills.",
    subjects: ["English", "Basic Math", "Hindi", "Creative Art"],
    board: ["CBSE", "ICSE", "State Boards"]
  },
  {
    grade: "Primary School (Class 1-5)",
    description: "Building strong academic roots. Personalized support to cultivate reading habits, analytical math skills, and early science concepts.",
    subjects: ["Mathematics", "EVS / Science", "English", "Hindi", "Social Studies"],
    board: ["CBSE", "ICSE", "UP Board"]
  },
  {
    grade: "Middle School (Class 6-8)",
    description: "Crucial transitional phase preparation. Encouraging critical thinking, logical deduction, and structured writing habits.",
    subjects: ["Mathematics", "Science (Physics, Chem, Bio)", "Social Science", "English", "Sanskrit/Hindi", "Computer Basics"],
    board: ["CBSE", "ICSE", "UP Board"]
  },
  {
    grade: "High School (Class 9-10)",
    description: "Intense conceptual focus for the first major board milestone. Solved previous year papers, test series, and board-centric training.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English Literature & Grammar", "Social Studies", "Hindi", "Computer Applications"],
    board: ["CBSE", "ICSE", "UP Board"]
  },
  {
    grade: "Higher Secondary (Class 11-12)",
    description: "Specialized stream mentoring (Science, Commerce, Humanities). Direct focus on competitive foundation plus board excellence.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "Business Studies", "Computer Science", "English"],
    board: ["CBSE", "ISC", "UP Board"]
  },
  {
    grade: "Graduation / College",
    description: "Advanced undergraduate tutoring for degree courses, helping students grasp intricate subjects and research projects.",
    subjects: ["B.Sc Physics/Maths/Chem", "B.Com Accounting", "BCA / Programming", "English Honors"],
    board: ["Lucknow University", "AKTU", "Amity", "Integral University"]
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Gomti Nagar", description: "Premium service in Gomti Nagar Extension, Patrakar Puram, Vibhuti Khand, and adjacent sectors." },
  { name: "Hazratganj", description: "Centrally located tutors covering Shahnajaf Road, Sapru Marg, and nearby core heritage limits." },
  { name: "Aliganj", description: "Comprehensive tutoring covering Sector A to Sector Q, Kapoorthala, and surrounding neighborhoods." },
  { name: "Indira Nagar", description: "Expert home tutors across Sector 1 to 25, Munshi Pulia, Bhootnath, and Shalimar areas." },
  { name: "Jankipuram", description: "Experienced academic coaching around Jankipuram Extension, Engineering College, and LDA colony." },
  { name: "Alambagh", description: "Reliable educational support around Singar Nagar, LDA colony Alambagh, and canal-ring circles." },
  { name: "Ashiyana", description: "Local certified tutors for Bangla Bazar, Ashiyana Sector H, Sector G, and transport nagar ranges." },
  { name: "Mahanagar", description: "Premier tutoring services in Mahanagar, Gole Market, Paper Mill Colony, and Nishatganj." },
  { name: "Vikas Nagar", description: "Tutors serving Sector 1 to 14, Jagrani hospital region, and Ring Road sectors." },
  { name: "Chowk & Old City", description: "Customized tutoring in Chowk, Thakurganj, Rajajipuram, and surrounding cultural sectors." }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sanjay Srivastava",
    location: "Gomti Nagar, Lucknow",
    rating: 5,
    quote: "Finding a reliable math tutor in Gomti Nagar for my son in Class 10 was a big challenge. Navodaya Tutorial matched us with an exceptional tutor within 24 hours. My son's score jumped from 72% to 94% in his CBSE board exams. Highly professional and deeply recommended!",
    classTaught: "Parent of Class 10 Student (CBSE)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Sanjay"
  },
  {
    id: "test-2",
    name: "Dr. Shalini Kapoor",
    location: "Aliganj, Lucknow",
    rating: 5,
    quote: "Navodaya Tutorial provided a female home tutor for my daughter in Class 11 for Biology and Chemistry. The teacher's explanation methods are modern, clear, and structured. My daughter feels incredibly confident now, and we are continuing with them for NEET foundation coaching.",
    classTaught: "Parent of Class 11 Student (NEET Prep)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Shalini"
  },
  {
    id: "test-3",
    name: "Rajesh Mishra",
    location: "Indira Nagar, Lucknow",
    rating: 5,
    quote: "Excellent experience. The promptness in matching the requirements is top-notch. The trial class was extremely well structured, allowing us to evaluate the teacher beforehand. For anyone seeking quality home tuition, this is the gold standard.",
    classTaught: "Parent of Class 8 Student (ICSE)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Rajesh"
  },
  {
    id: "test-4",
    name: "Mrs. Anjali Rastogi",
    location: "Hazratganj, Lucknow",
    rating: 5,
    quote: "With both parents working, tracking our child's daily homework and foundation was difficult. Navodaya Tutorial matched us with a lovely primary tutor who makes learning fun. Our daughter looks forward to her study session every evening!",
    classTaught: "Parent of Class 4 Student (Primary)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Anjali"
  },
  {
    id: "test-5",
    name: "Vikramaditya Singh",
    location: "Jankipuram, Lucknow",
    rating: 5,
    quote: "We were looking for an experienced Physics tutor for JEE Mains preparation in Jankipuram. The level of dedication shown by the tutor from Navodaya has been exemplary. The focus on resolving previous years' questions and speed-solving tricks has given my child a great boost.",
    classTaught: "Parent of Class 12 Student (JEE Prep)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Vikram"
  },
  {
    id: "test-6",
    name: "Nisha Mehrotra",
    location: "Mahanagar, Lucknow",
    rating: 5,
    quote: "Highly satisfied with the services. The tutor assigned for my daughter's ICSE Board Exams in Mahanagar was highly punctual, knowledgeable, and patient. She scored a brilliant 95% in her board examinations. Thank you so much, Navodaya team!",
    classTaught: "Parent of Class 10 Student (ICSE)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Nisha"
  },
  {
    id: "test-7",
    name: "Amit Kumar Verma",
    location: "Alambagh, Lucknow",
    rating: 5,
    quote: "Very professional organization. The coordinate-officer listened to our specific requirements for our son who had a fear of accounts and numbers. Within two days, they matched us with an experienced commerce tutor. His progress is outstanding.",
    classTaught: "Parent of Class 11 Commerce Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Amit"
  },
  {
    id: "test-8",
    name: "Pooja Dwivedi",
    location: "Ashiyana, Lucknow",
    rating: 5,
    quote: "Navodaya home tutor service is extremely well managed. Regular assessments and feedback sessions keep us in the loop about our child's performance. The trial demo session was incredibly helpful for us to decide.",
    classTaught: "Parent of Class 6 Student (Maths & Science)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Pooja"
  },
  {
    id: "test-9",
    name: "Ramesh Chandra Gupta",
    location: "Vikas Nagar, Lucknow",
    rating: 5,
    quote: "For computer science and coding preparation, it is hard to find practical-oriented tutors in Lucknow. Navodaya matched us with a tutor who actually works on real-world projects. My child has built high-level confidence and logical coding capacity.",
    classTaught: "Parent of Class 12 Student (ISC)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Ramesh"
  },
  {
    id: "test-10",
    name: "Preeti Chawla",
    location: "Chowk, Lucknow",
    rating: 5,
    quote: "Extremely reliable tutors. The tutor comes on time, maintains proper lesson plans, and is very polite with the student. My child has improved not only in academics but also developed a highly consistent self-study discipline.",
    classTaught: "Parent of Class 9 Student (UP Board)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Preeti"
  },
  {
    id: "test-11",
    name: "Harish Chandra",
    location: "Rajajipuram, Lucknow",
    rating: 5,
    quote: "We requested a home tutor for science and social studies in Rajajipuram. The tutor matches the lesson speed with school schedules and clarifies all difficult queries with real life examples. Highly recommended and affordable.",
    classTaught: "Parent of Class 9 Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Harish"
  },
  {
    id: "test-12",
    name: "Kiran Tripathi",
    location: "Chinhat, Lucknow",
    rating: 5,
    quote: "Wonderful experience with Sanskrit and Hindi tutoring. The tutor simplifies literature, clarifies complex vocabulary and assists with grammar masterfully. My daughter feels completely prepared for boards.",
    classTaught: "Parent of Class 8 Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Kiran"
  },
  {
    id: "test-13",
    name: "Manish Agarwal",
    location: "Faizabad Road, Lucknow",
    rating: 5,
    quote: "The home tutoring from Navodaya has completely transformed my son's study habits. The coordinator matching is extremely targeted, matching us with a superb Accountancy teacher who clarifies complex ledgers effortlessly.",
    classTaught: "Parent of Class 12 Commerce Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Manish"
  },
  {
    id: "test-14",
    name: "Sunita Dixit",
    location: "Sitapur Road, Lucknow",
    rating: 5,
    quote: "We were struggling with standard secondary school preparation. Navodaya matched us with a wonderful female teacher who regularly coordinates with us and provides systematic weekly test feedbacks.",
    classTaught: "Parent of Class 7 Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Sunita"
  },
  {
    id: "test-15",
    name: "Rajeev Saxena",
    location: "Telibagh, Lucknow",
    rating: 5,
    quote: "Affordable and highly trustworthy tuition service. The tutor assigned for computer basics and mathematics is exceptionally skilled and punctual. Our son's analytical mindset has improved immensely.",
    classTaught: "Parent of Class 5 Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Rajeev"
  },
  {
    id: "test-16",
    name: "Neelam Bajpai",
    location: "Kapoorthala, Lucknow",
    rating: 5,
    quote: "Exceptional coaching for EVS and English literature. The tutor uses activity-based conceptual models that keep my child actively engaged and excited to study every single day. A perfect learning partner!",
    classTaught: "Parent of Class 3 Student",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Neelam"
  },
  {
    id: "test-17",
    name: "Deepak Tandon",
    location: "Nishatganj, Lucknow",
    rating: 5,
    quote: "Navodaya's coordinate desk is highly cooperative. The economics and business studies tutor mapped for my daughter is extremely expert and holds deep domain experience in board examination setups.",
    classTaught: "Parent of Class 11 Student (Humanities)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Deepak"
  },
  {
    id: "test-18",
    name: "Ravi Shankar Jha",
    location: "Aminabad, Lucknow",
    rating: 5,
    quote: "Finding an experienced Hindi and Sanskrit master who could guide our child with proper translation rules was difficult. Navodaya matched us with a veteran local tutor who delivers outstanding lectures.",
    classTaught: "Parent of Class 10 Student (UP Board)",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Ravi"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "How do I request a home tutor from Navodaya Tutorial?",
    answer: "It is extremely simple! Click on the 'Request Tutor' or 'Book Now' button, fill out the simple requirement form with your child's name, class, location, and phone number. Our academic coordinator will call you back within 2-3 hours to understand specific needs and schedule a free trial class."
  },
  {
    category: "General",
    question: "How soon can I get a tutor matched for my child?",
    answer: "Usually, we match and assign a qualified home tutor within 24 to 48 hours of receiving your request. Our coordinators work quickly to map your specific class, subject, and location requirements with our extensive database of verified local educators in Lucknow."
  },
  {
    category: "General",
    question: "Do you provide demo classes or free trials?",
    answer: "Yes, absolutely! We provide a 1-hour free trial or demo class with the matched tutor in the comfort of your home. This allows you and your child to evaluate the tutor's teaching style, communication, and chemistry before confirming and resuming regular sessions."
  },
  {
    category: "Tutors",
    question: "Are all home tutors verified by Navodaya Tutorial?",
    answer: "Yes, 100%. Student safety and academic quality are our top priorities. Every home tutor undergoes a strict verification process, which includes standard identity checks (Aadhaar, address proof), academic credential checks, and teaching demonstrations before they are assigned to any family."
  },
  {
    category: "Tutors",
    question: "Do you provide female home tutors for female students?",
    answer: "Yes, we do. We completely understand and respect comfort and security preferences. We have a dedicated registry of experienced female home tutors across Lucknow for all classes and subjects, specifically matched upon parent request."
  },
  {
    category: "Tutors",
    question: "Do you provide male home tutors?",
    answer: "Yes, we have a large network of experienced male home tutors who specialize in secondary, higher secondary, and high-level competitive coaching. They are well-trained to deliver structured, result-oriented teaching across Lucknow."
  },
  {
    category: "Coverage",
    question: "Which school boards are covered by your tutoring services?",
    answer: "Our educators cover all major national and state school boards, including CBSE (Central Board of Secondary Education), ICSE/ISC (Council for the Indian School Certificate Examinations), and UP Board (Uttar Pradesh Madhyamik Shiksha Parishad) curricula."
  },
  {
    category: "Coverage",
    question: "Which subjects are available for home tuition?",
    answer: "We cover an exhaustive list of subjects including Mathematics, Science (Physics, Chemistry, Biology), English, Hindi, Sanskrit, EVS, Social Science (History, Geography, Civics, Economics), Commerce (Accountancy, Business Studies), Computer Science, and specialized Coding courses."
  },
  {
    category: "Coverage",
    question: "Which cities and regions do you cover?",
    answer: "Currently, our centralized offline tutoring operations are active throughout all major areas of Lucknow, Uttar Pradesh. This includes Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, Jankipuram, Ashiyana, Alambagh, Mahanagar, Rajajipuram, Vikas Nagar, Chinhat, Faizabad Road, and surrounding sectors."
  },
  {
    category: "Coverage",
    question: "Are online classes available alongside home tuition?",
    answer: "Yes! While personalized offline in-home tutoring is our primary specialty, we also offer high-quality, live, interactive 1-on-1 online tuition classes. This is highly suitable for remote students or those looking for highly specialized subject educators."
  },
  {
    category: "General",
    question: "What are the tuition timings?",
    answer: "The tuition timings are fully customized according to the student's school schedule and convenience. You can mutually coordinate with the assigned tutor for suitable morning or evening batches, ensuring a balanced routine."
  },
  {
    category: "Support",
    question: "Can I change my tutor if we are not satisfied?",
    answer: "Yes, definitely. If at any point you feel that the tutor's teaching pace or style does not align with your child's learning speed, simply contact our centralized counselor desk, and we will schedule another trial with a different tutor free of charge."
  },
  {
    category: "Support",
    question: "How are tutors selected and matched with students?",
    answer: "Our matching algorithm and coordinator team evaluate the student's class, board, subject difficulty, location, and learning speed. We then filter our verified tutor list to assign the candidate with the most compatible teaching experience."
  },
  {
    category: "Academics",
    question: "Do you prepare students for board exams?",
    answer: "Yes! Board exam preparation is one of our key specialties. Our tutors focus heavily on board-centric strategies, solved previous year papers, regular mock tests, speed-solving tricks, and structured revision schedules to maximize student scores."
  },
  {
    category: "Academics",
    question: "Do you prepare students for JEE?",
    answer: "Yes, we provide specialized competitive tutors for IIT-JEE Foundation, Mains, and Advanced preparation. Tutors focus on deep conceptual clarity, advanced physics, physical & organic chemistry, and calculus problem-solving skills."
  },
  {
    category: "Academics",
    question: "Do you prepare students for NEET?",
    answer: "Yes, we have a premium team of biology, physics, and chemistry experts specializing in NEET preparation. Tutors focus on comprehensive concept mapping, NCERT-based revision, and solving high-stake medical mock questions."
  },
  {
    category: "Academics",
    question: "Do you prepare students for CUET?",
    answer: "Yes, our domain-specific tutors offer thorough preparation for the Common University Entrance Test (CUET) across Science, Commerce, and Humanities subjects, ensuring students secure admissions in top central universities."
  },
  {
    category: "Academics",
    question: "Do you prepare students for competitive exams?",
    answer: "Yes, our competitive exam coaching registry covers preparation for NDA, Olympiads, NTSE, and various national scholarship exams. Tutors design customized practice schedules to build high-level logical reasoning and subject confidence."
  },
  {
    category: "Fees",
    question: "How are fees decided?",
    answer: "The monthly fee is calculated transparently based on the student's class, school board, selected subjects, and total hours or days of class scheduled per week. Our coordinators will discuss and finalize this with you transparently with no hidden charges."
  },
  {
    category: "Support",
    question: "How do I contact Navodaya Tutorial?",
    answer: "You can contact our centralized support office instantly by calling us at +91 73174 44730, emailing us at navodayatutorialsindia@gmail.com, or sending an instant WhatsApp message to +91 88588 07008. We are happy to assist you!"
  }
];
