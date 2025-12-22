"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, XIcon } from "lucide-react";
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
      initial={{
        opacity: 0,
        scale: 0.975,
        y: 16,
        filter: "blur(4px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.99,
        y: -8,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // easeOutCubic
      }}
      className="max-w-2xl px-4 mx-auto flex flex-col"
    >
      <div className="sticky bg-background top-0 text-sm w-full py-4  mt-4 h-fit flex items-center justify-between gap-2 z-10">
        <Link
          className="flex justify-between  items-center"
          href={pathname === "/writing" ? "/" : "/writing"}
        >
          <Button variant="secondary" size="icon" className="cursor-pointer">
            <ArrowLeft size={16} />

            {/* {pathname === "/writing" ? "Back to Home" : "Back to Writings"} */}
          </Button>
        </Link>

        {/* {pathname.startsWith("/writing/") && pathname !== "/writing" && (
          <Link className="flex items-center" href="/">
            <Button variant="secondary" size="icon" className="cursor-pointer">
              <XIcon size={16} />
            </Button>
          </Link>
        )} */}
      </div>

      {children}
    </motion.div>
  );
}
