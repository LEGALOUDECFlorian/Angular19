import { Component } from '@angular/core';
import { DymaComponent } from './components/chapter-1_3/dyma.component';
import { Dyma2Component } from './components/chapter-1_3/dyma2.component';
import { Dyma3Component } from './components/chapter-1_3/dyma3.component';
import { Dyma4Component } from './components/chapter-1_3/dyma4.component';
import { Dyma5Component } from './components/chapter-1_3/dyma5.component';
import { ParentComponent } from './components/chapter-4/parent.component';
import { Dyma61Component } from './components/chapter-6/dyma6-1.component';
import { Dyma62Component } from './components/chapter-6/dyma6-2.component';
import { Dyma63Component } from './components/chapter-6/dyma6-3.component';
import { Dyma64Component } from './components/chapter-6/dyma6-4.component';
import { Dyma71Component } from './components/chapter-7/dyma7-1.component';
import { Dyma72Component } from './components/chapter-7/dyma7-2.component';
import { Dyma73Component } from './components/chapter-7/dyma7-3.component';
import { Dyma74Component } from './components/chapter-7/dyma7-4/dyma7-4.component';
import { Dyma91Component } from './components/chapter-9/chapter9-1/dyma9-1.component';
import { Dyma92Component } from './components/chapter-9/chapter9-2/dyma9-2.component';
import { Dyma93Component } from './components/chapter-9/chapter9-3/dyma9-3.component';
import { Dyma94Component } from './components/chapter-9/chapter9-4/dyma9-4.component';
import { Dyma95Component } from './components/chapter-9/chapter-9-5/dyma9-5.component';
import { Dyma112Component } from './components/chapter-11-injectables/chapter-11_2/dyma-11-2.component';
import { Dyma113Component } from './components/chapter-11-injectables/chapter-11_3/dyma-11-3.component';
import { Dyma121Component } from './components/chapter-12-directives/chapter-12_1_4/dyma-12-1.component';
import { Dyma125Component } from './components/chapter-12-directives/chapter-12_5/dyma-12-5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [DymaComponent, Dyma2Component, Dyma3Component, Dyma4Component, Dyma5Component]  // chapter-1_3
  // imports: [ParentComponent]  // chapter-4
  // imports: [Dyma61Component, Dyma62Component, Dyma63Component, Dyma64Component] // chapter-6
  // imports: [Dyma71Component, Dyma72Component, Dyma73Component] // chapter-7-(1_3)
  // imports: [Dyma74Component] // chapter-7-4
  // imports: [Dyma91Component] // chapter-9_1
  // imports: [Dyma92Component] // chapter-9_2
  // imports: [Dyma93Component] // chapter-9_3
  // imports: [Dyma94Component] // chapter-9_4
  // imports: [Dyma95Component] // chapter-9_5
  // imports: [Dyma112Component] // chapter-11_2
  // imports: [Dyma113Component] // chapter-11_3
  // imports: [Dyma121Component] // chapter-12_1
  imports: [Dyma125Component] // chapter-12_5
})
export class AppComponent {
  title = 'dymacourse';
}
