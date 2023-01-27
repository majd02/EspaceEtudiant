import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  property!: boolean ;
  
  propertys!: boolean ;
  constructor(private serviceuser:AuthService,private router: Router) { }
 
  ngOnInit(): void {
    if (sessionStorage.getItem("role")=="[ROLE_ADMIN]")
    {this.property=true 
    this.propertys=true}
    if (sessionStorage.getItem("role")=="[ROLE_CLIENT]")
    {this.property=true
      this.propertys=false }
    if (sessionStorage.getItem("role")=="[ROLE_PROF]")
    {this.property=false
      this.propertys=false} 
    console.log(this.propertys)
    
   
  }
  login(){
    
  this.goback();
    return this.serviceuser.logOut();
    
    
    }
    goback(){
      this.router.navigate(['/login']);
    }

}
