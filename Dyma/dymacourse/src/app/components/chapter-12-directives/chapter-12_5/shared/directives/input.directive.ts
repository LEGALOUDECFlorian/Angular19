import { Directive, inject, TemplateRef, ViewContainerRef, input, effect } from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class InputDirective {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);
  appInput = input<boolean>();

  show$ = effect(() => {
    if (this.appInput()) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $hello: 'world',
      });
    } else {
      this.viewContainerRef.clear();
    }
  });
}