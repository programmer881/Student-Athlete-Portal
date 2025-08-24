export type Video = { title: string; url: string };

export type AthleteStats = {
  columns: string[];
  rows: Array<Record<string, string | number>>;
};

export type FAQItem = { question: string; answer: string };

export type AthleteProfile = {
  name: string;
  sport?: string;
  position?: string;
  school?: string;
  location?: string;
  headshotUrl?: string;
  recruitingStatus?: string; // e.g., "Searching"
  startTerm?: string; // e.g., "Fall 2027"
  metrics?: {
    height?: string; // e.g., 6'3"
    weight?: string; // e.g., 205 lbs
    gpa?: string; // e.g., 4.02
    wingspan?: string; // e.g., 6'5"
    sprint50m?: string; // e.g., 6.8s
    vertical?: string; // e.g., 28"
  };
  socials?: {
    websiteUrl?: string;
    instagramUrl?: string;
  };
  videos: Video[];
  stats: AthleteStats;
  transcriptUrl?: string;
  calendlyUrl?: string;
  faq: FAQItem[];
};

export const athlete: AthleteProfile = {
  name: "Zac Hutton",
  sport: "Water Polo",
  position: "Center Forward",
  school: "Matthew Flinders Anglican College, Class of 2026",
  location: "Sunshine Coast, Australia",
  headshotUrl: "/headshot.svg",
  recruitingStatus: "Searching",
  startTerm: "Fall 2027",
  metrics: {
    height: "6'3\"",
    weight: "205 lbs",
    gpa: "4.02",
    wingspan: "6'5\"",
    sprint50m: "6.8s",
    vertical: "28\"",
  },
  socials: {
    websiteUrl: undefined,
    instagramUrl: undefined,
  },
  videos: [
    { title: "Water Polo Season Highlights 2024", url: "https://youtu.be/LJNTs_v2BXU" },
    { title: "Speed & Agility Training", url: "https://youtu.be/Rfg6IgXqijU" },
    { title: "Championship Game Performance", url: "https://youtu.be/Y1fB7evhL4A" },
  ],
  stats: {
    columns: ["Season", "GP", "G", "A", "Pts", "Awards"],
    rows: [
      { Season: "2024", GP: 22, G: 12, A: 14, Pts: 26, Awards: "All-Region" },
      { Season: "2023", GP: 20, G: 9, A: 10, Pts: 19, Awards: "Team MVP" },
    ],
  },
  transcriptUrl: "/Yr11.S1.ZH.pdf",
  calendlyUrl: "https://calendly.com/zac-hutton/1hr",
  faq: [
    {
      question: "What is your graduation year?",
      answer: "I will graduate high school in October 2026 (Australia's schedule) and would be eligible to start in the U.S. college system in Fall 2026.",
    },
    {
      question: "What are your athletic goals in college?",
      answer: "To make an immediate impact where I can contribute, while also developing into a long-term leader on the team. My goal is to keep improving technically, physically, and mentally to play at the highest possible level.",
    },
    {
      question: "What is your intended major?",
      answer: "I plan to study Mechanical Engineering. I place a strong emphasis on academics and want to balance high-level athletics with a rigorous degree.",
    },
    {
      question: "What motivates you as a player?",
      answer: "I thrive in competitive environments and believe in constant improvement. I live by: \"Hard work beats talent when talent doesn't work hard.\"",
    },
    {
      question: "Why do you want to play college water polo in the U.S.?",
      answer: "I want to compete at a higher level internationally while pursuing academics. The U.S. college system's balance of sport and study is perfect for me.",
    },
  ],
};


