import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainNews = ({ news }) => {
  const [leadNews, ...secondaryNews] = news ?? [];

  if (!leadNews) return null;

  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <Link
        href={`/news/${leadNews.id}`}
        className="card group shrink-0 border border-slate-200 bg-base-100 shadow-sm transition-shadow hover:shadow-xl lg:w-96"
      >
        <figure className="aspect-video overflow-hidden">
          {leadNews.imageUrl ? (
            <Image
              width={640}
              height={360}
              src={leadNews.imageUrl}
              alt={leadNews.imageAlt ?? leadNews.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
              ছবি নেই
            </div>
          )}
        </figure>

        <div className="card-body gap-2 p-4 sm:p-5">
          <p className="text-xs font-semibold tracking-wide text-red-600 uppercase">
            {leadNews.category}
          </p>
          <h2 className="text-xl leading-snug font-bold sm:text-2xl">{leadNews.title}</h2>
          <p className="text-sm leading-relaxed text-slate-600">{leadNews.description}</p>
        </div>
      </Link>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
        {secondaryNews.slice(0, 4).map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="card border border-slate-200 bg-base-100 p-4 transition-colors hover:border-red-600"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-xs font-semibold tracking-wide text-red-600 uppercase">
                {item.category}
              </span>
            </div>
            <p className="mt-1 text-sm leading-snug font-semibold text-slate-800 sm:text-base">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;