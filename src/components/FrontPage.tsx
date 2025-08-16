import Profile from "@/components/profile";
import Footer from "@/components/footer";
import About from "@/components/about";
import Projects from "@/components/Projects/projects";
import Tools from "@/components/tools";
import Link from "next/link";
import {ArrowRight} from "lucide-react";


const Frontpage = () => {
    return (
        <>
            <Profile/>
            <About/>
            <Projects/>
            <Tools/>
            <div className="flex items-center gap-2 py-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                    View Blogs
                    <ArrowRight size={16}/>
                </Link>
            </div>

        </>
    );
};

export default Frontpage;
