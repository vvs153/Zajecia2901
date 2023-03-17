import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageMainComponent} from "./page-main/page-main.component";
import {PageCarFormComponent} from "./page-car-form/page-car-form.component";
import {PageCarListComponent} from "./page-car-list/page-car-list.component";


const routes: Routes = [
  {path: "",redirectTo: "home", pathMatch: "full"},
  {path: "home", component: PageMainComponent},
  {path: "car_form", component: PageCarFormComponent},
  {path: "car_list", component: PageCarListComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
