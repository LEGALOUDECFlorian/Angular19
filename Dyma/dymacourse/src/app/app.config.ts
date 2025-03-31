import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import fr  from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';

registerLocaleData(fr)

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
};
