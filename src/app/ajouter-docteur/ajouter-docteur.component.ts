import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-docteur',
  templateUrl: './ajouter-docteur.component.html',
  styleUrls: ['./ajouter-docteur.component.css']
})
export class AjouterDocteurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ajouter(){ console.log("médecin ajouté !");
  }
}
