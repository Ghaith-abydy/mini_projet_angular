import { Component, OnInit } from '@angular/core';
import { CombatService } from '../services/combat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Combat } from '../model/combat.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-combat',
  templateUrl: './update-combat.component.html',
  styles: ``
})
export class UpdateCombatComponent implements OnInit {
  currentCombat  = new Combat();
  categories! : Categorie[]; 
  updatedCatId! : number; 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router, 
    private combatService: CombatService){}
  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id']);
    // this.categories = this.combatService.listeCategories(); 
    this.currentCombat = this.combatService.consulterCombat(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId=this.currentCombat.categorie.idCat;
    
  }

  updateCombat(){
    //console.log(this.currentCombat);
    // this.currentCombat.categorie=this.combatService.consulterCategorie(this.updatedCatId); 
    this.combatService.updateCombat(this.currentCombat);
    this.router.navigate(["combats"]);
  }



}
