import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { User } from './User';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  private usersUrl = "api/users";
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    /*return this.http.get("http://localhost:8080/sea/users")
    .toPromise()
    .then(response => JSON.parse(String(response)) as User[])
    .catch(this.handleError);*/
    return this.http.get<Event>("http://localhost:8080/sea/users")
    .pipe(
      catchError(this.handleError('getUsers', null))
    );
  }

  getUser(id:number):Observable<User>{
    /*const url = "http://localhost:8080/sea/users"+"/"+id;
    return this.http.get(url)
    .toPromise()
    .then(response => JSON.parse(String(response)) as User)
    .catch(this.handleError);*/
    return this.http.get<User>("http://localhost:8080/sea/users"+"/"+id)
    .pipe(
      catchError(this.handleError('getUser', null))
    );
  }

  update(user:User):Observable<User> {
        /*const url = "http://localhost:8080/sea/users"+'/'+user.id;
        return this.http
        .put(url, JSON.stringify(user),{headers:this.headers})
        .toPromise()
        .then(()=>user)
        .catch(this.handleError);*/
        return this.http.put<User>("http://localhost:8080/sea/users"+'/'+user.id, JSON.stringify(user),{headers:this.headers})
    .pipe(
      catchError(this.handleError('update', null))
    );
    }

    create(name:string): Observable<User> {
       /* return this.http
        .post("http://localhost:8080/sea/users",JSON.stringify({name:name}),{headers:this.headers})
        .toPromise()
        .then(res => JSON.parse(String(res)).data as User)
        .catch(this.handleError);*/
        return this.http.post<User>("http://localhost:8080/sea/users",JSON.stringify({name:name}),{headers:this.headers})
    .pipe(
      catchError(this.handleError('create', null))
    );
    }

    delete(id:number) : Observable<void> {
        /*const url = "http://localhost:8080/sea/users"+'/'+id;
        return this.http.delete(url,{headers:this.headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);*/
        return this.http.delete<User>( "http://localhost:8080/sea/users"+'/'+id)
    .pipe(
      catchError(this.handleError('delete', null))
    );
    }

    login(name:string,password:string) : Observable<any> {
      /*return this.http
        .post("http://localhost:8080/sea/login",JSON.stringify({name:name,password:password}),{headers:this.headers})
        .toPromise()
        .then(res => JSON.parse(String(res)).data)
        .catch(this.handleError);*/
        return this.http.post<any>("http://localhost:8080/sea/login",JSON.stringify({name:name,password:password}),{headers:this.headers})
    .pipe(
      catchError(this.handleError('login', null))
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
