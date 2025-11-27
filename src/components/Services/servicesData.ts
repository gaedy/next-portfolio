import {
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiBetterauth,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import {
  Cinema4d,
  DeviconPlainMaya,
  MageIllustrator,
} from "@/components/jsxIcons";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  isPending?: boolean;
  icons: React.ComponentType<{ size?: number }>[];
}

export const services: ServiceItem[] = [
  {
    id: "figma-design-ui",
    title: "Landing Page Design in Figma",
    description:
      "Clean, modern, and conversion-focused landing page designed in Figma.",
    features: [
      "Custom layout tailored to your brand.",
      "Pixel-perfect developer-ready design.",
      "Optimized user flow for conversions.",
    ],
    price: "$200",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/laptop-with-plants-modern-design.jpg",
    isPending: false,
    icons: [SiFigma, MageIllustrator],
  },
  {
    id: "react-next-dev",
    title: "Frontend Web Development",
    description:
      "High-performance frontend built with React and Next.js from your Figma design.",
    features: [
      "Reusable component architecture.",
      "Next.js routing and SEO-friendly pages.",
      "Pixel-perfect Figma implementation.",
    ],
    price: "$500",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/web-development-coding.png",
    isPending: false,
    icons: [SiReact, SiNextdotjs, SiTailwindcss],
  },
  {
    id: "full-web-design",
    title: "Full Website Design in Figma",
    description:
      "Complete multi-page website design with a clean and consistent UI system.",
    features: [
      "Responsive desktop & mobile layouts.",
      "Defined design system and components.",
      "Clear structure for development.",
    ],
    price: "$500",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/web-development-coding.png",
    isPending: false,
    icons: [SiFigma, MageIllustrator],
  },
  {
    id: "fullstack-web-development",
    title: "Full Stack Web Development",
    description:
      "End-to-end development for fast, scalable, and production-ready web apps.",
    features: [
      "Modern backend + frontend stack.",
      "Clean and maintainable architecture.",
      "API integration and real-time features.",
    ],
    price: "$800",
    buttonText: "Get in touch",
    buttonHref: "#contact",
    image: "/mobile-app-development.png",
    isPending: true,
    icons: [SiNextdotjs, SiReact, SiBetterauth, SiPostgresql, SiPrisma],
  },
];
