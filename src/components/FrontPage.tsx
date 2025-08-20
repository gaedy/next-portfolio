import Profile from "@/components/profile";
import About from "@/components/about";
import Projects from "@/components/Projects/projects";
import Tools from "@/components/tools";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Frontpage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Profile />
        <About />
        <Projects />
        <Tools />
        <div className="flex items-center gap-2">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            View Blogs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Frontpage;
