export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                SF
              </div>
              <span className="font-bold text-lg">Smart Fridge</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Projet académique de gestion pour un réfrigérateur intelligent connecté de nouvelle génération
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Gantt Chart</li>
              <li>Compétences & Personas</li>
              <li>Liste des Ressources</li>
              <li>Proposition Budgétaire</li>
              <li>Gestion des Risques</li>
              <li>Plan Qualité</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Informations Projet</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Durée: 38 semaines</li>
              <li>Budget: 362 200 €</li>
              <li>Équipe: 6 experts</li>
              <li>Phases: 7</li>
              <li>Type: Étude de faisabilité</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Smart Fridge Project. Projet académique de gestion de projet.</p>
        </div>
      </div>
    </footer>
  )
}
