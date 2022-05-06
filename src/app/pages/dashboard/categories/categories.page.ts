import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from './../../../services/categories.service';
import { Categories } from './../../../services/categories';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  items: Observable<Categories[]>;

  constructor(private categoriesService: CategoriesService) {
      
  }
  ngOnInit() {
    // this.items = this.categoriesService.getCategoriess();
  }

}