import Link from "next/link";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#E2E4DE] text-charcoal py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center">
              <LogoMark className="h-10 w-auto max-h-10 max-w-[240px]" />
            </div>
            <p className="text-sm text-charcoal/70 max-w-xs text-center md:text-left">
              Ton avatar IA pour essayer tes vêtements avant de les acheter.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-[11px] uppercase tracking-[4px] text-charcoal/50">
              Suivez-nous
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/dressyouapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/80 hover:text-charcoal transition-colors duration-300 font-medium"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/dressyou/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/80 hover:text-charcoal transition-colors duration-300 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-medium-grey/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal/55">
            &copy; {new Date().getFullYear()} Dress You. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politique-de-confidentialite"
              className="text-xs text-charcoal/80 hover:text-charcoal transition-colors duration-300"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cgu"
              className="text-xs text-charcoal/80 hover:text-charcoal transition-colors duration-300"
            >
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
