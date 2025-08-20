"use client";
import { ArrowLeft, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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
      className="max-w-2xl mx-auto px-4 flex flex-col justify-center items-center"
    >
      <div className="sticky top-0 text-sm w-full py-4  mt-4 h-fit bg-background flex items-center justify-between gap-2 z-10">
        <Link
          href={pathname === "/blog" ? "/" : "/blog"}
          className="flex items-center font-medium gap-2 p-2 rounded-lg bg-popover hover:bg-input text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />

          <h2>{pathname === "/blog" ? "Back to Home" : "Back to Blog"}</h2>
        </Link>

        {/* {pathname !== "/blog" && (
          <Link href="/">
            <div className="flex justify-center transition cursor-pointer hover:bg-input p-2 bg-popover rounded-full">
              <X size={16} className="" />
            </div>
          </Link>
        )} */}
      </div>

      {children}
    </motion.div>
  );
}
