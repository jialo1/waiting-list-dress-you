"use client";

import { motion } from "framer-motion";
import { LogoMark } from "./Logo";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-medium-grey/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <LogoMark className="w-9 h-9 text-stone" />
          <div className="flex items-baseline gap-[2px] tracking-[3px] text-lg">
            <span className="font-light text-stone">dress</span>
            <span className="font-extrabold text-off-white">you</span>
          </div>
        </motion.div>
        <motion.a
          href="#features"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-stone hover:text-off-white transition-colors duration-300"
        >
          Découvrir
        </motion.a>
      </div>
    </motion.nav>
  );
}
