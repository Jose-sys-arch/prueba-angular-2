import { IconDefinition } from './../../node_modules/@ant-design/icons-angular/types.d';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { provideNzIcons } from './icons-provider';
import { provideAnimations } from '@angular/platform-browser/animations';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(es);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideNzIcons(),
    { provide: NZ_ICONS, useValue: icons },
    importProvidersFrom(HttpClientModule),
    provideNzI18n(es_ES),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
