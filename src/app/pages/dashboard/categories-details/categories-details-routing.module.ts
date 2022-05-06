import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesDetailsPage } from './categories-details.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesDetailsPageRoutingModule {}