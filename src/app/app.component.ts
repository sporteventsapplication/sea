import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sport Events Application';
  navPart:string;

  setActive(navPart:string):void{
    this.navPart=navPart;
  }

  ngOnInit() {
    this.setActive('home');
  }
}
