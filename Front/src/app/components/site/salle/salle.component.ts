import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  constructor(private matier:SalleService , private route: ActivatedRoute, private router: Router
    ) { }
  salle:any = new salle();
  public salles!:any[];
  id!:number;
  property!: boolean;
  
  public getEvent():void{
    this.matier.getEvent().subscribe(
      (response:any[])=>{
        this.salles=response;
        console.log(response);
      },
        (error:HttpErrorResponse)=>
        {
          alert(error.message);
        }
      );
    
    
  }
  public getEvents():void{
    this.matier.getEvents(this.id).subscribe(
      (response:any[])=>{
        this.salles=response;
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
    
      this.id = this.route.snapshot.params['id'];
      console.log(this.id)
      if(this.id!=null){
        this.getEvents()
      }else{
        this.getEvent()
      }
      if (sessionStorage.getItem("role")=="[ROLE_ADMIN]")
      {this.property=true}else{this.property=false}
  
    }
    updateevent(id: number){
      this.router.navigate(['/salleupdate', id]);
    }
    addEvent(){
      this.matier.addEvent(this.salle).subscribe();
      location.reload();
      return this.salle;
      
       
      }
    }
