import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { matiere } from '../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http:HttpClient) { }
  public getEvent():Observable<matiere[]>{
    return this.http.get<matiere[]>("http://localhost:8089/SpringMVC/matiere/"+sessionStorage.getItem("email"));
  }
  public getEventid(id:number){
    return this.http.get("http://localhost:8089/SpringMVC/matiere/id/"+id);

    }
  public getEvents():Observable<matiere[]>{
    return this.http.get<matiere[]>("http://localhost:8089/SpringMVC/matiere/all");
  }
  public getEventspec(id:number):Observable<matiere[]>{
    return this.http.get<matiere[]>("http://localhost:8089/SpringMVC/matiere/spec/"+id);
  }
  addEvent(matiere:matiere){
    return this.http.post<matiere>("http://localhost:8089/SpringMVC/matiere",matiere);
    }
    public deleteEventById(id:number){
      return this.http.delete("http://localhost:8089/SpringMVC/matiere/"+id);
  
      }
      updateEvent(matiere:matiere,id:number){
        return this.http.put<matiere>("http://localhost:8089/SpringMVC/matiere/update/"+id,matiere);
        }
        
        aff(idm:number,id:number,matiere:matiere){
          return this.http.put<matiere>("http://localhost:8089/SpringMVC/matiere/"+id+"/"+idm,matiere);
          }
  
}
