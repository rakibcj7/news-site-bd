import Link from 'next/link';
import React from 'react';

const CONTACT_EMAIL = 'contact@example.com';

const Footer = () => {
  return (
    <footer className="mt-8 border-t-4 border-red-700 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="grid gap-2">
          <p className="font-serif text-lg font-bold text-white">Bangla News 24</p>
          <p className="text-xs leading-relaxed text-slate-400">
            সর্বশেষ বাংলা খবর ও বিশ্লেষণ।
          </p>
        </div>

        <div className="grid content-start gap-2">
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">যোগাযোগ</h2>
          <p className="text-xs text-slate-400">খবর সংশোধন বা অনুরোধ পাঠাতে সরাসরি ইমেইল করুন।</p>
          <a
            href={`mailto:${`rakibhassan2150@gmail.com`}?subject=${encodeURIComponent('Bangla News 24 - যোগাযোগ')}`}
            className="link-hover w-fit break-all text-sm font-medium text-red-400 hover:text-red-300"
          >
            {`rakibhassan215095@gmail.com`}
          </a>
        </div>

        <nav className="grid content-start gap-2">
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">লিংক</h2>
          <ul className="grid gap-1.5 text-sm">
            <li>
              <Link href="/" className="link-hover w-fit text-slate-400 hover:text-white">
                হোম
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${`rakibhassan2150@gmail.com`}`}
                className="link-hover w-fit text-slate-400 hover:text-white"
              >
                ইমেইল করুন
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
            NEWS SOURCE : BBC BANGLA
        </p>
      </div>
    </footer>
  );
};

export default Footer;