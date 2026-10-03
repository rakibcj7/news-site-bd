import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <Link
      href={`/news/${news.id}`}
      className="card group border border-slate-200 bg-base-100 shadow-sm transition-shadow hover:shadow-xl"
    >
      <figure className="aspect-video overflow-hidden">
        {news.imageUrl ? (
          <Image
            width={640}
            height={360}
            src={news.imageUrl}
            alt={news.imageAlt ?? news.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
            ছবি নেই
          </div>
        )}
      </figure>

      <div className="card-body gap-2 p-4 sm:p-5">
        <p className="text-xs font-semibold tracking-wide text-red-600 uppercase">
          {news.category}
        </p>

        <h2 className="card-title text-base leading-snug sm:text-lg">{news.title}</h2>

        <p className="text-sm leading-relaxed text-slate-600">{news.description}</p>
      </div>
    </Link>
  );
};

export default NewsCard;