import { Component } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent {
  prixHt:number = 0;
  prixTtc:number = 0;
  tva:number = 0;
  tauxTva: number = 0;

  listTauxTva:number[] = [5, 10, 20];

  calculerTtc(){    
    this.prixTtc = this.prixHt * (1 + this.tauxTva / 100);
    this.tva = this.prixHt * (this.tauxTva / 100);
  }
}
