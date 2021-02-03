import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public URL_USER = "http://localhost:3000/users";
  public URL_CONFIG = "http://localhost:3000/configs";
  public URL_LOGIN = "http://localhost:3000/auth/login";
  public URL_RESET = "http://localhost:3000/reset";
  public URL_VERIFY_TOKEN = "http://localhost:3000/user";
  public isAdmin = false;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: {}){
    return this.http.post<any>(this.URL_USER, user);
  }

  login(formLogin: any){
    return this.http.post<any>(this.URL_LOGIN, formLogin);
  }

  resetPassword(mail: any){
    return this.http.post<any>(this.URL_RESET + '/sendMail', mail);
  }

  getUserMail(){
    const token = localStorage.getItem('token');
    const splitToken = token.split('.');
    const tokenSplited = splitToken[1];
    const tokenDecodeB64 = atob(tokenSplited);
    const parseToken = JSON.parse(tokenDecodeB64);
    //const userId = parseToken.sub; //Id
    const userMail = parseToken.mail; //Mail
    return userMail;
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.userRole("none");
    this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return localStorage.getItem('token');
  }

  roleUser(){
    var mail = this.getUserMail();
    return this.http.get<any>(this.URL_USER + '/getOneMail/' + mail);
  }

  userRole(role: string){
    if(role == 'admin'){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }

  recover(resettoken: string, password: string): Observable<any> {
    return this.http.post(this.URL_RESET + '/newPassword/' + resettoken, {password});
  }

  verifyToken(item: any): Promise<any> {
    if (this.getUserMail) {
      return this.http.get(this.URL_VERIFY_TOKEN).toPromise();
    }
  }
}
