import {
  Component,
  SimpleChanges,
  afterRender,
  afterNextRender
} from '@angular/core';

@Component({
  selector: 'app-dyma9-3-enfant',
  imports: [],
  template: `
    <p>Composant Dyma</p>
  `,
  styles: ``
})
export class Dyma93EnfantComponent {
  // Log coloré pour chaque étape
  private log(msg: string, color = 'black') {
    console.log(`%c${msg}`, `color: ${color}; font-weight: bold`);
  }

  // Appelé à la création de l'instance (très tôt, avant le rendu)
  constructor() {
    this.log('🧱 constructor', 'orange');

    // afterRender : appelé juste après le rendu de la vue
    afterRender(() => {
      this.log('🎨 after render', 'green');
    });

    // afterNextRender : appelé après le *prochain* cycle de rendu
    // utile pour attendre que le DOM soit complètement prêt
    afterNextRender(() => {
      this.log('🔄 after next render', 'blue');
    });
  }

  // Détecte les changements d'@Input (non utilisé ici)
  ngOnChanges(changes: SimpleChanges) {
    this.log('📦 ngOnChanges', 'purple');
    console.log(changes);
  }

  // Appelé après le constructor, idéal pour initialiser des données
  ngOnInit() {
    this.log('🚀 ngOnInit', 'teal');
  }

  // Lié à <ng-content> (pas utilisé ici mais toujours appelé)
  ngAfterContentInit() {
    this.log('🧩 ngAfterContentInit', 'brown');
  }

  // Appelé après chaque vérification du contenu projeté
  ngAfterContentChecked() {
    this.log('✅ ngAfterContentChecked', 'brown');
  }

  // Appelé après que la vue (template HTML) est initialisée
  ngAfterViewInit() {
    this.log('👁️ ngAfterViewInit', 'darkcyan');
  }

  // Appelé à chaque vérification de la vue
  ngAfterViewChecked() {
    this.log('🔍 ngAfterViewChecked', 'darkcyan');
  }

  // Appelé juste avant que le composant soit détruit
  ngOnDestroy() {
    this.log('🧨 ngOnDestroy', 'red');
  }
}