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
            <div className=" group transition rounded-xl">


                <div className="flex flex-col gap-2 justify-between  ">
                    <h2 className="text-lg group-hover:underline ">{post.title}</h2>
                    <p className="text-xs text-neutral-400 flex-wrap items-center flex gap-2">
                        <span >
                          By {post.author}
                        </span>
                        <span className="sm:flex hidden">
                          &bull;
                        </span>
                        <span>
                          {new Date(post.date).toLocaleDateString()}
                        </span>

                    </p>
                </div>

            </div>
        </Link>
    );
}
