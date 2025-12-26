"use client";

import Profile from "@/components/profile";
import About from "@/components/about";
import Projects from "@/components/Projects/projects";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Tools from "./Tools/tools";
import Services from "./Services/services";
import { motion } from "motion/react";

const Frontpage = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 1,

      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item2 = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.98,

      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      <motion.div variants={item}>
        <Profile />
      </motion.div>

      <motion.div variants={item2}>
        <About />
      </motion.div>

      <motion.div variants={item2}>
        <Services />
      </motion.div>

      {/* <motion.div variants={item2}> */}
      <Projects />
      {/* </motion.div> */}

      {/* <motion.div variants={item2}> */}
      <Tools />
      {/* </motion.div> */}

      <section className="flex items-center gap-2">
        <Link href="/writing" aria-label="Read my blog articles">
          <div className="flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground transition-colors">
            View Writings
            <ArrowRight size={16} />
          </div>
        </Link>
      </section>
    </motion.div>

    // <div className="flex flex-col gap-8">
    //   <Profile />
    //   <About />
    //   <Services />
    //   <Projects />
    //   <Tools />
    //   <section className="flex items-center gap-2">
    //     <Link href="/writing" aria-label="Read my blog articles">
    //       <div className="flex items-center gap-1.5 transition-colors duration-300 font-medium text-muted-foreground focus-within:text-foreground hover:text-foreground">
    //         View Writings
    //         <ArrowRight size={16} />
    //       </div>
    //     </Link>
    //   </section>
    // </div>
  );
};

export default Frontpage;
