import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';
import { EventService} from './events/event.service';
import { UserService } from './users/user.service';
import { FormsModule } from '@angular/forms';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventUsersListComponent } from './events/event-users-list/event-users-list.component';
import { UserEventsListComponent } from './users/user-events-list/user-events-list.component';


const appRoutes: Routes = [
{path:'events',component: EventListComponent,},
{path:'events/:id', component: EventDetailComponent},
{path:'createEvent', component: EventCreateComponent},
{path:'users',component: UserListComponent},
{path:'users/:id', component:UserDetailComponent},
{path:'createUser', component:UserCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    UserListComponent,
    UserDetailComponent,
    EventCreateComponent,
    UserCreateComponent,
    EventUsersListComponent,
    UserEventsListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    ),
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [EventService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
