import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  model: User;
  submitted: boolean;

  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.model = new User(null, "Nom de l'utilisateur");
    this.submitted = false;
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.submitted = true;
    this.userService.create(this.model.name)
      .then(user => {
        this.location.back();
      })
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
