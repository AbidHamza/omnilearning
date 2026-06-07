import type { Dict } from "./fr";

const en: Dict = {
  common: {
    explore: "Explore courses",
    viewAll: "View all",
    search: "Search for a course",
    signIn: "Sign in",
    signUp: "Sign up",
    createAccount: "Create an account",
    save: "Save",
    download: "Download",
    loading: "Loading…",
    free: "100% free",
  },
  nav: {
    formations: "Courses",
    dashboard: "Dashboard",
    support: "Support the platform",
    moderation: "Moderation",
    myAccount: "My account",
    notifications: "Notifications",
    settings: "Settings",
    language: "Language",
  },
  roles: {
    visiteur: "Visitor",
    etudiant: "Learner",
    formateur: "Instructor",
    admin: "Administrator",
    switchLabel: "View the platform as",
    switchAria: "Switch role (demo)",
  },
  footer: {
    tagline:
      "Quality courses, entirely free, to learn at your own pace and grow your skills.",
    colPages: "Pages",
    colFormations: "Courses",
    colAccount: "Account",
    home: "Home",
    catDev: "Web Development",
    catCyber: "Cybersecurity",
    catData: "Data engineering",
    catDesign: "UX Design",
    rights: "© 2026 OmniLearn. All rights reserved.",
    motto: "Learn. Practice. Progress.",
  },
  home: {
    heroBadge: "100% free, forever",
    heroTitle: "Learn the tech skills",
    heroHighlight: "of tomorrow",
    heroSubtitle:
      "Videos, courses and quizzes built by experts. Progress at your own pace and earn certificates, without paying a thing.",
    heroCtaPrimary: "Start for free",
    heroCtaSecondary: "Browse courses",
    heroReassurance: "No credit card required",
    heroAlt: "Learners in a course",

    // Hero product mockup
    mockTitle: "Cybersecurity",
    mockSubtitle: "Module 2 · Identifying threats",
    mockProgressLabel: "Progress",
    mockLessonVideo: "Understanding threats and their impact",
    mockLessonText: "Securing your personal information",
    mockLessonQuiz: "Quiz: cybersecurity threats",
    mockDuration: "20 h of content",
    mockLevel: "Beginner level",

    // Stats band
    statsTitle: "The platform in numbers",
    statLearners: "Active learners",
    statCourses: "Courses online",
    statHours: "Hours of content",
    statSatisfaction: "Satisfied learners",

    popularTitle: "Popular courses among learners",
    popularSubtitle:
      "The most-followed courses this month, picked by our community.",
    themesTitle: "Explore by topic",
    themesSubtitle: "Nine fields, one place to grow your skills.",

    whyTitle: "Why learn with OmniLearn?",
    whySubtitle:
      "Everything you need to learn seriously, without the price of a school.",
    features: [
      "Access a catalogue of quality courses, entirely free.",
      "Learn at your own pace, wherever you are and whenever you want.",
      "Benefit from the expertise of passionate, recognised instructors.",
      "Earn certificates to showcase your skills on the job market.",
    ],
    featureTitles: [
      "Free catalogue",
      "At your own pace",
      "Expert instructors",
      "Recognised certificates",
    ],

    // Testimonials
    testimonialsTitle: "They learned with OmniLearn",
    testimonialsSubtitle:
      "Real journeys, from the first video to the first job.",
    testimonials: [
      {
        quote:
          "I landed my first developer job in six months. The quizzes really pushed me to understand, not just watch.",
        name: "Laura Durand",
        role: "Front-end developer",
      },
      {
        quote:
          "The video-plus-exercises format is perfect when you have a day job. I took the cybersecurity course in the evenings, at my own pace.",
        name: "Yanis Bouchard",
        role: "Junior security analyst",
      },
      {
        quote:
          "Finally a platform where free content isn't second-rate. The certificate helped me negotiate a promotion at work.",
        name: "Nadia Cherif",
        role: "Project manager",
      },
    ],

    // Free access (pricing section)
    pricingTitle: "Everything is free. Truly.",
    pricingSubtitle:
      "No limited trial, no hidden premium tier. You create an account, you learn.",
    pricingPlan: "Free account",
    pricingPrice: "$0",
    pricingPeriod: "forever",
    pricingIncludes: [
      "Access to every course and update",
      "Videos, written lessons and interactive quizzes",
      "Progress tracking across all your devices",
      "Downloadable certificates for every completion",
      "No ads, no credit card",
    ],
    pricingCta: "Create my free account",
    pricingNote: "Sign up in under a minute.",

    // FAQ
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Everything you want to know before you start.",
    faq: [
      {
        q: "Is OmniLearn really 100% free?",
        a: "Yes. Access to courses, quizzes and certificates is free, with no time limit. The platform runs on donations from its community.",
      },
      {
        q: "Do I need a credit card to sign up?",
        a: "No. Creating an account only requires an email address. No payment details are ever required, now or later.",
      },
      {
        q: "Are the certificates worth anything?",
        a: "Each certificate confirms you passed a course's quizzes and exercises. It adds to your profile and can be shared on your CV or LinkedIn.",
      },
      {
        q: "Can I learn at my own pace?",
        a: "Yes. Courses stay available at any time and your progress is saved. You pick up exactly where you left off, on any device.",
      },
    ],

    // Final CTA
    ctaTitle: "Ready to learn something new?",
    ctaSubtitle:
      "Join the learners building their skills every day, for free.",
    ctaButton: "Get started now",
  },
  course: {
    backToAll: "All courses",
    durationLabel: "Duration",
    hoursUnit: "hours",
    languageLabel: "Language",
    levelLabel: "Level",
    softwareLabel: "Software",
    prerequisites: "Prerequisites:",
    description: "Description",
    trailer: "Trailer",
    summary: "Contents",
    objectives: "Objectives",
    skills: "Skills you'll gain",
    contentType: "Content type",
    instructorTitle: "Your instructor",
    start: "Start the course",
    videoFallback: "Playing video",
  },
  auth: {
    loginTitle: "Sign in",
    identifier: "Username",
    identifierPlaceholder: "Your email or username",
    password: "Password",
    remember: "Remember me",
    forgot: "Forgot your password?",
    noAccount: "Don't have an account yet?",
    orContinue: "Or continue with",
    invalid: "Incorrect username or password.",
    demoTitle: "Demo accounts",
    demoHint: "Click to pre-fill, then sign in.",
    loginImageAlt: "Learner signed in to the platform",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for doesn't exist or has been moved.",
    back: "Back to home",
  },
};

export default en;
