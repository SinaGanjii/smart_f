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
  Edit,
  Eye,
  Play,
  Pause,
  CheckCircle,
  XCircle,
  Flag,
  DollarSign,
  FileText,
  TrendingUp,
  Filter,
  Download,
  MoreVertical,
  Target,
  BarChart3,
  Activity,
  Zap,
  Shield,
  Settings,
  Link as LinkIcon,
  AlertTriangle,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

type TaskStatus = "not-started" | "in-progress" | "completed" | "blocked" | "on-hold"
type Priority = "low" | "medium" | "high" | "critical"

interface SubTask {
  id: string
  name: string
  completed: boolean
}

interface Task {
  id: string
  name: string
  weeks: number
  startWeek: number
  assignee: string
  deliverable: string
  dependencies: string[]
  status: TaskStatus
  priority: Priority
  progress: number
  budget?: number
  description: string
  subtasks?: SubTask[]
  risks?: string[]
  resources?: string[]
  estimatedHours?: number
}

interface Phase {
  id: number
  name: string
  weeks: number
  startWeek: number
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  tasks: Task[]
  budget?: number
  description: string
}

const phases: Phase[] = [
  {
    id: 1,
    name: "Research & Concept",
    weeks: 4,
    startWeek: 1,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    budget: 15000,
    description: "Phase de recherche approfondie et définition du concept produit",
    tasks: [
      {
        id: "1.1",
        name: "Étude de Marché",
        weeks: 2,
        startWeek: 1,
        assignee: "Product Manager",
        deliverable: "Market research report",
        dependencies: [],
        status: "completed",
        priority: "high",
        progress: 100,
        budget: 5000,
        description: "Analyse complète du marché des réfrigérateurs intelligents, identification des tendances, taille du marché, croissance prévue",
        estimatedHours: 80,
        resources: ["Outils de recherche", "Accès bases de données marché", "Consultants externes"],
        risks: ["Données incomplètes", "Évolution rapide du marché"],
        subtasks: [
          { id: "1.1.1", name: "Analyse quantitative du marché", completed: true },
          { id: "1.1.2", name: "Analyse qualitative (interviews)", completed: true },
          { id: "1.1.3", name: "Rapport de synthèse", completed: true },
        ],
      },
      {
        id: "1.2",
        name: "Segmentation Clients",
        weeks: 1.5,
        startWeek: 1,
        assignee: "Product Manager",
        deliverable: "Segmentation analysis",
        dependencies: [],
        status: "completed",
        priority: "high",
        progress: 100,
        budget: 3000,
        description: "Identification et caractérisation des segments de clients cibles, personas détaillés",
        estimatedHours: 60,
        resources: ["Outils d'analyse", "Données clients"],
        risks: ["Segmentation trop large ou trop étroite"],
        subtasks: [
          { id: "1.2.1", name: "Identification des segments", completed: true },
          { id: "1.2.2", name: "Création des personas", completed: true },
        ],
      },
      {
        id: "1.3",
        name: "Benchmark Concurrents",
        weeks: 2,
        startWeek: 2,
        assignee: "Product Manager",
        deliverable: "Competitive analysis",
        dependencies: ["1.1"],
        status: "completed",
        priority: "high",
        progress: 100,
        budget: 4000,
        description: "Analyse approfondie des solutions concurrentes, forces et faiblesses, positionnement",
        estimatedHours: 80,
        resources: ["Accès produits concurrents", "Tests comparatifs"],
        risks: ["Informations limitées sur produits privés"],
        subtasks: [
          { id: "1.3.1", name: "Identification des concurrents", completed: true },
          { id: "1.3.2", name: "Analyse fonctionnelle", completed: true },
          { id: "1.3.3", name: "Analyse prix/positionnement", completed: true },
        ],
      },
      {
        id: "1.4",
        name: "Spécification Produit v1",
        weeks: 2,
        startWeek: 2.5,
        assignee: "Product Manager",
        deliverable: "Product specification document",
        dependencies: ["1.1", "1.2", "1.3"],
        status: "completed",
        priority: "critical",
        progress: 100,
        budget: 3000,
        description: "Document de spécification produit complet incluant fonctionnalités, contraintes techniques, objectifs business",
        estimatedHours: 100,
        resources: ["Templates de spécification", "Outils de documentation"],
        risks: ["Spécifications incomplètes", "Changements de scope"],
        subtasks: [
          { id: "1.4.1", name: "Définition des fonctionnalités", completed: true },
          { id: "1.4.2", name: "Contraintes techniques", completed: true },
          { id: "1.4.3", name: "Objectifs et KPIs", completed: true },
          { id: "1.4.4", name: "Validation interne", completed: true },
        ],
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
    budget: 45000,
    description: "Évaluation technique approfondie et validation de faisabilité",
    tasks: [
      {
        id: "2.1",
        name: "Évaluation Capteurs",
        weeks: 3,
        startWeek: 5,
        assignee: "IoT Engineer",
        deliverable: "Sensor evaluation report",
        dependencies: [],
        status: "in-progress",
        priority: "critical",
        progress: 65,
        budget: 12000,
        description: "Test et évaluation de différents capteurs (température, humidité, poids, présence), sélection des meilleures solutions",
        estimatedHours: 120,
        resources: ["Capteurs de test", "Laboratoire", "Équipements de mesure"],
        risks: ["Capteurs non disponibles", "Coûts élevés", "Fiabilité insuffisante"],
        subtasks: [
          { id: "2.1.1", name: "Recherche fournisseurs capteurs", completed: true },
          { id: "2.1.2", name: "Tests de précision", completed: true },
          { id: "2.1.3", name: "Tests de durabilité", completed: false },
          { id: "2.1.4", name: "Rapport de sélection", completed: false },
        ],
      },
      {
        id: "2.2",
        name: "Faisabilité Caméra",
        weeks: 3,
        startWeek: 5,
        assignee: "IoT Engineer",
        deliverable: "Camera feasibility study",
        dependencies: [],
        status: "in-progress",
        priority: "high",
        progress: 50,
        budget: 10000,
        description: "Évaluation de solutions de vision par ordinateur pour reconnaissance d'objets dans le réfrigérateur",
        estimatedHours: 100,
        resources: ["Caméras de test", "Matériel de traitement", "Bibliothèques IA"],
        risks: ["Performance insuffisante", "Coûts matériels élevés", "Problèmes de confidentialité"],
        subtasks: [
          { id: "2.2.1", name: "Tests de reconnaissance", completed: true },
          { id: "2.2.2", name: "Évaluation performance", completed: false },
          { id: "2.2.3", name: "Analyse coûts", completed: false },
        ],
      },
      {
        id: "2.3",
        name: "Prototype Embarqué",
        weeks: 4,
        startWeek: 6,
        assignee: "Embedded Developer",
        deliverable: "Working prototype",
        dependencies: ["2.1"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 15000,
        description: "Développement d'un prototype embarqué fonctionnel avec intégration des capteurs sélectionnés",
        estimatedHours: 160,
        resources: ["Microcontrôleurs", "Outils de développement", "Composants électroniques"],
        risks: ["Délais de livraison composants", "Problèmes d'intégration", "Bugs matériels"],
        subtasks: [
          { id: "2.3.1", name: "Design PCB", completed: false },
          { id: "2.3.2", name: "Programmation firmware", completed: false },
          { id: "2.3.3", name: "Tests intégration", completed: false },
        ],
      },
      {
        id: "2.4",
        name: "Test Faisabilité IA",
        weeks: 5,
        startWeek: 5,
        assignee: "AI Engineer",
        deliverable: "AI feasibility report",
        dependencies: [],
        status: "in-progress",
        priority: "high",
        progress: 40,
        budget: 8000,
        description: "Développement et test de modèles d'IA pour reconnaissance d'objets, prédiction d'expiration, recommandations",
        estimatedHours: 200,
        resources: ["GPU/Cloud computing", "Datasets", "Frameworks ML"],
        risks: ["Performance IA insuffisante", "Besoin de grandes quantités de données", "Coûts cloud élevés"],
        subtasks: [
          { id: "2.4.1", name: "Collecte datasets", completed: true },
          { id: "2.4.2", name: "Entraînement modèles", completed: false },
          { id: "2.4.3", name: "Tests de précision", completed: false },
        ],
      },
      {
        id: "2.5",
        name: "Prototype App Mobile (Design)",
        weeks: 4,
        startWeek: 6,
        assignee: "Mobile Developer",
        deliverable: "App design mockups",
        dependencies: [],
        status: "not-started",
        priority: "medium",
        progress: 0,
        budget: 5000,
        description: "Création des maquettes et prototypes interactifs de l'application mobile",
        estimatedHours: 120,
        resources: ["Outils de design (Figma)", "Templates UI", "Design system"],
        risks: ["Changements de design", "Feedback utilisateurs négatif"],
        subtasks: [
          { id: "2.5.1", name: "Wireframes basse fidélité", completed: false },
          { id: "2.5.2", name: "Design haute fidélité", completed: false },
          { id: "2.5.3", name: "Prototype interactif", completed: false },
        ],
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
    budget: 35000,
    description: "Conception détaillée de l'architecture système et des designs complets",
    tasks: [
      {
        id: "3.1",
        name: "Architecture Système",
        weeks: 2,
        startWeek: 11,
        assignee: "Cloud Architect",
        deliverable: "Architecture diagram - Overall system design, component interactions, data flow",
        dependencies: ["2.3", "2.4"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 8000,
        description: "Conception de l'architecture système complète incluant tous les composants, leurs interactions et flux de données",
        estimatedHours: 80,
        resources: ["Outils de diagrammes", "Templates architecture", "Best practices"],
        risks: ["Complexité sous-estimée", "Scalabilité insuffisante"],
        subtasks: [
          { id: "3.1.1", name: "Diagramme de haut niveau", completed: false },
          { id: "3.1.2", name: "Architecture détaillée", completed: false },
          { id: "3.1.3", name: "Flux de données", completed: false },
        ],
      },
      {
        id: "3.2",
        name: "Design Réseau Capteurs",
        weeks: 2,
        startWeek: 11,
        assignee: "IoT Engineer",
        deliverable: "Sensor network design - Placement, topology, protocols",
        dependencies: ["2.1", "2.2"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 6000,
        description: "Conception du réseau de capteurs: placement optimal, topologie réseau, protocoles de communication",
        estimatedHours: 60,
        resources: ["Simulateurs réseau", "Documentation protocoles"],
        risks: ["Interférences", "Portée insuffisante"],
        subtasks: [
          { id: "3.2.1", name: "Placement capteurs", completed: false },
          { id: "3.2.2", name: "Topologie réseau", completed: false },
          { id: "3.2.3", name: "Protocoles communication", completed: false },
        ],
      },
      {
        id: "3.3",
        name: "Pipeline Données IoT",
        weeks: 2,
        startWeek: 12,
        assignee: "Cloud Architect + IoT Engineer",
        deliverable: "Data pipeline design - Collection, processing, storage architecture",
        dependencies: ["3.1", "3.2"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 7000,
        description: "Conception du pipeline de données: collecte, traitement, stockage, analyse en temps réel",
        estimatedHours: 100,
        resources: ["Outils de design", "Documentation cloud"],
        risks: ["Latence élevée", "Coûts de traitement"],
        subtasks: [
          { id: "3.3.1", name: "Architecture collecte", completed: false },
          { id: "3.3.2", name: "Traitement temps réel", completed: false },
          { id: "3.3.3", name: "Stockage et archivage", completed: false },
        ],
      },
      {
        id: "3.4",
        name: "Wireframes App Complets",
        weeks: 3,
        startWeek: 11,
        assignee: "Mobile Developer",
        deliverable: "Complete wireframes - Full app design, UI mockups, interaction design",
        dependencies: ["2.5"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 8000,
        description: "Création des wireframes complets de l'application mobile avec tous les écrans et interactions",
        estimatedHours: 120,
        resources: ["Figma", "Design system", "Guidelines UX"],
        risks: ["Changements majeurs", "Complexité UI"],
        subtasks: [
          { id: "3.4.1", name: "Wireframes écrans principaux", completed: false },
          { id: "3.4.2", name: "Wireframes écrans secondaires", completed: false },
          { id: "3.4.3", name: "Design interactions", completed: false },
        ],
      },
      {
        id: "3.5",
        name: "Architecture Cloud Complète",
        weeks: 2,
        startWeek: 13,
        assignee: "Cloud Architect",
        deliverable: "Cloud architecture document - Infrastructure, database schema, API design",
        dependencies: ["3.1", "3.3"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 6000,
        description: "Conception complète de l'infrastructure cloud: serveurs, bases de données, APIs, sécurité",
        estimatedHours: 80,
        resources: ["Documentation cloud providers", "Templates architecture"],
        risks: ["Coûts cloud élevés", "Sécurité insuffisante"],
        subtasks: [
          { id: "3.5.1", name: "Infrastructure serveurs", completed: false },
          { id: "3.5.2", name: "Schéma base de données", completed: false },
          { id: "3.5.3", name: "Design APIs", completed: false },
        ],
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
    budget: 120000,
    description: "Développement du prototype complet avec toutes les fonctionnalités",
    tasks: [
      {
        id: "4.1",
        name: "Intégration Complète Capteurs",
        weeks: 4,
        startWeek: 15,
        assignee: "IoT Engineer",
        deliverable: "Integrated sensor system - All sensors integrated, calibration routines, data collection",
        dependencies: ["3.2"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 25000,
        description: "Intégration complète de tous les capteurs avec routines de calibration et collecte de données fiable",
        estimatedHours: 160,
        resources: ["Capteurs finaux", "Outils de développement", "Matériel de test"],
        risks: ["Problèmes d'intégration", "Calibration difficile"],
        subtasks: [
          { id: "4.1.1", name: "Intégration physique", completed: false },
          { id: "4.1.2", name: "Développement drivers", completed: false },
          { id: "4.1.3", name: "Routines calibration", completed: false },
          { id: "4.1.4", name: "Tests système", completed: false },
        ],
      },
      {
        id: "4.2",
        name: "Firmware Embarqué v1.0",
        weeks: 6,
        startWeek: 15,
        assignee: "Embedded Developer",
        deliverable: "Firmware v1.0 - Complete firmware, OTA updates, error handling",
        dependencies: ["3.3", "4.1"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 30000,
        description: "Développement du firmware complet avec gestion des capteurs, communication, mises à jour OTA, gestion d'erreurs",
        estimatedHours: 240,
        resources: ["IDE embarqué", "Bibliothèques", "Matériel de test"],
        risks: ["Bugs critiques", "Problèmes de stabilité"],
        subtasks: [
          { id: "4.2.1", name: "Core firmware", completed: false },
          { id: "4.2.2", name: "Gestion capteurs", completed: false },
          { id: "4.2.3", name: "Communication réseau", completed: false },
          { id: "4.2.4", name: "Système OTA", completed: false },
          { id: "4.2.5", name: "Gestion erreurs", completed: false },
        ],
      },
      {
        id: "4.3",
        name: "Cloud Backend MVP",
        weeks: 7,
        startWeek: 15,
        assignee: "Cloud Architect",
        deliverable: "Cloud platform MVP - Backend built, APIs implemented, database setup",
        dependencies: ["3.5"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 35000,
        description: "Développement du backend cloud complet: APIs REST, base de données, authentification, traitement données",
        estimatedHours: 280,
        resources: ["Cloud provider", "Frameworks backend", "Outils DevOps"],
        risks: ["Problèmes de scalabilité", "Coûts cloud élevés"],
        subtasks: [
          { id: "4.3.1", name: "Setup infrastructure", completed: false },
          { id: "4.3.2", name: "Développement APIs", completed: false },
          { id: "4.3.3", name: "Base de données", completed: false },
          { id: "4.3.4", name: "Authentification", completed: false },
          { id: "4.3.5", name: "Traitement données", completed: false },
        ],
      },
      {
        id: "4.4",
        name: "Application Mobile Beta",
        weeks: 7,
        startWeek: 15,
        assignee: "Mobile Developer",
        deliverable: "Mobile app beta - Core features implemented, testing, debugging complete",
        dependencies: ["3.4", "4.3"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 30000,
        description: "Développement de l'application mobile beta avec toutes les fonctionnalités principales, tests et débogage",
        estimatedHours: 280,
        resources: ["Frameworks mobile", "Outils de test", "App stores"],
        risks: ["Bugs critiques", "Performance insuffisante"],
        subtasks: [
          { id: "4.4.1", name: "UI/UX implementation", completed: false },
          { id: "4.4.2", name: "Intégration APIs", completed: false },
          { id: "4.4.3", name: "Fonctionnalités core", completed: false },
          { id: "4.4.4", name: "Tests et debugging", completed: false },
        ],
      },
      {
        id: "4.5",
        name: "Tests Prototype Interne",
        weeks: 2,
        startWeek: 21,
        assignee: "Toute l'Équipe",
        deliverable: "Test reports - Functional testing, performance testing, bug fixing completed",
        dependencies: ["4.2", "4.3", "4.4"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 10000,
        description: "Tests complets du prototype: fonctionnels, performance, intégration, correction des bugs identifiés",
        estimatedHours: 160,
        resources: ["Environnements de test", "Outils de test", "Matériel de test"],
        risks: ["Bugs critiques découverts", "Délais de correction"],
        subtasks: [
          { id: "4.5.1", name: "Tests fonctionnels", completed: false },
          { id: "4.5.2", name: "Tests performance", completed: false },
          { id: "4.5.3", name: "Tests intégration", completed: false },
          { id: "4.5.4", name: "Correction bugs", completed: false },
        ],
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
    budget: 40000,
    description: "Tests approfondis et validation complète du système",
    tasks: [
      {
        id: "5.1",
        name: "Tests Fonctionnels Complets",
        weeks: 2,
        startWeek: 23,
        assignee: "QA Team + Mobile Developer",
        deliverable: "Test results - Feature validation, integration testing, system testing complete",
        dependencies: ["4.5"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 12000,
        description: "Tests fonctionnels exhaustifs: validation de toutes les fonctionnalités, tests d'intégration, tests système",
        estimatedHours: 160,
        resources: ["Environnements de test", "Outils QA", "Checklists de test"],
        risks: ["Fonctionnalités manquantes", "Bugs non détectés"],
        subtasks: [
          { id: "5.1.1", name: "Tests unitaires", completed: false },
          { id: "5.1.2", name: "Tests intégration", completed: false },
          { id: "5.1.3", name: "Tests système", completed: false },
          { id: "5.1.4", name: "Rapport de tests", completed: false },
        ],
      },
      {
        id: "5.2",
        name: "Tests Charge & Fiabilité",
        weeks: 2,
        startWeek: 23,
        assignee: "Cloud Architect + Embedded Developer",
        deliverable: "Performance report - Stress testing, reliability testing, load performance analysis",
        dependencies: ["4.5"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 10000,
        description: "Tests de charge et fiabilité: stress tests, tests de performance sous charge, analyse de fiabilité",
        estimatedHours: 120,
        resources: ["Outils de load testing", "Environnements de test", "Monitoring"],
        risks: ["Performance insuffisante", "Problèmes de fiabilité"],
        subtasks: [
          { id: "5.2.1", name: "Tests de charge", completed: false },
          { id: "5.2.2", name: "Tests de stress", completed: false },
          { id: "5.2.3", name: "Analyse fiabilité", completed: false },
        ],
      },
      {
        id: "5.3",
        name: "Tests Usabilité UX",
        weeks: 2,
        startWeek: 24,
        assignee: "Mobile Developer + Product Manager",
        deliverable: "Usability report - User testing, UX evaluation, feedback collection complete",
        dependencies: ["5.1"],
        status: "not-started",
        priority: "medium",
        progress: 0,
        budget: 8000,
        description: "Tests d'usabilité et évaluation UX: tests utilisateurs, collecte de feedback, améliorations",
        estimatedHours: 80,
        resources: ["Utilisateurs test", "Outils de feedback", "Analytics"],
        risks: ["Feedback négatif", "Problèmes UX majeurs"],
        subtasks: [
          { id: "5.3.1", name: "Recrutement utilisateurs", completed: false },
          { id: "5.3.2", name: "Sessions de test", completed: false },
          { id: "5.3.3", name: "Analyse feedback", completed: false },
        ],
      },
      {
        id: "5.4",
        name: "Tests Conformité & Sécurité",
        weeks: 3,
        startWeek: 24,
        assignee: "Compliance Consultant + Cloud Architect",
        deliverable: "Compliance report - Regulatory compliance (CE, RGPD), security testing, standards validation",
        dependencies: ["5.1", "5.2"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 10000,
        description: "Tests de conformité réglementaire (CE, RGPD) et sécurité: audits, tests de pénétration, validation standards",
        estimatedHours: 120,
        resources: ["Consultants conformité", "Outils sécurité", "Standards documentation"],
        risks: ["Non-conformité détectée", "Vulnérabilités sécurité"],
        subtasks: [
          { id: "5.4.1", name: "Audit RGPD", completed: false },
          { id: "5.4.2", name: "Tests sécurité", completed: false },
          { id: "5.4.3", name: "Validation CE", completed: false },
        ],
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
    budget: 80000,
    description: "Préparation à la production industrielle et optimisation",
    tasks: [
      {
        id: "6.1",
        name: "Sourcing Fabricants Hardware",
        weeks: 4,
        startWeek: 27,
        assignee: "Product Manager",
        deliverable: "Supplier agreements - Manufacturers identified, suppliers evaluated, contracts negotiated",
        dependencies: ["5.4"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 20000,
        description: "Identification et sélection de fabricants pour le hardware, négociation de contrats, validation qualité",
        estimatedHours: 160,
        resources: ["Réseau fournisseurs", "Consultants sourcing", "Outils d'évaluation"],
        risks: ["Fournisseurs non fiables", "Délais de production longs"],
        subtasks: [
          { id: "6.1.1", name: "Recherche fabricants", completed: false },
          { id: "6.1.2", name: "Évaluation qualité", completed: false },
          { id: "6.1.3", name: "Négociation contrats", completed: false },
        ],
      },
      {
        id: "6.2",
        name: "Optimisation Coûts Production",
        weeks: 3,
        startWeek: 28,
        assignee: "Product Manager + IoT Engineer",
        deliverable: "Cost analysis - Component costs reduced, design optimized, volume pricing secured",
        dependencies: ["6.1"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 15000,
        description: "Optimisation des coûts de production: réduction coûts composants, optimisation design, négociation prix volume",
        estimatedHours: 120,
        resources: ["Analyses coûts", "Outils d'optimisation"],
        risks: ["Réduction qualité", "Coûts toujours élevés"],
        subtasks: [
          { id: "6.2.1", name: "Analyse coûts composants", completed: false },
          { id: "6.2.2", name: "Optimisation design", completed: false },
          { id: "6.2.3", name: "Négociation prix volume", completed: false },
        ],
      },
      {
        id: "6.3",
        name: "Planification Pré-Production",
        weeks: 4,
        startWeek: 29,
        assignee: "Product Manager",
        deliverable: "Production plan - Production planning, quality control setup, supply chain management",
        dependencies: ["6.1"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 25000,
        description: "Planification complète de la pré-production: planning, contrôle qualité, gestion chaîne d'approvisionnement",
        estimatedHours: 160,
        resources: ["Outils de planification", "Consultants production"],
        risks: ["Délais non respectés", "Problèmes qualité"],
        subtasks: [
          { id: "6.3.1", name: "Planning production", completed: false },
          { id: "6.3.2", name: "Setup contrôle qualité", completed: false },
          { id: "6.3.3", name: "Gestion supply chain", completed: false },
        ],
      },
      {
        id: "6.4",
        name: "Configuration Programme Beta",
        weeks: 3,
        startWeek: 30,
        assignee: "Product Manager + Mobile Developer",
        deliverable: "Beta program structure - Beta users selected, deployment plan, feedback mechanisms",
        dependencies: ["5.4"],
        status: "not-started",
        priority: "medium",
        progress: 0,
        budget: 20000,
        description: "Configuration du programme beta: sélection utilisateurs, plan de déploiement, mécanismes de feedback",
        estimatedHours: 120,
        resources: ["Plateforme beta", "Outils de feedback"],
        risks: ["Utilisateurs beta insuffisants", "Feedback limité"],
        subtasks: [
          { id: "6.4.1", name: "Sélection utilisateurs", completed: false },
          { id: "6.4.2", name: "Plan déploiement", completed: false },
          { id: "6.4.3", name: "Mécanismes feedback", completed: false },
        ],
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
    budget: 60000,
    description: "Lancement commercial et déploiement sur le marché",
    tasks: [
      {
        id: "7.1",
        name: "Branding & Identité Visuelle",
        weeks: 3,
        startWeek: 33,
        assignee: "Marketing Team + Product Manager",
        deliverable: "Brand assets - Brand identity complete, marketing materials, website developed",
        dependencies: ["6.3"],
        status: "not-started",
        priority: "high",
        progress: 0,
        budget: 20000,
        description: "Création de l'identité de marque complète: logo, charte graphique, matériels marketing, site web",
        estimatedHours: 120,
        resources: ["Designers", "Outils design", "Hébergement web"],
        risks: ["Identité non percutante", "Délais design"],
        subtasks: [
          { id: "7.1.1", name: "Création logo et identité", completed: false },
          { id: "7.1.2", name: "Matériels marketing", completed: false },
          { id: "7.1.3", name: "Développement site web", completed: false },
        ],
      },
      {
        id: "7.2",
        name: "Programme Pilote Déploiement",
        weeks: 4,
        startWeek: 34,
        assignee: "Product Manager + Toute l'Équipe",
        deliverable: "Pilot program report - Pilot users active, prototypes deployed, feedback collected and analyzed",
        dependencies: ["6.4"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 20000,
        description: "Déploiement du programme pilote: activation utilisateurs pilotes, déploiement prototypes, collecte et analyse feedback",
        estimatedHours: 160,
        resources: ["Prototypes finaux", "Plateforme déploiement", "Outils analytics"],
        risks: ["Problèmes déploiement", "Feedback négatif"],
        subtasks: [
          { id: "7.2.1", name: "Déploiement prototypes", completed: false },
          { id: "7.2.2", name: "Activation utilisateurs", completed: false },
          { id: "7.2.3", name: "Collecte feedback", completed: false },
          { id: "7.2.4", name: "Analyse résultats", completed: false },
        ],
      },
      {
        id: "7.3",
        name: "Campagne Lancement Marché",
        weeks: 4,
        startWeek: 35,
        assignee: "Marketing Team",
        deliverable: "Launch campaign - Marketing campaign executed, PR activities, sales channels established",
        dependencies: ["7.1", "7.2"],
        status: "not-started",
        priority: "critical",
        progress: 0,
        budget: 20000,
        description: "Exécution de la campagne de lancement: marketing, relations presse, établissement canaux de vente",
        estimatedHours: 160,
        resources: ["Agences marketing", "Médias", "Canaux de vente"],
        risks: ["Campagne inefficace", "Couverture médiatique limitée"],
        subtasks: [
          { id: "7.3.1", name: "Campagne marketing", completed: false },
          { id: "7.3.2", name: "Activités PR", completed: false },
          { id: "7.3.3", name: "Établissement canaux vente", completed: false },
        ],
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

const statusConfig: Record<TaskStatus, { label: string; color: string; icon: any }> = {
  "not-started": { label: "Non démarré", color: "bg-gray-500", icon: Clock },
  "in-progress": { label: "En cours", color: "bg-blue-500", icon: Play },
  completed: { label: "Terminé", color: "bg-green-500", icon: CheckCircle },
  blocked: { label: "Bloqué", color: "bg-red-500", icon: XCircle },
  "on-hold": { label: "En attente", color: "bg-yellow-500", icon: Pause },
}

const priorityConfig: Record<Priority, { label: string; color: string }> = {
  low: { label: "Basse", color: "text-gray-600 bg-gray-100" },
  medium: { label: "Moyenne", color: "text-blue-600 bg-blue-100" },
  high: { label: "Haute", color: "text-orange-600 bg-orange-100" },
  critical: { label: "Critique", color: "text-red-600 bg-red-100" },
}

export default function GanttPage() {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6, 7]))
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all")
  const [priorityFilter, setPriorityFilter] = useState<Priority | "all">("all")

  const togglePhase = (phaseId: number) => {
    const newExpanded = new Set(expandedPhases)
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId)
    } else {
      newExpanded.add(phaseId)
    }
    setExpandedPhases(newExpanded)
  }

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    // In a real app, this would update the backend
    console.log(`Updating task ${taskId} to status ${newStatus}`)
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask({ ...selectedTask, status: newStatus })
    }
  }

  const totalBudget = phases.reduce((sum, phase) => sum + (phase.budget || 0), 0)
  const totalTasks = phases.reduce((sum, phase) => sum + phase.tasks.length, 0)
  const completedTasks = phases.reduce(
    (sum, phase) => sum + phase.tasks.filter((t) => t.status === "completed").length,
    0
  )
  const inProgressTasks = phases.reduce(
    (sum, phase) => sum + phase.tasks.filter((t) => t.status === "in-progress").length,
    0
  )

  const filteredPhases = phases.map((phase) => ({
    ...phase,
    tasks: phase.tasks.filter((task) => {
      const statusMatch = statusFilter === "all" || task.status === statusFilter
      const priorityMatch = priorityFilter === "all" || task.priority === priorityFilter
      return statusMatch && priorityMatch
    }),
  }))

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="mb-2 text-4xl font-bold">Diagramme de Gantt Professionnel</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Planning détaillé du projet Smart Fridge sur 38 semaines avec 7 phases principales, toutes les tâches,
                assignations, livrables, dépendances et suivi complet
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
                Exporter
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
                Paramètres
              </Button>
            </div>
          </div>
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
            icon={<Target />}
            title="Tâches"
            value={`${completedTasks}/${totalTasks}`}
            subtitle={`${Math.round((completedTasks / totalTasks) * 100)}% complété`}
            color="bg-emerald-500/10 text-emerald-600"
          />
          <SummaryCard
            icon={<DollarSign />}
            title="Budget Total"
            value={`${(totalBudget / 1000).toFixed(0)}k€`}
            subtitle="Estimé"
            color="bg-purple-500/10 text-purple-600"
          />
          <SummaryCard
            icon={<Activity />}
            title="En Cours"
            value={inProgressTasks.toString()}
            subtitle="Tâches actives"
            color="bg-amber-500/10 text-amber-600"
          />
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filtres:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={statusFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter("all")}
                >
                  Tous les statuts
                </Button>
                {Object.entries(statusConfig).map(([status, config]) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(status as TaskStatus)}
                  >
                    <config.icon className="h-3 w-3" />
                    {config.label}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap ml-auto">
                <span className="text-sm font-medium">Priorité:</span>
                <Button
                  variant={priorityFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPriorityFilter("all")}
                >
                  Toutes
                </Button>
                {Object.entries(priorityConfig).map(([priority, config]) => (
                  <Button
                    key={priority}
                    variant={priorityFilter === priority ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPriorityFilter(priority as Priority)}
                  >
                    <Flag className="h-3 w-3" />
                    {config.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gantt Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Diagramme de Gantt Interactif</h2>
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
            {filteredPhases.map((phase) => (
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
                          {phase.budget && ` • ${(phase.budget / 1000).toFixed(0)}k€`}
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
                      className="flex border-t border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <div className="w-96 flex-shrink-0 p-3 pl-10 border-r-2 border-border">
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono text-muted-foreground">{task.id}</span>
                              <span className="truncate">{task.name}</span>
                              <StatusBadge status={task.status} />
                              <PriorityBadge priority={task.priority} />
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
                                  <LinkIcon className="h-3 w-3" />
                                  Dépend de: {task.dependencies.join(", ")}
                                </div>
                              )}
                              {task.budget && (
                                <div className="flex items-center gap-1">
                                  <DollarSign className="h-3 w-3" />
                                  {task.budget.toLocaleString()}€
                                </div>
                              )}
                            </div>
                            <div className="mt-2 flex gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedTask(task)
                                }}
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Edit functionality
                                }}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <TaskStatusButton task={task} onStatusChange={updateTaskStatus} />
                            </div>
                            {task.progress > 0 && (
                              <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span>Progression</span>
                                  <span>{task.progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-1.5">
                                  <div
                                    className={`h-1.5 rounded-full ${statusConfig[task.status].color}`}
                                    style={{ width: `${task.progress}%` }}
                                  />
                                </div>
                              </div>
                            )}
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
          <TaskDetailsModal task={selectedTask} onClose={() => setSelectedTask(null)} onStatusChange={updateTaskStatus} />
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

        {/* Statistics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Statistiques du Projet</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Répartition par Statut</h3>
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {Object.entries(statusConfig).map(([status, config]) => {
                  const count = phases.reduce(
                    (sum, phase) => sum + phase.tasks.filter((t) => t.status === status).length,
                    0
                  )
                  return (
                    <div key={status} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${config.color}`} />
                        <span className="text-sm">{config.label}</span>
                      </div>
                      <span className="font-semibold">{count}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Répartition par Priorité</h3>
                <Flag className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {Object.entries(priorityConfig).map(([priority, config]) => {
                  const count = phases.reduce(
                    (sum, phase) => sum + phase.tasks.filter((t) => t.priority === priority).length,
                    0
                  )
                  return (
                    <div key={priority} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${config.color.split(" ")[1]}`} />
                        <span className="text-sm">{config.label}</span>
                      </div>
                      <span className="font-semibold">{count}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Budget par Phase</h3>
                <DollarSign className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {phases.map((phase) => (
                  <div key={phase.id} className="flex items-center justify-between">
                    <span className="text-sm">Phase {phase.id}</span>
                    <span className="font-semibold">{phase.budget ? `${(phase.budget / 1000).toFixed(0)}k€` : "N/A"}</span>
                  </div>
                ))}
              </div>
            </div>
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
  const statusColor = statusConfig[task.status].color

  return (
    <div className="relative" style={{ marginLeft: `${startOffset}px`, width: `${width}px` }}>
      <div
        className={`relative h-7 rounded-md bg-gradient-to-r ${phase.color} opacity-70 hover:opacity-100 transition-opacity shadow border border-white/30`}
        style={{ width: `${width}px` }}
        title={`${task.name} - ${task.weeks} sem - ${task.progress}%`}
      >
        {task.progress > 0 && (
          <div
            className={`absolute inset-0 rounded-md ${statusColor} opacity-50`}
            style={{ width: `${task.progress}%` }}
          />
        )}
      </div>
      {task.status === "blocked" && (
        <div className="absolute -top-1 -right-1">
          <AlertTriangle className="h-4 w-4 text-red-500" />
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: TaskStatus }) {
  const config = statusConfig[status]
  const Icon = config.icon
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.color} text-white`}
      title={config.label}
    >
      <Icon className="h-3 w-3" />
    </span>
  )
}

function PriorityBadge({ priority }: { priority: Priority }) {
  const config = priorityConfig[priority]
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.color}`}
      title={`Priorité: ${config.label}`}
    >
      <Flag className="h-3 w-3" />
    </span>
  )
}

function TaskStatusButton({ task, onStatusChange }: { task: Task; onStatusChange: (id: string, status: TaskStatus) => void }) {
  const nextStatus: Record<TaskStatus, TaskStatus> = {
    "not-started": "in-progress",
    "in-progress": "completed",
    completed: "not-started",
    blocked: "in-progress",
    "on-hold": "in-progress",
  }

  const getIcon = () => {
    if (task.status === "not-started") return Play
    if (task.status === "in-progress") return CheckCircle
    return Clock
  }

  const Icon = getIcon()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-6 px-2 text-xs"
      onClick={(e) => {
        e.stopPropagation()
        onStatusChange(task.id, nextStatus[task.status])
      }}
      title={`Changer le statut: ${statusConfig[nextStatus[task.status]].label}`}
    >
      <Icon className="h-3 w-3" />
    </Button>
  )
}

function TaskDetailsModal({
  task,
  onClose,
  onStatusChange,
}: {
  task: Task
  onClose: () => void
  onStatusChange: (id: string, status: TaskStatus) => void
}) {
  const status = statusConfig[task.status]
  const priority = priorityConfig[task.priority]
  const StatusIcon = status.icon

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-card rounded-xl border border-border p-6 max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold">{task.name}</h3>
              <StatusBadge status={task.status} />
              <PriorityBadge priority={task.priority} />
            </div>
            <div className="text-sm text-muted-foreground">Tâche {task.id}</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onStatusChange(task.id, "in-progress")}>
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => onStatusChange(task.id, "completed")}>
              <CheckCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <XCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Description
              </h4>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Livrable
              </h4>
              <p className="text-sm">{task.deliverable}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Assigné à
              </h4>
              <p className="text-sm">{task.assignee}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Planning
              </h4>
              <div className="text-sm space-y-1">
                <div>
                  Durée: <strong>{task.weeks} semaine{task.weeks > 1 ? "s" : ""}</strong>
                </div>
                <div>
                  Période: <strong>Semaine {task.startWeek} - {task.startWeek + task.weeks - 1}</strong>
                </div>
                {task.estimatedHours && (
                  <div>
                    Heures estimées: <strong>{task.estimatedHours}h</strong>
                  </div>
                )}
              </div>
            </div>

            {task.budget && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Budget
                </h4>
                <p className="text-2xl font-bold">{task.budget.toLocaleString()}€</p>
              </div>
            )}

            {task.dependencies.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  Dépendances
                </h4>
                <div className="flex flex-wrap gap-2">
                  {task.dependencies.map((dep) => (
                    <span key={dep} className="px-3 py-1 bg-muted rounded-md text-sm font-mono">
                      {dep}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Progression
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Avancement</span>
                  <span className="font-bold">{task.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${status.color} transition-all`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <StatusIcon className="h-4 w-4" />
                Statut
              </h4>
              <div className="flex gap-2">
                {Object.entries(statusConfig).map(([statusKey, config]) => {
                  const StatusIconItem = config.icon
                  return (
                    <Button
                      key={statusKey}
                      variant={task.status === statusKey ? "default" : "outline"}
                      size="sm"
                      onClick={() => onStatusChange(task.id, statusKey as TaskStatus)}
                    >
                      <StatusIconItem className="h-3 w-3" />
                      {config.label}
                    </Button>
                  )
                })}
              </div>
            </div>

            {task.subtasks && task.subtasks.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Sous-tâches ({task.subtasks.filter((st) => st.completed).length}/{task.subtasks.length})
                </h4>
                <div className="space-y-2">
                  {task.subtasks.map((subtask) => (
                    <div key={subtask.id} className="flex items-center gap-2 text-sm">
                      {subtask.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className={subtask.completed ? "line-through text-muted-foreground" : ""}>
                        {subtask.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {task.resources && task.resources.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Ressources Nécessaires
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {task.resources.map((resource, idx) => (
                    <li key={idx}>{resource}</li>
                  ))}
                </ul>
              </div>
            )}

            {task.risks && task.risks.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  Risques Identifiés
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {task.risks.map((risk, idx) => (
                    <li key={idx} className="text-orange-600">{risk}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
          <Button variant="default">
            <Edit className="h-4 w-4" />
            Modifier
          </Button>
        </div>
      </div>
    </div>
  )
}
