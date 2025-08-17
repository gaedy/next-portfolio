import { notFound } from "next/navigation";
import blogData from "@/app/data/blog.json";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogData.blogPosts[slug as keyof typeof blogData.blogPosts];

    if (!post) return notFound();

    return (
        <>
            <div className="sticky top-0 w-full flex items-center gap-2 mt-6 h-14 z-10 bg-[#111111]">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </Link>
            </div>

            <article className=" py-2 flex flex-col gap-4 ">
                <h1 className="text-3xl font-bold ">{post.title}</h1>

                <p className="text-sm text-neutral-400 sm:flex-row flex-col items-start sm:items-center flex gap-2">
                    <span >
                        By {post.author}
                    </span>
                    <span className="sm:flex hidden">
                        &bull;
                    </span>
                    <span>
                        Published on {new Date(post.date).toLocaleDateString()}
                    </span>
                </p>
                <hr className="opacity-20" />
                {/*<Image src={post.img} alt={post.title} className="rounded-lg mb-6" />*/}
                <p className="text-lg leading-7 whitespace-pre-line">{post.content}</p>
            </article>
        </>
    );
}