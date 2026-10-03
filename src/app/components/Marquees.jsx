import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { getLatestNews } from '@/lib/api';

const Marquees = async () => {
  const headlines = await getLatestNews();

  if (headlines.length === 0) return null;

  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl items-stretch px-4 sm:px-6 lg:px-8">
        <span className="flex shrink-0 items-center bg-red-800 px-3 py-2 text-xs font-bold tracking-wide uppercase sm:px-5 sm:text-sm">
          সর্বশেষ
        </span>

        <Marquee pauseOnHover direction="left" className="py-2 text-sm sm:text-base">
          {headlines.map((headline, index) => (
            <Link
              key={headline.id}
              href={`/news/${headline.id}`}
              className="flex items-center hover:underline"
            >
              <span className="max-w-[80vw] truncate sm:max-w-none">{headline.title}</span>
              {index < headlines.length - 1 && <span className="mx-5 opacity-60">|</span>}
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marquees;