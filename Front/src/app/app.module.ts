import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackComponent } from './BackLayouts/back/back.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms'; 
import { NgxPaginationModule } from 'ngx-pagination';   
import { NgxStarRatingModule } from 'ngx-star-rating'; 
import { MatiereComponent } from './components/site/matiere/matiere.component';
import { PlaningComponent } from './components/site/planing/planing.component';
import { SpecialiteComponent } from './components/site/specialite/specialite.component';
import { SalleComponent } from './components/site/salle/salle.component';
import { LoginComponent } from './components/site/login/login.component';
import { AddetudiantComponent } from './components/site/addetudiant/addetudiant.component';
import { AddprofComponent } from './components/site/addprof/addprof.component';
import { UserbackComponent } from './components/site/userback/userback.component';
import { PlaningupdateComponent } from './components/site/planingupdate/planingupdate.component';
import { MatiereupdateComponent } from './components/site/matiereupdate/matiereupdate.component';
import { SalleupdateComponent } from './components/site/salleupdate/salleupdate.component';
import { SpecialiteupdateComponent } from './components/site/specialiteupdate/specialiteupdate.component';
import { AddAdminComponent } from './components/site/add-admin/add-admin.component';
import { EtudiantComponent } from './components/site/etudiant/etudiant.component';
import { ProfComponent } from './components/site/prof/prof.component';
import { AdminComponent } from './components/site/admin/admin.component';
import { MatspecComponent } from './components/site/matspec/matspec.component';


@NgModule({
  declarations: [
    AppComponent,
    MatiereComponent,
    HeaderComponent, 
    AddAdminComponent,
    BackComponent,
    PlaningComponent,
    SpecialiteComponent,
    SalleComponent,
    LoginComponent,
    AddetudiantComponent,
    AddprofComponent,
    UserbackComponent,
    PlaningupdateComponent,
    MatiereupdateComponent,
    SalleupdateComponent,
    MatspecComponent,
    SpecialiteupdateComponent,
    AddAdminComponent,
    EtudiantComponent,
    ProfComponent,
    AdminComponent,
    EtudiantComponent,
    ProfComponent,
    MatspecComponent
  ],
  imports: [
    BrowserModule,
    NgxStarRatingModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
