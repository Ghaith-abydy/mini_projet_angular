import { Component, OnInit } from '@angular/core';
import { Combat } from '../model/combat.model';
import { CombatService } from '../services/combat.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
    
  ]
})
export class RechercheParCategorieComponent implements OnInit{
  IdCategorie! : number;
  categories! : Categorie[];
  combats! : Combat[];

constructor(private combatService : CombatService){}


  ngOnInit(): void {
    this.combatService.listeCategories(). 
    subscribe(cats => {this.categories = cats._embedded.categories; 
      console.log(cats); 
  }); 
  } 

  onChange() {
    this.combatService.rechercherParCategorie(this.IdCategorie). 
      subscribe(combs =>{this.combats=combs}); 
  }

}
