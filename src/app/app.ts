import { Component, signal } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular';
import { DashboardSummary } from './components/dashboard-summary/dashboard-summary';
import { WorkHours } from './components/work-hours/work-hours';
import { Events } from './components/events/events';
import { Employees } from './components/employees/employees';
import { Schedule } from './components/schedule/schedule';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule, DashboardSummary, WorkHours, Events, Employees, Schedule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('nova-mfe-dashboard');
}
