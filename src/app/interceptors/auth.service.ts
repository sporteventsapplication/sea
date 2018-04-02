import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

this.router= Router;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private router: Router){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.storage.get('token');
    if(!token && req.url != "http://localhost:8080/sea/login"){
      this.router.navigateByUrl("/login");
    }
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer `+token
      }
    });

    return next.handle(req);
  }
}