import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NumbersComponent} from "./numbers/numbers.component";
import {HomeComponent} from "./home/home.component";
import {AlphabetComponent} from "./alphabet/alphabet.component";
import {AnimalsComponent} from "./animals/animals.component";
import {ColorsComponent} from "./colors/colors.component";
import {OpinionComponent} from "./opinion/opinion.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'numbers' , component: NumbersComponent},
  {path: 'alphabet' , component: AlphabetComponent},
  {path: 'animals' , component: AnimalsComponent},
  {path: 'colors' , component: ColorsComponent},
  {path: 'opinion' , component: OpinionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
