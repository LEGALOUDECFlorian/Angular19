import { computed, Directive, effect, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    // '[style.color]': '"blue"',
    // '[style.color]': 'getColor()',
    '[style.color]': 'color()',
    // '(keydown)': 'keydown($event)',
    '(window:keydown)': 'keydown($event)',
  },
})
export class InputDirective {
  myhost = inject(ElementRef<HTMLInputElement>)
  // color = signal<string>('purple');
  color = computed(() => this.colors[this.colorIndex()]);
  colorIndex = signal(0);
  colors = ['red', 'blue', 'green', 'yellow'];
  appInput = input<boolean>();
  hello = input<string>();

  constructor() {
    console.log('in directive');
    console.log(this.myhost);
    // setTimeout(() => {
    //   this.color.set('red');
    // }, 3000)
    // this.myhost.nativeElement.style.color = 'red';
    effect(() => {
      console.log(this.appInput());
      console.log(this.hello());
    })
  }

  getColor() {
    return 'orange'
  }

  keydown(event: KeyboardEvent) {
    console.log(event);
    this.colorIndex.update((i) => ++i % 4);
    // this.color.set(this.colors[this.colorIndex()]);
    // console.log(this.colorIndex());
  }

}
