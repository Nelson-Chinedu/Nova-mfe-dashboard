import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [NgClass],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  eventType = signal('time_off');

  eventTypeActiveTab = (type: string) => {
    console.log('tab clicked', type);
    this.eventType.set(type);
  };
}
