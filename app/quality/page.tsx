"use client"

import { Shield, CheckCircle2, AlertTriangle, FileText, TrendingUp, Users, Award, Eye } from "lucide-react"

export default function QualityPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Gestion de la Qualité</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Plan complet de gestion de la qualité incluant la conformité réglementaire, les normes, les tests, la
            validation, et l'amélioration continue
          </p>
        </div>

        {/* Quality Pillars */}
        <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <QualityPillarCard
            icon={<Shield />}
            title="Conformité"
            description="Standards réglementaires"
            color="bg-blue-500/10 text-blue-600"
          />
          <QualityPillarCard
            icon={<CheckCircle2 />}
            title="Tests"
            description="Validation complète"
            color="bg-emerald-500/10 text-emerald-600"
          />
          <QualityPillarCard
            icon={<TrendingUp />}
            title="Amélioration"
            description="Processus continu"
            color="bg-purple-500/10 text-purple-600"
          />
          <QualityPillarCard
            icon={<Award />}
            title="Excellence"
            description="Standards élevés"
            color="bg-amber-500/10 text-amber-600"
          />
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            1. Conformité Réglementaire
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <ComplianceCard
              title="Marquage CE (European Conformity)"
              standards={["EN 60335-2-24: Sécurité appareils ménagers", "EN 55014: Compatibilité électromagnétique"]}
              requirements={[
                "Tests de sécurité électrique",
                "Tests EMC",
                "Documentation technique",
                "Déclaration de conformité UE",
              ]}
              timeline="Phase 5: Tests de conformité (Semaines 24-26)"
              impact={{ budget: "+8 000 €", time: "+6 semaines" }}
            />
            <ComplianceCard
              title="Conformité IoT & Cybersécurité"
              standards={[
                "ISO/IEC 27001: Sécurité information",
                "ETSI EN 303 645: Cybersécurité IoT",
                "Directive NIS2 (Network and Information Security)",
              ]}
              requirements={[
                "Chiffrement données",
                "Authentification sécurisée",
                "Mises à jour OTA sécurisées",
                "Audits de sécurité",
              ]}
              timeline="Phase 3: Définition sécurité, Phase 5: Tests"
              impact={{ budget: "+5 000 €", time: "+2 semaines" }}
            />
            <ComplianceCard
              title="RGPD (Règlement Général sur la Protection des Données)"
              standards={["RGPD EU 2016/679", "ePrivacy Directive", "Data Protection Impact Assessment"]}
              requirements={[
                "Consentement utilisateur explicite",
                "Politique de confidentialité",
                "Droit à l'effacement",
                "Minimisation des données",
                "Registre des traitements",
              ]}
              timeline="Phase 2-7: Intégré dès la conception"
              impact={{ budget: "+3 000 €", time: "+2 semaines" }}
            />
            <ComplianceCard
              title="Efficacité Énergétique"
              standards={["Directive ErP (Energy-related Products)", "Label énergétique UE"]}
              requirements={[
                "Tests consommation énergétique",
                "Documentation performance",
                "Label énergétique",
                "Écoconception",
              ]}
              timeline="Phase 5: Tests énergétiques"
              impact={{ budget: "+2 000 €", time: "+1 semaine" }}
            />
          </div>
        </section>

        {/* Standards and Norms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            2. Normes et Standards
          </h2>
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <StandardCategory
                title="ISO 9001 - Qualité Management"
                items={[
                  "Documentation processus qualité",
                  "Revues qualité régulières",
                  "Amélioration continue",
                  "Gestion non-conformités",
                ]}
              />
              <StandardCategory
                title="API & Interopérabilité"
                items={[
                  "REST API standards",
                  "OpenAPI/Swagger documentation",
                  "Versioning APIs",
                  "Intégration smart home (Matter, Zigbee)",
                ]}
              />
              <StandardCategory
                title="Développement Logiciel"
                items={[
                  "Clean Code practices",
                  "Git workflow",
                  "Code reviews",
                  "Tests unitaires & intégration",
                  "CI/CD pipelines",
                ]}
              />
              <StandardCategory
                title="Documentation"
                items={[
                  "Documentation technique complète",
                  "Manuels utilisateur",
                  "API documentation",
                  "Guides installation",
                  "Troubleshooting guides",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Testing Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            3. Stratégie de Tests & Validation
          </h2>
          <div className="space-y-6">
            <TestingPhaseCard
              phase="Tests Unitaires"
              description="Tests de chaque composant individuel"
              coverage=">80% couverture code"
              tools={["Jest", "PyTest", "ESP-IDF Unit Tests"]}
              timeline="Phase 4: Développement prototype"
              responsibilities="Chaque développeur teste son code"
            />
            <TestingPhaseCard
              phase="Tests d'Intégration"
              description="Tests des interactions entre composants"
              coverage="Tous les flux critiques"
              tools={["Postman", "Integration test suites"]}
              timeline="Phase 4-5"
              responsibilities="IoT Engineer, Cloud Architect, Mobile Developer"
            />
            <TestingPhaseCard
              phase="Tests Fonctionnels"
              description="Validation des fonctionnalités utilisateur"
              coverage="100% des features MVP"
              tools={["Selenium", "Appium", "Manual testing"]}
              timeline="Phase 5: Semaines 23-24"
              responsibilities="QA Team, Product Manager"
            />
            <TestingPhaseCard
              phase="Tests de Charge & Performance"
              description="Tests sous charge, scalabilité, fiabilité"
              coverage="Scénarios haute charge"
              tools={["Apache JMeter", "K6", "Cloud load testing"]}
              timeline="Phase 5: Semaines 23-24"
              responsibilities="Cloud Architect"
            />
            <TestingPhaseCard
              phase="Tests d'Usabilité"
              description="Tests avec utilisateurs réels"
              coverage="Parcours utilisateur complets"
              tools={["UserTesting", "Surveys", "Analytics"]}
              timeline="Phase 5: Semaines 24-25"
              responsibilities="Mobile Developer, Product Manager"
            />
            <TestingPhaseCard
              phase="Tests de Sécurité"
              description="Audits de sécurité et tests de pénétration"
              coverage="Tous les vecteurs d'attaque"
              tools={["OWASP ZAP", "Security audits", "Penetration testing"]}
              timeline="Phase 5: Semaines 24-26"
              responsibilities="Cybersecurity Consultant"
            />
          </div>
        </section>

        {/* Continuous Improvement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            4. Amélioration Continue
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Boucles de Feedback
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Feedback Utilisateurs:</strong> Système de collecte intégré dans l'app
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Programme Beta:</strong> 50-100 utilisateurs beta (Phase 6-7)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Enquêtes Régulières:</strong> NPS, satisfaction, feature requests
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Support Client:</strong> Tickets, issues, feature requests
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                Analytics et Monitoring
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Usage Analytics:</strong> Statistiques utilisation features
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Performance Monitoring:</strong> Uptime, latence, erreurs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Error Tracking:</strong> Sentry, logs, crash reports
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Décisions Data-Driven:</strong> Priorisation basée sur données
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Métriques de Qualité & Objectifs</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              title="Qualité Fonctionnelle"
              metrics={[
                "Complétude features MVP: 100%",
                "Bugs critiques: <5 par 1000 lignes",
                "Couverture tests: >80%",
              ]}
            />
            <MetricCard
              title="Qualité Performance"
              metrics={[
                "Temps réponse app: <2s",
                "Réponse API cloud: <500ms",
                "Uptime système: >99.5%",
                "Précision capteurs: >95%",
              ]}
            />
            <MetricCard
              title="Qualité UX"
              metrics={[
                "Score satisfaction: >4.0/5.0",
                "Note app store: >4.0/5.0",
                "Taux complétion: >90%",
                "Taux d'erreur: <1%",
              ]}
            />
          </div>
        </section>

        {/* Impact on Project Planning */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Impact sur la Planification du Projet</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ImpactCard
              title="Gantt Chart"
              items={[
                "Tâches conformité ajoutées (toutes phases)",
                "Phase 5 dédiée aux tests (4 semaines)",
                "Programme beta Phase 6-7",
                "Revues qualité régulières",
              ]}
            />
            <ImpactCard
              title="Budget"
              items={[
                "Consulting conformité: 8 000 €",
                "Équipement tests: 3 000 €",
                "Services tests externes: 2 000 €",
                "Outils analytics: 1 000 €",
                "Programme beta: 2 000 €",
              ]}
            />
            <ImpactCard
              title="Ressources"
              items={[
                "QA Engineer (temps partiel)",
                "Consultant conformité",
                "Accès laboratoires tests",
                "Outils analytics & monitoring",
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function QualityPillarCard({ icon, title, description, color }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function ComplianceCard({ title, standards, requirements, timeline, impact }: any) {
  return (
    <div className="bg-card rounded-xl border-2 border-border p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="space-y-4 text-sm">
        <div>
          <div className="font-semibold text-muted-foreground mb-2">Standards:</div>
          <ul className="space-y-1 pl-4">
            {standards.map((std: string, i: number) => (
              <li key={i} className="list-disc">
                {std}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-muted-foreground mb-2">Exigences:</div>
          <ul className="space-y-1 pl-4">
            {requirements.map((req: string, i: number) => (
              <li key={i} className="list-disc">
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-muted-foreground mb-1">Timeline:</div>
          <div className="text-xs">{timeline}</div>
        </div>
        <div className="pt-3 border-t border-border flex gap-4">
          <div>
            <div className="font-semibold text-xs text-muted-foreground">Budget</div>
            <div className="text-sm font-medium">{impact.budget}</div>
          </div>
          <div>
            <div className="font-semibold text-xs text-muted-foreground">Temps</div>
            <div className="text-sm font-medium">{impact.time}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StandardCategory({ title, items }: any) {
  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TestingPhaseCard({ phase, description, coverage, tools, timeline, responsibilities }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold">{phase}</h3>
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="space-y-3 text-sm">
        <div>
          <span className="font-semibold text-muted-foreground">Couverture: </span>
          <span>{coverage}</span>
        </div>
        <div>
          <span className="font-semibold text-muted-foreground">Outils: </span>
          <span>{tools.join(", ")}</span>
        </div>
        <div>
          <span className="font-semibold text-muted-foreground">Timeline: </span>
          <span>{timeline}</span>
        </div>
        <div>
          <span className="font-semibold text-muted-foreground">Responsables: </span>
          <span>{responsibilities}</span>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, metrics }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {metrics.map((metric: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ImpactCard({ title, items }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
