"use client";

import React, { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPosition;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleHover = () => {
    setIsShow(true);
  };

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses: Record<TooltipPosition, string> = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
    bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45",
    right: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleHover}
      onMouseLeave={handleClose}
    >
      {children}

      <AnimatePresence>
        {isShow && (
          <motion.div
            className={`absolute ${positionClasses[position]} z-50`}
            initial={{ opacity: 0, translateY: -5 }}
            animate={{ opacity: 1, translateY: 1 }}
            exit={{ opacity: 0, translateY: -3 }}
            transition={{
              opacity: { duration: 0.1, ease: "easeIn" },
              translateY: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <div className="relative">
              <div className="bg-neutral-800 min-w-8 text-white text-sm p-2 flex justify-center items-center rounded-md whitespace-nowrap">
                {content}
              </div>
              <div
                className={`absolute w-2 h-2 bg-neutral-800 ${arrowClasses[position]}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
