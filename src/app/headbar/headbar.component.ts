import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {
  nom = 'SGHAIER' ;
  test = false;

  constructor() { }

  ngOnInit(): void {
  }
  ordonnance(){ console.log("Cette partie sera élaboré ultérieurement. Merci pour votre Compréhension :) ");
}
rdv(){ console.log("Cette partie sera élaboré ultérieurement. Merci pour votre Compréhension :)");
}

}
