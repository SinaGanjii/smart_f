import { Package, Cpu, Cloud, Building2, Wrench, CheckCircle2 } from "lucide-react"

const resources = [
  { name: "Capteurs Température", qty: 5, category: "IoT", purpose: "Suivi température", notes: "Phase prototype" },
  { name: "Capteurs Humidité", qty: 3, category: "IoT", purpose: "Suivi humidité", notes: "Phase prototype" },
  { name: "Load Cells (HX711)", qty: 8, category: "IoT", purpose: "Suivi poids", notes: "Gestion inventaire" },
  {
    name: "Modules Caméra",
    qty: 2,
    category: "Vision",
    purpose: "Reconnaissance alimentaire",
    notes: "Phase prototype",
  },
  { name: "Cartes ESP32", qty: 4, category: "MCU", purpose: "Contrôle capteurs", notes: "Phase prototype" },
  { name: "Raspberry Pi 4", qty: 1, category: "Test IA", purpose: "Inférence modèles", notes: "Tests IA" },
  { name: "Instance Cloud", qty: 1, category: "Cloud", purpose: "Hébergement backend", notes: "AWS/Firebase" },
  {
    name: "Pièces Imprimées 3D",
    qty: "N/A",
    category: "Mécanique",
    purpose: "Boîtiers prototype",
    notes: "Structure test",
  },
  {
    name: "Outils Développement",
    qty: "1 set",
    category: "Logiciel",
    purpose: "Env. développement",
    notes: "IDEs, compilateurs",
  },
  { name: "Équipement Test", qty: "1 set", category: "QA", purpose: "Assurance qualité", notes: "Oscilloscopes, etc." },
  { name: "Espace Bureau", qty: 1, category: "Installation", purpose: "Espace équipe", notes: "Location 6 mois" },
  { name: "Salles Réunion", qty: 1, category: "Installation", purpose: "Réunions équipe", notes: "Inclus bureau" },
  { name: "Connexion Internet", qty: 1, category: "IT", purpose: "Dev & tests", notes: "Haut débit requis" },
  { name: "Licences Logiciels", qty: "Multiple", category: "Logiciel", purpose: "Outils dev", notes: "IDEs, design" },
  { name: "Services Cloud", qty: "Multiple", category: "Cloud", purpose: "Dev & production", notes: "AWS, Firebase" },
  {
    name: "Matériaux Prototype",
    qty: "Divers",
    category: "Matériaux",
    purpose: "Construction prototype",
    notes: "Composants divers",
  },
]

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Ressources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Inventaire complet des ressources matérielles, logicielles, et infrastructures nécessaires
          </p>
        </div>

        {/* Resource Categories */}
        <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CategoryCard icon={<Cpu />} title="IoT & Capteurs" count="20+" color="primary" />
          <CategoryCard icon={<Cloud />} title="Cloud & Services" count="5+" color="accent" />
          <CategoryCard icon={<Package />} title="Hardware" count="15+" color="success" />
          <CategoryCard icon={<Building2 />} title="Infrastructures" count="3+" color="warning" />
        </section>

        {/* Resource Table */}
        <section className="mb-12 bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold">Inventaire des Ressources</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Nom Ressource</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Quantité</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Catégorie</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Objectif</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource, index) => (
                  <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium">{resource.name}</td>
                    <td className="px-6 py-4">{resource.qty}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {resource.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{resource.purpose}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{resource.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Resource Timeline */}
        <section className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Timeline d'Acquisition</h2>
          <div className="space-y-4">
            <TimelineItem phase="Phase 1" items={["Espace bureau", "Outils développement de base"]} />
            <TimelineItem phase="Phase 2" items={["Capteurs", "Microcontrôleurs", "Équipement test"]} />
            <TimelineItem phase="Phase 3" items={["Capteurs supplémentaires", "Services cloud"]} />
            <TimelineItem phase="Phase 4" items={["Matériaux prototype complets", "Infrastructure cloud"]} />
            <TimelineItem phase="Phase 5" items={["Équipement test", "Outils QA"]} />
            <TimelineItem phase="Phase 6" items={["Ressources planification production"]} />
            <TimelineItem phase="Phase 7" items={["Matériaux marketing", "Ressources branding"]} />
          </div>
        </section>

        {/* Resource Constraints */}
        <section className="bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Contraintes Ressources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <ConstraintCard
              icon={<Wrench />}
              title="Délais de Livraison"
              description="Certaines ressources peuvent avoir des délais de livraison"
            />
            <ConstraintCard
              icon={<Package />}
              title="Contraintes Budgétaires"
              description="Acquisition progressive selon budget disponible"
            />
            <ConstraintCard
              icon={<CheckCircle2 />}
              title="Ressources Partagées"
              description="Certaines ressources partagées entre phases"
            />
            <ConstraintCard
              icon={<Cloud />}
              title="Scaling Cloud"
              description="Ressources cloud évolutives selon usage"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function CategoryCard({ icon, title, count, color }: any) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{count}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  )
}

function TimelineItem({ phase, items }: any) {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="font-semibold mb-2">{phase}</div>
      <ul className="space-y-1">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ConstraintCard({ icon, title, description }: any) {
  return (
    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-card border border-border">
        {icon}
      </div>
      <div>
        <div className="font-semibold mb-1">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
