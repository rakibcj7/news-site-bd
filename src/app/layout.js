import { Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Marquees from './components/Marquees';
import Navlinks from './components/Navlinks';

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['latin', 'bengali'],
});

export const metadata = {
  title: {
    default: 'Bangla News 24',
    template: '%s | Bangla News 24',
  },
  description: 'সর্বশেষ বাংলা খবর, বিশ্লেষণ ও প্রতিবেদন',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" data-theme="light" className={`${notoSerifBengali.className} antialiased`}>
      <body className="flex min-h-screen flex-col bg-base-200/40">
        <Header />

        <div className="sticky top-0 z-20">
          <Navlinks />
          <Marquees />
        </div>

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}