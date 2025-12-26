import { Target, Lightbulb, CheckCircle2, TrendingUp } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Aperçu du Projet</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Vue d'ensemble complète du projet Smart Fridge : objectifs, portée, et cadre académique
          </p>
        </div>

        {/* Project Name & Purpose */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Smart Fridge</h2>
            <p className="text-xl mb-2">Réfrigérateur Connecté de Nouvelle Génération</p>
            <p className="text-muted-foreground">
              Un projet académique de gestion évaluant la faisabilité complète, les coûts, la planification, les
              risques, les compétences, et la roadmap de commercialisation d'un réfrigérateur intelligent intégrant
              capteurs IoT, intelligence embarquée, connectivité cloud, et application mobile.
            </p>
          </div>
        </section>

        {/* Academic Context */}
        <section className="mb-12 bg-card rounded-xl border border-border p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 text-warning">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Contexte Académique</h2>
              <p className="text-muted-foreground">
                Il s'agit d'un exercice de GESTION DE PROJET, pas d'un projet de développement hardware
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Type de Projet</h3>
              <p className="text-sm text-muted-foreground">
                Exercice de planification, organisation, et gestion de tous les aspects d'un projet de réfrigérateur
                intelligent, de la conception à la commercialisation.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Contrainte Clé</h3>
              <p className="text-sm text-muted-foreground">
                AUCUN HARDWARE PHYSIQUE ne sera construit. Focus sur : Planification, Budgétisation, Gestion des
                Risques, Allocation des Ressources, Communication, et Présentation.
              </p>
            </div>
          </div>
        </section>

        {/* Project Objectives */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Objectifs du Projet</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <ObjectiveCard
              number="1"
              title="Valider l'Opportunité"
              description="Analyse de marché et adéquation produit-marché"
            />
            <ObjectiveCard
              number="2"
              title="Définir les Fonctionnalités"
              description="Spécifications clés et architecture système"
            />
            <ObjectiveCard
              number="3"
              title="Construire la Roadmap"
              description="Planning complet avec Gantt chart détaillé"
            />
            <ObjectiveCard
              number="4"
              title="Identifier les Ressources"
              description="Compétences, profils, et ressources nécessaires"
            />
            <ObjectiveCard
              number="5"
              title="Estimer les Financements"
              description="Budget complet avec justifications"
            />
            <ObjectiveCard
              number="6"
              title="Anticiper les Risques"
              description="Identification et stratégies de mitigation"
            />
          </div>
        </section>

        {/* Academic Deliverables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Livrables Académiques Requis</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-4">
                <CheckCircle2 className="h-5 w-5 text-success mb-2" />
                <div className="font-medium mb-1">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.file}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Investor Milestones */}
        <section className="mb-12 bg-gradient-to-br from-success/5 to-accent/5 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Jalons Investisseurs</h2>
              <p className="text-muted-foreground">
                Les investisseurs attendent des jalons clairs pour évaluer la progression
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <MilestoneCard
              phase="1"
              title="Proof of Concept"
              items={["Analyse de marché", "Étude de faisabilité", "Définition des fonctionnalités"]}
            />
            <MilestoneCard
              phase="2"
              title="Prototype/Pilote"
              items={["Tests fonctionnels", "App mobile en beta", "Validation utilisateur"]}
            />
            <MilestoneCard
              phase="3"
              title="Industrialisation"
              items={["Planification production", "Distribution", "Communication marketing"]}
            />
          </div>
        </section>

        {/* Project Philosophy */}
        <section className="bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-4">Philosophie du Projet</h2>
          <p className="text-muted-foreground mb-6">
            L'équipe projet doit se poser des questions critiques pour guider les décisions stratégiques :
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium mb-1">Positionnement Produit</div>
                <div className="text-sm text-muted-foreground">Produit haut de gamme ou entrée de gamme ?</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium mb-1">Segments de Marché</div>
                <div className="text-sm text-muted-foreground">Quels segments cibles prioriser ?</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium mb-1">Positionnement Concurrentiel</div>
                <div className="text-sm text-muted-foreground">Comment se différencier de la concurrence ?</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium mb-1">Priorisation des Fonctionnalités</div>
                <div className="text-sm text-muted-foreground">Quelles fonctionnalités sont essentielles ?</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ObjectiveCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
          {number}
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

function MilestoneCard({ phase, title, items }: { phase: string; title: string; items: string[] }) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-3 text-sm font-medium text-primary">Phase {phase}</div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const deliverables = [
  { name: "Gantt Chart", file: "groupname_gantt" },
  { name: "Skills & Personas", file: "groupname_skills" },
  { name: "Resources List", file: "groupname_resources" },
  { name: "Budget Proposal", file: "groupname_budget" },
  { name: "Risk Management", file: "groupname_risks" },
  { name: "Communications", file: "groupname_communication#" },
  { name: "Quality Plan", file: "quality_management" },
  { name: "Presentation", file: "professional_presentation" },
]
