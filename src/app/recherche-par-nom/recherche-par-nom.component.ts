import { Component, OnInit } from '@angular/core';
import { Combat } from '../model/combat.model';
import { CombatService } from '../services/combat.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit{
  nomj1! : string;
  combats! : Combat[];

  allCombats! : Combat[]; 
  searchTerm!: string;
constructor(private combatService : CombatService){}

ngOnInit(): void {
  this.combatService.listeCombat().subscribe(combs => { 
    console.log(combs); 
    this.combats = combs; 
    }); 
}
  rechercherCombs() {
    this.combatService.rechercherParNom(this.nomj1).
      subscribe(combs => {
        this.combats = combs;
        console.log(combs)
      });
  }

  onKeyUp(filterText: string) {
    this.combats = this.allCombats.filter(item =>
      item.nomj1.toLowerCase().includes(filterText));
  }
}
