import { motion } from "motion/react";
import { Behance, Github, Linkedin, Xicon } from "@/components/jsxIcons";

export default function Social() {
  const mySocialIcons = [
    { icon: <Xicon />, url: "https://x.com/" },
    // { icon: <DribbbleLine />, url: "https://dribbble.com/" },
    { icon: <Behance />, url: "https://behance.com/" },
    { icon: <Linkedin />, url: "https://linkedin.com/" },
    { icon: <Github />, url: "https://github.com/gaedy" },
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
    <div>
      <motion.div className="flex items-center gap-1">
        {mySocialIcons.map((theIcon, index) => (
          <motion.a
            key={index}
            {...animation(index)}
            href={theIcon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="bg-neutral-800 w-7 h-7 rounded-sm cursor-pointer hover:bg-neutral-700 active:bg-neutral-900
                  p-1 flex justify-center items-center transition-colors duration-200"
            >
              {theIcon.icon}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
