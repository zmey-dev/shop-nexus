
export type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "James Wilson",
    position: "CEO",
    company: "Venture Capital Ltd.",
    content: "The quality of products exceeded my expectations. The checkout process was smooth and the shipping was fast. I'll definitely be a returning customer!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Johnson",
    position: "Creative Director",
    company: "Design Studio Inc.",
    content: "I've purchased from many luxury retailers, but this shop stands out with its exceptional customer service and attention to detail.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    id: "t3",
    name: "Michael Chen",
    position: "Investment Banker",
    company: "Global Finance",
    content: "Impressive selection of premium products. The packaging was elegant and made the unboxing experience special. Will recommend to colleagues.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4
  },
  {
    id: "t4",
    name: "Emily Rodriguez",
    position: "Fashion Designer",
    company: "Elite Fashion House",
    content: "As someone in the fashion industry, I have high standards for luxury items. The quality and design of the products I purchased were absolutely exceptional.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    id: "t5",
    name: "David Thompson",
    position: "Tech Entrepreneur",
    company: "Innovate Solutions",
    content: "The customer support team went above and beyond to help me with my order. The luxury watch I purchased has become my daily favorite.",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    id: "t6",
    name: "Sophia Kim",
    position: "Art Curator",
    company: "Metropolitan Gallery",
    content: "The attention to detail in every product reflects a commitment to craftsmanship that is rare to find these days. Very satisfied with my purchases.",
    avatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4
  }
];

