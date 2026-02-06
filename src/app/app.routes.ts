import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
  // ... your actual routes
  { path: '**', component: EmptyRouteComponent },
];
