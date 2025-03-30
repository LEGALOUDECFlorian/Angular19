import { Component, inject, signal, ViewContainerRef } from '@angular/core';
import { AComponent } from '../chapter9-4/a.component';
import { BComponent } from './b.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dyma9-5',
  imports: [CommonModule],
  template: `
   <button (click)="selectComponent()">Toggle</button>

   <ng-container *ngComponentOutlet="getComponent()">
   </ng-container>


   <hr>

   <button (click)="loadComponent()">Toggle</button>
   
  `,
  styles: ``
})
export class Dyma95Component {
  componentName = signal<'a' | 'b'>('a');

  selectComponent() {
    if (this.componentName() === 'a') {
      this.componentName.set('b');
    } else {
      this.componentName.set('a');
    }
  }

  getComponent() {
    return this.componentName() === 'a' ? AComponent : BComponent;
  }

  // ---------------------------------------------------------------------------- \\

  viewContainerRef = inject(ViewContainerRef);

  // loadComponent() {
  // this.viewContainerRef.createComponent(AComponent);
  // }

  async loadComponent() {
    const AComponent = (await import('./a.component')).AComponent
    this.viewContainerRef.createComponent(AComponent);
    }

}
