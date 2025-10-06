import { Component, OnInit } from '@angular/core';
import { Combat } from '../model/combat.model';
import { CombatService } from '../services/combat.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-combats',
    templateUrl: './add-combats.component.html',
    standalone: false
})
export class AddCombatsComponent implements OnInit {
  newCombat = new Combat();
  message : string="";
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  
  constructor(private combatService : CombatService,
              private router : Router){}
  ngOnInit(): void {
    // this.categories = this.combatService.listeCategories();
    this.combatService.listeCategories(). subscribe(cats => {this.categories = cats._embedded.categories; 
                      console.log(cats); 
  });
  }

  // addCombat(){
  //   // console.log(this.newIdCat);
  //   // this.newCategorie = this.combatService.consulterCategorie(this.newIdCat);
  //   this.newCombat.categorie = this.newCategorie;
  //   this.combatService.ajouterCombat(this.newCombat);
  //   this.message = "Combat "+this.newCombat.nomj1+" "+this.newCombat.nomj2+" ajouté avec succés";
  //   this.router.navigate(['combats']);


  addCombat(){
    this.newCombat.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!; 

    this.combatService.ajouterCombat(this.newCombat)
      .subscribe(comb => {
        console.log(comb);
        this.router.navigate(['combats']);
      });
  } 

}
