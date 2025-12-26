import type React from "react"
import { TrendingUp, Users, Target, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react"

export default function MarketPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Analyse de Marché</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Étude complète du marché des appareils intelligents, opportunités, segments cibles, et positionnement
            concurrentiel
          </p>
        </div>

        {/* Industry Context */}
        <section className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Contexte de l'Industrie</h2>
              <p className="text-muted-foreground">
                Les appareils électroménagers intelligents connaissent une expansion rapide
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ContextCard
              title="Appareils Plus Intelligents"
              description="Intégration croissante d'IA et de capteurs avancés"
            />
            <ContextCard
              title="Efficacité Énergétique"
              description="Optimisation énergétique et réduction d'empreinte carbone"
            />
            <ContextCard title="Personnalisation" description="Fonctionnalités adaptées aux besoins individuels" />
            <ContextCard title="Intégration Smart Home" description="Connexion avec écosystèmes domotiques existants" />
            <ContextCard
              title="Adoption IoT Croissante"
              description="Les consommateurs adoptent massivement les objets connectés"
            />
            <ContextCard
              title="Innovation Continue"
              description="Évolution rapide des technologies et fonctionnalités"
            />
          </div>
        </section>

        {/* Market Gaps & Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lacunes du Marché & Opportunités</h2>
          <div className="bg-card rounded-xl border border-border p-8 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Les réfrigérateurs intelligents actuels manquent de :
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <GapCard title="Reconnaissance Alimentaire Précise" description="Identification limitée des produits" />
              <GapCard title="Suivi d'Expiration Fiable" description="Systèmes de tracking peu performants" />
              <GapCard title="Automatisation Réelle" description="Peu de fonctionnalités vraiment autonomes" />
              <GapCard title="Assistance Nutritionnelle IA" description="Recommandations nutritionnelles basiques" />
              <GapCard title="Prédiction d'Achats Intelligente" description="Suggestions de courses peu précises" />
              <GapCard title="Expérience Utilisateur Fluide" description="Interfaces complexes et peu intuitives" />
            </div>
          </div>
        </section>

        {/* Target Customer Segments */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Segments Clients Cibles</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <SegmentCard
              icon={<Target className="h-6 w-6" />}
              title="Adopteurs Smart Home"
              priority="Primaire"
              characteristics={[
                "Early adopters de technologies",
                "Déjà investis dans écosystèmes smart home",
                "Valorisent connectivité et automation",
              ]}
              bgColor="bg-primary/5"
              borderColor="border-primary/20"
            />
            <SegmentCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Acheteurs Premium Cuisine"
              priority="Primaire"
              characteristics={[
                "Foyers à revenus élevés",
                "Prêts à investir dans appareils premium",
                "Valorisent qualité et innovation",
              ]}
              bgColor="bg-accent/5"
              borderColor="border-accent/20"
            />
            <SegmentCard
              icon={<Users className="h-6 w-6" />}
              title="Familles Soucieuses Santé"
              priority="Secondaire"
              characteristics={[
                "Focus nutrition et bien-être",
                "Veulent réduire gaspillage alimentaire",
                "Intéressés par planification repas",
              ]}
              bgColor="bg-success/5"
              borderColor="border-success/20"
            />
            <SegmentCard
              icon={<ArrowRight className="h-6 w-6" />}
              title="Professionnels Actifs"
              priority="Secondaire"
              characteristics={[
                "Besoin d'automation pour économiser temps",
                "Veulent fonctionnalités pratiques",
                "Valorisent efficacité",
              ]}
              bgColor="bg-warning/5"
              borderColor="border-warning/20"
            />
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="mb-12 bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Paysage Concurrentiel</h2>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Concurrents Principaux</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <CompetitorCard name="Samsung Family Hub" market="Leader" />
              <CompetitorCard name="LG InstaView" market="Premium" />
              <CompetitorCard name="Haier SmartHome" market="Volume" />
              <CompetitorCard name="Autres Émergents" market="Niche" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-warning">Limitations Concurrentielles</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Capacités IA limitées</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Ensembles de fonctionnalités basiques</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Expérience utilisateur médiocre</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Intégration écosystème limitée</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-success">Nos Différenciateurs</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Intégration IA profonde pour reconnaissance alimentaire</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Intégration capteurs avancés</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Design app-first</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Automatisation intelligente des courses</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Focus santé et durabilité</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Expérience utilisateur supérieure</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Positioning */}
        <section className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Positionnement Marché</h2>
          <p className="text-lg mb-6">
            Se positionner comme un réfrigérateur intelligent{" "}
            <strong>premium, intelligent, et centré utilisateur</strong> qui améliore véritablement la vie quotidienne
            grâce à l'automatisation et l'intelligence.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="font-semibold mb-2 text-primary">Segment</div>
              <div className="text-sm text-muted-foreground">Premium & Smart Home</div>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="font-semibold mb-2 text-accent">Prix</div>
              <div className="text-sm text-muted-foreground">Haut de gamme justifié</div>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="font-semibold mb-2 text-success">Valeur</div>
              <div className="text-sm text-muted-foreground">Innovation & Expérience</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ContextCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <h3 className="font-semibold mb-2 text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}

function GapCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-warning/5 rounded-lg border border-warning/20">
      <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
      <div>
        <div className="font-medium mb-1 text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}

function SegmentCard({
  icon,
  title,
  priority,
  characteristics,
  bgColor,
  borderColor,
}: {
  icon: React.ReactNode
  title: string
  priority: string
  characteristics: string[]
  bgColor: string
  borderColor: string
}) {
  return (
    <div className={`${bgColor} rounded-xl border ${borderColor} p-6`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border border-border">{icon}</div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <div className="text-xs text-muted-foreground">Priorité: {priority}</div>
        </div>
      </div>
      <ul className="space-y-2">
        {characteristics.map((char, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>{char}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CompetitorCard({ name, market }: { name: string; market: string }) {
  return (
    <div className="bg-muted/50 rounded-lg p-4 border border-border">
      <div className="font-semibold mb-1 text-sm">{name}</div>
      <div className="text-xs text-muted-foreground">{market}</div>
    </div>
  )
}
