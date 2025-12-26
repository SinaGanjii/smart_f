import Link from "next/link"
import { ArrowRight, BarChart3, Users, DollarSign, Shield, Target, Calendar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Projet Académique de Gestion
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">Smart Fridge Project</h1>
            <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
              Planification complète d'un réfrigérateur intelligent connecté de nouvelle génération
            </p>
            <p className="mb-10 text-lg text-muted-foreground max-w-3xl mx-auto">
              Une étude de faisabilité et de gestion de projet couvrant l'analyse de marché, la planification technique,
              le budget de 362 200 €, et la roadmap complète sur 38 semaines
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/overview"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-hover transition-colors"
              >
                Explorer le Projet
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/gantt"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-6 py-3 font-medium hover:bg-muted transition-colors"
              >
                Voir le Gantt Chart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">38</div>
              <div className="text-sm text-muted-foreground">Semaines</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-muted-foreground">Membres d'Équipe</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">362K€</div>
              <div className="text-sm text-muted-foreground">Budget Total</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 text-warning">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">7</div>
              <div className="text-sm text-muted-foreground">Phases de Projet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Milestones */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Jalons Investisseurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trois étapes clés pour valider la faisabilité et préparer la commercialisation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Proof of Concept</h3>
              <p className="text-muted-foreground mb-4">
                Analyse de marché, étude de faisabilité technique, et définition des fonctionnalités clés
              </p>
              <div className="text-sm font-medium text-primary">Phases 1-2</div>
            </div>
            <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Prototype / Pilote</h3>
              <p className="text-muted-foreground mb-4">
                Tests fonctionnels, application mobile en beta, et validation utilisateur
              </p>
              <div className="text-sm font-medium text-accent">Phases 3-5</div>
            </div>
            <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-success/10 text-success">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Industrialisation</h3>
              <p className="text-muted-foreground mb-4">
                Planification de production, communication marketing, et lancement commercial
              </p>
              <div className="text-sm font-medium text-success">Phases 6-7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Documentation Complète</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez tous les aspects de la gestion de projet
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NavCard
              href="/overview"
              title="Aperçu du Projet"
              description="Objectifs, portée, et contexte académique du projet"
            />
            <NavCard
              href="/market"
              title="Analyse de Marché"
              description="Segments cibles, concurrence, et opportunités"
            />
            <NavCard
              href="/product"
              title="Définition Produit"
              description="Fonctionnalités, hardware, et architecture logicielle"
            />
            <NavCard
              href="/feasibility"
              title="Faisabilité Technique"
              description="IoT, IA, Mobile, et Cloud infrastructure"
            />
            <NavCard href="/gantt" title="Gantt Chart" description="Planning détaillé des 7 phases sur 38 semaines" />
            <NavCard
              href="/team"
              title="Équipe & Compétences"
              description="6 personas professionnels et compétences requises"
            />
            <NavCard
              href="/resources"
              title="Ressources"
              description="Inventaire matériel, logiciel, et infrastructure"
            />
            <NavCard href="/budget" title="Budget" description="Budget de 362 200 € détaillé par catégorie" />
            <NavCard
              href="/risks"
              title="Gestion des Risques"
              description="6 risques identifiés avec stratégies de mitigation"
            />
            <NavCard href="/quality" title="Gestion Qualité" description="Conformité réglementaire et tests" />
            <NavCard href="/communication" title="Communications" description="Templates professionnels et stratégie" />
            <NavCard
              href="/presentation"
              title="Présentation"
              description="Structure de présentation professionnelle"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function NavCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group bg-card rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  )
}
