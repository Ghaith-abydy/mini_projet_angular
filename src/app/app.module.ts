import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombatsComponent } from './combats/combats.component';
import { AddCombatsComponent } from './add-combats/add-combats.component';
import { FormsModule } from '@angular/forms';
import { UpdateCombatComponent } from './update-combat/update-combat.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CombatsComponent,
    AddCombatsComponent,
    UpdateCombatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
