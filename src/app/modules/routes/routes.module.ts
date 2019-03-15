import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { DrinksComponent } from '../../components/drinks/drinks.component';
import { DrinkComponent } from '../../components/drink/drink.component';

export const rutas: Routes = [
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'drinks/:category', component: DrinksComponent},
  {path: 'drink/:name', component: DrinkComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class RoutesModule {
}
