"use client";

import blogData from "@/app/data/blog.json";
import Article from "@/components/article";

export default function BlogPage() {
  const blogPosts = Object.entries(blogData.blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  return (
    <section className="flex flex-col gap-4 justify-between">
      <header>
        <h1 className="font-medium text-lg">Blogs</h1>
      </header>

      <hr className="opacity-45 bg-ring" />
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
