import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { specialite } from '../models/Specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  constructor(private http:HttpClient) { }
  public getEvent():Observable<specialite[]>{
    return this.http.get<specialite[]>("http://localhost:8089/SpringMVC/Specialite/");
  }
  public getEvents():Observable<specialite[]>{
    return this.http.get<specialite[]>("http://localhost:8089/SpringMVC/Specialite/"+sessionStorage.getItem("email"));
  }
  addEvent(matiere:specialite){
  return this.http.post<specialite>("http://localhost:8089/SpringMVC/Specialite/add",matiere);
  }
  public deleteEventById(id:number){
  return this.http.delete("http://localhost:8089/SpringMVC/Specialite/"+id);
  }
  public getEventid(id:number){
  return this.http.get("http://localhost:8089/SpringMVC/Specialite/id/"+id);
    
  }
  updateEvent(matiere:specialite,id:number){
  return this.http.put<specialite>("http://localhost:8089/SpringMVC/Specialite/update/"+id,matiere);
  }
}
