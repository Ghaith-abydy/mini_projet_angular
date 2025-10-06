import { Component, OnInit } from '@angular/core';
import { CombatService } from '../services/combat.service';
import { Categorie } from '../model/categorie.model';

@Component({
    selector: 'app-liste-categories',
    templateUrl: './liste-categories.component.html',
    styles: ``,
    standalone: false
})
export class ListeCategoriesComponent implements OnInit{
  categories! : Categorie[];
  ajout :boolean = true; 
  updatedCat:Categorie = {"idCat":0,"nomCat":""};

  constructor(private combatService : CombatService){}
  

  ngOnInit(): void { 
    this.chargerCategories(); 
    }


    chargerCategories(){
      this.combatService.listeCategories(). 
    subscribe(cats => {this.categories = cats._embedded.categories; 
    console.log(cats); 
    }); 
    }


  categorieUpdated(cat: Categorie) {
    console.log("categorie recue du composant updateCategorie", cat);
    this.combatService.ajouterCategorie(cat).
      subscribe(() => this.chargerCategories());
  }

  updateCat(cat : Categorie){
    this.updatedCat = cat;
    this.ajout=false;
  }

}
