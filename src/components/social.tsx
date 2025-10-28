import { motion } from "motion/react";
import { Linkedin } from "@/components/jsxIcons";
import { SiBehance, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

export default function Social() {
  const mySocialIcons = [
    // { icon: <SiX />, url: "https://x.com/" },
    // { icon: <DribbbleLine />, url: "https://dribbble.com/" },
    { icon: <SiBehance />, url: "https://behance.com/" },
    { icon: <Linkedin />, url: "https://linkedin.com/" },
    { icon: <SiGithub />, url: "https://github.com/gaedy" },
  ];

  const animation = (index: number) => ({
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 5,
      filter: "brightness(0.5)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: ["brightness(0.5)", "brightness(1.4)", "brightness(1)"],
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: "brightness(0.3)",
    },
    transition: {
      duration: 0.8 - index * 0.1,
      type: "spring",
      stiffness: 250,
      damping: 40,
      mass: 0.8,

      filter: {
        duration: 1.4 - index * 0.15,
        ease: "easeInOut",
        times: [0, 0.6, 1],
      },

      scale: {
        type: "spring",
        stiffness: 280,
        damping: 65,
      },
      y: {
        type: "spring",
        stiffness: 550,
        damping: 55,
      },
    } as const,
  });
  return (
    <ul className="flex items-center gap-1">
      {mySocialIcons.map((theIcon, index) => (
        <motion.a
          key={index}
          {...animation(index)}
          href={theIcon.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="secondary"
            size="icon"
            className=" h-8 w-8  rounded-full cursor-pointer
                    transition-colors duration-300 group hover:bg-ring"
          >
            <div className="scale-95 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ">
              {theIcon.icon}
            </div>
          </Button>
        </motion.a>
      ))}
    </ul>
  );
}
