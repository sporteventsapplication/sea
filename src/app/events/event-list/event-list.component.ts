import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) { }

  getEvents():void {
    this.eventService.getEvents().then(
      events => this.events = events
    );
  }

  ngOnInit() {
    this.getEvents();
  }

}
