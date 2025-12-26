import type React from "react"
import { Cpu, Cloud, Smartphone, Brain, CheckCircle2, AlertTriangle, Zap } from "lucide-react"

export default function FeasibilityPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Faisabilité Technique</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Analyse complète de la faisabilité IoT, IA, Mobile, et Cloud pour valider l'approche technique
          </p>
        </div>

        {/* IoT Feasibility */}
        <section className="mb-12">
          <div className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Faisabilité IoT</h2>
                <p className="text-muted-foreground">Évaluation des composants hardware et capteurs</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ComponentCard
                name="ESP32 Microcontrôleurs"
                feasibility="Haute"
                cost="Faible à Modéré"
                challenges="Gestion énergie, fiabilité"
                status="proven"
              />
              <ComponentCard
                name="Thermistors Digitaux"
                feasibility="Haute"
                cost="Faible"
                challenges="Calibration, placement"
                status="proven"
              />
              <ComponentCard
                name="Load Cells HX711"
                feasibility="Moyenne"
                cost="Modéré"
                challenges="Calibration, précision, environnement"
                status="medium"
              />
              <ComponentCard
                name="Modules Caméra"
                feasibility="Moyenne"
                cost="Modéré à Élevé"
                challenges="Qualité image, puissance, confidentialité"
                status="medium"
              />
              <ComponentCard
                name="Connectivité WiFi"
                feasibility="Haute"
                cost="Faible"
                challenges="Fiabilité, sécurité"
                status="proven"
              />
              <ComponentCard
                name="Capteurs Porte"
                feasibility="Haute"
                cost="Faible"
                challenges="Minimal"
                status="proven"
              />
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Défis Majeurs IoT</h3>
            <div className="space-y-4">
              <ChallengeItem
                challenge="Calibration des Capteurs"
                description="Chaque type de capteur nécessite calibration précise"
                solution="Routines de calibration automatisées"
              />
              <ChallengeItem
                challenge="Consommation Énergétique"
                description="Multiples capteurs augmentent la consommation"
                solution="Gestion efficace de l'énergie, modes veille"
              />
              <ChallengeItem
                challenge="Fiabilité des Données"
                description="Défaillances capteurs, problèmes réseau"
                solution="Redondance, cache local, gestion erreurs"
              />
            </div>
          </div>
        </section>

        {/* AI Feasibility */}
        <section className="mb-12">
          <div className="mb-8 bg-gradient-to-br from-accent/10 to-success/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Faisabilité IA</h2>
                <p className="text-muted-foreground">Modèles d'apprentissage automatique requis</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <AIModelCard
                title="Modèle Classification Vision"
                purpose="Reconnaissance alimentaire depuis images"
                tech="CNN (Convolutional Neural Network)"
                feasibility="Haute"
                dataset="Food-101, fine-tuning personnalisé"
              />
              <AIModelCard
                title="Modèle Reconnaissance Alimentaire"
                purpose="Identifier articles alimentaires spécifiques"
                tech="Deep learning, transfer learning"
                feasibility="Haute"
                dataset="Datasets publics + collecte personnalisée"
              />
              <AIModelCard
                title="Modèle Prédiction Expiration"
                purpose="Prédire dates d'expiration"
                tech="Modèles de régression, séries temporelles"
                feasibility="Moyenne"
                dataset="Données de formation requises"
              />
              <AIModelCard
                title="Modèle Ranking Recettes"
                purpose="Recommander meilleures recettes"
                tech="Systèmes de recommandation, NLP"
                feasibility="Haute"
                dataset="Données recettes + feedback utilisateur"
              />
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Sources de Datasets</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-medium mb-2">Datasets Publics</div>
                <p className="text-sm text-muted-foreground">Food-101, Open Images, ImageNet sous-ensembles</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-medium mb-2">Collecte Personnalisée</div>
                <p className="text-sm text-muted-foreground">Photos utilisateurs, données d'usage, feedback</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-medium mb-2">Boucles de Feedback</div>
                <p className="text-sm text-muted-foreground">Corrections utilisateur, amélioration continue</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-medium mb-2">Apprentissage Continu</div>
                <p className="text-sm text-muted-foreground">Amélioration modèles au fil du temps</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Feasibility */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Faisabilité Application Mobile</h2>
                <p className="text-muted-foreground">Stack technique et modules essentiels</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  React Native
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Avantages:</span> Cross-platform, grande communauté
                  </div>
                  <div>
                    <span className="font-medium">Inconvénients:</span> Considérations performance
                  </div>
                  <div>
                    <span className="font-medium">Faisabilité:</span> <span className="text-success">Haute</span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Flutter
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Avantages:</span> Excellentes performances, codebase unique
                  </div>
                  <div>
                    <span className="font-medium">Inconvénients:</span> Écosystème plus petit
                  </div>
                  <div>
                    <span className="font-medium">Faisabilité:</span> <span className="text-success">Haute</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Modules Essentiels</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <ModuleCard title="Notifications" description="Push notifications en temps réel" />
                <ModuleCard title="Moteur de Sync" description="Synchronisation données temps réel" />
                <ModuleCard title="Cache Local" description="Fonctionnalité offline" />
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Feasibility */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-warning/10 to-accent/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 text-warning">
                <Cloud className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Faisabilité Cloud</h2>
                <p className="text-muted-foreground">Options de stack et infrastructure</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <CloudStackCard
                name="Firebase"
                pros={["Configuration facile", "Base de données temps réel", "Authentification intégrée"]}
                cons={["Vendor lock-in", "Coûts scaling"]}
                feasibility="Haute pour MVP"
              />
              <CloudStackCard
                name="AWS IoT Core"
                pros={["Scalable", "Grade entreprise", "Services complets"]}
                cons={["Complexité", "Coût"]}
                feasibility="Haute pour production"
              />
              <CloudStackCard
                name="Supabase"
                pros={["Open-source", "PostgreSQL", "APIs RESTful"]}
                cons={["Plateforme plus récente"]}
                feasibility="Moyenne à Haute"
              />
              <CloudStackCard
                name="Backend Custom (Node.js)"
                pros={["Contrôle total", "Personnalisation"]}
                cons={["Temps développement", "Maintenance"]}
                feasibility="Moyenne"
              />
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Exigences Cloud</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <RequirementCard icon={<Zap />} title="Scalabilité" description="Croissance utilisateurs" />
                <RequirementCard icon={<Zap />} title="Temps Réel" description="Synchronisation instantanée" />
                <RequirementCard icon={<Zap />} title="Sécurité" description="Chiffrement et conformité" />
                <RequirementCard icon={<Zap />} title="Analytics" description="Données et insights" />
                <RequirementCard icon={<Zap />} title="Coût-Efficacité" description="Optimisation budget" />
                <RequirementCard icon={<Zap />} title="Fiabilité" description="Uptime élevé" />
              </div>
            </div>
          </div>
        </section>

        {/* Feasibility Summary */}
        <section className="bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Résumé Faisabilité</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <FeasibilitySummary category="IoT" level="Haute" color="success" />
            <FeasibilitySummary category="IA" level="Haute" color="success" />
            <FeasibilitySummary category="Mobile" level="Haute" color="success" />
            <FeasibilitySummary category="Cloud" level="Haute" color="success" />
          </div>
          <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1 text-success">Conclusion Positive</div>
                <p className="text-sm text-muted-foreground">
                  Toutes les composantes techniques sont réalisables avec les technologies actuelles. Les défis
                  identifiés ont des solutions de mitigation claires. Le projet est techniquement viable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ComponentCard({
  name,
  feasibility,
  cost,
  challenges,
  status,
}: {
  name: string
  feasibility: string
  cost: string
  challenges: string
  status: "proven" | "medium"
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-sm">{name}</h3>
        <div
          className={`h-2 w-2 rounded-full ${status === "proven" ? "bg-success" : "bg-warning"}`}
          title={status === "proven" ? "Technologie éprouvée" : "Nécessite attention"}
        />
      </div>
      <div className="space-y-1 text-xs text-muted-foreground">
        <div>
          <span className="font-medium">Faisabilité:</span> {feasibility}
        </div>
        <div>
          <span className="font-medium">Coût:</span> {cost}
        </div>
        <div>
          <span className="font-medium">Défis:</span> {challenges}
        </div>
      </div>
    </div>
  )
}

function ChallengeItem({
  challenge,
  description,
  solution,
}: {
  challenge: string
  description: string
  solution: string
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
      <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-semibold mb-1 text-sm">{challenge}</h4>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <div className="flex items-start gap-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
          <span className="text-success">{solution}</span>
        </div>
      </div>
    </div>
  )
}

function AIModelCard({
  title,
  purpose,
  tech,
  feasibility,
  dataset,
}: {
  title: string
  purpose: string
  tech: string
  feasibility: string
  dataset: string
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-muted-foreground">But:</span> {purpose}
        </div>
        <div>
          <span className="font-medium text-muted-foreground">Tech:</span> {tech}
        </div>
        <div>
          <span className="font-medium text-muted-foreground">Faisabilité:</span>{" "}
          <span className={feasibility === "Haute" ? "text-success" : "text-warning"}>{feasibility}</span>
        </div>
        <div>
          <span className="font-medium text-muted-foreground">Dataset:</span> {dataset}
        </div>
      </div>
    </div>
  )
}

function ModuleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="font-medium mb-1 text-sm">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  )
}

function CloudStackCard({
  name,
  pros,
  cons,
  feasibility,
}: {
  name: string
  pros: string[]
  cons: string[]
  feasibility: string
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold mb-4">{name}</h3>
      <div className="mb-4">
        <div className="text-sm font-medium mb-2 text-success">Avantages</div>
        <ul className="space-y-1">
          {pros.map((pro, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-sm font-medium mb-2 text-warning">Inconvénients</div>
        <ul className="space-y-1">
          {cons.map((con, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 border-t border-border">
        <div className="text-sm">
          <span className="font-medium">Faisabilité:</span> {feasibility}
        </div>
      </div>
    </div>
  )
}

function RequirementCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="font-medium text-sm mb-0.5">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}

function FeasibilitySummary({ category, level, color }: { category: string; level: string; color: string }) {
  const colorClasses = {
    success: "bg-success/10 border-success/20 text-success",
    warning: "bg-warning/10 border-warning/20 text-warning",
  }

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} rounded-lg border p-6 text-center`}>
      <div className="text-2xl font-bold mb-1">{level}</div>
      <div className="text-sm">{category}</div>
    </div>
  )
}
