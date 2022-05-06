import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailsPageRoutingModule } from './post-details-routing.module';
import { PostDetailsPage } from './post-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PostDetailsPageRoutingModule
  ],
  declarations: [PostDetailsPage],
  providers: [],
  exports: []
})
export class PostDetailsPageModule { }
