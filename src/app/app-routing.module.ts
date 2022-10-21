import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMobsterComponent} from "./list-mobster/list-mobster.component";
import {DetailMobtserComponent} from "./detail-mobtser/detail-mobtser.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'mobsters', component: ListMobsterComponent},
  { path: 'mobster/:id', component: DetailMobtserComponent},
  { path: '', redirectTo : 'mobsters', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
