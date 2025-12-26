import { Users, Briefcase, DollarSign, GraduationCap, CheckCircle2 } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Équipe & Compétences</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Compétences requises et profils détaillés des 6 membres de l'équipe projet
          </p>
        </div>

        {/* Skills Overview */}
        <section className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Compétences Requises</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCategory
              title="Compétences Techniques"
              skills={[
                "IoT Engineering",
                "Systèmes Embarqués",
                "Électronique PCB",
                "IA et Machine Learning",
                "Architecture Cloud",
                "Développement Mobile",
                "Cybersécurité",
              ]}
            />
            <SkillCategory
              title="Compétences Business"
              skills={[
                "Gestion de Produit",
                "Budgétisation",
                "Stratégie de Marché",
                "Conformité Légale",
                "Documentation",
                "Assurance Qualité",
                "Conformité Réglementaire",
              ]}
            />
          </div>
        </section>

        {/* Team Personas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Personas de l'Équipe</h2>
          <div className="space-y-6">
            <PersonaCard
              number={1}
              title="Ingénieur Systèmes IoT"
              experience="3-5 ans en programmation microcontrôleurs et systèmes IoT"
              salary="45 000 € - 60 000 € / an"
              education="Licence ou Master en Génie Électrique, Informatique"
              skills={[
                "Programmation microcontrôleurs ESP32",
                "Conception PCB et layout",
                "Protocole MQTT",
                "Intégration capteurs (température, humidité, poids, caméras)",
                "Communication sans fil (WiFi, Bluetooth)",
                "Gestion énergie pour IoT",
              ]}
              responsibilities={[
                "Conception architecture réseau capteurs",
                "Intégration tous types capteurs",
                "Développement routines calibration",
                "Implémentation systèmes collecte données",
                "Debug problèmes hardware",
                "Optimisation consommation énergétique",
              ]}
              color="primary"
            />

            <PersonaCard
              number={2}
              title="Développeur Firmware Embarqué"
              experience="4-6 ans en développement systèmes embarqués"
              salary="50 000 € - 70 000 € / an"
              education="Licence ou Master en Génie Informatique, Génie Électrique"
              skills={[
                "Programmation C/C++",
                "FreeRTOS ou RTOS similaire",
                "Architecture firmware",
                "Implémentation mises à jour OTA",
                "Algorithmes calibration capteurs",
                "Systèmes temps réel",
              ]}
              responsibilities={[
                "Développement firmware embarqué",
                "Implémentation système mises à jour OTA",
                "Création logique calibration capteurs",
                "Optimisation performance firmware",
                "Debug problèmes firmware",
                "Assurance fiabilité système",
              ]}
              color="accent"
            />

            <PersonaCard
              number={3}
              title="Développeur Mobile"
              experience="2-5 ans en développement applications mobiles"
              salary="40 000 € - 55 000 € / an"
              education="Licence en Informatique, Génie Logiciel"
              skills={[
                "React Native ou Flutter",
                "Développement iOS et Android",
                "Intégration API",
                "Gestion d'état",
                "Push notifications",
                "Fonctionnalité offline",
              ]}
              responsibilities={[
                "Développement version beta app mobile",
                "Implémentation fonctionnalités core",
                "Intégration APIs cloud",
                "Implémentation push notifications",
                "Création fonctionnalité offline",
                "Optimisation performance app",
              ]}
              color="success"
            />

            <PersonaCard
              number={4}
              title="Ingénieur IA"
              experience="3-5 ans en machine learning et computer vision"
              salary="55 000 € - 75 000 € / an"
              education="Master ou PhD en Informatique, Machine Learning"
              skills={[
                "Computer vision",
                "Deep learning (PyTorch, TensorFlow)",
                "Entraînement et optimisation modèles",
                "Transfer learning",
                "Déploiement modèles",
                "Prétraitement données",
              ]}
              responsibilities={[
                "Développement modèles reconnaissance alimentaire",
                "Création algorithmes prédiction expiration",
                "Construction moteur recommandations recettes",
                "Optimisation modèles pour performance",
                "Déploiement modèles cloud et edge",
                "Fine-tuning modèles avec données utilisateur",
              ]}
              color="warning"
            />

            <PersonaCard
              number={5}
              title="Architecte Cloud / Développeur Backend"
              experience="4-6 ans en architecture cloud et développement backend"
              salary="50 000 € - 70 000 € / an"
              education="Licence ou Master en Informatique ou Génie Logiciel"
              skills={[
                "Plateformes cloud (AWS, Firebase, Azure)",
                "Développement backend (Node.js, Python)",
                "Conception bases de données (SQL, NoSQL)",
                "Développement API (REST, GraphQL)",
                "Architecture microservices",
                "Implémentation sécurité",
              ]}
              responsibilities={[
                "Conception architecture cloud",
                "Développement APIs backend",
                "Implémentation schémas bases de données",
                "Assurance sécurité système",
                "Optimisation pour scalabilité",
                "Implémentation fonctionnalités temps réel",
              ]}
              color="primary"
            />

            <PersonaCard
              number={6}
              title="Chef de Produit"
              experience="5-8 ans en gestion produit, de préférence IoT/hardware"
              salary="60 000 € - 85 000 € / an"
              education="Licence ou Master en Business, Ingénierie. MBA préféré"
              skills={[
                "Stratégie produit",
                "Planification roadmap",
                "Gestion stakeholders",
                "Méthodologies Agile",
                "Analyse de marché",
                "Priorisation fonctionnalités",
              ]}
              responsibilities={[
                "Définition exigences produit",
                "Gestion roadmap produit",
                "Coordination équipes développement",
                "Suivi progression projet",
                "Gestion stakeholders",
                "Prise décisions stratégiques",
              ]}
              color="accent"
            />
          </div>
        </section>

        {/* Team Summary */}
        <section className="bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Résumé de l'Équipe</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-muted-foreground">Membres d'Équipe</div>
            </div>
            <div className="text-center p-6 bg-success/5 rounded-lg border border-success/20">
              <DollarSign className="h-12 w-12 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">205 K€</div>
              <div className="text-sm text-muted-foreground">Salaires Totaux (6 mois)</div>
            </div>
            <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
              <Briefcase className="h-12 w-12 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Allocation Ressources</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PersonaCard({
  number,
  title,
  experience,
  salary,
  education,
  skills,
  responsibilities,
  color,
}: {
  number: number
  title: string
  experience: string
  salary: string
  education: string
  skills: string[]
  responsibilities: string[]
  color: string
}) {
  const colorClasses = {
    primary: "bg-primary/5 border-primary/20",
    accent: "bg-accent/5 border-accent/20",
    success: "bg-success/5 border-success/20",
    warning: "bg-warning/5 border-warning/20",
  }

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} rounded-xl border p-8`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-card border border-border font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-start gap-2">
              <Briefcase className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
              <span>
                <strong>Expérience:</strong> {experience}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
              <span>
                <strong>Salaire:</strong> {salary}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
              <span>
                <strong>Formation:</strong> {education}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold mb-3 text-sm">Compétences Clés</h4>
          <ul className="space-y-1.5">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Responsabilités</h4>
          <ul className="space-y-1.5">
            {responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
