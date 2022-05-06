import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: any;  

  /*This is a variable if you want to try without firebase connection. Do not forget to comment ngOnInit.
  categories: any= [
    { "z": 1, "name": "Sport", "image": "/assets/img/slided.jpg" },
    { "z": 2, "name": "People", "image": "/assets/img/user.jpg" },
    { "z": 3, "name": "Nature", "image": "/assets/img/plants.jpg" }
  ];*/

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    // this.categoriesService.getCategoriess()
    // .subscribe(res=>{
    //   this.categories = res;
    // })
  };

}
