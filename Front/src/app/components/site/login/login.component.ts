import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { RegistrationRequest } from 'src/app/models/Registration';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = new RegistrationRequest(); 
  
  user1:any = new LoginRequest(); 
  constructor(private serviceuser :AuthService,private router: Router) { }
  email!: string;
  password!: string;
  msg = '';
  invalidLogin = false
  
  @Input() error!: string | null;
  ngOnInit(): void {
  }
 
    checkLogin() {
      (this.serviceuser.authenticate(this.user).subscribe(
          data => { 
            this.router.navigate(['/event'])
            this.invalidLogin = false
          },
          error => {
            this.invalidLogin = true
            this.error = error.message;
  
          }
        )
      );
  
    }
    send(){
      return this.serviceuser.send(this.user1).subscribe();
    }
  
    login(){
      return this.serviceuser.Login(this.user1).subscribe();
      
      }
    }
      

