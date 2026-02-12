import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CloudDownload, LayoutDashboard, LucideAngularModule } from 'lucide-angular';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZonelessChangeDetection(), // <-- Use Zoneless
    // provideZonelessChangeDetection({ eventCoalescing: true }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ CloudDownload, LayoutDashboard })),
    provideCharts(withDefaultRegisterables()),
  ],
};
