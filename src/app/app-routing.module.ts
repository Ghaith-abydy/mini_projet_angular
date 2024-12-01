import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatsComponent } from './combats/combats.component';
import { AddCombatsComponent } from './add-combats/add-combats.component';
import { UpdateCombatComponent } from './update-combat/update-combat.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CombatGuard } from './combat.guard';

const routes: Routes = [
  { path: "combats", component: CombatsComponent },
  { path: "add-combat", component: AddCombatsComponent , canActivate:[CombatGuard]},
  { path: "updateCombat/:id", component: UpdateCombatComponent },
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeCategories", component : ListeCategoriesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "combats", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
