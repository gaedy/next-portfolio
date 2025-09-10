"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfileImage() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className="relative h-16 w-16 p-0.5 rounded-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${
          position * 3.6
        }deg, #E81CFF, #FF6A00, #40C9FF)`,
        backgroundSize: "200% 200%",
        animation: "moveGradient 3s easeOut infinite",
      }}
    >
      <Image
        alt="profile"
        src="/avatar2.jpg"
        priority
        width={256}
        height={256}
        className="rounded-full object-fill "
      ></Image>
    </motion.div>
  );
}
