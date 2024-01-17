import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-facture',
  templateUrl: './creation-facture.component.html',
  styleUrls: ['./creation-facture.component.css']
})
export class CreationFactureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  creer(){ console.log("facture crée !");
}
}
