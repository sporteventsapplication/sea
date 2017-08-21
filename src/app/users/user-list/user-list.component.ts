import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  getUsers():void {
    this.userService.getUsers().then(
      users => this.users = users
    );
  }

  delete(user : User):void {
    this.userService
    .delete(user.id)
    .then(()=>{
      this.users = this.users.filter(h => h!==user);
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
