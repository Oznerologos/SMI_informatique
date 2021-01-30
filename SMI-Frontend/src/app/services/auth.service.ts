import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_REGISTER = "http://localhost:3000/users";
  private URL_LOGIN = "http://localhost:3000/auth/login";
  private URL_RESETPASSWORD = "http://localhost:3000/newPassword";

  constructor(private http: HttpClient, private router: Router) { }

  register(formRegister: any){
    return this.http.post<any>(this.URL_REGISTER, formRegister);
  }

  login(formLogin: any){
    return this.http.post<any>(this.URL_LOGIN, formLogin);
  }

  resetPassword(token: any, mail: any){
    return this.http.post<any>(this.URL_RESETPASSWORD + "/"+token, mail);
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
}
