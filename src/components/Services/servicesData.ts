export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: "figma-design",
    title: "Landing Page Design in Figma",
    description:
      "I'll design a clean, modern, and high-converting landing page in Figma that makes your brand stand out and turns visitors into customers.",
    features: [
      "Custom layout tailored to your brand and audience.",
      "Pixel-perfect design ready for developers.",
      "UX-focused flow to maximize conversions.",
    ],
    price: "200$",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/laptop-with-plants-modern-design.jpg",
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    description:
      "Professional web development services using modern technologies and best practices to build scalable, performant applications.",
    features: [
      "Responsive design for all devices.",
      "Built with latest technologies.",
      "SEO optimized and fast loading.",
    ],
    price: "500$",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/web-development-coding.png",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Create native and cross-platform mobile applications that engage users and deliver exceptional experiences.",
    features: [
      "iOS and Android compatible.",
      "Intuitive user interface design.",
      "Real-time synchronization.",
    ],
    price: "800$",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/mobile-app-development.png",
  },
];
