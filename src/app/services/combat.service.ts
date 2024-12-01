import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Combat } from '../model/combat.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { CategorieWrapper } from '../model/categorieWrapped.moddel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'

})
export class CombatService {
  apiURLCat: string = 'http://localhost:8080/combats/cat';

  combats: Combat[] = [];
  //categories : Categorie[];
  constructor(private http: HttpClient,
              private authService :  AuthService) 
  {
    // this.categories = [
    //   {idCat : 1, nomCat : "boxe"}, 
    //   {idCat : 2, nomCat : "judo"}
    // ];
    // this.combats = [
    //   { idCombat: 1, nomj1: "Mike Tyson ", nomj2: "Marcel Cerdan", scorej1: 20, scorej2: 20, dateCombat: new Date("2011-01-14"),
    //     categorie: {idCat : 1, nomCat : "boxe"}},
    //   { idCombat: 2, nomj1: "med ali klay", nomj2: "Trevor Berbick", scorej1: 20, scorej2: 20, dateCombat: new Date("2011-01-14"), categorie :
    //     {idCat : 1, nomCat : "boxe"}},
    //   { idCombat: 3, nomj1: "Wim Ruska", nomj2: "David Douillet", scorej1: 20, scorej2: 20, dateCombat: new Date("2011-01-14") ,categorie:
    //     {idCat : 2, nomCat : "judo"}}
    // ];
  }



  /*listeCombat() : Combat[]{
    return this.combats;
  }*/


    listeCombat(): Observable<Combat[]> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.get<Combat[]>(apiURL + "/all", { headers: httpHeaders });
    }
    

  // ajouterCombat(comb: Combat) {
  //   this.combats.push(comb);
  // }
  ajouterCombat(comb: Combat): Observable<Combat> {
    return this.http.post<Combat>(apiURL, comb, httpOptions);
  }

  // supprimerCombat(comb: Combat) {
  //   const index = this.combats.indexOf(comb, 0);
  //   if (index > -1) {
  //     this.combats.splice(index, 1);
  //   }
  // }
  supprimerCombat(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // consulterCombat(id:number): Combat{   
  //   return this.combats.find(c => c.idCombat == id)!;  
  // }
  consulterCombat(id: number): Observable<Combat> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Combat>(url);
  }

  // updateCombat(c :Combat) 
  //   { 
  //    // console.log(p); 
  //     //this.supprimerCombat(c); 
  //     this.ajouterCombat(c); 
  //     this.trierCombats();
  //   }

  updateCombat(comb: Combat): Observable<Combat> {
    return this.http.put<Combat>(apiURL, comb, httpOptions);
  }

  trierCombats() {
    this.combats = this.combats.sort((n1, n2) => {
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

  // listeCategories():Observable<Categorie[]>{ 
  //         return this.http.get<Categorie[]>(apiURL+"/cat"); 
  //       }

  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat);
  }

  // consulterCategorie(id:number): Categorie{     
  //   return this.categories.find(cat => cat.idCat  == id)!; 
  //    } 

  rechercherParCategorie(idCat: number): Observable<Combat[]> {
    const url = `${apiURL}/combscat/${idCat}`;
    return this.http.get<Combat[]>(url);
  }

  rechercherParNom(nom: string):Observable< Combat[]> { 
    const url = `${apiURL}/combsByName/${nom}`; 
    return this.http.get<Combat[]>(url); 
    }
  
  
    ajouterCategorie( cat: Categorie):Observable<Categorie>{ 
      return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions); 
      }
}


