import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private isLoggedIn: boolean;
  public user?: User;
  public isAdmin: boolean;

  baseUrl: String;
  loginUrl: String;

  constructor(private http: Http) { 
    this.baseUrl = 'http://localhost:3000/api/';
    this.loginUrl = 'http://localhost:3000/user/';
    var loggedUser = JSON.parse(localStorage.getItem('actualUser'));
    if(loggedUser){
        this.isLoggedIn = true;
        this.user = loggedUser.user as User;
    }else{
      this.isLoggedIn = false;
    }
  }

  setLoggedIn(){
    this.isLoggedIn = true;
  }

  getUserLoggedIn(): boolean{
    var loggedUser = JSON.parse(localStorage.getItem('actualUser'));
      if(loggedUser){
        this.user = loggedUser.user as User;
        this.isAdmin = (this.user.role == 'admin' || this.user.role == 'employee') ? true : false;
      }
    return this.isLoggedIn;
  }

  loginUser(user: User): Observable<any>{
    var returnUser = new User();
    var headers = new Headers;
    headers.append('content-type', 'application/json');
    return this.http.post(this.loginUrl + 'login', user, {headers: headers})
           .map((response) => {
         
             var res = response.json();
                 
             returnUser.username = res.user.username;
             returnUser.password = res.user.password;
             returnUser.role = res.user.role;
             returnUser.registerDate = res.user.registerDate;
       
             if(returnUser.username){
             this.setLoggedIn();
             this.user = returnUser;
             this.isAdmin = (returnUser.role == 'admin' || returnUser.role == 'employee') ? true : false;
             console.log(returnUser);

             }
               return res;
            });
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('actualUser');
  }

  registerUser(user: User): Observable<any>{
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post(this.baseUrl + 'register', user)
                   .map((response) => {
                         var user = response.json().user as User;
                         if(user.username){
                           this.isLoggedIn = true;
                         }
                         return response.json();
                   });

  }

}
