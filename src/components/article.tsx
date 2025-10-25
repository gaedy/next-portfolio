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
  const currentDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/writing/${post.slug}`}>
      <article className="flex flex-col gap-2 rounded-md group">
        <header>
          <h1 className="group-hover:underline text-lg font-medium ">
            {post.title}
          </h1>
        </header>

        <div className="text-xs text-muted-foreground flex-wrap items-center flex gap-2">
          {/* <p>By {post.author}</p>
          <span className="sm:flex hidden">&bull;</span> */}
          <p>{currentDate}</p>
        </div>
      </article>
    </Link>
  );
}
