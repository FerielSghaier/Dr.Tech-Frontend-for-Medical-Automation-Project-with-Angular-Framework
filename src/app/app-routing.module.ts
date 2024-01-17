import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterDocteurComponent } from './ajouter-docteur/ajouter-docteur.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { CreationFactureComponent } from './creation-facture/creation-facture.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { ListdocComponent } from './listdoc/listdoc.component';
import { LoginDocteurComponent } from './login-docteur/login-docteur.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path: 'ajouter-patient',component: AjouterPatientComponent},
  {path: 'ajouter-docteur',component: AjouterDocteurComponent},
  {path: 'fiche-patient',component: FichePatientComponent},
  {path: 'login',component: LoginDocteurComponent},
  {path: 'calendrier',component: CalendrierComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'creation-facture',component: CreationFactureComponent},
  {path: 'tableau',component: TableauComponent},
  {path: 'liste-docteur',component: ListdocComponent},
  {path: 'profil',component: ProfilComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
