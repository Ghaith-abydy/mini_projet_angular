import { Component, OnInit } from '@angular/core';
import { Combat } from '../model/combat.model';
import { CombatService } from '../services/combat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-combats',
  templateUrl: './combats.component.html'
})
export class CombatsComponent implements OnInit {
  combats?: Combat[];
  

  constructor(private combatService: CombatService,
    public authService: AuthService
  ) {}

  
  ngOnInit(): void {
    this.chargerCombats();
  }

  chargerCombats(){
    this.combatService.listeCombat().subscribe(combs => {
      console.log(combs);
      this.combats = combs; 
    });
  }



  // supprimerCombat(comb: Combat) {
  //   let conf = confirm("Etes-vous sûr ?");
  //   if (conf) {
  //     this.combatService.supprimerCombat(comb);
  //     // Mettre à jour la liste des combats après la suppression
  //     this.combatService.listeCombat().subscribe(combs => {
  //       this.combats = combs; // Mise à jour ici
  //     });
  //   }
  // }

  supprimerCombat(p: Combat) 
  { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf)
      this.combatService.supprimerCombat(p.idCombat).subscribe(() => {
        console.log("combat supprimé"); 
        this.chargerCombats(); 
      }); 
  }  
}


