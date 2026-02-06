import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="padding: 20px; border: 2px solid #4A90E2; border-radius: 8px;">
      <h1>🚀 Nova Dashboard</h1>
      <p>Angular 21 Microfrontend is now active.</p>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
