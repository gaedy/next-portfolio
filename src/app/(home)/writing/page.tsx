import blogData from "@/app/data/blog.json";
import Article from "@/components/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writings | Ahmed Gaeedy",
  description: "Read my latest articles and thoughts.",
};
export default function BlogPage() {
  const blogPosts = Object.entries(blogData.blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  return (
    <section className="flex flex-col gap-4 justify-between">
      <header>
        <h1 className="font-medium text-xl">Writings</h1>
      </header>

      <hr className="bg-border" />
      {blogPosts.length === 0 ? (
        <p className="text-muted-foreground text-center">
          No blog posts found.
        </p>
      ) : (
        blogPosts.map((post) => (
          <Article key={post.slug} post={post} isPreview={true} />
        ))
      )}
    </section>
  );
}
