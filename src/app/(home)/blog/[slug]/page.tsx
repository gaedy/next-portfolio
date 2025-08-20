import { notFound } from "next/navigation";
import blogData from "@/app/data/blog.json";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.blogPosts[slug as keyof typeof blogData.blogPosts];

  if (!post) return notFound();

  return (
    <article className="py-2 flex flex-col gap-4">
      <header>
        <h1 className="text-2xl font-bold">{post.title}</h1>
      </header>

      <div className="text-sm text-muted-foreground sm:flex-row flex-col items-start sm:items-center flex gap-2">
        <p>By {post.author}</p>
        <span className="sm:flex hidden">&bull;</span>
        <p>Published on {new Date(post.date).toLocaleDateString()}</p>
      </div>

      <hr className="opacity-45 bg-ring " />

      <section className="text-lg leading-7 whitespace-pre-line">
        {post.content}
      </section>
    </article>
  );
}
