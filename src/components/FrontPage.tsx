import Profile from "@/components/profile";
import About from "@/components/about";
import Projects from "@/components/Projects/projects";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Tools from "./Tools/tools";

const Frontpage = () => {
  return (
    <div className="flex flex-col gap-8">

     
      <Profile />
      <About />
      <Projects />
      <Tools />
      <section className="flex items-center gap-2">
        <Link
          href="/blog"
          aria-label="Read my blog articles"
          className="flex items-center font-medium gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          View Blogs
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
};

export default Frontpage;
