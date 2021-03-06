import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

import { User } from '../../users/user';
import { Event } from '../event';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { EventService } from '../event.service';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'app-event-users-list',
  templateUrl: './event-users-list.component.html',
  styleUrls: ['./event-users-list.component.css']
})
export class EventUsersListComponent implements OnInit {
  @Input('eventId')  
  eventId: number;

  participants: User[];
  noparticipants: User[];
  private route:ActivatedRoute;

  constructor(private eventService: EventService,private userService: UserService) { }

  ngOnInit() {
    this.participants = [];
    this.noparticipants = [];
    if(this.eventId>0){
    this.eventService.getUsersOfEvent(this.eventId).subscribe(
      (results :any)=>{
        this.participants = results['participants'];
        this.noparticipants = results['noparticipants'];
      }
    );
  }else{
    this.userService.getUsers().subscribe(
      results => this.noparticipants=results
    );
  }
  }

    ajouterParticipant(noparticipant:User){
      for (var i = 0; i < this.noparticipants.length; i++) {
        var user = this.noparticipants[i];
        if (noparticipant.id == user.id) {
            this.noparticipants.splice(i, 1);
            this.participants.push(user);
            break;
        }
      }
      
  }

  supprimerParticipant(participant:User){
    for (var i = 0; i < this.participants.length; i++) {
      var user = this.participants[i];
      if (participant.id == user.id) {
          this.participants.splice(i, 1);
          this.noparticipants.push(user);
          break;
      }
    }
  }

}
