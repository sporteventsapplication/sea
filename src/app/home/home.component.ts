import { Component, OnInit , ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Event } from '../events/event';
import { EventService } from '../events/event.service';
import { Router } from '@angular/router';

this.router= Router;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  calendarOptions: Options;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private eventService: EventService,private router: Router) { }

  ngOnInit() { 
    this.eventService.getEvents().subscribe(
      (events) =>  this.loadEvents(events)
    );
  
  }

  loadEvents(events:Event[]){
    var data = [];

    for(var event of events){
      data.push({
        id:event.id,
        title: event.name,
        start: event.startDate,
        end: event.endDate
      });
    }

    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      locale: 'fr',
      slotLabelFormat:"HH:mm",
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: data
    };  
  }

  eventClick(event:any){
      console.log(event);
      this.router.navigateByUrl('/events/'+event.event.id);
  }

}
