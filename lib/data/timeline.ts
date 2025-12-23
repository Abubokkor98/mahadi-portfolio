export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: "academic" | "achievement" | "milestone" | "future";
  icon?: string;
  highlights?: string[];
  image?: string;
}

export const timeline: TimelineEvent[] = [
  // {
  //   id: "child-school",
  //   year: 2017,
  //   title: "Early Steps",
  //   description: "Started my educational journey at a local child school.",
  //   category: "milestone",
  //   icon: "Baby",
  //   highlights: [
  //     "First steps into learning",
  //     "Made childhood friends",
  //     "Learned to read and write",
  //   ],
  // },
  // {
  //   id: "primary-school",
  //   year: 2018,
  //   title: "Primary Schooling",
  //   description: "Completed my primary education (Class 1 to 5).",
  //   category: "academic",
  //   icon: "School",
  //   highlights: [
  //     "Completed Class 5 with good grades",
  //     "Built a strong foundation",
  //     "Prepared for admission tests",
  //   ],
  // },
  {
    id: "pcpsc-admission",
    year: 2024,
    title: "Joined PCPSC",
    description:
      "Passed the admission test and joined Padma Cantonment Public School & College in Class 6.",
    category: "achievement",
    icon: "Trophy",
    image: "/images/podmacantschool.jpg",
    highlights: [
      "Cleared competitive admission test",
      "Started Class 6 at PCPSC",
      "New campus environment",
    ],
  },
  {
    id: "class-7-current",
    year: 2025,
    title: "Class 7 Completed",
    description:
      "Successfully completed Class 7 at Padma Cantonment Public School & College and passed the final exam!",
    category: "achievement",
    icon: "Award",
    highlights: [
      "Passed Class 7 final exam",
      "Excelled in science subjects",
      "Active participation in school activities",
    ],
  },
  {
    id: "class-8-admitted",
    year: 2026,
    title: "Admitted to Class 8",
    description:
      "Successfully admitted to Class 8 at PCPSC. Classes will begin in January 2026.",
    category: "milestone",
    icon: "Rocket",
    highlights: [
      "Admitted to Class 8 (December 2025)",
      "Classes start January 2026",
      "Ready for new academic challenges",
    ],
  },
  {
    id: "future-goals",
    year: 2030,
    title: "Future Aspirations",
    description: "Working towards my dream of becoming a doctor.",
    category: "future",
    icon: "Target",
    highlights: [
      "Medical college admission",
      "Serving the community",
      "Making family proud",
    ],
  },
];
