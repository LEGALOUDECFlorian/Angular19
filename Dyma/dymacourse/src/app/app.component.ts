import { Component } from '@angular/core';
import { DymaComponent } from './dyma.component';
import { Dyma2Component } from './dyma2.component';
import { Dyma3Component } from './dyma3.component';
import { Dyma4Component } from './dyma4.component';
import { Dyma5Component } from './dyma5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DymaComponent, Dyma2Component, Dyma3Component, Dyma4Component, Dyma5Component]
})
export class AppComponent {
  title = 'dymacourse';
}
