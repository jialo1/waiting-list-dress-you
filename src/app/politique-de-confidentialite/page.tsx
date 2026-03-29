import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Dress You",
  description: "Politique de confidentialité de l'application Dress You.",
};

export default function PolitiqueDeConfidentialite() {
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
          Politique de confidentialité
        </h1>
        <p className="text-sm text-medium-grey mb-12">
          Dernière mise à jour : 29 mars 2026
        </p>

        <div className="space-y-10 text-[15px] text-charcoal/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              1. Introduction
            </h2>
            <p>
              Dress You (&quot;nous&quot;, &quot;notre&quot;, &quot;nos&quot;)
              s&apos;engage à protéger la vie privée de ses utilisateurs. La
              présente politique de confidentialité décrit les informations que
              nous collectons, comment nous les utilisons et les mesures que nous
              prenons pour les protéger.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              2. Données collectées
            </h2>
            <p className="mb-3">
              Dans le cadre de notre liste d&apos;attente et de nos services,
              nous pouvons collecter les données suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Adresse e-mail</strong> - fournie lors de
                l&apos;inscription à la liste d&apos;attente.
              </li>
              <li>
                <strong>Photos et images</strong> - utilisées pour générer votre
                avatar IA et permettre l&apos;essayage virtuel de vêtements.
              </li>
              <li>
                <strong>Données d&apos;utilisation</strong> - informations sur
                la façon dont vous interagissez avec notre application
                (fonctionnalités utilisées, préférences de tenues).
              </li>
              <li>
                <strong>Données techniques</strong> - type d&apos;appareil,
                système d&apos;exploitation, adresse IP, cookies de session.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              3. Utilisation des données
            </h2>
            <p className="mb-3">Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Gérer votre inscription à la liste d&apos;attente et vous
                informer du lancement.
              </li>
              <li>
                Créer et maintenir votre avatar IA personnalisé.
              </li>
              <li>
                Fournir le service d&apos;essayage virtuel de vêtements.
              </li>
              <li>
                Améliorer nos services et l&apos;expérience utilisateur.
              </li>
              <li>
                Vous envoyer des communications relatives à Dress You (avec
                votre consentement).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              4. Protection des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et
              organisationnelles pour protéger vos données personnelles contre
              tout accès non autorisé, modification, divulgation ou destruction.
              Vos photos et données d&apos;avatar sont chiffrées et stockées de
              manière sécurisée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              5. Partage des données
            </h2>
            <p>
              Nous ne vendons jamais vos données personnelles. Nous pouvons
              partager certaines données avec des prestataires de services
              tiers (hébergement, traitement IA) uniquement dans la mesure
              nécessaire au fonctionnement de notre service. Ces prestataires
              sont tenus de respecter la confidentialité de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              6. Conservation des données
            </h2>
            <p>
              Vos données sont conservées aussi longtemps que votre compte est
              actif ou que nécessaire pour fournir nos services. Les données de
              la liste d&apos;attente sont conservées jusqu&apos;au lancement de
              l&apos;application ou jusqu&apos;à votre demande de suppression.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              7. Vos droits
            </h2>
            <p className="mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Droit d&apos;accès</strong> - obtenir une copie de vos
                données personnelles.
              </li>
              <li>
                <strong>Droit de rectification</strong> - corriger des données
                inexactes.
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> - demander la
                suppression de vos données.
              </li>
              <li>
                <strong>Droit à la portabilité</strong> - recevoir vos données
                dans un format structuré.
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> - vous opposer au
                traitement de vos données.
              </li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à l&apos;adresse :
              <a
                href="mailto:info@dygroup.co"
                className="text-charcoal font-semibold hover:underline ml-1"
              >
                info@dygroup.co
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              8. Cookies
            </h2>
            <p>
              Nous utilisons des cookies essentiels au fonctionnement du site.
              Aucun cookie publicitaire ou de suivi tiers n&apos;est utilisé
              sans votre consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              9. Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée sur
              cette page avec une date de mise à jour révisée. Nous vous
              encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">
              10. Contact
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité,
              vous pouvez nous contacter à :
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
