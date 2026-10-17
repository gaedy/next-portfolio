import { LockKeyhole } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ArticleProps = {
  post: {
    slug: string;
    title: string;
    author: string;
    date: string;
    img: string;
    isFeatured: boolean;
    isLocked: boolean;
  };
  isLocked?: boolean;
};

export default function Article({ post, isLocked = false }: ArticleProps) {
  const currentDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="flex flex-col gap-2 rounded-md">
      <header className="flex items-center gap-2">
        {isLocked ? (
          <>
            <h2 className="text-lg text-muted-foreground cursor-not-allowed font-medium">
              {post.title}
            </h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  aria-label="This article is temporarily locked"
                  className="inline-flex text-muted-foreground"
                >
                  <LockKeyhole size={15} aria-hidden="true" />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                This writing is temporarily locked.
              </TooltipContent>
            </Tooltip>
          </>
        ) : (
          <Link
            href={`/writing/${post.slug}`}
            className="text-lg font-medium hover:underline"
          >
            {post.title}
          </Link>
        )}
      </header>

      <div className="text-xs text-muted-foreground flex-wrap items-center flex gap-2">
        {/* <p>By {post.author}</p>
          <span className="sm:flex hidden">&bull;</span> */}
        <p>{currentDate}</p>
      </div>
    </article>
  );
}
