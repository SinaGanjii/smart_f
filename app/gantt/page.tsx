"use client"

import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Package,
  AlertCircle,
} from "lucide-react"
import { useState } from "react"

const phases = [
  {
    id: 1,
    name: "Research & Concept",
    weeks: 4,
    startWeek: 1,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    tasks: [
      {
        id: "1.1",
        name: "Étude de Marché",
        weeks: 2,
        startWeek: 1,
        assignee: "Product Manager",
        deliverable: "Market research report",
        dependencies: [],
      },
      {
        id: "1.2",
        name: "Segmentation Clients",
        weeks: 1.5,
        startWeek: 1,
        assignee: "Product Manager",
        deliverable: "Segmentation analysis",
        dependencies: [],
      },
      {
        id: "1.3",
        name: "Benchmark Concurrents",
        weeks: 2,
        startWeek: 2,
        assignee: "Product Manager",
        deliverable: "Competitive analysis",
        dependencies: ["1.1"],
      },
      {
        id: "1.4",
        name: "Spécification Produit v1",
        weeks: 2,
        startWeek: 2.5,
        assignee: "Product Manager",
        deliverable: "Product specification document",
        dependencies: ["1.1", "1.2", "1.3"],
      },
    ],
  },
  {
    id: 2,
    name: "Technical Feasibility",
    weeks: 6,
    startWeek: 5,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    tasks: [
      {
        id: "2.1",
        name: "Évaluation Capteurs",
        weeks: 3,
        startWeek: 5,
        assignee: "IoT Engineer",
        deliverable: "Sensor evaluation report",
        dependencies: [],
      },
      {
        id: "2.2",
        name: "Faisabilité Caméra",
        weeks: 3,
        startWeek: 5,
        assignee: "IoT Engineer",
        deliverable: "Camera feasibility study",
        dependencies: [],
      },
      {
        id: "2.3",
        name: "Prototype Embarqué",
        weeks: 4,
        startWeek: 6,
        assignee: "Embedded Developer",
        deliverable: "Working prototype",
        dependencies: ["2.1"],
      },
      {
        id: "2.4",
        name: "Test Faisabilité IA",
        weeks: 5,
        startWeek: 5,
        assignee: "AI Engineer",
        deliverable: "AI feasibility report",
        dependencies: [],
      },
      {
        id: "2.5",
        name: "Prototype App Mobile (Design)",
        weeks: 4,
        startWeek: 6,
        assignee: "Mobile Developer",
        deliverable: "App design mockups",
        dependencies: [],
      },
    ],
  },
  {
    id: 3,
    name: "Product Design",
    weeks: 4,
    startWeek: 11,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
    tasks: [
      {
        id: "3.1",
        name: "Architecture Système",
        weeks: 2,
        startWeek: 11,
        assignee: "Cloud Architect",
        deliverable: "Architecture diagram - Overall system design, component interactions, data flow",
        dependencies: ["2.3", "2.4"],
      },
      {
        id: "3.2",
        name: "Design Réseau Capteurs",
        weeks: 2,
        startWeek: 11,
        assignee: "IoT Engineer",
        deliverable: "Sensor network design - Placement, topology, protocols",
        dependencies: ["2.1", "2.2"],
      },
      {
        id: "3.3",
        name: "Pipeline Données IoT",
        weeks: 2,
        startWeek: 12,
        assignee: "Cloud Architect + IoT Engineer",
        deliverable: "Data pipeline design - Collection, processing, storage architecture",
        dependencies: ["3.1", "3.2"],
      },
      {
        id: "3.4",
        name: "Wireframes App Complets",
        weeks: 3,
        startWeek: 11,
        assignee: "Mobile Developer",
        deliverable: "Complete wireframes - Full app design, UI mockups, interaction design",
        dependencies: ["2.5"],
      },
      {
        id: "3.5",
        name: "Architecture Cloud Complète",
        weeks: 2,
        startWeek: 13,
        assignee: "Cloud Architect",
        deliverable: "Cloud architecture document - Infrastructure, database schema, API design",
        dependencies: ["3.1", "3.3"],
      },
    ],
  },
  {
    id: 4,
    name: "Prototype Development",
    weeks: 8,
    startWeek: 15,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500",
    textColor: "text-amber-600",
    tasks: [
      {
        id: "4.1",
        name: "Intégration Complète Capteurs",
        weeks: 4,
        startWeek: 15,
        assignee: "IoT Engineer",
        deliverable: "Integrated sensor system - All sensors integrated, calibration routines, data collection",
        dependencies: ["3.2"],
      },
      {
        id: "4.2",
        name: "Firmware Embarqué v1.0",
        weeks: 6,
        startWeek: 15,
        assignee: "Embedded Developer",
        deliverable: "Firmware v1.0 - Complete firmware, OTA updates, error handling",
        dependencies: ["3.3", "4.1"],
      },
      {
        id: "4.3",
        name: "Cloud Backend MVP",
        weeks: 7,
        startWeek: 15,
        assignee: "Cloud Architect",
        deliverable: "Cloud platform MVP - Backend built, APIs implemented, database setup",
        dependencies: ["3.5"],
      },
      {
        id: "4.4",
        name: "Application Mobile Beta",
        weeks: 7,
        startWeek: 15,
        assignee: "Mobile Developer",
        deliverable: "Mobile app beta - Core features implemented, testing, debugging complete",
        dependencies: ["3.4", "4.3"],
      },
      {
        id: "4.5",
        name: "Tests Prototype Interne",
        weeks: 2,
        startWeek: 21,
        assignee: "Toute l'Équipe",
        deliverable: "Test reports - Functional testing, performance testing, bug fixing completed",
        dependencies: ["4.2", "4.3", "4.4"],
      },
    ],
  },
  {
    id: 5,
    name: "Testing & Validation",
    weeks: 4,
    startWeek: 23,
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500",
    textColor: "text-rose-600",
    tasks: [
      {
        id: "5.1",
        name: "Tests Fonctionnels Complets",
        weeks: 2,
        startWeek: 23,
        assignee: "QA Team + Mobile Developer",
        deliverable: "Test results - Feature validation, integration testing, system testing complete",
        dependencies: ["4.5"],
      },
      {
        id: "5.2",
        name: "Tests Charge & Fiabilité",
        weeks: 2,
        startWeek: 23,
        assignee: "Cloud Architect + Embedded Developer",
        deliverable: "Performance report - Stress testing, reliability testing, load performance analysis",
        dependencies: ["4.5"],
      },
      {
        id: "5.3",
        name: "Tests Usabilité UX",
        weeks: 2,
        startWeek: 24,
        assignee: "Mobile Developer + Product Manager",
        deliverable: "Usability report - User testing, UX evaluation, feedback collection complete",
        dependencies: ["5.1"],
      },
      {
        id: "5.4",
        name: "Tests Conformité & Sécurité",
        weeks: 3,
        startWeek: 24,
        assignee: "Compliance Consultant + Cloud Architect",
        deliverable: "Compliance report - Regulatory compliance (CE, RGPD), security testing, standards validation",
        dependencies: ["5.1", "5.2"],
      },
    ],
  },
  {
    id: 6,
    name: "Industrialization",
    weeks: 6,
    startWeek: 27,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-600",
    tasks: [
      {
        id: "6.1",
        name: "Sourcing Fabricants Hardware",
        weeks: 4,
        startWeek: 27,
        assignee: "Product Manager",
        deliverable: "Supplier agreements - Manufacturers identified, suppliers evaluated, contracts negotiated",
        dependencies: ["5.4"],
      },
      {
        id: "6.2",
        name: "Optimisation Coûts Production",
        weeks: 3,
        startWeek: 28,
        assignee: "Product Manager + IoT Engineer",
        deliverable: "Cost analysis - Component costs reduced, design optimized, volume pricing secured",
        dependencies: ["6.1"],
      },
      {
        id: "6.3",
        name: "Planification Pré-Production",
        weeks: 4,
        startWeek: 29,
        assignee: "Product Manager",
        deliverable: "Production plan - Production planning, quality control setup, supply chain management",
        dependencies: ["6.1"],
      },
      {
        id: "6.4",
        name: "Configuration Programme Beta",
        weeks: 3,
        startWeek: 30,
        assignee: "Product Manager + Mobile Developer",
        deliverable: "Beta program structure - Beta users selected, deployment plan, feedback mechanisms",
        dependencies: ["5.4"],
      },
    ],
  },
  {
    id: 7,
    name: "Market Launch",
    weeks: 6,
    startWeek: 33,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-600",
    tasks: [
      {
        id: "7.1",
        name: "Branding & Identité Visuelle",
        weeks: 3,
        startWeek: 33,
        assignee: "Marketing Team + Product Manager",
        deliverable: "Brand assets - Brand identity complete, marketing materials, website developed",
        dependencies: ["6.3"],
      },
      {
        id: "7.2",
        name: "Programme Pilote Déploiement",
        weeks: 4,
        startWeek: 34,
        assignee: "Product Manager + Toute l'Équipe",
        deliverable: "Pilot program report - Pilot users active, prototypes deployed, feedback collected and analyzed",
        dependencies: ["6.4"],
      },
      {
        id: "7.3",
        name: "Campagne Lancement Marché",
        weeks: 4,
        startWeek: 35,
        assignee: "Marketing Team",
        deliverable: "Launch campaign - Marketing campaign executed, PR activities, sales channels established",
        dependencies: ["7.1", "7.2"],
      },
    ],
  },
]

const milestones = [
  { id: "M1", name: "Phase 1 Complète", week: 4, color: "text-blue-600 bg-blue-500/10" },
  { id: "M2", name: "Faisabilité Validée", week: 10, color: "text-purple-600 bg-purple-500/10" },
  { id: "M3", name: "Design Complet", week: 14, color: "text-emerald-600 bg-emerald-500/10" },
  { id: "M4", name: "Prototype Prêt", week: 22, color: "text-amber-600 bg-amber-500/10" },
  { id: "M5", name: "Tests Complets", week: 26, color: "text-rose-600 bg-rose-500/10" },
  { id: "M6", name: "Production Prête", week: 32, color: "text-cyan-600 bg-cyan-500/10" },
  { id: "M7", name: "Lancement Marché", week: 38, color: "text-indigo-600 bg-indigo-500/10" },
]

export default function GanttPage() {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6, 7]))
  const [selectedTask, setSelectedTask] = useState<any>(null)

  const togglePhase = (phaseId: number) => {
    const newExpanded = new Set(expandedPhases)
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId)
    } else {
      newExpanded.add(phaseId)
    }
    setExpandedPhases(newExpanded)
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Diagramme de Gantt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Planning détaillé du projet Smart Fridge sur 38 semaines avec 7 phases principales, toutes les tâches,
            assignations, livrables et dépendances
          </p>
        </div>

        {/* Project Summary */}
        <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            icon={<Calendar />}
            title="Durée Totale"
            value="38 Semaines"
            subtitle="~9.5 mois"
            color="bg-blue-500/10 text-blue-600"
          />
          <SummaryCard
            icon={<Clock />}
            title="Phases"
            value="7"
            subtitle="Séquentielles"
            color="bg-purple-500/10 text-purple-600"
          />
          <SummaryCard
            icon={<Users />}
            title="Équipe"
            value="6 Membres"
            subtitle="Experts"
            color="bg-emerald-500/10 text-emerald-600"
          />
          <SummaryCard
            icon={<CheckCircle2 />}
            title="Jalons"
            value="7"
            subtitle="Majeurs"
            color="bg-amber-500/10 text-amber-600"
          />
        </section>

        {/* Gantt Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Diagramme de Gantt Professionnel</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
            {/* Timeline Header with Milestones */}
            <div className="flex border-b-2 border-border sticky top-0 bg-card z-10">
              <div className="w-96 flex-shrink-0 p-4 font-bold border-r-2 border-border bg-muted/50">
                Phases & Tâches / Timeline
              </div>
              <div className="flex-1 flex overflow-x-auto">
                {Array.from({ length: 38 }, (_, i) => i + 1).map((week) => {
                  const milestone = milestones.find((m) => m.week === week)
                  return (
                    <div
                      key={week}
                      className={`flex-shrink-0 w-10 p-2 text-center text-xs font-semibold border-r border-border relative ${
                        week % 5 === 0 ? "bg-muted/50" : ""
                      } ${milestone ? milestone.color + " border-b-2" : ""}`}
                      title={milestone ? milestone.name : `Semaine ${week}`}
                    >
                      {week}
                      {milestone && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                          <CheckCircle2 className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Gantt Rows */}
            {phases.map((phase) => (
              <div key={phase.id} className={`border-b-2 border-border ${phase.bgColor}`}>
                {/* Phase Row */}
                <div className="flex hover:bg-muted/20 transition-colors">
                  <div className="w-96 flex-shrink-0 p-4 border-r-2 border-border">
                    <button onClick={() => togglePhase(phase.id)} className="flex items-center gap-3 w-full text-left">
                      {expandedPhases.has(phase.id) ? (
                        <ChevronDown className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-5 w-5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className={`font-bold text-base ${phase.textColor} flex items-center gap-2`}>
                          Phase {phase.id}: {phase.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Semaines {phase.startWeek}-{phase.startWeek + phase.weeks - 1} • {phase.weeks} semaines •{" "}
                          {phase.tasks.length} tâches
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 flex items-center p-3 overflow-x-auto relative">
                    <div className="absolute inset-0 flex">
                      {Array.from({ length: 38 }, (_, i) => i + 1).map((week) => (
                        <div key={week} className="flex-shrink-0 w-10 border-r border-border/30" />
                      ))}
                    </div>
                    <PhaseGanttBar phase={phase} />
                  </div>
                </div>

                {/* Task Rows */}
                {expandedPhases.has(phase.id) &&
                  phase.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex border-t border-border/50 hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedTask(task)}
                    >
                      <div className="w-96 flex-shrink-0 p-3 pl-10 border-r-2 border-border">
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm flex items-center gap-2">
                              <span className="text-xs font-mono text-muted-foreground">{task.id}</span>
                              <span className="truncate">{task.name}</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {task.assignee}
                              </div>
                              <div className="flex items-center gap-1">
                                <Package className="h-3 w-3" />
                                <span className="truncate">{task.deliverable}</span>
                              </div>
                              {task.dependencies.length > 0 && (
                                <div className="flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  Dépend de: {task.dependencies.join(", ")}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center p-3 overflow-x-auto relative">
                        <div className="absolute inset-0 flex">
                          {Array.from({ length: 38 }, (_, i) => i + 1).map((week) => (
                            <div key={week} className="flex-shrink-0 w-10 border-r border-border/20" />
                          ))}
                        </div>
                        <TaskGanttBar task={task} phase={phase} />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>

        {/* Task Details Modal */}
        {selectedTask && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTask(null)}
          >
            <div
              className="bg-card rounded-xl border border-border p-6 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{selectedTask.name}</h3>
                  <div className="text-sm text-muted-foreground mt-1">Tâche {selectedTask.id}</div>
                </div>
                <button onClick={() => setSelectedTask(null)} className="text-muted-foreground hover:text-foreground">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Durée</div>
                  <div className="text-base">
                    {selectedTask.weeks} semaine{selectedTask.weeks > 1 ? "s" : ""} (Semaine {selectedTask.startWeek} -{" "}
                    {selectedTask.startWeek + selectedTask.weeks - 1})
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Assigné à</div>
                  <div className="text-base">{selectedTask.assignee}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Livrable</div>
                  <div className="text-base">{selectedTask.deliverable}</div>
                </div>
                {selectedTask.dependencies.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Dépendances</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedTask.dependencies.map((dep: string) => (
                        <span key={dep} className="px-2 py-1 bg-muted rounded text-sm font-mono">
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Milestones Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jalons Majeurs du Projet</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>

        {/* Dependencies Info */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ArrowRight className="h-6 w-6" />
            Dépendances Critiques du Projet
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phase 2</strong> dépend de la complétion de <strong>Phase 1</strong>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phase 3</strong> dépend des résultats de <strong>Phase 2</strong>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phase 4</strong> dépend de la complétion de <strong>Phase 3</strong>
                </span>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phase 5</strong> dépend de la complétion de <strong>Phase 4</strong>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phase 6</strong> peut démarrer en parallèle avec <strong>Phase 5</strong>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phase 7</strong> dépend de la complétion de <strong>Phase 6</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function SummaryCard({ icon, title, value, subtitle, color }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>
    </div>
  )
}

function MilestoneCard({ milestone }: any) {
  return (
    <div
      className={`bg-card rounded-lg border-2 ${milestone.color.replace("bg-", "border-").replace("/10", "")} p-4 hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle2 className={`h-6 w-6 ${milestone.color.split(" ")[0]}`} />
        <div className="font-bold">{milestone.id}</div>
      </div>
      <div className="font-semibold text-sm mb-1">{milestone.name}</div>
      <div className="text-xs text-muted-foreground">Semaine {milestone.week}</div>
    </div>
  )
}

function PhaseGanttBar({ phase }: any) {
  const startOffset = (phase.startWeek - 1) * 40
  const width = phase.weeks * 40

  return (
    <div
      className={`relative h-10 rounded-lg bg-gradient-to-r ${phase.color} flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-white/20`}
      style={{
        marginLeft: `${startOffset}px`,
        width: `${width}px`,
      }}
    >
      <span className="px-2 truncate">Phase {phase.id}</span>
    </div>
  )
}

function TaskGanttBar({ task, phase }: any) {
  const startOffset = (task.startWeek - 1) * 40
  const width = task.weeks * 40

  return (
    <div
      className={`relative h-7 rounded-md bg-gradient-to-r ${phase.color} opacity-70 hover:opacity-100 transition-opacity shadow border border-white/30`}
      style={{
        marginLeft: `${startOffset}px`,
        width: `${width}px`,
      }}
      title={`${task.name} - ${task.weeks} sem`}
    />
  )
}
