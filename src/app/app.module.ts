import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { LoginDocteurComponent } from './login-docteur/login-docteur.component';
import { MenuComponent } from './menu/menu.component';
import { AjouterDocteurComponent } from './ajouter-docteur/ajouter-docteur.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { CreationFactureComponent } from './creation-facture/creation-facture.component';
import { TableauComponent } from './tableau/tableau.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { OrdComponent } from './ord/ord.component';
import { ListdocComponent } from './listdoc/listdoc.component';
import { ProfilComponent } from './profil/profil.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginDocteurComponent,
    RegisterComponent,
    AjouterDocteurComponent,
    AjouterPatientComponent,
    MenuComponent,
    HeadbarComponent,
    CalendrierComponent,
    FichePatientComponent,
    CreationFactureComponent,
    TableauComponent,
    OrdComponent,
    ListdocComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
