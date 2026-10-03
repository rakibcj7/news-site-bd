import Link from 'next/link';
import React from 'react';
import { getCategories } from '@/lib/api';

const Navlinks = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-b border-slate-200 bg-base-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm whitespace-nowrap [scrollbar-width:none] sm:gap-4 sm:text-base [&::-webkit-scrollbar]:hidden">
          <li className="shrink-0">
            <Link href="/" className="block rounded px-2 py-1 font-semibold text-red-700 transition-colors hover:bg-red-50 sm:px-3">
              হোম
            </Link>
          </li>

          {categories.map((category) => (
            <li key={category.slug} className="shrink-0">
              <Link
                href={`/category/${category.slug}`}
                className="block rounded px-2 py-1 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-700 sm:px-3"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navlinks;