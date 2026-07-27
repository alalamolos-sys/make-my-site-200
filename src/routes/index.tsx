import { createFileRoute } from "@tanstack/react-router";
import {
  ScanLine, Lock, ShieldCheck, Brain, Chrome, PlayCircle, Check,
  Car, UserRoundCog, Shuffle, FileText, Plus, Shield, Globe, EyeOff,
  Zap, CheckCircle2, ArrowRight,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import carteGrise from "@/assets/carte-grise.jpg";
import laptopAnts from "@/assets/laptop-ants.jpg";
import logoIcon from "@/assets/certif-auto-icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certif-Auto — La carte grise remplie en 1 clic" },
      { name: "description", content: "Certif-Auto lit vos cartes grises grâce à l'IA et remplit automatiquement tous vos formulaires sur ANTS, VIS et tous les sites d'immatriculation." },
      { property: "og:title", content: "Certif-Auto — La carte grise remplie en 1 clic" },
      { property: "og:description", content: "L'extension qui lit vos cartes grises et remplit automatiquement les formulaires ANTS, VIS et plus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Logo({
  size = "md",
  tagline = false,
}: {
  size?: "sm" | "md" | "lg";
  tagline?: boolean;
}) {
  const s = {
    sm: { icon: "h-8", text: "text-xl", gap: "gap-2" },
    md: { icon: "h-11", text: "text-3xl", gap: "gap-3" },
    lg: { icon: "h-16 sm:h-20", text: "text-4xl sm:text-5xl", gap: "gap-4" },
  }[size];

  return (
    <div className="inline-flex flex-col">
      <div className={`inline-flex items-center ${s.gap}`}>
        <img
          src={logoIcon}
          alt="Certif-Auto"
          width={992}
          height={672}
          className={`${s.icon} w-auto object-contain`}
        />
        <span className={`${s.text} font-bold leading-none tracking-tight`}>
          Certif<span className="text-gradient-brand">-Auto</span>
        </span>
      </div>
      {tagline && (
        <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
          IA &amp; OCR pour cartes grises • Remplissage automatique sur Chrome
        </span>
      )}
    </div>
  );
}


function Nav() {
  const links = [
    ["Fonctionnalités", "#features"],
    ["Comment ça marche", "#how"],
    ["Démarches", "#demarches"],
    ["Sécurité", "#security"],
    ["Tarifs", "#pricing"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo size="md" />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-2">
          Installer l'extension <Chrome className="h-4 w-4 text-[color:var(--brand)]" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <img
        src={heroCar}
        alt=""
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[color:var(--brand-2)]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-8">
            <Logo size="lg" tagline />
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            La carte grise.
            <br />
            <span className="text-gradient-brand">Remplie en 1 clic.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Certif-Auto lit vos cartes grises grâce à l'IA et remplit automatiquement tous vos formulaires sur ANTS, VIS et tous les autres sites.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cta" className="btn-brand hover:btn-brand-hover">
              <Chrome className="h-5 w-5" /> Ajouter à Chrome
            </a>
            <a href="#how" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 hover:text-foreground">
              <PlayCircle className="h-6 w-6" /> Voir la démo
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: ScanLine, title: "OCR intelligent", sub: "Haute précision" },
              { icon: Lock, title: "100% sécurisé", sub: "Données protégées" },
              { icon: ShieldCheck, title: "Compatible avec", sub: "toutes les démarches" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="rounded-lg border border-border bg-surface p-2">
                  <Icon className="h-5 w-5 text-[color:var(--brand)]" />
                </div>
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative">
            <img
              src={carteGrise}
              alt="Carte grise"
              width={800}
              height={1000}
              className="mx-auto w-64 rotate-[-3deg] rounded-lg shadow-2xl ring-1 ring-white/10"
            />
            {/* Extracted fields card */}
            <div className="absolute -right-2 top-6 w-72 space-y-2 rounded-2xl border border-border bg-surface/90 p-3 backdrop-blur glow-ring md:-right-8">
              {[
                ["Immatriculation", "AB-123-CD"],
                ["Marque", "VOLKSWAGEN"],
                ["Modèle", "308"],
                ["VIN", "WVWZZZ3CZHE123456"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-lg border border-border bg-surface-2 px-3 py-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
                    <div className="text-sm font-semibold">{value}</div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--brand)]" />
                </div>
              ))}
              <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-[color:var(--brand)]/30 bg-[color:var(--brand)]/5 px-3 py-2 text-xs">
                <span>Remplissage automatique sur tous les formulaires</span>
                <Zap className="h-4 w-4 text-[color:var(--brand)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Shuffle, label: "Professionnels de l'automobile" },
    { icon: Car, label: "Concessionnaires" },
    { icon: UserRoundCog, label: "Mandataires" },
    { icon: Shield, label: "Assureurs" },
    { icon: FileText, label: "Administrations" },
  ];
  return (
    <section className="border-y border-border/50 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6">
        <span className="text-sm text-muted-foreground">Ils nous font confiance</span>
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon className="h-4 w-4" /> {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: ScanLine, title: "1. Scannez", text: "Importez simplement une photo ou un scan de votre carte grise." },
    { icon: Brain, title: "2. Extraction IA", text: "Notre IA OCR lit et extrait toutes les informations en quelques secondes." },
    { icon: Chrome, title: "3. Remplissage auto", text: "L'extension remplit automatiquement tous les champs sur ANTS, VIS et n'importe quel formulaire." },
  ];
  return (
    <section id="how" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Comment ça marche ?</h2>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface">
                <s.icon className="h-7 w-7 text-[color:var(--brand)]" />
              </div>
              <h3 className="mt-6 font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] border-t border-dashed border-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demarches() {
  const items = [
    { icon: Car, title: "Nouveau véhicule (Carte grise)", text: "Immatriculez un véhicule neuf ou d'occasion en quelques clics." },
    { icon: UserRoundCog, title: "Changement de titulaire", text: "Gagnez du temps lors d'une cession ou d'un changement de propriétaire." },
    { icon: Shuffle, title: "Changement de nature", text: "Passer de VP à VU, service à caravane, collection, taxi, etc." },
    { icon: FileText, title: "Duplicata", text: "Perte, vol ou détérioration : obtenez un duplicata sans ressaisir les données." },
    { icon: Plus, title: "Et plus encore…", text: "Toutes les démarches ANTS et tous les formulaires en ligne." },
  ];
  return (
    <section id="demarches" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Compatible avec toutes vos démarches</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Certif-Auto fonctionne partout où vous devez renseigner les informations d'un véhicule.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div key={it.title} className="card-dark p-6 text-center transition hover:-translate-y-1 hover:border-[color:var(--brand)]/40">
              <it.icon className="mx-auto h-9 w-9 text-[color:var(--brand)]" />
              <h3 className="mt-4 text-sm font-semibold">{it.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const list = [
    ["OCR ultra-précis", "Lecture fiable même sur les documents complexes."],
    ["Remplissage intelligent", "Détection automatique des champs à compléter."],
    ["Compatible tous sites", "ANTS, VIS, professionnels, assureurs, loueurs, etc."],
    ["Zéro saisie manuelle", "Fini les erreurs et les pertes de temps."],
    ["Mises à jour régulières", "Toujours compatible avec les dernières interfaces."],
  ];
  return (
    <section id="features" className="bg-surface/40 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">L'IA au service de votre efficacité</h2>
          <ul className="mt-8 space-y-5">
            {list.map(([t, s]) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[color:var(--brand)]/20">
                  <Check className="h-3.5 w-3.5 text-[color:var(--brand)]" />
                </span>
                <div>
                  <div className="font-medium">{t}</div>
                  <div className="text-sm text-muted-foreground">{s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={laptopAnts}
            alt="ANTS remplissage automatique"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-2xl border border-border shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-4 w-56 rounded-2xl border border-border bg-surface p-4 shadow-xl glow-ring">
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-[color:var(--brand)]" />
              <span className="text-sm font-semibold">Certif-Auto</span>
            </div>
            <div className="mx-auto mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--success)]/20">
              <Check className="h-6 w-6 text-[color:var(--success)]" />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Remplissage automatique terminé avec succès !
            </p>
            <button className="mt-3 w-full rounded-md bg-[color:var(--brand-2)] px-3 py-1.5 text-xs font-medium text-white">
              Voir les données extraites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: Shield, title: "Aucune donnée stockée", text: "Vos données ne sont ni stockées ni conservées." },
    { icon: Lock, title: "Chiffrement de bout en bout", text: "Toutes les données sont traitées en toute sécurité." },
    { icon: Globe, title: "Hébergé en Europe", text: "Conforme RGPD, serveurs sécurisés en Europe." },
    { icon: EyeOff, title: "Confidentialité garantie", text: "Aucune revente, aucun partage, jamais." },
  ];
  return (
    <section id="security" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Sécurité & confidentialité</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Vos données sont précieuses. Nous les protégeons comme il se doit.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <it.icon className="mx-auto h-10 w-10 text-[color:var(--brand)]" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-semibold">{it.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[color:var(--brand-2)]/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.2_240_/_0.25),transparent_70%)]" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1200 400" fill="none">
        <path d="M0 200 Q 300 100 600 200 T 1200 200" stroke="oklch(0.72 0.19 220)" strokeWidth="1" />
        <path d="M0 250 Q 300 150 600 250 T 1200 250" stroke="oklch(0.72 0.19 245)" strokeWidth="1" opacity=".6" />
      </svg>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Gagnez un temps précieux.
          <br />À chaque démarche.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Rejoignez des milliers de professionnels qui utilisent déjà Certif-Auto au quotidien.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="#" className="btn-brand hover:btn-brand-hover">
            <Chrome className="h-5 w-5" /> Ajouter à Chrome — C'est gratuit
          </a>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)]" />
            Installation en 10 secondes — Aucun abonnement requis
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Logo size="sm" />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Certif-Auto. Tous droits réservés.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Mentions légales</a>
          <a href="#" className="hover:text-foreground">Confidentialité</a>
          <a href="#" className="hover:text-foreground inline-flex items-center gap-1">Contact <ArrowRight className="h-3 w-3" /></a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Demarches />
      <Features />
      <Security />
      <CTA />
      <Footer />
    </main>
  );
}
