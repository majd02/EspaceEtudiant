import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./layouts/header/header.component"; 
import { BackComponent } from './BackLayouts/back/back.component';
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

const routes: Routes = [
 
  
  { path: 'mat', component:MatiereComponent},
  { path: 'updatemat/:id', component:MatiereupdateComponent},
  { path: 'addet', component:AddetudiantComponent},
  { path: 'addprof', component:AddprofComponent},
  
  { path: 'addAdmin', component:AddAdminComponent},
  { path: 'coll', component:UserbackComponent},
  
  { path: 'etudiant', component:EtudiantComponent},
  
  { path: 'prof', component:ProfComponent},
  
  { path: 'matspec', component:MatspecComponent},
  
  { path: 'admin', component:AdminComponent},
  { path: 'mat/:id', component:MatiereComponent},
  { path: 'pla', component:PlaningComponent},
  { path: 'plaupdate/:id', component:PlaningupdateComponent},
  { path: 'spec', component:SpecialiteComponent},
  { path: 'spec/mat/:id', component:SpecialiteComponent},
  { path: 'specupdate/:id', component:SpecialiteupdateComponent},
  { path: 'back', component: BackComponent },
  { path: 'salle', component:SalleComponent },
  { path: 'salleupdate/:id', component:SalleupdateComponent },
  { path: 'salle/:id', component:SalleComponent },
  { path: 'login', component:LoginComponent }
  
   
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
