import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { RegistrationRequest } from 'src/app/models/Registration';
import { AuthService } from 'src/app/services/auth.service';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent implements OnInit {

  constructor(private serviceuser :AuthService,private router: Router,private tser:SpecialiteService) { }
  user:any = new RegistrationRequest(); 
  
  user1:any = new LoginRequest(); 
  specialites:any;
subthemes:any;
id!:any
 
  selectedvalue:any;
   ngOnInit(): void {
    this.showall();
   this.onSelect(this.id)
  }
    onSelect(e:any){
 this.selectedvalue=e.target.value;
 this.id=this.selectedvalue
      console.log(this.id);
    
    }
    showall(){
      this.tser.getEvent().subscribe(
        (data:any)=>{
          this.specialites = data,
          console.log(this.specialites)
      })
    }
  adduser(){ 
    this.serviceuser.addet(this.user,this.id).subscribe(

    ); 
     
    }
  login(){
    return this.serviceuser.Login(this.user1).subscribe();
    
    }
}
