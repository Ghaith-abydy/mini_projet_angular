import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatsComponent } from './combats/combats.component';
import { AddCombatsComponent } from './add-combats/add-combats.component';
import { UpdateCombatComponent } from './update-combat/update-combat.component';
const routes: Routes = [
  {path : "combats", component : CombatsComponent},
  {path : "add-combat", component : AddCombatsComponent},
  {path: "updateCombat/:id",  component: UpdateCombatComponent} ,
  { path: "", redirectTo: "combats", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
