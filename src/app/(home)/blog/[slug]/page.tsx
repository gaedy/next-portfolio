import { notFound } from "next/navigation";
import blogData from "@/app/data/blog.json";

import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post =
    blogData.blogPosts[params.slug as keyof typeof blogData.blogPosts];

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

  return (
    <article className="py-2 flex flex-col gap-4 font-merriweather">
      <header>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </header>

      <div className="text-sm font-outfit text-muted-foreground sm:flex-row flex-col items-start sm:items-center flex gap-2">
        <p>By {post.author}</p>
        <span className="sm:flex hidden">&bull;</span>
        <p>Published on {currentDate}</p>
      </div>

      <hr className="opacity-60 bg-ring " />

      <section className="prose-dark ">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
    </article>
  );
}
