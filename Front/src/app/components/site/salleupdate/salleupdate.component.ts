import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salleupdate',
  templateUrl: './salleupdate.component.html',
  styleUrls: ['./salleupdate.component.css']
})
export class SalleupdateComponent implements OnInit {

  constructor(private matier:SalleService,private router: Router,private route: ActivatedRoute) { }
  id!:number
  salle:any = new salle();
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
        this.salle = new salle();
        this.gotoList();
      }, error => console.log(error)); 
  }
  gotoList() {
    this.router.navigate(['/salle']);
  }

}
