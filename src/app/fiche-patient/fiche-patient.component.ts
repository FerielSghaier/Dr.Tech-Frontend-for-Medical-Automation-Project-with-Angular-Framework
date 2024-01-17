import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Enregistrer(){ console.log("Fiche Patient Enregistrée !");
}
}
