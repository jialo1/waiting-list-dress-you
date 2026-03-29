"use client";

import { LogoMark } from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-medium-grey/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="w-9 h-9 text-stone" />
          <div className="flex items-baseline gap-[2px] tracking-[3px] text-lg">
            <span className="font-light text-stone">dress</span>
            <span className="font-extrabold text-off-white">you</span>
          </div>
        </div>
        <a
          href="#features"
          className="text-sm text-stone hover:text-off-white transition-colors duration-300"
        >
          Découvrir
        </a>
      </div>
    </nav>
  );
}
