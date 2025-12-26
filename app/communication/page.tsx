"use client"

import { Mail, Users, MessageSquare, FileText, Send, Target, Calendar, CheckCircle2 } from "lucide-react"

export default function CommunicationPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Plan de Communication</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stratégie de communication complète avec templates professionnels pour l'équipe interne, les investisseurs,
            et les stakeholders
          </p>
        </div>

        {/* Communication Strategy Overview */}
        <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StrategyCard
            icon={<Users />}
            title="Équipe Interne"
            description="Collaboration quotidienne"
            color="bg-blue-500/10 text-blue-600"
          />
          <StrategyCard
            icon={<Target />}
            title="Investisseurs"
            description="Rapports réguliers"
            color="bg-purple-500/10 text-purple-600"
          />
          <StrategyCard
            icon={<MessageSquare />}
            title="Stakeholders"
            description="Mises à jour clés"
            color="bg-emerald-500/10 text-emerald-600"
          />
          <StrategyCard
            icon={<FileText />}
            title="Documentation"
            description="Livrables formels"
            color="bg-amber-500/10 text-amber-600"
          />
        </section>

        {/* Communication Template 1 - Internal Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            Communication 1: Équipe Interne
          </h2>
          <div className="bg-card rounded-xl border-2 border-border p-8 shadow-lg">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Type de Document</div>
                <div className="font-semibold">Email Interne</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Audience</div>
                <div className="font-semibold">Membres de l'Équipe Projet</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="font-bold text-lg mb-2">OBJET: Smart Fridge Project Kickoff - Approche de Gestion</div>
                <div className="text-sm text-muted-foreground mb-4">groupname_communication1</div>

                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Cher Équipe,</p>

                  <p>
                    Je suis ravi de lancer officiellement le projet Smart Fridge et de présenter notre approche de
                    gestion pour cette entreprise ambitieuse.
                  </p>

                  <div>
                    <p className="font-semibold mb-2">APERÇU DU PROJET:</p>
                    <p>
                      Nous nous lançons dans un exercice complet de gestion de projet pour planifier et évaluer un
                      réfrigérateur intelligent de nouvelle génération. Il s'agit d'une étude de planification et de
                      faisabilité - nous ne construirons pas de matériel physique, mais nous créerons une feuille de
                      route complète du concept à la commercialisation.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">NOTRE APPROCHE DE GESTION:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        <strong>PLANIFICATION ITÉRATIVE:</strong> Approche récursive et itérative avec mises à jour
                        régulières des documents (Gantt, budget, ressources).
                      </li>
                      <li>
                        <strong>JALONS CLAIRS:</strong> 3 jalons investisseurs majeurs - Proof of Concept,
                        Prototype/Pilote, Industrialisation/Commercialisation.
                      </li>
                      <li>
                        <strong>COMMUNICATION TRANSPARENTE:</strong> Standups hebdomadaires (lundis 9h), revues
                        bi-hebdomadaires, mises à jour mensuelles stakeholders.
                      </li>
                      <li>
                        <strong>GESTION DES RISQUES:</strong> 6 risques majeurs identifiés avec stratégies de
                        mitigation. Signaler immédiatement tout nouveau risque.
                      </li>
                      <li>
                        <strong>FOCUS QUALITÉ:</strong> Qualité intégrée à chaque phase - conformité réglementaire,
                        tests continus, feedback utilisateur.
                      </li>
                      <li>
                        <strong>GESTION DES RESSOURCES:</strong> Définitions de rôles claires, allocation par phase,
                        suivi budgétaire, planification contingence.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">LIVRABLES ATTENDUS:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Diagramme de Gantt (mis à jour régulièrement)</li>
                      <li>Document compétences et personas</li>
                      <li>Inventaire des ressources</li>
                      <li>Proposition budgétaire</li>
                      <li>Plan de gestion des risques</li>
                      <li>Plan de gestion de la qualité</li>
                      <li>Documents de communication</li>
                      <li>Présentation finale</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">PROCHAINES ÉTAPES:</p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Examiner cet email et la documentation du projet</li>
                      <li>Se familiariser avec votre rôle et responsabilités</li>
                      <li>Préparer les questions pour notre réunion de lancement (Date: À déterminer)</li>
                      <li>Commencer les tâches Phase 1 assignées</li>
                    </ol>
                  </div>

                  <p>
                    Je suis convaincu qu'avec notre approche collaborative et notre cadre de gestion clair, nous
                    obtiendrons des résultats exceptionnels. Construisons quelque chose d'incroyable ensemble!
                  </p>

                  <p className="font-semibold">
                    Cordialement,
                    <br />
                    [Nom du Chef de Projet]
                    <br />
                    Chef de Projet Smart Fridge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Template 2 - Executive Budget Request */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Send className="h-8 w-8 text-primary" />
            Communication 2: Demande de Budget Exécutif
          </h2>
          <div className="bg-card rounded-xl border-2 border-border p-8 shadow-lg">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Type de Document</div>
                <div className="font-semibold">Lettre Commerciale Formelle / Email</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Audience</div>
                <div className="font-semibold">Conseil d'Administration / Exécutif</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="font-bold text-lg mb-2">
                  OBJET: Demande de Budget - Phase de Planification Projet Smart Fridge
                </div>
                <div className="text-sm text-muted-foreground mb-4">groupname_communication2</div>

                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Cher [Nom de l'Exécutif],</p>

                  <p>
                    Je vous écris pour demander formellement l'approbation du budget du projet Smart Fridge de{" "}
                    <strong>362 200 €</strong> pour la phase d'étude de planification et faisabilité de 6 mois.
                  </p>

                  <div>
                    <p className="font-semibold mb-2">CONTEXTE DU PROJET:</p>
                    <p>
                      Le projet Smart Fridge représente une opportunité significative d'entrer sur le marché émergent
                      des appareils électroménagers intelligents. Ce projet évaluera la faisabilité complète, de la
                      viabilité du marché à la mise en œuvre technique, fournissant une feuille de route claire pour la
                      commercialisation.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">JUSTIFICATION DU BUDGET:</p>

                    <div className="space-y-3 pl-4">
                      <div>
                        <p className="font-semibold">1. SALAIRES ÉQUIPE (205 000 €)</p>
                        <p>
                          Notre équipe de 6 spécialistes est essentielle pour une évaluation complète du projet: IoT
                          Engineer, Embedded Developer, Mobile Developer, AI Engineer, Cloud Architect, Product Manager.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">2. CHARGES PATRONALES (75 000 €)</p>
                        <p>Charges sociales standard requises par la loi française (~36,5% des salaires).</p>
                      </div>

                      <div>
                        <p className="font-semibold">3. HARDWARE & PROTOTYPAGE (20 000 €)</p>
                        <p>
                          Critique pour la validation de faisabilité technique: évaluation capteurs, développement
                          prototype, équipement de test.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">4. LOGICIEL & SERVICES CLOUD (3 000 €)</p>
                        <p>Outils de développement, infrastructure cloud pour les tests, licences logicielles.</p>
                      </div>

                      <div>
                        <p className="font-semibold">5. TESTS & QA (5 000 €)</p>
                        <p>Installations de tests externes, appareils de test, outils QA.</p>
                      </div>

                      <div>
                        <p className="font-semibold">6. PRÉPARATION MARKETING (15 000 €)</p>
                        <p>Branding, matériaux marketing, préparation campagne initiale.</p>
                      </div>

                      <div>
                        <p className="font-semibold">7. INSTALLATIONS (19 200 €)</p>
                        <p>Espace bureau et services publics pour 6 mois.</p>
                      </div>

                      <div>
                        <p className="font-semibold">8. CONTINGENCE (20 000 €)</p>
                        <p>Buffer de 7% pour les dépenses imprévues.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">POURQUOI CET INVESTISSEMENT EST NÉCESSAIRE:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Opportunité de Marché:</strong> Marché smart fridge en croissance rapide avec lacunes
                        significatives dans les offres actuelles.
                      </li>
                      <li>
                        <strong>Atténuation des Risques:</strong> Cette phase de planification permet d'identifier et
                        d'atténuer les risques avant de s'engager dans la production complète.
                      </li>
                      <li>
                        <strong>Exigences Investisseurs:</strong> Nos investisseurs attendent des jalons clairs et des
                        livrables.
                      </li>
                      <li>
                        <strong>Avantage Compétitif:</strong> Une planification approfondie nous donnera un avantage
                        significatif.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">RETOUR SUR INVESTISSEMENT:</p>
                    <p>Bien qu'il s'agisse d'une phase de planification, les livrables fourniront:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cadre de décision go/no-go clair</li>
                      <li>Feuille de route détaillée réduisant le time-to-market</li>
                      <li>Atténuation des risques économisant potentiellement des millions</li>
                      <li>Fondation solide pour présentations investisseurs</li>
                      <li>Validation technique avant investissement capital majeur</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">RÉPARTITION BUDGÉTAIRE PAR PHASE:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Phase 1-2 (Recherche & Faisabilité): 85 000 €</li>
                      <li>Phase 3-4 (Conception & Développement): 180 000 €</li>
                      <li>Phase 5-6 (Tests & Industrialisation): 70 000 €</li>
                      <li>Phase 7 (Préparation Lancement): 27 200 €</li>
                    </ul>
                  </div>

                  <p>
                    Nous avons soigneusement optimisé les coûts tout en garantissant une analyse de faisabilité complète
                    et précise. Chaque euro est alloué aux besoins critiques du projet.
                  </p>

                  <p>
                    Je suis disponible pour discuter de ce budget en détail et répondre à toutes vos questions. Je
                    sollicite respectueusement votre approbation pour procéder à cet investissement dans notre avenir.
                  </p>

                  <p>Merci pour votre considération.</p>

                  <p className="font-semibold">
                    Cordialement,
                    <br />
                    [Nom du Chef de Projet]
                    <br />
                    Chef de Projet Smart Fridge
                    <br />
                    Contact: [Email] | [Téléphone]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Strategy Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Timeline de Communication
          </h2>
          <div className="space-y-4">
            <TimelineItem
              phase="Quotidien"
              frequency="Daily"
              audience="Équipe Interne"
              method="Slack / Teams"
              content="Mises à jour rapides, questions, résolution problèmes"
            />
            <TimelineItem
              phase="Hebdomadaire"
              frequency="Lundi 9h"
              audience="Équipe Interne"
              method="Standup Meeting"
              content="Progrès, blocages, plans de la semaine"
            />
            <TimelineItem
              phase="Bi-hebdomadaire"
              frequency="Toutes les 2 semaines"
              audience="Équipe + Product Manager"
              method="Revue de Progrès"
              content="Jalons atteints, risques, ajustements planning"
            />
            <TimelineItem
              phase="Mensuel"
              frequency="Fin de mois"
              audience="Stakeholders / Investisseurs"
              method="Rapport Email"
              content="Avancement phases, budget, risques, prochaines étapes"
            />
            <TimelineItem
              phase="Par Jalon"
              frequency="7 fois"
              audience="Board / Exécutifs"
              method="Présentation Formelle"
              content="Validation jalons, décisions go/no-go, approbations"
            />
          </div>
        </section>

        {/* Communication Best Practices */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Meilleures Pratiques de Communication</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BestPracticeCard
              title="Clarté"
              items={["Messages concis et précis", "Objectifs clairs", "Actions définies"]}
            />
            <BestPracticeCard
              title="Transparence"
              items={["Partager progrès ET défis", "Escalader problèmes tôt", "Honnêteté sur risques"]}
            />
            <BestPracticeCard
              title="Régularité"
              items={["Respect des fréquences", "Updates programmées", "Disponibilité constante"]}
            />
            <BestPracticeCard
              title="Adaptation"
              items={["Ton adapté à l'audience", "Niveau détail approprié", "Format pertinent"]}
            />
            <BestPracticeCard
              title="Documentation"
              items={["Tout par écrit", "Archivage communications", "Traçabilité décisions"]}
            />
            <BestPracticeCard title="Feedback" items={["Encourager questions", "Écoute active", "Boucles de retour"]} />
          </div>
        </section>
      </div>
    </div>
  )
}

function StrategyCard({ icon, title, description, color }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function TimelineItem({ phase, frequency, audience, method, content }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 grid gap-3 sm:grid-cols-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Phase</div>
            <div className="font-semibold">{phase}</div>
            <div className="text-xs text-muted-foreground">{frequency}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Audience</div>
            <div className="font-medium text-sm">{audience}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Méthode</div>
            <div className="font-medium text-sm">{method}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Contenu</div>
            <div className="text-sm">{content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BestPracticeCard({ title, items }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
