"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
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
      className="max-w-2xl px-4 mx-auto flex flex-col justify-center"
    >
      <div className="sticky bg-background top-0 text-sm w-full py-4  mt-4 h-fit flex items-center justify-between gap-2 z-10">
        <Link href={pathname === "/writing" ? "/" : "/writing"}>
          <Button variant="secondary" className="cursor-pointer">
            <ArrowLeft size={16} />

            {/* {pathname === "/writing" ? "Back to Home" : "Back to Writings"} */}
          </Button>
        </Link>
      </div>

      {children}
    </motion.div>
  );
}
