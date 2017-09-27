import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Event } from './Event';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {
  private eventsUrl = "api/events";
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) { }

  getEvents() : Promise<Event[]> {
    return this.http.get(this.eventsUrl)
    .toPromise()
    .then(response => response.json().data as Event[])
    .catch(this.handleError);
  }

  getEvent(id:number):Promise<Event>{
    const url = this.eventsUrl+"/"+id;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Event)
    .catch(this.handleError);
  }

  update(event:Event):Promise<Event> {
        const url = this.eventsUrl+'/'+event.id;
        return this.http
        .put(url, JSON.stringify(event),{headers:this.headers})
        .toPromise()
        .then(()=>event)
        .catch(this.handleError);
    }

    create(event:Event): Promise<Event> {
        return this.http
        .post(this.eventsUrl,JSON.stringify(event),{headers:this.headers})
        .toPromise()
        .then(()=>event)
        .catch(this.handleError);
    }

    delete(id:number) : Promise<void> {
        const url = this.eventsUrl+'/'+id;
        return this.http.delete(url,{headers:this.headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
