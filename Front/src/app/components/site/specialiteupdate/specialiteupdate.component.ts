import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { specialite } from 'src/app/models/Specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-specialiteupdate',
  templateUrl: './specialiteupdate.component.html',
  styleUrls: ['./specialiteupdate.component.css']
})
export class SpecialiteupdateComponent implements OnInit {

  
  constructor(private matier:SpecialiteService,private router: Router,private route: ActivatedRoute) { }
  id!:number
  salle:any = new specialite();
  ngOnInit(): void {
     
    this.id = this.route.snapshot.params['id'];
    this.matier.getEventid(this.id)
    .subscribe(data => {
      console.log(data)
      this.salle= data;
    }, error => console.log(error));
  }
  updateevent() {
    this.matier.updateEvent( this.salle,this.id)
      .subscribe(data => {
        console.log(data);
        this.salle = new specialite();
        this.gotoList();
      }, error => console.log(error)); 
  }
  gotoList() {
    this.router.navigate(['/mat']);
  }

}

