import Link from 'next/link';
import React from 'react';
import { getMostRead } from '@/lib/api';

const Mostread = async () => {
  const news = await getMostRead();

  if (news.length === 0) return null;

  return (
    <aside className="card border border-slate-200 bg-base-100 shadow-sm">
      <div className="card-body gap-4 p-4 sm:p-5">
        <h2 className="card-title border-b-2 border-red-700 pb-2 text-base font-bold text-red-700 sm:text-lg">
          Most Read
        </h2>

        <ol className="grid gap-1">
          {news.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`/news/${item.id}`}
                className="flex items-start gap-3 rounded px-2 py-2 transition-colors hover:bg-slate-50"
              >
                <span className="text-2xl leading-none font-bold text-red-500 tabular-nums">
                  {index + 1}
                </span>
                <span className="text-sm leading-snug text-slate-700">{item.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
};

export default Mostread;