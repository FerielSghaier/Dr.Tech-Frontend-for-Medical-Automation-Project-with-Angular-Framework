import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ajouter(){ console.log("Evenement ajouté !");
}
}
