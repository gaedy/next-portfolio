import Link from "next/link";

type ArticleProps = {
  post: {
    slug: string;
    title: string;
    author: string;
    date: string;
    img: string;
    isFeatured: boolean;
  };
  isPreview?: boolean;
};

export default function Article({ post, isPreview = false }: ArticleProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="flex flex-col gap-2 group">
        <header>
          <h1 className="group-hover:underline font-medium ">{post.title}</h1>
        </header>

        <div className="text-xs text-muted-foreground flex-wrap items-center flex gap-2">
          <p>By {post.author}</p>
          <span className="sm:flex hidden">&bull;</span>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>
      </article>
    </Link>
  );
}
