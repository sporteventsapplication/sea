import { Component,Input, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { EventService } from '../event.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event;

  constructor(
    private eventService:EventService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit():void {
    this.route.paramMap
    .switchMap((params:ParamMap)=>this.eventService
    .getEvent(+params.get('id')))
    .subscribe(event => this.event = event);
  }

  goBack():void{
        this.location.back();
    }

    save():void {
        this.eventService.update(this.event)
        .then(()=>this.goBack());
    }

}
