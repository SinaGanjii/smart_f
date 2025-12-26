"use client"

import { Presentation, Users, Target, TrendingUp, DollarSign, Shield, Award, CheckCircle2 } from "lucide-react"

export default function PresentationPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Structure de Présentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Guide complet pour créer une présentation professionnelle du projet Smart Fridge avec structure de slides
            détaillée
          </p>
        </div>

        {/* Presentation Overview */}
        <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <PresentationCard
            icon={<Presentation />}
            title="17 Slides"
            description="Structure complète"
            color="bg-blue-500/10 text-blue-600"
          />
          <PresentationCard
            icon={<Users />}
            title="20-30 min"
            description="Durée cible"
            color="bg-purple-500/10 text-purple-600"
          />
          <PresentationCard
            icon={<Target />}
            title="Multi-Audience"
            description="Investisseurs & Académique"
            color="bg-emerald-500/10 text-emerald-600"
          />
          <PresentationCard
            icon={<Award />}
            title="Professionnel"
            description="Design soigné"
            color="bg-amber-500/10 text-amber-600"
          />
        </section>

        {/* Slide Structure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Structure des Slides</h2>
          <div className="space-y-4">
            <SlideCard
              number={1}
              title="Slide de Titre"
              content={[
                "Nom du Projet: Smart Fridge - Réfrigérateur Connecté Nouvelle Génération",
                "Équipe du Projet (noms et rôles)",
                "Date de présentation",
                "Logo entreprise/institution",
              ]}
              notes="Slide d'ouverture professionnelle avec branding cohérent"
            />

            <SlideCard
              number={2}
              title="Agenda"
              content={[
                "Aperçu du Projet",
                "Analyse de Marché",
                "Définition Produit",
                "Faisabilité Technique",
                "Planification Projet",
                "Ressources & Budget",
                "Gestion des Risques",
                "Gestion de la Qualité",
                "Prochaines Étapes",
              ]}
              notes="Roadmap claire de la présentation"
            />

            <SlideCard
              number={3}
              title="Aperçu du Projet"
              content={[
                "Mission statement",
                "Portée du projet (planification, pas construction)",
                "Objectifs clés: Validation marché, définition features, roadmap complète",
                "Jalons investisseurs: Proof of Concept → Prototype/Pilote → Industrialisation",
              ]}
              notes="Établir le contexte et les objectifs du projet"
            />

            <SlideCard
              number={4}
              title="Opportunité de Marché"
              content={[
                "Contexte industrie: Croissance appareils smart home",
                "Lacunes marché: Manque AI avancée, tracking précis, automation réelle",
                "Segments cibles: Early adopters, acheteurs premium, familles santé-conscious",
                "Paysage concurrentiel: Samsung Family Hub, LG InstaView, nos différenciateurs",
              ]}
              notes="Démontrer la viabilité et l'opportunité du marché"
              visual="Graphiques de croissance marché, comparaison concurrents"
            />

            <SlideCard
              number={5}
              title="Vision Produit"
              content={[
                "Proposition de valeur: Gestion intelligente inventaire, réduction gaspillage alimentaire",
                "Aperçu fonctionnalités clés: Tracking inventaire, prédiction expiration, liste courses auto",
                "Composants hardware: Caméras internes, capteurs poids, température/humidité",
                "Capacités software: App mobile, cloud sync, AI models, recommandations recettes",
              ]}
              notes="Présenter la vision complète du produit"
              visual="Maquettes produit, captures écran app"
            />

            <SlideCard
              number={6}
              title="Faisabilité Technique - Hardware"
              content={[
                "Composants IoT: ESP32, capteurs digitaux, load cells HX711, modules caméra",
                "Intégration capteurs: Réseau de capteurs, collecte données temps réel",
                "Défis: Calibration capteurs, consommation énergie, fiabilité données",
                "Conclusion faisabilité: HAUTE - Technologies éprouvées disponibles",
              ]}
              notes="Valider la faisabilité technique hardware"
              visual="Diagramme architecture hardware"
            />

            <SlideCard
              number={7}
              title="Faisabilité Technique - AI & Software"
              content={[
                "Modèles AI requis: Classification vision (CNN), reconnaissance aliments, prédiction expiration",
                "Architecture cloud: Firebase/AWS IoT Core, sync temps réel, scalabilité",
                "Stack mobile app: React Native/Flutter, cross-platform",
                "Évaluation faisabilité: HAUTE - Frameworks matures, datasets disponibles",
              ]}
              notes="Démontrer la faisabilité software et IA"
              visual="Diagramme architecture système"
            />

            <SlideCard
              number={8}
              title="Roadmap Projet"
              content={[
                "Aperçu 7 phases: Research & Concept → Faisabilité → Design → Prototype → Testing → Industrialisation → Launch",
                "Timeline: 38 semaines (~9.5 mois)",
                "Jalons clés: Validation faisabilité (S10), Prototype fonctionnel (S22), Tests complets (S26), Lancement (S38)",
                "Visualisation Gantt chart simplifiée",
              ]}
              notes="Montrer planning détaillé et réaliste"
              visual="Gantt chart simplifié avec phases colorées"
            />

            <SlideCard
              number={9}
              title="Équipe & Compétences"
              content={[
                "Compétences requises: IoT, Embedded, Mobile, AI, Cloud, Product Management",
                "Composition équipe: 6 experts",
                "Personas clés avec rôles:",
                "  • IoT Engineer (45-60K€) - Hardware & capteurs",
                "  • Embedded Developer (50-70K€) - Firmware",
                "  • Mobile Developer (40-55K€) - App iOS/Android",
                "  • AI Engineer (55-75K€) - Models & ML",
                "  • Cloud Architect (50-70K€) - Backend & APIs",
                "  • Product Manager (60-85K€) - Coordination",
              ]}
              notes="Présenter l'équipe qualifiée"
              visual="Organigramme équipe avec photos/avatars"
            />

            <SlideCard
              number={10}
              title="Ressources"
              content={[
                "Ressources hardware: Capteurs (température, humidité, poids), caméras, microcontrôleurs",
                "Ressources software: Outils développement, services cloud, licences",
                "Installations: Espace bureau (6 mois), équipement tests",
                "Timeline acquisition: Ressources échelonnées par phase",
              ]}
              notes="Inventaire ressources nécessaires"
              visual="Timeline acquisition ressources"
            />

            <SlideCard
              number={11}
              title="Aperçu Budget"
              content={[
                "Budget total: 362 200 €",
                "Répartition par catégorie:",
                "  • Salaires: 205 000 € (57%)",
                "  • Charges patronales: 75 000 € (21%)",
                "  • Hardware & prototypage: 20 000 € (6%)",
                "  • Software & cloud: 3 000 € (1%)",
                "  • Tests & QA: 5 000 € (1%)",
                "  • Marketing: 15 000 € (4%)",
                "  • Installations: 19 200 € (5%)",
                "  • Contingence: 20 000 € (6%)",
              ]}
              notes="Présenter budget détaillé et justifié"
              visual="Graphique circulaire répartition budget"
            />

            <SlideCard
              number={12}
              title="Gestion des Risques"
              content={[
                "Top 6 risques identifiés:",
                "  1. Précision capteurs insuffisante (Prob: MEDIUM, Impact: HIGH)",
                "  2. Retard livraison app mobile (Prob: MEDIUM, Impact: MEDIUM)",
                "  3. Dépassement budget (Prob: LOW, Impact: HIGH)",
                "  4. Précision modèles AI insuffisante (Prob: MEDIUM, Impact: HIGH)",
                "  5. Problèmes conformité réglementaire (Prob: LOW, Impact: HIGH)",
                "  6. Dépendances fournisseurs externes (Prob: MEDIUM, Impact: MEDIUM)",
                "Matrice risques avec stratégies mitigation",
              ]}
              notes="Montrer anticipation proactive des risques"
              visual="Matrice risques (probabilité vs impact)"
            />

            <SlideCard
              number={13}
              title="Gestion de la Qualité"
              content={[
                "Conformité réglementaire: Marquage CE, RGPD, cybersécurité IoT",
                "Stratégie tests: Unitaires (>80%), intégration, fonctionnels, charge, usabilité, sécurité",
                "Amélioration continue: Feedback loops, analytics, programme beta (50-100 users)",
                "Métriques qualité: Satisfaction >4.0/5.0, uptime >99.5%, précision capteurs >95%",
              ]}
              notes="Démontrer engagement qualité"
              visual="Diagramme processus qualité"
            />

            <SlideCard
              number={14}
              title="Stratégie Communication"
              content={[
                "Communication stakeholders: Rapports mensuels, présentations jalons",
                "Communication équipe interne: Standups hebdomadaires, revues bi-hebdomadaires",
                "Reporting exécutif: Budgets, risques, décisions go/no-go",
                "Timeline communication: Quotidien (équipe) → Mensuel (stakeholders) → Par jalon (exécutifs)",
              ]}
              notes="Plan de communication structuré"
            />

            <SlideCard
              number={15}
              title="Réalisations Clés"
              content={[
                "Validation proof of concept: Marché viable, features définies, faisabilité confirmée",
                "Faisabilité technique confirmée: Hardware et software réalisables avec technologies actuelles",
                "Roadmap projet complète: Planning détaillé 38 semaines, 7 phases, ressources allouées",
                "Plans mitigation risques: 6 risques identifiés avec stratégies et contingences",
                "Framework qualité établi: Conformité réglementaire, tests, amélioration continue",
              ]}
              notes="Résumer accomplissements projet"
            />

            <SlideCard
              number={16}
              title="Prochaines Étapes"
              content={[
                "Actions immédiates:",
                "  • Approbation budget (362 200 €)",
                "  • Constitution équipe finale",
                "  • Setup infrastructure (bureau, outils)",
                "Tâches Phase 1 (Semaines 1-4):",
                "  • Étude marché approfondie",
                "  • Segmentation clients détaillée",
                "  • Benchmark concurrents",
                "  • Spécification produit v1",
                "Jalons à venir:",
                "  • M1: Phase 1 complète (Semaine 4)",
                "  • M2: Faisabilité validée (Semaine 10)",
              ]}
              notes="Plan d'action clair"
            />

            <SlideCard
              number={17}
              title="Questions & Réponses"
              content={[
                "Merci pour votre attention!",
                "Nous sommes prêts pour vos questions",
                "Informations contact de l'équipe",
              ]}
              notes="Slide de clôture interactive"
            />
          </div>
        </section>

        {/* Presentation Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Directives de Présentation</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <GuidelineCard
              title="Design Visuel"
              items={[
                "Design professionnel et cohérent",
                "Palette couleurs corporate (bleu, gris, accents)",
                "Typographie claire et lisible",
                "Visuels de qualité (graphiques, diagrammes, images)",
                "Brand identity cohérente sur tous les slides",
                "Éviter surcharge texte - privilégier visuels",
              ]}
            />
            <GuidelineCard
              title="Contenu"
              items={[
                "Messages clairs et concis",
                "Bullet points plutôt que paragraphes",
                "Données chiffrées et métriques",
                "Storytelling engageant",
                "Focus sur valeur et résultats",
                "Éviter jargon technique excessif",
              ]}
            />
            <GuidelineCard
              title="Présentation Orale"
              items={[
                "Pratique timing (20-30 minutes)",
                "Ton professionnel mais naturel",
                "Contact visuel avec audience",
                "Gérer questions avec confiance",
                "Prévoir slides backup pour Q&A",
                "Transition fluide entre slides",
              ]}
            />
            <GuidelineCard
              title="Livrables"
              items={[
                "Fichier PowerPoint/Keynote",
                "PDF de la présentation",
                "Notes du présentateur",
                "Enregistrement vidéo (si requis)",
                "Slides backup additionnels",
                "Handout résumé pour audience",
              ]}
            />
          </div>
        </section>

        {/* Tips for Success */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="h-7 w-7" />
            Conseils pour une Présentation Réussie
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={<Target />}
              title="Connaître l'Audience"
              tip="Adapter contenu et niveau détail selon audience (académique, investisseurs, technique)"
            />
            <TipCard
              icon={<CheckCircle2 />}
              title="Préparer à l'Avance"
              tip="Répéter plusieurs fois, chronométrer, anticiper questions difficiles"
            />
            <TipCard
              icon={<TrendingUp />}
              title="Raconter une Histoire"
              tip="Structure narrative: Problème → Solution → Résultats → Prochaines étapes"
            />
            <TipCard
              icon={<Users />}
              title="Engager l'Audience"
              tip="Poser questions, inviter interactions, démontrer passion pour le projet"
            />
            <TipCard
              icon={<Shield />}
              title="Être Transparent"
              tip="Admettre défis et risques, montrer plans de mitigation crédibles"
            />
            <TipCard
              icon={<DollarSign />}
              title="Focus sur la Valeur"
              tip="Souligner ROI, bénéfices marché, impact business, avantages compétitifs"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function PresentationCard({ icon, title, description, color }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function SlideCard({ number, title, content, notes, visual }: any) {
  return (
    <div className="bg-card rounded-xl border-2 border-border p-6 hover:border-primary transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <div className="space-y-2 text-sm">
            {content.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {visual && (
        <div className="mb-3 p-3 bg-muted/30 rounded-lg border border-border">
          <div className="text-xs font-semibold text-muted-foreground mb-1">Élément Visuel:</div>
          <div className="text-sm">{visual}</div>
        </div>
      )}
      <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
        <div className="text-xs font-semibold text-primary mb-1">Notes Présentateur:</div>
        <div className="text-sm text-muted-foreground">{notes}</div>
      </div>
    </div>
  )
}

function GuidelineCard({ title, items }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-3 text-sm">
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

function TipCard({ icon, title, tip }: any) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{tip}</p>
    </div>
  )
}
