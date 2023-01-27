import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { matiere } from 'src/app/models/matiere';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'app-matiereupdate',
  templateUrl: './matiereupdate.component.html',
  styleUrls: ['./matiereupdate.component.css']
})
export class MatiereupdateComponent implements OnInit {

  constructor(private matier:MatiereService,private router: Router,private route: ActivatedRoute) { }
id!:number
  matiere:any = new matiere();
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.matier.getEventid(this.id)
    .subscribe(data => {
      console.log(data)
      this.matiere= data;
    }, error => console.log(error));
  }
  updateevent() {
    this.matier.updateEvent( this.matiere,this.id)
      .subscribe(data => {
        console.log(data);
        this.matiere = new matiere();
        this.gotoList();
      }, error => console.log(error));
      this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/eventback']);
  }

}
