import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_REGISTER = "http://localhost:3000/users";
  private URL_LOGIN = "http://localhost:3000/auth/login";
  private URL_RESETPASSWORD = "http://localhost:3000/reset/sendMail";
  private URL_NEWPASSWORD = "http://localhost:3000/reset/newPassword/";
  private URL_VERIFY_TOKEN = "http://localhost:3000/user";

  constructor(private http: HttpClient, private router: Router) { }

  register(user: {}){
    return this.http.post<any>(this.URL_REGISTER, user);
  }

  login(formLogin: any){
    return this.http.post<any>(this.URL_LOGIN, formLogin);
  }

  resetPassword(mail: any){
    return this.http.post<any>(this.URL_RESETPASSWORD, mail);
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
    this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return localStorage.getItem('token');
  }

  recover(resettoken: string, password: string): Observable<any> {
    return this.http.post(this.URL_NEWPASSWORD + resettoken, {password});
  }

  verifyToken(item: any): Promise<any> {
    if (this.getUserMail) {
      return this.http.get(this.URL_VERIFY_TOKEN).toPromise();
    }
  }
}
