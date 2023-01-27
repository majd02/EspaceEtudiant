import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { planing } from '../models/planing';

@Injectable({
  providedIn: 'root'
})
export class PlaningService {
  constructor(private http:HttpClient) { }
  public getEvent():Observable<planing[]>{
    return this.http.get<planing[]>("http://localhost:8089/SpringMVC/planing/"+sessionStorage.getItem("email"));
  }
  public getEventprof():Observable<planing[]>{
    return this.http.get<planing[]>("http://localhost:8089/SpringMVC/planing/own/"+sessionStorage.getItem("email"));
  }
  public getEvents():Observable<planing[]>{
    return this.http.get<planing[]>("http://localhost:8089/SpringMVC/planing");
  }
  public getEventid(id:number){
    return this.http.get("http://localhost:8089/SpringMVC/planing/id/"+id);

    }
  addEvent(matiere:planing,idm:number,ids:number,idu:number){
    return this.http.post<planing>("http://localhost:8089/SpringMVC/planing/"+idm+"/"+ids+"/"+idu,matiere);
    }  
    updateEvent(matiere:planing,id:number,idm:number,ids:number){
      return this.http.put<planing>("http://localhost:8089/SpringMVC/planing/"+id+"/"+idm+"/"+ids,matiere);
      }
    public deleteEventById(id:number){
      return this.http.delete("http://localhost:8089/SpringMVC/planing/"+id);
  
      }
}
