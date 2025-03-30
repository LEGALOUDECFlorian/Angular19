import { Injectable, InjectionToken } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MyClass {
  test = 123;
}

export const MY_CONFIG_TOKEN = new InjectionToken('Je suis un token valide', {
  factory: () => {
    return {
      title: 'Angular',
    };
  },
  providedIn: 'root',
});

export const config = {
  title: 'Angular',
}