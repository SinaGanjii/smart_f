import type React from "react"
import { Camera, Scale, Thermometer, Radio, Cpu, Cloud, Smartphone, Zap, CheckCircle2 } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Définition du Produit</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Vision produit complète, fonctionnalités clés, composants hardware, et architecture logicielle
          </p>
        </div>

        {/* Product Vision */}
        <section className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Vision Produit</h2>
          <p className="text-lg mb-6">Un réfrigérateur qui :</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <VisionCard
              icon={<Cpu className="h-5 w-5" />}
              title="Gère Intelligemment"
              description="Inventaire alimentaire automatique"
            />
            <VisionCard
              icon={<Zap className="h-5 w-5" />}
              title="Réduit le Gaspillage"
              description="Suivi intelligent des expirations"
            />
            <VisionCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Automatise les Courses"
              description="Listes d'achats intelligentes"
            />
            <VisionCard
              icon={<Target className="h-5 w-5" />}
              title="Améliore la Nutrition"
              description="Recommandations personnalisées"
            />
            <VisionCard
              icon={<Cloud className="h-5 w-5" />}
              title="S'Intègre Parfaitement"
              description="Connexion smart home fluide"
            />
            <VisionCard
              icon={<CheckCircle2 className="h-5 w-5" />}
              title="Fournit des Insights"
              description="Contrôle et données en temps réel"
            />
          </div>
        </section>

        {/* Hardware Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Composants Hardware</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HardwareCard
              icon={<Camera className="h-6 w-6" />}
              title="Caméras Internes"
              purpose="Reconnaissance alimentaire et inventaire visuel"
              tech="Caméras haute résolution avec computer vision"
              placement="Positions stratégiques dans compartiments"
              color="primary"
            />
            <HardwareCard
              icon={<Scale className="h-6 w-6" />}
              title="Capteurs de Poids"
              purpose="Mesure quantités et suivi consommation"
              tech="Load cells de précision (HX711)"
              placement="Sous étagères ou compartiments"
              color="accent"
            />
            <HardwareCard
              icon={<Thermometer className="h-6 w-6" />}
              title="Capteurs Temp/Humidité"
              purpose="Surveillance conditions de stockage"
              tech="Thermistors digitaux et capteurs humidité"
              placement="Multiples emplacements"
              color="success"
            />
            <HardwareCard
              icon={<Radio className="h-6 w-6" />}
              title="Capteurs de Porte"
              purpose="Suivi ouvertures, efficacité énergétique"
              tech="Capteurs magnétiques ou de contact"
              placement="Sur chaque porte"
              color="warning"
            />
            <HardwareCard
              icon={<Radio className="h-6 w-6" />}
              title="Scanner RFID (Optionnel)"
              purpose="Identification automatique articles"
              tech="Lecteur RFID"
              placement="Près de porte ou point d'entrée"
              color="primary"
            />
            <HardwareCard
              icon={<Cpu className="h-6 w-6" />}
              title="Microcontrôleurs ESP32"
              purpose="Contrôle capteurs et collecte données"
              tech="ESP32 avec WiFi intégré"
              placement="Circuit intégré"
              color="accent"
            />
          </div>
        </section>

        {/* Software Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Architecture Logicielle</h2>
          <div className="grid gap-6">
            <SoftwareLayer
              title="Logiciel Embarqué"
              description="Traitement des données sur l'appareil"
              features={[
                "Traitement données capteurs en temps réel",
                "Prise de décision locale",
                "Capacités edge computing",
                "Mises à jour firmware OTA",
                "Logique de calibration capteurs",
              ]}
              color="primary"
            />
            <SoftwareLayer
              title="Plateforme Cloud"
              description="Backend et intelligence"
              features={[
                "Comptes utilisateurs sécurisés",
                "Synchronisation temps réel",
                "Modèles IA et analytics",
                "Moteur de recommandations recettes",
                "Stockage et backup données",
              ]}
              color="accent"
            />
            <SoftwareLayer
              title="Application Mobile"
              description="Interface utilisateur"
              features={[
                "Vue inventaire en temps réel",
                "Suivi des expirations",
                "Liste de courses intelligente",
                "Suggestions de recettes",
                "Monitoring énergétique",
              ]}
              color="success"
            />
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-12 bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Fonctionnalités Clés Détaillées</h2>
          <div className="space-y-6">
            <FeatureDetail
              number="1"
              title="Module de Suivi d'Inventaire"
              inputs={["Lectures capteurs poids", "Images caméras", "Entrées manuelles", "Scans RFID"]}
              outputs={["Liste articles complète", "Quantités par article", "Localisation dans frigo", "Timestamp"]}
            />
            <FeatureDetail
              number="2"
              title="Système de Prédiction d'Expiration"
              inputs={[
                "Identification type article",
                "Analyse tendance poids",
                "Analyse visuelle (détection détérioration)",
                "Patterns de consommation",
              ]}
              outputs={[
                "Dates expiration prédites",
                "Alertes d'urgence",
                "Recommandations consommation",
                "Insights anti-gaspillage",
              ]}
            />
            <FeatureDetail
              number="3"
              title="Assistant Courses Intelligent"
              inputs={[
                "Détection quantités faibles",
                "Articles expirés retirés",
                "Analyse tendances consommation",
                "Planification repas",
              ]}
              outputs={[
                "Listes courses auto-générées",
                "Recommandations quantités",
                "Intégration magasins (futur)",
                "Comparaison prix",
              ]}
            />
            <FeatureDetail
              number="4"
              title="Moteur de Recommandations Recettes"
              inputs={[
                "Inventaire frigo actuel",
                "Quantités articles",
                "Urgence expiration",
                "Préférences alimentaires",
                "Allergies",
              ]}
              outputs={[
                "Suggestions recettes personnalisées",
                "Niveau difficulté",
                "Disponibilité ingrédients",
                "Informations nutritionnelles",
              ]}
            />
          </div>
        </section>

        {/* Technical Approach */}
        <section className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Approche Technique</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                IA & Machine Learning
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• CNN pour reconnaissance alimentaire</li>
                <li>• Modèles de régression pour prédictions</li>
                <li>• Systèmes de recommandation</li>
                <li>• Apprentissage continu</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Cloud className="h-5 w-5 text-accent" />
                Cloud & Backend
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AWS IoT Core ou Firebase</li>
                <li>• APIs RESTful</li>
                <li>• Base de données PostgreSQL</li>
                <li>• Architecture microservices</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function VisionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

function HardwareCard({
  icon,
  title,
  purpose,
  tech,
  placement,
  color,
}: {
  icon: React.ReactNode
  title: string
  purpose: string
  tech: string
  placement: string
  color: string
}) {
  const colorClasses = {
    primary: "bg-primary/5 border-primary/20 text-primary",
    accent: "bg-accent/5 border-accent/20 text-accent",
    success: "bg-success/5 border-success/20 text-success",
    warning: "bg-warning/5 border-warning/20 text-warning",
  }

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} rounded-xl border p-6`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-card border border-border">
        {icon}
      </div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div>
          <strong className="text-foreground">But:</strong> {purpose}
        </div>
        <div>
          <strong className="text-foreground">Tech:</strong> {tech}
        </div>
        <div>
          <strong className="text-foreground">Position:</strong> {placement}
        </div>
      </div>
    </div>
  )
}

function SoftwareLayer({
  title,
  description,
  features,
  color,
}: {
  title: string
  description: string
  features: string[]
  color: string
}) {
  const colorClasses = {
    primary: "border-l-primary",
    accent: "border-l-accent",
    success: "border-l-success",
  }

  return (
    <div
      className={`bg-card rounded-lg border-l-4 ${colorClasses[color as keyof typeof colorClasses]} border border-border p-6`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeatureDetail({
  number,
  title,
  inputs,
  outputs,
}: {
  number: string
  title: string
  inputs: string[]
  outputs: string[]
}) {
  return (
    <div className="border-l-4 border-l-primary pl-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
          {number}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="text-sm font-medium mb-2 text-muted-foreground">Entrées</div>
          <ul className="space-y-1">
            {inputs.map((input, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>{input}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium mb-2 text-muted-foreground">Sorties</div>
          <ul className="space-y-1">
            {outputs.map((output, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
