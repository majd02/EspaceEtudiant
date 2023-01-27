import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appuser } from 'src/app/models/AppUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
    this.userservice.geta().subscribe(
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
