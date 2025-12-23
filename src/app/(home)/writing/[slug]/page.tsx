import { notFound } from "next/navigation";
import blogData from "@/app/data/blog.json";

import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import readingTime from "reading-time";
import { Clock, Timer } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>; // Updated type to reflect Promise
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await params before accessing properties

  const post = blogData.blogPosts[slug as keyof typeof blogData.blogPosts];

  if (!post) return { title: "Blog | Ahmed Gaeedy" };

  return {
    title: `${post.title} | Ahmed Gaeedy`,
    description: "Read my latest article.",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.blogPosts[slug as keyof typeof blogData.blogPosts];
  if (!post) return notFound();

  const currentDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const stats = readingTime(post.content);
  const minutes = Math.ceil(stats.minutes);

  return (
    <article className="py-2 flex flex-col gap-4">
      <header>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </header>

      <div className="text-sm text-muted-foreground flex-row items-center flex gap-2 flex-wrap">
        {/* <p>By {post.author}</p>
        <span className="sm:flex hidden">&bull;</span> */}

        <div className="flex items-center  gap-1">
          {/* <Timer size={14} /> */}
          <span >{minutes} min read</span >
        </div>
        <span className="">&bull;</span>

        <p>{currentDate}</p>
      </div>

      <hr className="bg-border " />

      <section className="prose-dark font-merriweather">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
    </article>
  );
}
