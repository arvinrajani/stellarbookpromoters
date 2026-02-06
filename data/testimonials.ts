export type Testimonial = {
  id: number;
  name: string;
  title: string;
  quote: string;
  label: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Avery Collins",
    title: "Debut Novelist",
    quote:
      "Stellar Book Promoters turned my rough draft into a confident, polished manuscript. The editing notes were clear, and the launch plan kept me focused.",
    label: "Sample testimonial"
  },
  {
    id: 2,
    name: "Imani Brooks",
    title: "Business Author",
    quote:
      "From formatting to metadata, every detail was handled with care. The process felt premium and personal.",
    label: "Sample testimonial"
  },
  {
    id: 3,
    name: "Victor Reyes",
    title: "Thriller Writer",
    quote:
      "Their marketing team made my book look and feel like a bestseller. The listing optimization alone boosted visibility.",
    label: "Sample testimonial"
  },
  {
    id: 4,
    name: "Serena Yates",
    title: "Romance Author",
    quote:
      "The cover design and trailer captured the mood perfectly. Readers mention the look and feel all the time.",
    label: "Sample testimonial"
  },
  {
    id: 5,
    name: "Noah Patel",
    title: "Fantasy Series Creator",
    quote:
      "They built a cohesive series look and a smart launch timeline. It felt like having a full publishing team.",
    label: "Sample testimonial"
  },
  {
    id: 6,
    name: "Elena Morgan",
    title: "Nonfiction Coach",
    quote:
      "The press kit and brand positioning helped me land podcast interviews and speaking invites.",
    label: "Sample testimonial"
  }
];
