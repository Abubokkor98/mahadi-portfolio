export interface Photo {
  id: string;
  src: string;
  category: "personal" | "family" | "cousins";
  caption?: string;
  date?: string;
}

export const photos: Photo[] = [
  // Personal photos
  {
    id: "personal-1",
    src: "/images/gallery/personal/1.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-2",
    src: "/images/gallery/personal/2.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-3",
    src: "/images/gallery/personal/3.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-4",
    src: "/images/gallery/personal/4.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-5",
    src: "/images/gallery/personal/5.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-6",
    src: "/images/gallery/personal/6.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-7",
    src: "/images/gallery/personal/7.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-8",
    src: "/images/gallery/personal/8.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-9",
    src: "/images/gallery/personal/9.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-10",
    src: "/images/gallery/personal/10.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-11",
    src: "/images/gallery/personal/11.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-12",
    src: "/images/gallery/personal/12.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },
  {
    id: "personal-13",
    src: "/images/gallery/personal/13.jpeg",
    category: "personal",
    caption: "My Photo Collection",
    date: "2024",
  },

  // Family photos
  {
    id: "family-1",
    src: "/images/gallery/family/1.jpg",
    category: "family",
    caption: "Family dinner celebration",
    date: "2024-12-01",
  },
  {
    id: "family-2",
    src: "/images/gallery/family/2.jpg",
    category: "family",
    caption: "With mom and dad",
    date: "2024-11-15",
  },
  {
    id: "family-3",
    src: "/images/gallery/family/3.jpg",
    category: "family",
    caption: "Birthday party!",
    date: "2024-06-15",
  },

  // Cousins photos
  {
    id: "cousins-1",
    src: "/images/gallery/cousins/1.jpg",
    category: "cousins",
    caption: "Fun with cousins!",
    date: "2024-12-10",
  },
  {
    id: "cousins-2",
    src: "/images/gallery/cousins/2.jpg",
    category: "cousins",
    caption: "Gaming together",
    date: "2024-11-05",
  },
  {
    id: "cousins-3",
    src: "/images/gallery/cousins/3.jpg",
    category: "cousins",
    caption: "Cricket match",
    date: "2024-10-18",
  },
];

// Helper function to get photos by category
export function getPhotosByCategory(
  category: "all" | Photo["category"]
): Photo[] {
  if (category === "all") {
    return photos;
  }
  return photos.filter((photo) => photo.category === category);
}
