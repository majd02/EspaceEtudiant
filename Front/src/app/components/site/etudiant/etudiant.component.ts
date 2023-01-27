import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appuser } from 'src/app/models/AppUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  constructor(private userservice:AuthService) { }
  public appusers!:any[];  
  
  user:any = new appuser(); 
  ngOnInit(): void {
    this.getusers();
  }
  public  csv (){
    this.userservice.csv().subscribe();

  }
  public getusers():void{
    this.userservice.getet().subscribe(
      (response:any[])=>{
        this.appusers=response;
        console.log(response);
      },
        (error:HttpErrorResponse)=>
        {
          alert(error.message);
        }
      );
    
    
  }
   admin(id:number){
    this.userservice.makeadmin(id,this.user).subscribe(
    ); 
    
  location.reload()
  }
}
