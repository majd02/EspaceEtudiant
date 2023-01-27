import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { planing } from 'src/app/models/planing';
import { AuthService } from 'src/app/services/auth.service';
import { MatiereService } from 'src/app/services/matiere.service';
import { PlaningService } from 'src/app/services/planing.service';
import { SalleService } from 'src/app/services/salle.service';
import { SalleComponent } from '../salle/salle.component';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrls: ['./planing.component.css']
})
export class PlaningComponent implements OnInit {

  constructor(private uss:AuthService, private matier:PlaningService,private tser:MatiereService,private ttser:SalleService,private router: Router) { }
  planing:any = new planing();
  public planings!:any[];
  matieres:any;
  subthemes:any;
  Selectedid2 :any
  
Selectedid3 :any
salles:any;

users:any;

Selectedid1:any

property!: boolean ;
updateevent(id: number){
  this.router.navigate(['/plaupdate', id]);
}
public getEvents():void{
  this.matier.getEvents().subscribe(
    (response:any[])=>{
      this.planings=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    ); 
  
  
}
public getEventuser():void{
  this.matier.getEvent().subscribe(
    (response:any[])=>{
      this.planings=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    ); 
  
  
}
public getEventprof():void{
  this.matier.getEventprof().subscribe(
    (response:any[])=>{
      this.planings=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    ); 
  
  
}
    deleteEvent(id:number){
      this.matier.deleteEventById(id).subscribe(
      ); 
      location.reload();
    }
    ngOnInit(): void {
      if (sessionStorage.getItem("role")=="[ROLE_ADMIN]")
      {
        this.getEvents();} if (sessionStorage.getItem("role")=="[ROLE_PROF]"){this.getEventprof();}else{
          this.getEventuser()
        }
      this.ttser.getEvent().subscribe(
        (data:any)=>{
          this.salles = data,
          console.log(this.salles)
      })
      this.uss.getp().subscribe(
        (data:any)=>{
          this.users = data,
          console.log(this.users)
      })
      if (sessionStorage.getItem("role")=="[ROLE_ADMIN]")
      {this.property=true}else{this.property=false}
      
    this.showall();
    this.onSelect(this.Selectedid1.themeID) 
    
    this.showall2();
    this.onSelect2(this.Selectedid2.themeID) 
    
    this.showall3();
    this.onSelect3(this.Selectedid3.themeID) 

   
    
    }
    onSelect(themeID:any){

      console.log(themeID.target.value); 
      this.Selectedid1=themeID.target.value
    
    }
    showall(){
      this.tser.getEvents().subscribe(
        (data:any)=>{
          this.matieres = data,
          console.log(this.matieres)
      })
    }
    showall3(){
      this.uss.getp().subscribe(
        (data:any)=>{
          this.users = data,
          console.log(this.users)
      })
    }
    onSelect2(themeID:any){

      console.log(themeID.target.value);
      
      this.Selectedid2=themeID.target.value
    
    }
    onSelect3(themeID:any){

      console.log(themeID.target.value);
      
      this.Selectedid3=themeID.target.value
    
    }
    showall2(){
      this.ttser.getEvent().subscribe(
        (data:any)=>{
          this.salles = data,
          console.log(this.salles)
      })
    }
    addEvent(){
      this.matier.addEvent(this.planing,this.Selectedid1,this.Selectedid2,this.Selectedid3).subscribe();
      location.reload();
      
       
      }

}
