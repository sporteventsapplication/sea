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
  model:Event;
  submitted:boolean;

  constructor(
    private eventService:EventService,
    private location:Location
    ) { }

  ngOnInit() {
    this.model = new Event(null,"Nom de l'evenement");
    this.submitted = false;
  }

  onSubmit():void{
    this.submitted = true;
    this.eventService.create(this.model.name)
    .then(event => {
      this.location.back();
    })
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }

}
