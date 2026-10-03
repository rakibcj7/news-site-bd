import Image from 'next/image';
import React from 'react';

const Header = () => {
  const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' });

  return (
    <header className="border-b-4 border-red-700 bg-base-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Bangla News 24 logo"
            width={48}
            height={48}
            priority
            className="h-11 w-11 rounded-xl object-cover sm:h-12 sm:w-12"
          />

          <div className="flex flex-col">
            <h1 className="font-serif text-xl font-bold leading-none text-red-700 sm:text-3xl">
              Bangla News 24
            </h1>
            <span className="mt-1 hidden text-xs text-slate-500 sm:block">{date}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="rounded-md px-2.5 py-2 text-sm text-slate-700 transition-colors hover:text-red-700 sm:px-3"
          >
            সাইন ইন
          </button>
          <button
            type="button"
            className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800 sm:px-4"
          >
            সাইন আপ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;