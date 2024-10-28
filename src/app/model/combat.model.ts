import { Categorie } from "./categorie.model";

export class Combat {
	idCombat! : number;
	nomj1 ! : string;
	nomj2! : string;
	scorej1! : number;
	scorej2! : number;
	dateCombat! : Date;
	categorie! : Categorie;
}