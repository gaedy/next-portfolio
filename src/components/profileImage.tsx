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
        damping: 13,
      }}
      className="relative h-16 w-16 p-0.5 rounded-full mb-2 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${
          position * 3.6
        }deg, #30E8BF, #FF8235, #FC466B)`,
        backgroundSize: "200% 200%",
        animation: "moveGradient 3s ease infinite",
      }}
    >
      <style jsx>
        {`
          @keyframes moveGradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <Image
        alt="profile"
        src="/avatar.jpg"
        fill
        priority
        className="object-cover w-full h-full p-0.5 rounded-full"
      ></Image>
    </motion.div>
  );
}
