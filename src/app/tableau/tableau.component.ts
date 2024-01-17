import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  nom = 'SGHAIER' ;
  couleur = '#F8517C';

  constructor() { }

  ngOnInit( ): void {
  }

}
