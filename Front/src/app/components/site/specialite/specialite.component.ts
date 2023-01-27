import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { specialite } from 'src/app/models/Specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  constructor(private matier:SpecialiteService , private router: Router
    ) { }
  specialite:any = new specialite();
  public specialites!:any[];
  property !:boolean;
  
  updateevent(id: number){
    this.router.navigate(['/specupdate', id]);
  }
    public getEvents():void{
      this.matier.getEvent().subscribe(
        (response:any[])=>{
          this.specialites=response;
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
    }
    check(id:number){
      this.router.navigate(['/mat', id]);
   
    }
    ngOnInit(): void {
      this.getEvents();
      
      if (sessionStorage.getItem("role")=="[ROLE_ADMIN]")
      {this.property=true}else{this.property=false}
    }
    addEvent(){
      this.matier.addEvent(this.specialite).subscribe();
      return this.specialite;
      
       
      }

}
