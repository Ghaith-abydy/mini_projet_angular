import { Component, OnInit } from '@angular/core';
import { Combat } from '../model/combat.model';
import { CombatService } from '../services/combat.service';

@Component({
  selector: 'app-combats',
  templateUrl: './combats.component.html'
})
export class CombatsComponent implements OnInit{
combats? : Combat[];


  constructor(private combatService : CombatService) { 
 
   } 
  ngOnInit(): void {
    this.combats = this.combatService.listeCombat();
  }
  supprimerCombat(comb : Combat) {
    //console.log(comb);
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf){
      this.combatService.supprimerCombat(comb);
      this.combats = this.combatService.listeCombat(); // Mettre à jour la liste
    }

    }
}
