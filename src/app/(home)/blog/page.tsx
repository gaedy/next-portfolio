'use client'

import { ArrowLeft } from "lucide-react";

import Link from "next/link";
import blogData from "@/app/data/blog.json";
import Article from "@/components/article";



export default function BlogPage() {
    const blogPosts = Object.entries(blogData.blogPosts).map(([slug, post]) => ({
        slug,
        ...post,
    }));

    return (

        <><div className="sticky top-0 w-full flex items-center gap-2 mt-6 h-14 z-10 bg-[#111111]">
            <Link
                href="/"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>
        </div>

            <div className="flex flex-col gap-4 justify-between">
                <div className="font-medium text-xl">Blog</div>
                <hr className="opacity-20 " />

                {blogPosts.length === 0 ? (
                    <div className="text-center ">
                        <p className="text-neutral-400">No blog posts found.</p>
                    </div>
                ) : (
                    blogPosts.map((post) => (
                        <Article key={post.slug} post={post} isPreview={true} />
                    ))
                )}
            </div>
        </>



    );
}
