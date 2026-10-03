import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { formatBengaliDate, getArticle } from '@/lib/api';

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const news = await getArticle(id);
    return { title: news?.title ?? 'খবর' };
  } catch {
    return { title: 'খবর' };
  }
}

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  let news;

  try {
    news = await getArticle(id);
  } catch {
    notFound();
  }

  if (!news) notFound();

  const blocks = news.body ?? [];
  const bylines = Array.isArray(news.byline)
    ? news.byline
    : news.byline
      ? [news.byline]
      : [];
  const tags = news.tags ?? [];

  return (
    <article className="mx-auto grid max-w-3xl gap-5 py-2">
      <Link href="/" className="link-hover w-fit text-sm text-red-600">
        ← সব খবর
      </Link>

      <header className="grid gap-3 border-b border-slate-200 pb-5">
        <p className="text-sm font-semibold tracking-wide text-red-600 uppercase">
          {tags[0] ?? 'খবর'}
        </p>

        <h1 className="text-2xl leading-snug font-bold sm:text-3xl lg:text-4xl">{news.title}</h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 sm:text-sm">
          {bylines.map((byline, index) => (
            <span key={index} className="font-medium text-slate-700">
              {byline.name}
            </span>
          ))}
          {news.source && <span>{news.source}</span>}
          <span>{formatBengaliDate(news.lastPublished ?? news.firstPublished)}</span>
          {news.wordCount ? <span>{news.wordCount} শব্দ</span> : null}
        </div>
      </header>

      {news.imageUrl && (
        <figure className="grid gap-2">
          <Image
            width={1200}
            height={675}
            src={news.imageUrl}
            alt={news.imageAlt ?? news.title}
            className="h-auto w-full rounded-lg"
            priority
          />
        </figure>
      )}

      <div className="grid gap-4 text-base leading-loose text-slate-800 sm:text-lg">
        {blocks.map((block, index) => {
          if (block.type === 'text') {
            return (
              <p key={index}>
                {block.text.split('\n').map((line, lineIndex, lines) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            );
          }

          if (block.type === 'subheading') {
            return (
              <h2 key={index} className="mt-2 text-xl font-bold sm:text-2xl">
                {block.text}
              </h2>
            );
          }

          if (block.type === 'image') {
            return (
              <figure key={index} className="grid gap-2 py-2">
                <Image
                  width={block.width ?? 1200}
                  height={block.height ?? 675}
                  src={block.url}
                  alt={block.altText ?? ''}
                  className="h-auto w-full rounded-lg"
                />
                {block.caption && (
                  <figcaption className="text-sm text-slate-500">{block.caption}</figcaption>
                )}
              </figure>
            );
          }

          return null;
        })}
      </div>

      <footer className="grid gap-5 border-t border-slate-200 pt-5">
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="badge badge-outline badge-sm">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm w-fit"
        >
          মূল খবর দেখুন
        </a>
      </footer>
    </article>
  );
};

export default NewsDetailsPage;