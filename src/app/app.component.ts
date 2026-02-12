import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { DashboardSummary } from './components/dashboard-summary/dashboard-summary';
import { WorkHours } from './components/work-hours/work-hours';
import { Events } from './components/events/events';
import { Employees } from './components/employees/employees';
import { Schedule } from './components/schedule/schedule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LucideAngularModule, DashboardSummary, WorkHours, Events, Employees, Schedule],
  templateUrl: './app.html',
})
export class AppComponent {}
