import { createFileRoute } from "@tanstack/react-router";
import type * as React from "react";
import { useEffect, useState } from "react";
import {
  ArrowRight, BadgeCheck, BrainCircuit, Car, Check, CheckCircle2, Chrome,
  Clock3, FileCheck2, FileText, Gauge, LockKeyhole, Menu, Play, ScanLine,
  ShieldCheck, Sparkles, Upload, Workflow, Zap,
} from "lucide-react";
import carteGrise from "@/assets/carte-grise.jpg";
import logoIcon from "@/assets/certif-auto-icon.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certif-Auto — La carte grise remplie en 1 clic" },
      { name: "description", content: "L'IA qui lit vos cartes grises et complète automatiquement vos formulaires ANTS, VIS et logiciels métiers." },
    ],
  }),
  component: Landing,
});

const nav = [
  ["Produit", "#produit"], ["Fonctionnement", "#fonctionnement"], ["Démarches", "#demarches"],
  ["Sécurité", "#securite"], ["Tarifs", "#tarifs"],
];

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#" className="brand" aria-label="Certif-Auto — accueil">
      <span className="brand-mark"><img src={logoIcon} alt="" /></span>
      <span className={compact ? "brand-name brand-name-sm" : "brand-name"}>Certif<span>-Auto</span></span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={scrolled || open ? "site-header is-scrolled" : "site-header"}>
      <div className="shell header-inner">
        <Brand compact />
        <nav className="desktop-nav">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#demo"><Chrome size={17} /> Installer l'extension</a>
        <button
          className="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={open ? "mobile-panel is-open" : "mobile-panel"}>
        <div className="shell">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label} <ArrowRight size={16} /></a>
          ))}
          <a className="header-cta" href="#demo" onClick={() => setOpen(false)}><Chrome size={17} /> Installer l'extension</a>
        </div>
      </div>
    </header>
  );
}



function ScannerDemo() {
  const fields = [
    ["Immatriculation", "AB-123-CD"], ["Marque", "VOLKSWAGEN"],
    ["Modèle", "GOLF VIII"], ["VIN", "WVWZZZCDZPW123456"],
  ];
  return (
    <div className="scanner-wrap" id="demo" data-reveal="zoom" style={{ "--d": "260ms" } as React.CSSProperties}>
      <div className="scanner-glow" />
      <div className="app-window">
        <div className="window-bar">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="window-url"><LockKeyhole size={12} /> ants.gouv.fr</div>
          <div className="window-status"><span /> Extension active</div>
        </div>
        <div className="app-content">
          <div className="document-side">
            <div className="eyebrow"><Upload size={13} /> DOCUMENT IMPORTÉ</div>
            <div className="document-card">
              <img src={carteGrise} alt="Aperçu d'une carte grise" />
              <div className="scan-line" />
              <div className="scan-corner tl" /><div className="scan-corner tr" />
              <div className="scan-corner bl" /><div className="scan-corner br" />
            </div>
            <div className="analysis-pill"><Sparkles size={15} /> Analyse terminée en 1,8 s</div>
          </div>
          <div className="fields-side">
            <div className="fields-heading">
              <div><span>Certif-Auto</span><strong>18 champs détectés</strong></div>
              <BadgeCheck size={24} />
            </div>
            <div className="field-list">
              {fields.map(([label, value], index) => (
                <div className="field" key={label} style={{ animationDelay: `${index * 120}ms` }}>
                  <div><span>{label}</span><strong>{value}</strong></div><CheckCircle2 size={18} />
                </div>
              ))}
            </div>
            <button className="fill-button"><Zap size={17} /> Remplir le formulaire ANTS</button>
            <p className="privacy-note"><ShieldCheck size={14} /> Données chiffrées et supprimées après traitement</p>
          </div>
        </div>
      </div>
      <div className="floating-card fc-one"><Gauge size={17} /><span><strong>99,2 %</strong> de précision</span></div>
      <div className="floating-card fc-two"><Clock3 size={17} /><span><strong>4 min</strong> gagnées / dossier</span></div>
    </div>
  );
}

function Hero() {
  return (
    <main className="hero">
      <div className="hero-grid" />
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="announcement" data-reveal style={{ "--d": "60ms" } as React.CSSProperties}><span>Nouveau</span> L'IA pensée pour l'immatriculation <ArrowRight size={14} /></div>
          <h1 data-reveal style={{ "--d": "160ms" } as React.CSSProperties}>La carte grise.<br /><em>Remplie en 1 clic.</em></h1>
          <p className="hero-text" data-reveal style={{ "--d": "260ms" } as React.CSSProperties}>Certif-Auto lit automatiquement une carte grise, extrait les informations utiles et complète vos démarches ANTS, VIS ou tout autre formulaire métier.</p>
          <div className="hero-actions" data-reveal style={{ "--d": "360ms" } as React.CSSProperties}>
            <a className="primary-button" href="#contact"><Chrome size={20} /> Ajouter à Chrome <ArrowRight size={17} /></a>
            <a className="secondary-button" href="#fonctionnement"><span className="play-icon"><Play size={14} fill="currentColor" /></span> Voir la démo</a>
          </div>
          <div className="proof-row" data-reveal style={{ "--d": "440ms" } as React.CSSProperties}>
            <span><Check size={15} /> Installation en 2 minutes</span>
            <span><Check size={15} /> Sans engagement</span>
            <span><Check size={15} /> Conforme RGPD</span>
          </div>
        </div>
        <ScannerDemo />
      </div>
      <div className="shell logo-strip" data-reveal="fade">
        <p>Compatible avec vos outils du quotidien</p>
        <div><span>ANTS</span><span>VIS</span><span>CRM</span><span>ERP</span><span>API</span></div>
      </div>
    </main>
  );
}

const benefits = [
  { icon: ScanLine, title: "OCR automobile", text: "Une lecture précise des cartes grises françaises, même photographiées depuis un smartphone." },
  { icon: BrainCircuit, title: "Extraction intelligente", text: "L'IA comprend la structure du document, vérifie les champs et détecte les incohérences." },
  { icon: Chrome, title: "Autofill universel", text: "Remplissez ANTS, VIS, votre CRM, votre ERP ou vos formulaires internes sans ressaisie." },
];

function Product() {
  return (
    <section className="section" id="produit">
      <div className="shell">
        <div className="section-heading centered" data-reveal><span className="kicker">UNE SEULE EXTENSION</span><h2>De la carte grise au formulaire,<br />sans copier-coller.</h2><p>Certif-Auto transforme une tâche répétitive en un workflow instantané, fiable et traçable.</p></div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <article className="benefit-card" key={title} data-reveal style={{ "--d": `${index * 110}ms` } as React.CSSProperties}>
              <div className="benefit-number">0{index + 1}</div><div className="icon-box"><Icon /></div>
              <h3>{title}</h3><p>{text}</p><a href="#contact">Découvrir <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    [Upload, "Importez", "Ajoutez une photo, un scan ou déposez directement le document dans l'extension."],
    [ScanLine, "Certif-Auto lit", "L'OCR et l'IA extraient puis structurent chaque donnée utile du véhicule."],
    [Workflow, "Choisissez la démarche", "ANTS, VIS, CRM ou formulaire métier : la page cible est automatiquement reconnue."],
    [Zap, "Tout est rempli", "Les champs sont complétés en quelques secondes, prêts à être vérifiés et validés."],
  ];
  return (
    <section className="section workflow-section" id="fonctionnement">
      <div className="shell workflow-layout">
        <div className="workflow-copy" data-reveal="left"><span className="kicker">COMMENT ÇA MARCHE</span><h2>Un geste simple.<br />Des heures économisées.</h2><p>Conçu pour les équipes qui traitent des dossiers toute la journée. Aucun changement d'outil, aucune formation lourde.</p><div className="metric-row"><div><strong>4 min</strong><span>gagnées par dossier</span></div><div><strong>18+</strong><span>champs détectés</span></div><div><strong>99,2%</strong><span>de précision</span></div></div></div>
        <div className="steps-panel" data-reveal="right" style={{ "--d": "120ms" } as React.CSSProperties}>
          {steps.map(([Icon, title, text], index) => {
            const StepIcon = Icon as typeof Upload;
            return <div className="step-row" key={String(title)}><div className="step-index">{index + 1}</div><div className="step-icon"><StepIcon /></div><div><h3>{String(title)}</h3><p>{String(text)}</p></div></div>;
          })}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = ["Nouveau véhicule", "Changement de titulaire", "Duplicata", "Import de véhicule", "Changement de caractéristiques", "Dossier professionnel"];
  return (
    <section className="section" id="demarches"><div className="shell"><div className="section-heading split" data-reveal><div><span className="kicker">TOUTES VOS DÉMARCHES</span><h2>Une seule technologie,<br />des dizaines de cas d'usage.</h2></div><p>Certif-Auto s'adapte à votre façon de travailler et peut être déployé sur les formulaires que vos équipes utilisent déjà.</p></div><div className="cases-grid">{cases.map((name, index) => <article className="case-card" key={name} data-reveal style={{ "--d": `${(index % 3) * 110}ms` } as React.CSSProperties}><div className="case-top"><span>0{index + 1}</span><Car /></div><h3>{name}</h3><p>Lecture, contrôle et remplissage automatique des informations du véhicule et du titulaire.</p><div className="case-link">Automatiser cette démarche <ArrowRight size={15} /></div></article>)}</div></div></section>
  );
}

function Security() {
  return (
    <section className="section security-section" id="securite"><div className="shell security-card" data-reveal="zoom"><div className="security-copy"><span className="kicker">SÉCURITÉ PAR CONCEPTION</span><h2>Vos documents restent vos documents.</h2><p>Certif-Auto applique les standards attendus par les professionnels de l'automobile : chiffrement, contrôle d'accès et suppression des données après traitement.</p><ul><li><ShieldCheck /> Hébergement européen</li><li><LockKeyhole /> Chiffrement en transit et au repos</li><li><FileCheck2 /> Conformité RGPD</li></ul></div><div className="security-visual"><div className="shield-orbit"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="shield-core"><ShieldCheck /></div><span className="orbit-dot dot-a" /><span className="orbit-dot dot-b" /><span className="orbit-dot dot-c" /></div><div className="security-status"><span /><div><strong>Système opérationnel</strong><small>Toutes les protections sont actives</small></div></div></div></div></section>
  );
}

function Pricing() {
  return (
    <section className="section" id="tarifs"><div className="shell"><div className="section-heading centered" data-reveal><span className="kicker">OFFRE DE LANCEMENT</span><h2>Commencez sans complexité.</h2><p>Un tarif lisible pour valider le gain de temps avec votre équipe.</p></div><div className="pricing-card" data-reveal style={{ "--d": "100ms" } as React.CSSProperties}><div className="pricing-main"><span className="plan-badge">PRO</span><h3>Certif-Auto Pro</h3><p>Pour garages, mandataires et concessions.</p><div className="price"><strong>99 €</strong><span>/ mois<br />par établissement</span></div><a className="primary-button wide" href="#contact">Demander une démonstration <ArrowRight size={17} /></a></div><div className="pricing-features"><h4>Tout ce qu'il vous faut pour démarrer</h4>{["Extension Chrome", "OCR et extraction IA", "ANTS et VIS", "Historique des dossiers", "Support prioritaire", "Mises à jour incluses"].map(item => <div key={item}><CheckCircle2 /> {item}</div>)}</div></div></div></section>
  );
}

function CTA() {
  return <section className="cta-section" id="contact"><div className="shell cta-card" data-reveal="zoom"><div><span className="kicker">PRÊT À GAGNER DU TEMPS ?</span><h2>Votre prochaine carte grise<br />peut être remplie en 1 clic.</h2><p>Réservez une démonstration de 20 minutes adaptée à vos démarches.</p></div><a className="cta-white" href="mailto:contact@certif-auto.fr">Demander une démo <ArrowRight /></a></div></section>;
}

function Footer() {
  return <footer><div className="shell footer-inner"><Brand compact /><p>© 2026 Certif-Auto. Tous droits réservés.</p><div><a href="#">Confidentialité</a><a href="#">Mentions légales</a><a href="mailto:contact@certif-auto.fr">Contact</a></div></div></footer>;
}

function Landing() {
  useScrollReveal();
  return <div className="site"><Header /><Hero /><Product /><WorkflowSection /><UseCases /><Security /><Pricing /><CTA /><Footer /></div>;
}
