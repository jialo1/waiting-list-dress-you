import Link from "next/link";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-warm-grey py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <LogoMark className="w-8 h-8 text-stone" />
              <div className="flex items-baseline gap-[2px] tracking-[3px] text-lg">
                <span className="font-light text-stone">dress</span>
                <span className="font-extrabold text-off-white">you</span>
              </div>
            </div>
            <p className="text-sm text-medium-grey max-w-xs text-center md:text-left">
              Ton avatar IA pour essayer tes vêtements avant de les acheter.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-[11px] uppercase tracking-[4px] text-medium-grey">
              Suivez-nous
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/dressyouapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone hover:text-off-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-stone hover:text-off-white transition-colors duration-300"
              >
                TikTok
              </a>
              <a
                href="#"
                className="text-sm text-stone hover:text-off-white transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-medium-grey/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-medium-grey">
            &copy; {new Date().getFullYear()} Dress You. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politique-de-confidentialite"
              className="text-xs text-medium-grey hover:text-stone transition-colors duration-300"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cgu"
              className="text-xs text-medium-grey hover:text-stone transition-colors duration-300"
            >
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
