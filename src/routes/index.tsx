import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Car,
  Check,
  ChevronRight,
  CircleGauge,
  FileCheck2,
  FileText,
  Gauge,
  Globe2,
  Home,
  KeyRound,
  LockKeyhole,
  Menu,
  MonitorCheck,
  MoveRight,
  PanelsTopLeft,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  SendHorizontal,
  UserRound,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: LandingPage });

const procedures = [
  { icon: Car, title: "Nouvelle immatriculation", text: "Véhicule neuf, occasion ou première mise en circulation." },
  { icon: UserRound, title: "Changement de titulaire", text: "Vente, donation, succession ou transfert de propriété." },
  { icon: Home, title: "Changement d’adresse", text: "Mettez à jour l’adresse du titulaire rapidement." },
  { icon: FileText, title: "Duplicata", text: "Perte, vol ou détérioration du certificat d’immatriculation." },
  { icon: Globe2, title: "Véhicule importé", text: "Préparez les dossiers provenant de l’UE ou hors UE." },
  { icon: Wrench, title: "Modification du véhicule", text: "Caractéristiques techniques, collection ou transformation." },
  { icon: Building2, title: "Déclaration d’achat", text: "Enregistrez les acquisitions professionnelles plus vite." },
  { icon: KeyRound, title: "WW & W Garage", text: "Gérez les immatriculations provisoires et professionnelles." },
];

const steps = [
  { icon: Camera, title: "Prenez une photo", text: "Photographiez la carte grise et les pièces depuis votre téléphone." },
  { icon: ScanLine, title: "Les données sont lues", text: "Certif Auto repère automatiquement les informations utiles." },
  { icon: BadgeCheck, title: "Vérifiez", text: "Contrôlez les données avant de continuer." },
  { icon: SendHorizontal, title: "Continuez sur l’ordinateur", text: "Retrouvez les données dans votre navigateur pour remplir SIV ou ANTS." },
];

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = procedures.filter((item) =>
    `${item.title} ${item.text}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="site">
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="Certif Auto — accueil">
            <img src="/favicon.png" alt="" />
            <span>Certif <strong>Auto</strong></span>
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#fonctionnement">Fonctionnement</a>
            <a href="#demarches">Démarches SIV & ANTS</a>
            <a href="#avantages">Avantages</a>
            <a href="#securite">Sécurité</a>
          </nav>
          <div className="header-actions">
            <a className="login-link" href="#">Se connecter</a>
            <a className="button button-small" href="#contact">Demander une démo</a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navigation mobile">
            <a href="#fonctionnement" onClick={() => setMenuOpen(false)}>Fonctionnement</a>
            <a href="#demarches" onClick={() => setMenuOpen(false)}>Démarches SIV & ANTS</a>
            <a href="#avantages" onClick={() => setMenuOpen(false)}>Avantages</a>
            <a href="#securite" onClick={() => setMenuOpen(false)}>Sécurité</a>
            <a className="button" href="#contact" onClick={() => setMenuOpen(false)}>Demander une démo</a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-blob hero-blob-one" />
        <div className="hero-blob hero-blob-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles /> L’assistant intelligent des professionnels de l’auto</div>
            <h1>Automatisez vos démarches <span>SIV &amp; ANTS</span>.</h1>
            <p>
              Prenez les documents en photo. Certif Auto lit les informations et les rend disponibles dans votre navigateur, prêtes pour SIV ou ANTS.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">Commencer gratuitement <ArrowRight /></a>
              <a className="button button-secondary" href="#fonctionnement">Voir comment ça marche</a>
            </div>
            <div className="trust-row">
              <span><Check /> Sans engagement</span>
              <span><Check /> Installation rapide</span>
              <span><Check /> Données sécurisées</span>
            </div>
            <div className="capture-note"><Smartphone /> Une photo <MoveRight /> vos données dans le navigateur</div>
          </div>

          <div className="product-card" aria-label="Aperçu du logiciel">
            <div className="product-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>Dossier #CG-2026-1842</span>
              <div className="live-status"><i /> Analyse terminée</div>
            </div>
            <div className="product-body">
              <aside className="product-sidebar">
                <div className="mini-logo"><img src="/favicon.png" alt="" /></div>
                <span className="active"><CircleGauge /></span>
                <span><FileText /></span>
                <span><Car /></span>
                <span><ShieldCheck /></span>
              </aside>
              <div className="workspace">
                <div className="workspace-heading">
                  <div>
                    <small>NOUVEAU DOSSIER</small>
                    <h3>Changement de titulaire</h3>
                  </div>
                  <span className="completion"><Check /> 4 documents reçus</span>
                </div>
                <div className="workspace-grid">
                  <div className="upload-panel">
                    <div className="scan-preview" aria-label="Animation de lecture automatique d’une carte grise">
                      <img src="/carte-grise-demo.svg" alt="Exemple fictif de carte grise en cours d’analyse" />
                      <span className="scan-beam" />
                      <span className="scan-corner scan-corner-tl" />
                      <span className="scan-corner scan-corner-tr" />
                      <span className="scan-corner scan-corner-bl" />
                      <span className="scan-corner scan-corner-br" />
                      <span className="scan-label"><ScanLine /> Lecture de la carte grise…</span>
                    </div>
                    <strong>Documents importés</strong>
                    <p>L’analyse automatique est terminée.</p>
                    {["Carte grise", "Pièce d’identité", "Justificatif de domicile", "Certificat de cession"].map((label) => (
                      <div className="document-row" key={label}>
                        <FileCheck2 /><span>{label}</span><Check />
                      </div>
                    ))}
                  </div>
                  <div className="result-panel">
                    <div className="result-heading"><Sparkles /> Informations détectées</div>
                    {[
                      ["Immatriculation", "AB-123-CD"],
                      ["Titulaire", "Sophie Martin"],
                      ["Date de cession", "02/08/2026"],
                      ["VIN", "VF1RFB00X12345678"],
                    ].map(([label, value]) => (
                      <label className="fake-field" key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                        <BadgeCheck />
                      </label>
                    ))}
                    <button className="product-button"><SendHorizontal /> Continuer dans le navigateur</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-stat stat-one"><Gauge /><span><strong>70 %</strong> de temps gagné</span></div>
            <div className="floating-stat stat-two"><ShieldCheck /><span><strong>Dossier complet</strong> aucun oubli détecté</span></div>
          </div>
        </div>
      </section>

      <section className="proof-bar">
        <div className="container proof-grid">
          <span>Conçu pour les professionnels</span>
          <strong>GARAGES</strong><strong>CONCESSIONS</strong><strong>AGENCES SIV</strong><strong>FLOTTES</strong>
        </div>
      </section>

      <section className="section" id="fonctionnement">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">SIMPLE PAR CONCEPTION</span>
            <h2>Un dossier prêt en quatre étapes.</h2>
            <p>Pas de logiciel complexe à apprendre. Votre équipe suit un parcours clair et reste maître de la validation finale.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <div className="step-icon"><step.icon /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capture-section" id="mobile-addon">
        <div className="container capture-layout">
          <div className="capture-copy">
            <span className="section-kicker">DU TÉLÉPHONE AU NAVIGATEUR</span>
            <h2>Une photo. Vos données sont prêtes sur l’ordinateur.</h2>
            <p>
              Photographiez les documents. Vérifiez les informations. Retrouvez-les aussitôt dans votre navigateur pour continuer sur SIV ou ANTS.
            </p>
            <ul className="capture-benefits">
              <li><Check /> Pas de ressaisie</li>
              <li><Check /> Pas de transfert manuel</li>
              <li><Check /> Vous vérifiez avant l’envoi</li>
            </ul>
            <div className="capture-flow-labels" aria-label="Parcours des données">
              <span><Camera /> Photo</span><MoveRight /><span><ScanLine /> Lecture automatique</span><MoveRight /><span><PanelsTopLeft /> Navigateur web</span>
            </div>
          </div>

          <div className="transfer-demo" aria-label="Illustration du transfert des données depuis le téléphone vers le navigateur web">
            <div className="phone-mockup">
              <div className="phone-top"><i /> Certif Auto</div>
              <div className="phone-camera">
                <img src="/carte-grise-demo.svg" alt="Carte grise fictive photographiée dans l’application Certif Auto" />
                <span className="focus-corner focus-tl" /><span className="focus-corner focus-tr" />
                <span className="focus-corner focus-bl" /><span className="focus-corner focus-br" />
                <span className="photo-status"><BadgeCheck /> Photo nette</span>
              </div>
              <div className="phone-action"><Camera /><span>Document capturé</span></div>
            </div>

            <div className="transfer-bridge" aria-hidden="true">
              <span className="transfer-pulse"><SendHorizontal /></span>
              <small>Données envoyées</small>
            </div>

            <div className="addon-mockup">
              <div className="addon-topbar">
                <span><PanelsTopLeft /> Certif Auto · Navigateur</span>
                <i>Connecté</i>
              </div>
              <div className="addon-content">
                <div className="addon-success"><MonitorCheck /><span><strong>Données reçues</strong><small>depuis l’application</small></span></div>
                {[
                  ["Immatriculation", "AB-123-CD"],
                  ["Titulaire", "Sophie Martin"],
                  ["VIN", "VF1RFB00X12345678"],
                ].map(([label, value]) => (
                  <div className="addon-field" key={label}><span>{label}</span><strong>{value}</strong><Check /></div>
                ))}
                <div className="addon-ready"><Zap /> Prêt pour SIV / ANTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section procedures-section" id="demarches">
        <div className="container">
          <div className="section-heading split">
            <div>
              <span className="section-kicker">TOUTES VOS DÉMARCHES</span>
              <h2>Choisissez simplement ce que vous voulez faire.</h2>
            </div>
            <p>Une interface commune pour centraliser les opérations les plus fréquentes de votre activité.</p>
          </div>
          <label className="search-box">
            <Search />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une démarche : duplicata, import, adresse…" />
            <kbd>⌘ K</kbd>
          </label>
          <div className="procedures-grid">
            {filtered.map((item) => (
              <article className="procedure-card" key={item.title}>
                <div className="procedure-icon"><item.icon /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <ChevronRight />
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="empty-state">Aucune démarche ne correspond à votre recherche.</div>}
        </div>
      </section>

      <section className="section" id="avantages">
        <div className="container feature-layout">
          <div className="feature-copy">
            <span className="section-kicker">PENSÉ POUR LA PRODUCTIVITÉ</span>
            <h2>Moins de saisie. Plus de dossiers traités.</h2>
            <p>Certif Auto automatise les tâches répétitives sans supprimer le contrôle humain. Vos équipes se concentrent sur les exceptions et les clients.</p>
            <ul>
              <li><Check /> Extraction automatique des informations utiles</li>
              <li><Check /> Contrôle des pièces manquantes et incohérences</li>
              <li><Check /> Historique clair pour chaque dossier</li>
              <li><Check /> Expérience homogène pour toute l’équipe</li>
            </ul>
            <a className="text-link" href="#contact">Découvrir la démonstration <ArrowRight /></a>
          </div>
          <div className="metrics-panel">
            <article className="metric metric-primary"><Zap /><strong>Jusqu’à 70 %</strong><span>de temps gagné sur la préparation</span></article>
            <article className="metric"><ScanLine /><strong>Quelques secondes</strong><span>pour extraire les champs d’un document</span></article>
            <article className="metric"><FileCheck2 /><strong>Un contrôle clair</strong><span>des pièces reçues et manquantes</span></article>
          </div>
        </div>
      </section>

      <section className="section security-section" id="securite">
        <div className="container security-card">
          <div className="security-copy">
            <span className="section-kicker">SÉCURITÉ ET CONFIANCE</span>
            <h2>Vos dossiers méritent une protection sérieuse.</h2>
            <p>Une interface conçue pour limiter les erreurs, tracer les actions et protéger les documents sensibles de vos clients.</p>
            <div className="security-pills"><span><LockKeyhole /> Accès contrôlés</span><span><ShieldCheck /> Données chiffrées</span><span><FileCheck2 /> Traçabilité</span></div>
          </div>
          <div className="shield-visual">
            <div className="shield-circle"><ShieldCheck /></div>
            <span><i /> Système opérationnel</span>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contact">
        <div className="container cta-card">
          <div>
            <span className="section-kicker">PRÊT À GAGNER DU TEMPS ?</span>
            <h2>Testez une nouvelle façon de gérer vos démarches SIV.</h2>
            <p>Présentez-nous votre volume de dossiers et votre organisation. Nous vous montrerons comment Certif Auto peut s’intégrer à votre activité.</p>
          </div>
          <a className="button button-white" href="mailto:contact@certif-auto.fr">Demander une démo <ArrowRight /></a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="logo logo-small" href="#top"><img src="/favicon.png" alt="" /><span>Certif <strong>Auto</strong></span></a>
          <p>© 2026 Certif Auto. Tous droits réservés.</p>
          <div><a href="#">Mentions légales</a><a href="#">Confidentialité</a><a href="#">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
