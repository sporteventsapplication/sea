import { Component, Input, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { EventService } from '../event.service';
import { NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit,AfterViewChecked {
  @Input() event: Event;
  @ViewChild('dpS') startDatePicker:NgbDatepicker;
  @ViewChild('dpE') endDatePicker:NgbDatepicker;  

  startDateStruct: NgbDateStruct;
  startTimeStruct : {hour: number, minute: number};
  endDateStruct: NgbDateStruct;
  endTimeStruct : {hour: number, minute: number};
  startNavDate: {year: number, month: number};
  endNavDate: {year: number, month: number};

  checkStartDatePicker:NgbDatepicker;
  checkEndDatePicker:NgbDatepicker;

  constructor(
    private eventService:EventService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngAfterViewChecked() {
    if (this.checkStartDatePicker === this.startDatePicker) {
      console.log('startDatePicker Checked (no change)');
    } else {
      this.checkStartDatePicker = this.startDatePicker;
      console.log('startDatePicker Checkin');
      this.startDatePicker.navigateTo({year: this.startDateStruct.year, month: this.startDateStruct.month});
    }

    if (this.checkEndDatePicker === this.endDatePicker) {
      console.log('endDatePicker Checked (no change)');
    } else {
      this.checkEndDatePicker = this.endDatePicker;
      console.log('endDatePicker Checkin');
      this.endDatePicker.navigateTo({year: this.endDateStruct.year, month: this.endDateStruct.month});
    }
  }

  setDateTimePicker(isStartDate:boolean,dateString:string):void {
    let dateTimeArray:string[]=dateString.split(' ');
    let date:string=dateTimeArray[0];
    let time:string=dateTimeArray[1];

    let dateSplit:string[]=date.split('-');
    let timeSplit:string[]=time.split(':');

    if (isStartDate){
    this.startDateStruct = {year: parseInt(dateSplit[0]), month: parseInt(dateSplit[1]), day: parseInt(dateSplit[2])};
    this.startTimeStruct = {hour: parseInt(timeSplit[0]), minute: parseInt(timeSplit[1])};
    }else{
    this.endDateStruct = {year: parseInt(dateSplit[0]), month: parseInt(dateSplit[1]), day: parseInt(dateSplit[2])};
    this.endTimeStruct = {hour: parseInt(timeSplit[0]), minute: parseInt(timeSplit[1])};
    
    }
  }

  saveDateTimePicker(){
    this.event.startDate = this.startDateStruct.year+"-"+this.startDateStruct.month+"-"+this.startDateStruct.day+" "+this.startTimeStruct.hour+":"+this.startTimeStruct.minute;
    this.event.endDate   = this.endDateStruct.year  +"-"+this.endDateStruct.month  +"-"+this.endDateStruct.day  +" "+this.endTimeStruct.hour+":"+this.endTimeStruct.minute;
  }

  loadEvent(event:Event):void{
    this.event = event;
    this.setDateTimePicker(true,this.event.startDate);
    this.setDateTimePicker(false,this.event.endDate);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.eventService
        .getEvent(+params.get('id')))
      .subscribe(event => this.loadEvent(event));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.saveDateTimePicker();
    this.eventService.update(this.event)
      .then(() => this.goBack());
  }


}
