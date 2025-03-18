import { Component } from '@angular/core';
import { DymaComponent } from './components/chapter-1_3/dyma.component';
import { Dyma2Component } from './components/chapter-1_3/dyma2.component';
import { Dyma3Component } from './components/chapter-1_3/dyma3.component';
import { Dyma4Component } from './components/chapter-1_3/dyma4.component';
import { Dyma5Component } from './components/chapter-1_3/dyma5.component';
import { ParentComponent } from './components/chapter-4/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // imports: [DymaComponent, Dyma2Component, Dyma3Component, Dyma4Component, Dyma5Component]  // chapter-1_3
  imports: [ParentComponent]  // chapter-4
})
export class AppComponent {
  title = 'dymacourse';
}
