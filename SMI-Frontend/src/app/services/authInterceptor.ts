
import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    if (access_token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + access_token),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}