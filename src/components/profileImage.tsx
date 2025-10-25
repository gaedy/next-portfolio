"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProfileImage() {
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
      className="relative h-16 w-16 overflow-hidden"
    >
      <Image
        alt="profile"
        src="/avatar.jpg"
        priority
        width={256}
        height={256}
        className="rounded-full object-fill border-2 border-ring "
      ></Image>
    </motion.div>
  );
}
