import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {map} from "rxjs";
import { appuser } from '../models/AppUser';
import { LoginRequest } from '../models/LoginRequest';
import { RegistrationRequest } from '../models/Registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  public getusers():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVC/api/v1/registartion/coll/"+sessionStorage.getItem("email"));
  }
  public getet():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVC/api/v1/registartion/et/");
  }
  public getp():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVC/api/v1/registartion/pr/");
  }
  public geta():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVC/api/v1/registartion/add/");
  }
  
  public send(loginRequest:LoginRequest){
    return this.http.post<LoginRequest>("http://localhost:8089/SpringMVC/mail/"+sessionStorage.getItem("email"),loginRequest);
  }
  public csv():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVC/export");
  }
  public profil():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVC/app/"+sessionStorage.getItem("email"));
  }
Login(loginRequest:LoginRequest){
      return this.http.post<LoginRequest>("http://localhost:8089/SpringMVC/api/v1/registartion/login",loginRequest);
      }
      addet(user:RegistrationRequest,id:number){
        return this.http.post<RegistrationRequest>("http://localhost:8089/SpringMVC/api/v1/registartion/"+id,user);
        }
        addprof(user:RegistrationRequest){
          return this.http.post<RegistrationRequest>("http://localhost:8089/SpringMVC/api/v1/registartion/prof",user);
          }
          addadmin(user:RegistrationRequest){
            return this.http.post<RegistrationRequest>("http://localhost:8089/SpringMVC/api/v1/registartion/Admin",user);
            }
makeadmin(id:number,user:appuser){
      return this.http.put<appuser>("http://localhost:8089/SpringMVC/admin/"+id,user);
      }
      authenticate(user:LoginRequest) {
        return this.http
          .post<any>("http://localhost:8089/SpringMVC/api/v1/registartion/login", user)
          .pipe(
            map(userData => {  
              sessionStorage.setItem("email", user.username);
               
               let tokenStr = "Bearer " + userData.token;
              sessionStorage.setItem("token", tokenStr); 
              sessionStorage.setItem("role", userData.roles); 
              return userData;
            })
          );
      }
      isUserLoggedIn() {
        let user = sessionStorage.getItem("email");
        console.log(!(user === null));
        return !(user === null);
      }
      logOut() {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("token");
      }
}
