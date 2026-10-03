import Image from "next/image";
import React from "react";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-t-2 border-slate-800 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        
        {/* Logo + Brand */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Bangla News 24 logo"
              width={50}
              height={50}
              priority
              className="h-[50px] w-[50px] rounded-xl object-cover"
            />

            <div className="flex flex-col">
              <h1 className="font-serif text-3xl font-bold leading-none text-red-700">
                Bangla News 24
              </h1>

              <span className="mt-1 text-sm text-slate-500">
                {date}
              </span>
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-slate-700 transition-colors hover:text-red-700"
          >
            সাইন ইন
          </button>

          <button
            type="button"
            className="rounded-md bg-red-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-800"
          >
            সাইন আপ
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;