import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { Event } from './Event';
import { User } from '../users/user';


import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EventService {
  private eventsUrl = "api/events";
  private usersUrl = "api/users";
  private usersOfEventUrl = "api/usersofevent";
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getEvents() : Observable<Event[]> {
    /*return this.http.get("http://localhost:8080/sea/events")
    .toPromise()
    .then(response => JSON.parse(String(response)) as Event[])
    .catch(this.handleError);*/
    return this.http.get<Event[]>("http://localhost:8080/sea/events")
    .pipe(
      catchError(this.handleError('getEvents', []))
    );
  }

  getEvent(id:number):Observable<Event>{
    const url = "http://localhost:8080/sea/events"+"/"+id;
    /*return this.http.get(url)
    .toPromise()
    .then(response => JSON.parse(String(response)) as Event)
    .catch(this.handleError);*/
    return this.http.get<Event>(url)
    .pipe(
      catchError(this.handleError('getEvent', null))
    );
  }

  getUsersOfEvent(id:number):Observable<User>{
    const url = "http://localhost:8080/sea/events"+"/"+id+"/participants";
    /*return this.http.get(url)
    .toPromise()
    .then(response => JSON.parse(String(response)))
    .catch(this.handleError);*/
    return this.http.get<Event>(url)
    .pipe(
      catchError(this.handleError('getUsersOfEvent', null))
    );
  }

  update(event:Event):Observable<Event> {
        const url = "http://localhost:8080/sea/events"+'/'+event.id;
        /*return this.http
        .put(url, JSON.stringify(event),{headers:this.headers})
        .toPromise()
        .then(()=>event)
        .catch(this.handleError);*/
        return this.http.put<Event>(url, JSON.stringify(event),{headers:this.headers})
        .pipe(
          catchError(this.handleError('update', null))
        );
    }

    create(event:Event): Observable<Event> {
      /*const url =
        return this.http
        .post("http://localhost:8080/sea/events",JSON.stringify(event),{headers:this.headers})
        .toPromise()
        .then(()=>event)
        .catch(this.handleError);*/
        return this.http.post<Event>("http://localhost:8080/sea/events",JSON.stringify(event),{headers:this.headers})
        .pipe(
          catchError(this.handleError('create', null))
        );
    }

    delete(id:number) : Observable<void> {
        /*const url = "http://localhost:8080/sea/events"+'/'+id;
        return this.http.delete(url,{headers:this.headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);*/
        return this.http.delete<Event>("http://localhost:8080/sea/events"+'/'+id)
        .pipe(
          catchError(this.handleError('delete', null))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
}

}
