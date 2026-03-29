import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - Dress You",
  description: "Conditions générales d'utilisation de l'application Dress You.",
};

export default function CGU() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <nav className="bg-dark/95 backdrop-blur-md border-b border-medium-grey/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="w-9 h-9 text-stone" />
            <div className="flex items-baseline gap-[2px] tracking-[3px] text-lg">
              <span className="font-light text-stone">dress</span>
              <span className="font-extrabold text-off-white">you</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-stone hover:text-off-white transition-colors duration-300"
          >
            Retour
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-sm text-medium-grey mb-12">
          Dernière mise à jour : 29 mars 2026
        </p>

        <div className="space-y-10 text-[15px] text-charcoal/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (ci-après
              &quot;CGU&quot;) ont pour objet de définir les modalités et
              conditions d&apos;utilisation de l&apos;application Dress You
              (ci-après &quot;le Service&quot;), éditée par DY Group (ci-après
              &quot;l&apos;Éditeur&quot;). En accédant au Service, vous acceptez
              sans réserve les présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              2. Description du Service
            </h2>
            <p>
              Dress You est une application permettant aux utilisateurs de créer
              un avatar IA basé sur leur apparence physique et d&apos;essayer
              virtuellement des vêtements. Le Service comprend notamment la
              création d&apos;avatars, l&apos;essayage virtuel, la composition
              de tenues et le partage de looks au sein de la communauté.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              3. Accès au Service
            </h2>
            <p className="mb-3">
              L&apos;accès au Service est réservé aux personnes physiques âgées
              d&apos;au moins 16 ans. L&apos;inscription nécessite la
              fourniture d&apos;informations exactes et à jour. L&apos;utilisateur
              est responsable de la confidentialité de ses identifiants de
              connexion.
            </p>
            <p>
              L&apos;Éditeur se réserve le droit de suspendre ou de résilier
              l&apos;accès au Service en cas de non-respect des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              4. Inscription à la liste d&apos;attente
            </h2>
            <p>
              En vous inscrivant à la liste d&apos;attente, vous fournissez votre
              adresse e-mail afin d&apos;être informé(e) du lancement de
              l&apos;application. Cette inscription ne constitue pas un
              engagement d&apos;achat ni une garantie d&apos;accès prioritaire
              au Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              5. Obligations de l&apos;utilisateur
            </h2>
            <p className="mb-3">L&apos;utilisateur s&apos;engage à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Utiliser le Service de manière conforme aux lois et règlements
                en vigueur.
              </li>
              <li>
                Ne pas usurper l&apos;identité d&apos;un tiers ni utiliser des
                photos de personnes sans leur consentement.
              </li>
              <li>
                Ne pas tenter de contourner les mesures de sécurité du Service.
              </li>
              <li>
                Ne pas publier de contenu illicite, offensant, discriminatoire
                ou portant atteinte aux droits de tiers.
              </li>
              <li>
                Ne pas utiliser le Service à des fins commerciales sans
                autorisation préalable de l&apos;Éditeur.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              6. Propriété intellectuelle
            </h2>
            <p className="mb-3">
              L&apos;ensemble des éléments du Service (design, textes, logos,
              algorithmes, code source) sont la propriété exclusive de
              l&apos;Éditeur et sont protégés par le droit de la propriété
              intellectuelle.
            </p>
            <p>
              Les contenus générés par l&apos;utilisateur (avatars, compositions
              de tenues) restent la propriété de l&apos;utilisateur.
              L&apos;utilisateur accorde toutefois à l&apos;Éditeur une licence
              non exclusive pour afficher et traiter ces contenus dans le cadre
              du fonctionnement du Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              7. Données personnelles
            </h2>
            <p>
              Le traitement des données personnelles est régi par notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-charcoal font-semibold hover:underline"
              >
                Politique de confidentialité
              </Link>
              . En utilisant le Service, vous reconnaissez avoir pris
              connaissance de cette politique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              8. Limitation de responsabilité
            </h2>
            <p className="mb-3">
              L&apos;Éditeur met tout en œuvre pour assurer la disponibilité et
              le bon fonctionnement du Service. Toutefois, l&apos;Éditeur ne
              saurait être tenu responsable :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Des interruptions temporaires du Service pour maintenance ou
                mise à jour.
              </li>
              <li>
                De l&apos;inexactitude des résultats de l&apos;essayage virtuel,
                qui constituent une simulation et non une représentation exacte.
              </li>
              <li>
                Des dommages résultant d&apos;une utilisation non conforme du
                Service.
              </li>
              <li>
                Des contenus publiés par les utilisateurs au sein de la
                communauté.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              9. Résiliation
            </h2>
            <p>
              L&apos;utilisateur peut à tout moment supprimer son compte et ses
              données en nous contactant à{" "}
              <a
                href="mailto:info@dygroup.co"
                className="text-charcoal font-semibold hover:underline"
              >
                info@dygroup.co
              </a>
              . L&apos;Éditeur peut résilier l&apos;accès d&apos;un utilisateur
              en cas de violation des présentes CGU, sans préavis ni
              indemnisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              10. Modifications des CGU
            </h2>
            <p>
              L&apos;Éditeur se réserve le droit de modifier les présentes CGU à
              tout moment. Les modifications prennent effet dès leur publication
              sur cette page. L&apos;utilisation continue du Service après
              modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              11. Droit applicable
            </h2>
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige
              relatif à l&apos;interprétation ou à l&apos;exécution des
              présentes sera soumis aux tribunaux compétents de Paris, sauf
              disposition légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              12. Contact
            </h2>
            <p>
              Pour toute question relative aux présentes CGU, vous pouvez nous
              contacter à :
              <a
                href="mailto:info@dygroup.co"
                className="text-charcoal font-semibold hover:underline ml-1"
              >
                info@dygroup.co
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-medium-grey/20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-medium-grey hover:text-charcoal transition-colors duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
