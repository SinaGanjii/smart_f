import { AlertTriangle, Shield, TrendingUp, CheckCircle2, DollarSign } from "lucide-react"

const risks = [
  {
    id: 1,
    title: "Échec Précision Capteurs",
    description:
      "Les capteurs peuvent ne pas fournir lectures précises, causant mauvais suivi inventaire et expérience utilisateur médiocre",
    probability: "Moyenne",
    impact: "Élevé",
    level: "ÉLEVÉ",
    consequences: [
      "Données inventaire alimentaire incorrectes",
      "Prédictions expiration médiocres",
      "Frustration utilisateur et perte de confiance",
      "Échec produit sur le marché",
    ],
    mitigations: [
      "Implémenter capteurs redondants pour mesures critiques",
      "Développer cycles calibration robustes et routines",
      "Utiliser types capteurs multiples pour validation croisée",
      "Implémenter algorithmes détection et correction erreurs",
      "Protocoles maintenance et test réguliers",
      "Fallback vers entrée manuelle si capteurs échouent",
    ],
    budgetImpact: "+3 000 €",
    timeImpact: "+2 semaines",
    color: "destructive",
  },
  {
    id: 2,
    title: "Livraison App Mobile Retardée",
    description:
      "Le développement app mobile peut être retardé à cause de défis techniques, exigences changeantes, ou contraintes ressources",
    probability: "Moyenne",
    impact: "Moyen",
    level: "MOYEN",
    consequences: [
      "Lancement beta retardé",
      "Ensemble fonctionnalités incomplet",
      "Problèmes intégration avec plateforme cloud",
      "Problèmes expérience utilisateur",
    ],
    mitigations: [
      "Démarrer développement app mobile en parallèle avec autres composants",
      "Prioriser fonctionnalités MVP d'abord, différer nice-to-have",
      "Utiliser frameworks éprouvés (React Native/Flutter) pour réduire risque",
      "Implémenter développement agile avec jalons réguliers",
      "Avoir ressources développeur backup disponibles",
      "Revues progression régulières et systèmes alerte précoce",
    ],
    budgetImpact: "+5 000 €",
    timeImpact: "+3 semaines",
    color: "warning",
  },
  {
    id: 3,
    title: "Dépassement Budgétaire",
    description:
      "Coûts projet peuvent excéder budget initial à cause de dépenses imprévues, dérive périmètre, ou changements prix marché",
    probability: "Faible",
    impact: "Élevé",
    level: "MOYEN",
    consequences: [
      "Manque financement projet",
      "Besoin couper fonctionnalités ou qualité",
      "Timeline retardée",
      "Insatisfaction stakeholders",
    ],
    mitigations: [
      "Inclure buffer contingence dans budget (7%)",
      "Négocier contrats prix fixe avec fournisseurs",
      "Monitoring et reporting budget régulier",
      "Processus contrôle changements strict",
      "Identification précoce dépassements coûts",
      "Négociation fournisseurs et optimisation coûts",
      "Approche dépenses progressive",
    ],
    budgetImpact: "Fonds contingence 20 000 € alloué",
    timeImpact: "Peut nécessiter réduction périmètre si dépassement",
    color: "warning",
  },
  {
    id: 4,
    title: "Précision Modèles IA Insuffisante",
    description:
      "Modèles reconnaissance alimentaire et prédiction expiration peuvent ne pas atteindre niveaux précision requis, affectant fonctionnalité produit core",
    probability: "Moyenne",
    impact: "Élevé",
    level: "ÉLEVÉ",
    consequences: [
      "Précision reconnaissance alimentaire médiocre",
      "Prédictions expiration incorrectes",
      "Insatisfaction utilisateur",
      "Produit ne répond pas aux attentes marché",
    ],
    mitigations: [
      "Collection et curation extensive datasets",
      "Test architectures modèles multiples",
      "Transfer learning depuis modèles éprouvés",
      "Pipeline amélioration continue modèles",
      "Option fallback vers entrée manuelle",
      "Intégration feedback utilisateur pour amélioration modèles",
      "Démarrer développement IA tôt en Phase 2",
    ],
    budgetImpact: "+5 000 €",
    timeImpact: "+4 semaines",
    color: "destructive",
  },
  {
    id: 5,
    title: "Problèmes Conformité Réglementaire",
    description:
      "Produit peut ne pas répondre exigences réglementaires (marquage CE, standards sécurité, confidentialité données), empêchant lancement marché",
    probability: "Faible",
    impact: "Élevé",
    level: "MOYEN",
    consequences: [
      "Impossible lancer sur marchés cibles",
      "Problèmes légaux",
      "Amendes et pénalités",
      "Dommages réputation",
    ],
    mitigations: [
      "Recherche et planification réglementaire précoce",
      "Engager consultants conformité tôt",
      "Concevoir avec conformité à l'esprit dès début",
      "Revues conformité régulières tout au long développement",
      "Allouer temps pour processus certification",
      "Conformité RGPD depuis phase conception",
    ],
    budgetImpact: "+8 000 €",
    timeImpact: "+6 semaines",
    color: "warning",
  },
  {
    id: 6,
    title: "Intégration Cloud Complexe",
    description: "Défis intégration backend cloud, scalabilité, et fiabilité peuvent impacter fonctionnalité système",
    probability: "Faible",
    impact: "Moyen",
    level: "FAIBLE",
    consequences: ["Problèmes synchronisation données", "Problèmes performance", "Expérience utilisateur dégradée"],
    mitigations: [
      "Utiliser plateformes cloud établies et prouvées",
      "Implémenter testing extensive et monitoring",
      "Planifier scalabilité depuis début",
      "Backup et systèmes redondance",
    ],
    budgetImpact: "+2 000 €",
    timeImpact: "+2 semaines",
    color: "warning",
  },
]

export default function RisksPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Gestion des Risques</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Identification de 6 risques majeurs avec évaluation probabilité/impact et stratégies de mitigation
          </p>
        </div>

        {/* Risk Overview */}
        <section className="mb-12 grid gap-6 sm:grid-cols-3">
          <RiskLevelCard level="ÉLEVÉ" count={2} color="destructive" />
          <RiskLevelCard level="MOYEN" count={3} color="warning" />
          <RiskLevelCard level="FAIBLE" count={1} color="success" />
        </section>

        {/* Risk Matrix */}
        <section className="mb-12 bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Matrice des Risques</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Risque</th>
                  <th className="px-4 py-3 text-center font-semibold">Probabilité</th>
                  <th className="px-4 py-3 text-center font-semibold">Impact</th>
                  <th className="px-4 py-3 text-center font-semibold">Niveau</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk) => (
                  <tr key={risk.id} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{risk.title}</td>
                    <td className="px-4 py-3 text-center">{risk.probability}</td>
                    <td className="px-4 py-3 text-center">{risk.impact}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          risk.level === "ÉLEVÉ"
                            ? "bg-destructive/10 text-destructive"
                            : risk.level === "MOYEN"
                              ? "bg-warning/10 text-warning"
                              : "bg-success/10 text-success"
                        }`}
                      >
                        {risk.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Risks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Détails des Risques</h2>
          <div className="space-y-6">
            {risks.map((risk) => (
              <RiskDetailCard key={risk.id} risk={risk} />
            ))}
          </div>
        </section>

        {/* Risk Management Strategy */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Stratégie de Gestion des Risques</h2>
              <p className="text-muted-foreground">Approche proactive pour identifier et mitiger les risques</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <StrategyCard title="Identification Précoce" description="Identifier risques dès phases initiales projet" />
            <StrategyCard
              title="Évaluation Continue"
              description="Réévaluer risques régulièrement tout au long projet"
            />
            <StrategyCard
              title="Plans Mitigation"
              description="Stratégies mitigation claires pour chaque risque identifié"
            />
            <StrategyCard title="Fonds Contingence" description="Buffer budgétaire alloué pour risques imprévus" />
          </div>
        </section>
      </div>
    </div>
  )
}

function RiskLevelCard({ level, count, color }: any) {
  const colorClasses = {
    destructive: "bg-destructive/10 text-destructive border-destructive/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    success: "bg-success/10 text-success border-success/20",
  }

  return (
    <div className={`${colorClasses[color]} rounded-xl border p-6 text-center`}>
      <AlertTriangle className="h-8 w-8 mx-auto mb-3" />
      <div className="text-3xl font-bold mb-1">{count}</div>
      <div className="text-sm font-medium">Risques {level}</div>
    </div>
  )
}

function RiskDetailCard({ risk }: any) {
  const borderColorClasses = {
    destructive: "border-l-destructive",
    warning: "border-l-warning",
    success: "border-l-success",
  }

  return (
    <div className={`bg-card rounded-lg border-l-4 ${borderColorClasses[risk.color]} border border-border p-6`}>
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold">
            Risque {risk.id}: {risk.title}
          </h3>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              risk.level === "ÉLEVÉ"
                ? "bg-destructive/10 text-destructive"
                : risk.level === "MOYEN"
                  ? "bg-warning/10 text-warning"
                  : "bg-success/10 text-success"
            }`}
          >
            {risk.level}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{risk.description}</p>
        <div className="flex gap-4 text-sm">
          <div>
            <span className="font-medium">Probabilité:</span> {risk.probability}
          </div>
          <div>
            <span className="font-medium">Impact:</span> {risk.impact}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-4">
        <div>
          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            Conséquences Potentielles
          </h4>
          <ul className="space-y-2">
            {risk.consequences.map((consequence: string, index: number) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{consequence}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
            <Shield className="h-4 w-4 text-success" />
            Stratégies de Mitigation
          </h4>
          <ul className="space-y-2">
            {risk.mitigations.map((mitigation: string, index: number) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>{mitigation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-6 pt-4 border-t border-border text-sm">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span>
            <span className="font-medium">Impact Budget:</span> {risk.budgetImpact}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
          <span>
            <span className="font-medium">Impact Temps:</span> {risk.timeImpact}
          </span>
        </div>
      </div>
    </div>
  )
}

function StrategyCard({ title, description }: any) {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  )
}
