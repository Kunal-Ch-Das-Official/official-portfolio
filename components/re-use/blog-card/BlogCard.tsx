import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardDataProps {
  uniqeId: string;
  title: string;
  writer: string;
  contentOverView: string;
  corespondingImage: string;
  createdAT: string;
}

const BlogCard: React.FC<BlogCardDataProps> = ({
  uniqeId,
  title,
  writer,
  corespondingImage,
  contentOverView,
  createdAT,
}) => {
  const getProperDate = createdAT.split("T")[0];

  return (
    <section className="mx-auto md:mx-12 lg:mx-12 hover:border my-12 border-white">
      <article className="flex transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime={getProperDate}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase"
          >
            <span>{getProperDate}</span>
            <span className="w-px flex-1"></span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <Image
            alt={title}
            src={corespondingImage}
            width={500}
            height={500}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase">{title}</h3>
            <p className="text-orange-600">
              <span className="font-bold mr-2">By:</span>
              {writer}
            </p>

            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              {contentOverView}
            </p>
          </div>

          <div className="sm:flex w-40 sm:w-auto sm:items-end sm:justify-end">
            <Link
              href={`/blogs/${uniqeId}`}
              className="block bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-orange-700 text-black"
            >
              Read Article
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BlogCard;
