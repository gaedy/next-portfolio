"use client";
import { motion } from "motion/react";

import { usePathname } from "next/navigation";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen w-full flex justify-center font-medium px-8">
      <motion.div
        key={pathname}
        className="w-2xl flex flex-col min-h-screen"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{
          type: "spring",
          stiffness: 110,
          damping: 14,
          mass: 1,
          opacity: { duration: 0.2, ease: "easeIn" },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
