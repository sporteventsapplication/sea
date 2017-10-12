import { Component, OnInit } from '@angular/core';
import { Event } from '../Event';
import { EventService } from '../event.service';
import { Location } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  model: Event;
  submitted: boolean;

  startDateStruct: NgbDateStruct;
  startTimeStruct : {hour: number, minute: number};
  endDateStruct: NgbDateStruct;
  endTimeStruct : {hour: number, minute: number};
  startNavDate: {year: number, month: number};
  endNavDate: {year: number, month: number};

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

  saveDateTimePicker(){
    this.model.startDate = this.startDateStruct.year+"-"+this.startDateStruct.month+"-"+this.startDateStruct.day+" "+this.startTimeStruct.hour+":"+this.startTimeStruct.minute;
    this.model.endDate   = this.endDateStruct.year  +"-"+this.endDateStruct.month  +"-"+this.endDateStruct.day  +" "+this.endTimeStruct.hour+":"+this.endTimeStruct.minute;
  }

  onSubmit(): void {
    this.submitted = true;
    this.saveDateTimePicker();
    this.eventService.create(this.model)
      .then(event => {
        this.location.back();
      })
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }  

}
