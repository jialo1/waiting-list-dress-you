"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LogoMark } from "./Logo";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#E2E4DE] backdrop-blur-md border-b border-medium-grey/25"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/" className="block">
            <LogoMark className="h-10 w-auto max-h-10 max-w-[min(240px,58vw)]" />
          </Link>
        </motion.div>
        <motion.a
          href="#features"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-charcoal/80 hover:text-charcoal transition-colors duration-300 font-medium"
        >
          Découvrir
        </motion.a>
      </div>
    </motion.nav>
  );
}
