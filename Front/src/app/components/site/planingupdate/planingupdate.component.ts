import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { matiere } from 'src/app/models/matiere';
import { planing } from 'src/app/models/planing';
import { MatiereService } from 'src/app/services/matiere.service';
import { PlaningService } from 'src/app/services/planing.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-planingupdate',
  templateUrl: './planingupdate.component.html',
  styleUrls: ['./planingupdate.component.css']
})
export class PlaningupdateComponent implements OnInit {

  constructor(private matier:PlaningService,private tser:MatiereService,private router: Router,private route: ActivatedRoute,private ttser:SalleService) { }
  matieres:any;
  subthemes:any;
Selectedid2 :any
salles:any;
id!:number;
Selectedid1:any
planing:any = new planing();
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.matier.getEventid(this.id)
    .subscribe(data => {
      console.log(data)
      this.planing= data;
    }, error => console.log(error));
    this.ttser.getEvent().subscribe(
      (data:any)=>{
        this.salles = data,
        console.log(this.salles)
    }) 
    
  this.showall();
  this.onSelect(this.Selectedid1.themeID) 
  
  this.showall2();
  this.onSelect2(this.Selectedid2.themeID) 
 
  }
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
  onSelect2(themeID:any){

    console.log(themeID.target.value);
    
    this.Selectedid2=themeID.target.value
  
  }
  showall2(){
    this.ttser.getEvent().subscribe(
      (data:any)=>{
        this.salles = data,
        console.log(this.salles)
    })
  }
  updateevent() {
    this.matier.updateEvent( this.planing,this.id,this.Selectedid1,this.Selectedid2)
      .subscribe(data => {
        console.log(data);
        this.planing = new planing();
        this.gotoList();
      }, error => console.log(error));
      this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/eventback']);
  }

}
