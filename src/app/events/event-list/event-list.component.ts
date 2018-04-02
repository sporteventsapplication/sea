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
    this.eventService.getEvents().subscribe(
      events => this.events = events
    );
  }

  delete(event : Event):void {
    this.eventService
    .delete(event.id)
    .subscribe(()=>{
      this.events = this.events.filter(h => h!==event);
    });
  }

  ngOnInit() {
    this.getEvents();
  }

}
