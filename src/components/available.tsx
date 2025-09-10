import { AnimatePresence, motion } from "motion/react";

type Props = {
  color: "green" | "orange" | "red";
  className?: string,
  
};

const availableColors: Record<Props["color"], string> = {
  green: "bg-green-400 animate-pulse",
  orange: "bg-orange-400 animate-none",
  red: "bg-red-400 animate-none",
};

export default function Available({ color, className }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ width: 0, opacity: 0, scale: 0.7 }}
        animate={{ width: 130, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          mass: 1,
          ease: "anticipate",
        }}
        className={`bg-green-900 brightness-95 pointer-events-none h-fit select-none text-green-200 
      rounded-full p-1.5 px-2 text-xs flex items-center gap-1.5 overflow-hidden ${className}`}
      >
        <div
          className={`rounded-full w-1.5 h-1.5   flex-shrink-0 ${availableColors[color]}`}
        ></div>
        <p className="whitespace-nowrap">Available For Work</p>
      </motion.div>
    </AnimatePresence>
  );
}
