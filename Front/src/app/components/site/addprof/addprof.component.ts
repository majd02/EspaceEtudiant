import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { RegistrationRequest } from 'src/app/models/Registration';
import { AuthService } from 'src/app/services/auth.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
@Component({
  selector: 'app-addprof',
  templateUrl: './addprof.component.html',
  styleUrls: ['./addprof.component.css']
})
export class AddprofComponent implements OnInit {
 

    constructor(private serviceuser :AuthService,private router: Router,private tser:SpecialiteService) { }
    user:any = new RegistrationRequest(); 
    
    user1:any = new LoginRequest(); 
    specialites:any;
  subthemes:any;
  SelectedTheme :any={
    themeID: 0, name: ''
  }
    ngOnInit(): void {
      this.showall();
      this.onSelect(this.SelectedTheme.themeID) 
    }
    adduser(){
      this.serviceuser.addprof(this.user).subscribe(
     
      );
      
       
      }
      onSelect(themeID:any){
  
        console.log(themeID);
      
      }
      showall(){
        this.tser.getEvent().subscribe(
          (data:any)=>{
            this.specialites = data,
            console.log(this.specialites)
        })
      }
    
    login(){
      return this.serviceuser.Login(this.user1).subscribe();
      
      }
  }
