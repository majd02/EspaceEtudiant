import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { matiere } from 'src/app/models/matiere';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  constructor(private matier:MatiereService,private route: ActivatedRoute,private router:Router) { }
matiere:any = new matiere();
public metieres!:any[];
id!:number;

property!: boolean ;

updateevent(id: number){
  this.router.navigate(['/updatemat', id]);
}
public getEvents():void{
  this.matier.getEvent().subscribe(
    (response:any[])=>{
      this.metieres=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );
  
  
}
public getEventall():void{
  this.matier.getEvents().subscribe(
    (response:any[])=>{
      this.metieres=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );
  
  
}
public getEvent():void{
  this.matier.getEventspec(this.id).subscribe(
    (response:any[])=>{
      this.metieres=response;
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
    ); location.reload();
  }
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    if(this.id!=null ){
      this.getEvent()
    }if(this.id==null && sessionStorage.getItem("role")=="[ROLE_CLIENT]"){
      this.getEvents()
    }
    if (sessionStorage.getItem("role")=="[ROLE_ADMIN]" && this.id!=null )
    {this.property=true ; this.getEvent()}
   
    if (sessionStorage.getItem("role")=="[ROLE_ADMIN]" && this.id==null )
    {this.property=true ; this.getEventall()}
   

  }
  addEvent(){
    this.matier.addEvent(this.matiere).subscribe();
    location.reload();
    return this.matiere;
    
     
    }

}
