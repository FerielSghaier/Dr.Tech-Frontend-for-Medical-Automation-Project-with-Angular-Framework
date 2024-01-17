import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.css']
})
export class AjouterPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ajouter1(){ console.log("Informations Personnelles enregistrées !");
}
ajouter2(){ console.log("Antécedants enregistrés !");
}
}
