"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 140,
        damping: 12,
        delay: 0.03,
        mass: 1,
      }}
      className="relative h-9  w-8 pointer-events-none select-none overflow-hidden"
    >
      <Image
        alt="profile"
        src="/thelogo3.svg"
        priority
        width={256}
        height={256}
        className="  object-fill "
      ></Image>
    </motion.div>
  );
}
