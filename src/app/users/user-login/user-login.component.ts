import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { Login } from './login';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  model: Login;
  submitted: boolean;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.submitted = false;
    this.model = new Login("","");
  }

  goBack(): void {
    this.location.back();
  }

  onLogin(): void {
    this.submitted = true;
    this.userService.login(this.model.login,this.model.password)
      .subscribe(res => {
        this.storage.set("token", res.token);
        this.location.back();
      })
  }

}
