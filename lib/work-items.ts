export type WorkItem = {
  id: string;
  title: string;
  placeholderTone: string;
  role: string;
  summary: string;
  channel: string;
  year: string;
  url: string;
  moreDetails: string[];
};

export const workItems: WorkItem[] = [
  {
    id: "01",
    title: "Dermedic VietNam",
    placeholderTone: "bg-pink-100",
    role: "Assistant Brand Manager",
    summary:
      "Managed content direction, product campaign messaging, and cross-channel execution to grow audience trust and engagement.",
    channel: "Facebook",
    year: "2024",
    url: "https://www.facebook.com/DermedicVN",
    moreDetails: [
      "Owned campaign content calendar and posting workflow.",
      "Collaborated with clinic partners for product storytelling.",
    ],
  },
  {
    id: "02",
    title: "Skin Clinic",
    placeholderTone: "bg-zinc-100",
    role: "Content Creator",
    summary:
      "Produced skincare-focused educational content and social storytelling to improve retention and conversion on organic campaigns.",
    channel: "Facebook",
    year: "2024",
    url: "https://www.facebook.com/Skinclinicvietnam",
    moreDetails: [
      "Built educational skincare reels and static carousels.",
      "Optimized copy and hooks based on engagement data.",
    ],
  },
  {
    id: "03",
    title: "Doctor Ngo Kieu Khanh",
    placeholderTone: "bg-pink-200",
    role: "Product Review Partner",
    summary:
      "Created practical review scripts and short-form videos highlighting product outcomes and real-use scenarios.",
    channel: "TikTok",
    year: "2025",
    url: "https://www.tiktok.com/@drngokieukhanh?lang=vi-VN",
    moreDetails: [
      "Planned review script angles for trust-first messaging.",
      "Created short videos focused on daily-use product results.",
    ],
  },
];
