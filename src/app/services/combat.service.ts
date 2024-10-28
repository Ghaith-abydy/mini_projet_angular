import { Injectable } from '@angular/core';
import { Combat } from '../model/combat.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  combats: Combat[];
  //categories : Categorie[];
  constructor() {
    // this.categories = [
    //   {idCat : 1, nomCat : "boxe"}, 
    //   {idCat : 2, nomCat : "judo"}
    // ];
    this.combats = [
      { idCombat: 1, nomj1: "Mike Tyson ", nomj2: "Marcel Cerdan", scorej1: 20, scorej2: 20, dateCombat: new Date("2011-01-14"),
        categorie: {idCat : 1, nomCat : "boxe"}},
      { idCombat: 2, nomj1: "med ali klay", nomj2: "Trevor Berbick", scorej1: 20, scorej2: 20, dateCombat: new Date("2011-01-14"), categorie :
        {idCat : 1, nomCat : "boxe"}},
      { idCombat: 3, nomj1: "Wim Ruska", nomj2: "David Douillet", scorej1: 20, scorej2: 20, dateCombat: new Date("2011-01-14") ,categorie:
        {idCat : 2, nomCat : "judo"}}
    ];
  }

  listeCombat(): Combat[] {
    return this.combats;
  }

  ajouterCombat(comb: Combat) {
    this.combats.push(comb);
  }

  supprimerCombat(comb: Combat) {
    const index = this.combats.indexOf(comb, 0);
    if (index > -1) {
      this.combats.splice(index, 1);
    }
  }

  consulterCombat(id:number): Combat{   
    return this.combats.find(c => c.idCombat == id)!;  
  }

  updateCombat(c :Combat) 
    { 
     // console.log(p); 
      this.supprimerCombat(c); 
      this.ajouterCombat(c); 
      this.trierCombats();
    }

    trierCombats(){ 
      this.combats = this.combats.sort((n1,n2) => { 
        if (n1.idCombat! > n2.idCombat!) { 
            return 1; 
        } 
       if (n1.idCombat! < n2.idCombat!) { 
            return -1; 
        } 
      return 0; 
    }); 
    }
    
    // listeCategories():Categorie[] { 
    //   return this.categories; 
    // }

    // consulterCategorie(id:number): Categorie{     
    //   return this.categories.find(cat => cat.idCat  == id)!; 
    //    } 

}


