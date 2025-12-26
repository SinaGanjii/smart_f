import { TrendingUp, Users, Building2, Package, Laptop, TestTube, Megaphone, AlertCircle } from "lucide-react"

const budgetData = [
  {
    category: "Salaires",
    amount: 205000,
    items: [
      { name: "Ingénieur IoT", amount: 30000, detail: "6 mois @ 5 000€/mois" },
      { name: "Développeur Embarqué", amount: 35000, detail: "6 mois @ 5 833€/mois" },
      { name: "Développeur Mobile", amount: 27000, detail: "6 mois @ 4 500€/mois" },
      { name: "Ingénieur IA", amount: 38000, detail: "6 mois @ 6 333€/mois" },
      { name: "Architecte Cloud", amount: 35000, detail: "6 mois @ 5 833€/mois" },
      { name: "Chef de Produit", amount: 40000, detail: "6 mois @ 6 667€/mois" },
    ],
    icon: Users,
    color: "primary",
  },
  {
    category: "Charges Patronales",
    amount: 75000,
    items: [{ name: "Charges sociales", amount: 75000, detail: "~36.5% des salaires" }],
    icon: TrendingUp,
    color: "accent",
  },
  {
    category: "Hardware",
    amount: 12000,
    items: [
      { name: "Capteurs", amount: 3000, detail: "Température, humidité, load cells" },
      { name: "Microcontrôleurs", amount: 1500, detail: "ESP32, Raspberry Pi" },
      { name: "Modules Caméra", amount: 2000, detail: "Caméras haute résolution" },
      { name: "Matériaux Prototype", amount: 2500, detail: "Impression 3D, boîtiers" },
      { name: "Équipement de Test", amount: 3000, detail: "Oscilloscopes, multimètres" },
    ],
    icon: Package,
    color: "success",
  },
  {
    category: "Logiciels & Licences",
    amount: 3000,
    items: [
      { name: "Outils Développement", amount: 1500, detail: "IDEs, logiciels design" },
      { name: "Services Cloud", amount: 1500, detail: "AWS, Firebase (6 mois)" },
    ],
    icon: Laptop,
    color: "warning",
  },
  {
    category: "Tests & QA",
    amount: 5000,
    items: [
      { name: "Laboratoires de Test", amount: 2000, detail: "Installations tests externes" },
      { name: "Appareils de Test", amount: 2000, detail: "Mobiles, équipements test" },
      { name: "Outils QA", amount: 1000, detail: "Logiciels testing, licences" },
    ],
    icon: TestTube,
    color: "primary",
  },
  {
    category: "Prototypage",
    amount: 8000,
    items: [
      { name: "Impression 3D", amount: 3000, detail: "Boîtiers prototypes" },
      { name: "Matériaux", amount: 2500, detail: "Matériaux divers prototypes" },
      { name: "Itérations", amount: 2500, detail: "Versions multiples prototypes" },
    ],
    icon: Package,
    color: "accent",
  },
  {
    category: "Marketing",
    amount: 15000,
    items: [
      { name: "Branding", amount: 5000, detail: "Logo, identité de marque" },
      { name: "Matériaux Marketing", amount: 5000, detail: "Brochures, site web, etc." },
      { name: "Publicité", amount: 5000, detail: "Campagne marketing initiale" },
    ],
    icon: Megaphone,
    color: "success",
  },
  {
    category: "Installations",
    amount: 19200,
    items: [
      { name: "Location Bureau", amount: 18000, detail: "6 mois @ 3 000€/mois" },
      { name: "Utilités", amount: 1200, detail: "Électricité, internet, etc." },
    ],
    icon: Building2,
    color: "warning",
  },
  {
    category: "Contingence",
    amount: 20000,
    items: [{ name: "Buffer", amount: 20000, detail: "7% buffer pour imprévus" }],
    icon: AlertCircle,
    color: "primary",
  },
]

const totalBudget = budgetData.reduce((sum, cat) => sum + cat.amount, 0)

export default function BudgetPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Budget</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Budget détaillé de 362 200 € pour le projet sur 6 mois
          </p>
        </div>

        {/* Total Budget */}
        <section className="mb-12 bg-gradient-to-br from-success/20 to-primary/20 rounded-2xl p-8 text-center">
          <div className="mb-2 text-lg font-medium text-muted-foreground">Budget Total</div>
          <div className="text-5xl font-bold mb-2">{totalBudget.toLocaleString("fr-FR")} €</div>
          <div className="text-sm text-muted-foreground">Durée du projet: 6 mois</div>
        </section>

        {/* Budget Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Répartition Budgétaire</h2>
          <div className="grid gap-6">
            {budgetData.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </section>

        {/* Budget by Phase */}
        <section className="mb-12 bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Budget par Phase</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <PhaseCard phase="Phases 1-2" title="Recherche & Faisabilité" amount="85 000 €" />
            <PhaseCard phase="Phases 3-4" title="Design & Développement" amount="180 000 €" />
            <PhaseCard phase="Phases 5-6" title="Tests & Industrialisation" amount="70 000 €" />
            <PhaseCard phase="Phase 7" title="Préparation Lancement" amount="27 200 €" />
          </div>
        </section>

        {/* Budget Notes */}
        <section className="bg-gradient-to-br from-warning/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Notes Budgétaires</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Salaires basés sur 6 mois de durée projet</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Charges patronales calculées aux taux français standards (~36.5%)</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Coûts hardware pour phase prototype uniquement</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Services cloud estimés pour phase développement</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Budget marketing pour préparation lancement initial</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Buffer contingence pour mitigation des risques</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function CategoryCard({ category }: any) {
  const colorClasses = {
    primary: "bg-primary/5 border-primary/20",
    accent: "bg-accent/5 border-accent/20",
    success: "bg-success/5 border-success/20",
    warning: "bg-warning/5 border-warning/20",
  }

  const Icon = category.icon

  return (
    <div className={`${colorClasses[category.color]} rounded-xl border p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border border-border">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{category.category}</h3>
            <div className="text-2xl font-bold">{category.amount.toLocaleString("fr-FR")} €</div>
          </div>
        </div>
        <div className="text-sm font-medium">{((category.amount / totalBudget) * 100).toFixed(1)}%</div>
      </div>
      <div className="space-y-2">
        {category.items.map((item: any, index: number) => (
          <div key={index} className="flex items-start justify-between p-3 bg-card rounded-lg text-sm">
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.detail}</div>
            </div>
            <div className="font-medium">{item.amount.toLocaleString("fr-FR")} €</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhaseCard({ phase, title, amount }: any) {
  return (
    <div className="bg-muted/50 rounded-lg border border-border p-6 text-center">
      <div className="text-sm font-medium text-muted-foreground mb-1">{phase}</div>
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-2xl font-bold text-primary">{amount}</div>
    </div>
  )
}
