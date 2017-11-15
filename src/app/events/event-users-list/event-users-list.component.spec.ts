import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUsersListComponent } from './event-users-list.component';

describe('EventUsersListComponent', () => {
  let component: EventUsersListComponent;
  let fixture: ComponentFixture<EventUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
