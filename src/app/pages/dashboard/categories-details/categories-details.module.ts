import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesDetailsPageRoutingModule } from './categories-details-routing.module';
import { CategoriesDetailsPage } from './categories-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CategoriesDetailsPageRoutingModule
  ],
  declarations: [CategoriesDetailsPage],
  providers: [],
  exports: []
})
export class CategoriesDetailsPageModule { }
