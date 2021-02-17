import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../board/user/user.config';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
@Injectable()
export class AdminService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.authService.URL_USER}`);
  }

  public getUser(userId: number): Observable<any> {
    return this.http.get(`${this.authService.URL_USER}/getOneId/` + userId);
  }

  public createUser(user: IUser): Observable<any> {
    return this.http.post(`${this.authService.URL_USER}`, user);
  }

  public updateUser(user: IUser): Observable<any> {
    return this.http.put(`${this.authService.URL_USER}/` + user.id, user);
  }

  public deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.authService.URL_USER}/` + userId, {});
  }

  public getConfigs(): Observable<any> {
    return this.http.get(`${this.authService.URL_CONFIG}`);
  }

  public getConfigsUser(userId: number): Observable<any> {
    return this.http.get(`${this.authService.URL_CONFIG}/user/` + userId);
  }

  public getConfig(configId: number): Observable<any> {
    return this.http.get(`${this.authService.URL_CONFIG}/` + configId);
  }

  public createConfig(config: IUser): Observable<any> {
    return this.http.post(`${this.authService.URL_CONFIG}`, config);
  }

  public updateConfig(config: IUser): Observable<any> {
    return this.http.put(`${this.authService.URL_CONFIG}/` + config.id, config);
  }

  public deleteConfig(configId: number): Observable<any> {
    return this.http.delete(`${this.authService.URL_CONFIG}/` + configId, {});
  }
}
