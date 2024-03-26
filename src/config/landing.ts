import {
  ActivityIcon,
  BellDot,
  Smile,
  UserRoundCog,
  Users,
  Workflow,
} from "lucide-react";

// import TestimonialImage01 from "../../public/images/testimonial-01.jpg";
// import TestimonialImage02 from "../../public/images/testimonial-02.jpg";
// import TestimonialImage03 from "../../public/images/testimonial-03.jpg";

import { LandingConfig } from "@/lib/types";

export const landingConfig: LandingConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ],
  testimonials: [
    {
      name: "Emily Johnson",
      text: "- The platform has completely streamlined our feedback collection process. Now we can make more informed decisions and customize our approach based on our customers' real needs.",
      job: "Marketing Manager",
      imageSrc: "/images/testimonial-01.jpg",
    },
    {
      name: "John Smith",
      text: "- The platform is a true ally in the pursuit of excellence in customer experience. With its help, we are building stronger and longer-lasting relationships with our customers, which directly reflects in the growth of our business.",
      job: "CEO",
      imageSrc: "/images/testimonial-02.jpg",
    },
    {
      name: "David Miller",
      text: "- With the platform, we were able to better understand our customers' needs and act quickly and accurately to meet them. It's an essential tool for the success of our business.",
      job: "UX Board",
      imageSrc: "/images/testimonial-03.jpg",
    },
  ],
  features: [
    {
      title: "Survey",
      description: "Create NPS, CES, CSAT surveys in just a few clicks",
      icon: Smile,
    },
    {
      title: "Flows",
      description: "Customize your survey flows with our interactive tool",
      icon: Workflow,
    },
    {
      title: "Notifications",
      description:
        "Get notified for certain actions in your searches like a vote from a detractor",
      icon: BellDot,
    },
    {
      title: "Teams",
      description:
        "Our platform allows you to have multiple users managing your searches",
      icon: Users,
    },
    {
      title: "Permissions",
      description:
        "Control who can do what on your team by setting their permissions",
      icon: UserRoundCog,
    },
    {
      title: "Analytics",
      description:
        "With our fully interactive dashboard and all the necessary data so you can have full control and quickly respond to your customers",
      icon: ActivityIcon,
    },
  ],
  zigzag: [
    {
      title: "Keep projects on schedule",
      description: "More speed. Less spend",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      list: [
        "Duis aute irure dolor in reprehenderit",
        "Excepteur sint occaecat",
        "Amet consectetur adipiscing elit",
      ],
      imageSrc: '/images/features-03-image-01.png'
    },
    {
      title: "Keep projects on schedule",
      description: "More speed. Less spend",
      reverse: true,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      list: [
        "Duis aute irure dolor in reprehenderit",
        "Excepteur sint occaecat",
        "Amet consectetur adipiscing elit",
      ],
      imageSrc: '/images/features-03-image-02.png'
    },
    {
      title: "Keep projects on schedule",
      description: "More speed. Less spend",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      list: [
        "Duis aute irure dolor in reprehenderit",
        "Excepteur sint occaecat",
        "Amet consectetur adipiscing elit",
      ],
      imageSrc: '/images/features-03-image-03.png'
    },
  ],
};
