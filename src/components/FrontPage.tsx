import Profile from "@/components/profile";
import About from "@/components/about";
import Projects from "@/components/Projects/projects";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Tools from "./Tools/tools";
import { Button } from "./ui/button";

const Frontpage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Profile />
      <About />
      <Projects />
      <Tools />
      <section className="flex items-center gap-2">
        <Link href="/writing" aria-label="Read my blog articles">
          <div className="flex items-center gap-1.5 transition-colors duration-300 font-medium text-muted-foreground focus-within:text-foreground hover:text-foreground">
            View Writings
            <ArrowRight size={16} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Frontpage;
