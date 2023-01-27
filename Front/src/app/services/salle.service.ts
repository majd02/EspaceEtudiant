import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { salle } from '../models/salle';
@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }
  public getEvent():Observable<salle[]>{
    return this.http.get<salle[]>("http://localhost:8089/SpringMVC/salle/all");
  }
  public getEvents(id:number):Observable<salle[]>{
    return this.http.get<salle[]>("http://localhost:8089/SpringMVC/salle/"+id);
  }
  public getEventid(id:number){
    return this.http.get("http://localhost:8089/SpringMVC/salle/id/"+id);

    }
    updateEvent(matiere:salle,id:number){
      return this.http.put<salle>("http://localhost:8089/SpringMVC/salle/"+id,matiere);
      }
  addEvent(salle:salle){
    return this.http.post<salle>("http://localhost:8089/SpringMVC/salle",salle);
    }
    public deleteEventById(id:number){
      return this.http.delete("http://localhost:8089/SpringMVC/salle/"+id);
  
      }
      
    }
