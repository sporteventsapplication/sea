import { Component, OnInit } from '@angular/core';
import { Event } from '../Event';
import { EventService } from '../event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  model: Event;
  submitted: boolean;

  constructor(
    private eventService: EventService,
    private location: Location
  ) { }

  
  ngOnInit() {
    this.model = new Event(null, "Nom de l'evenement","2017-09-20 15:12","2017-09-20","");
    this.submitted = false;
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.submitted = true;
    this.eventService.create(this.model)
      .then(event => {
        this.location.back();
      })
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }  

}
