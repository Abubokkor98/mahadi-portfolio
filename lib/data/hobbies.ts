export interface Hobby {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
  sinceYear: number;
  category: "creative" | "sports" | "technology" | "academic" | "social";
}

export const hobbies: Hobby[] = [
  {
    id: "cousins",
    name: "Hanging with Cousins",
    icon: "MessageCircle",
    description:
      "My favorite! Love talking, gossiping, and playing fun games with my cousins. We've been best friends since childhood!",
    sinceYear: 2017,
    category: "social",
  },
  {
    id: "reading",
    name: "Reading",
    icon: "BookOpen",
    description:
      "Enjoy reading science fiction, mystery novels, and books about space exploration.",
    sinceYear: 2018,
    category: "academic",
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: "Activity",
    description:
      "Love playing badminton with friends and family. Great way to stay active and have fun!",
    sinceYear: 2020,
    category: "sports",
  },
  {
    id: "football",
    name: "Football",
    icon: "Trophy",
    description:
      "Playing football with friends at school and in the neighborhood. Always exciting!",
    sinceYear: 2019,
    category: "sports",
  },
  {
    id: "music",
    name: "Music",
    icon: "Music",
    description:
      "Love listening to various music genres. Music helps me relax and enjoy my free time.",
    sinceYear: 2020,
    category: "creative",
  },
  {
    id: "gaming",
    name: "Mobile Gaming",
    icon: "Gamepad2",
    description:
      "Enjoy playing games on mobile once or twice a month. A fun way to unwind!",
    sinceYear: 2021,
    category: "technology",
  },
];
