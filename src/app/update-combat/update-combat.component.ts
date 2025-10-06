import { Component, OnInit } from '@angular/core';
import { CombatService } from '../services/combat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Combat } from '../model/combat.model';
import { Categorie } from '../model/categorie.model';

@Component({
    selector: 'app-update-combat',
    templateUrl: './update-combat.component.html',
    styles: ``,
    standalone: false
})
export class UpdateCombatComponent implements OnInit {
  currentCombat  = new Combat();
  categories! : Categorie[]; 
  updatedCatId! : number; 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router, 
    private combatService: CombatService){}
  ngOnInit(): void {
    this.combatService.listeCategories(). 
    subscribe(cats => {this.categories = cats._embedded.categories; 
                       console.log(cats); 
   }); 
      this.combatService.consulterCombat(this.activatedRoute.snapshot.params['id']). subscribe( prod =>{ this.currentCombat = prod;
        this.updatedCatId = this.currentCombat.categorie.idCat; 
       } ) ;
      this.updatedCatId = this.currentCombat.categorie.idCat;  
    
  }

  updateCombat(){
    this.currentCombat.categorie = this.categories.find(cat => cat.idCat == this.updatedCatId)!; 
    this.combatService.updateCombat(this.currentCombat).subscribe(comb => { 
      this.router.navigate(['combats']); }  
      ); 
  }



}
