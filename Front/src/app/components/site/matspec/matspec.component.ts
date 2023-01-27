import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matiere } from 'src/app/models/matiere';
import { specialite } from 'src/app/models/Specialite';
import { MatiereService } from 'src/app/services/matiere.service';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-matspec',
  templateUrl: './matspec.component.html',
  styleUrls: ['./matspec.component.css']
})
export class MatspecComponent implements OnInit {

  
  constructor(private tser:MatiereService,private ttser:SpecialiteService,private router: Router){ }
  Selectedid2 :any
  
  Selectedid1 :any
  matieres:any;
  specialites:any;
  matiere:any = new matiere();
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
  showall1(){
    this.ttser.getEvent().subscribe(
      (data:any)=>{
        this.specialites= data,
        console.log(this.specialites)
    })
  }
  onSelect1(themeID:any){

    console.log(themeID.target.value);
    
    this.Selectedid1=themeID.target.value
  
  }
  onSelect2(themeID:any){

    console.log(themeID.target.value);
    
    this.Selectedid2=themeID.target.value
  
  }
  ngOnInit(): void {

    this.showall()
    
    this.showall1()
    this.onSelect2(this.Selectedid2);
    this.onSelect1(this.Selectedid1);
  }
  aff(){
    this.tser.aff(this.Selectedid2,this.Selectedid1,this.matiere).subscribe();
  }

}
