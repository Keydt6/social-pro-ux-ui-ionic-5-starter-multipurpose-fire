import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from './../../../services/categories.service';
import { Categories } from './../../../services/categories';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-details',
  templateUrl: 'categories-details.page.html',
  styleUrls: ['categories-details.page.scss'],
})
export class CategoriesDetailsPage implements OnInit {
  categoriesForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private categoriesService: CategoriesService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.categoriesForm = this.fb.group({ 
      name: '', 
      image: '', 
      zIndex: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      // this.categoriesService.getCategoriesById(this.id).subscribe(res => {
      //   console.log('my item: ', res);
      //   this.categoriesForm.patchValue(res);
      // });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      // this.categoriesService.updateCategoriesById(this.id, this.categoriesForm.value).then(res => {
      //   this.navCtrl.pop();
      // });
    } else {
      // this.categoriesService.addCategories(this.categoriesForm.value).then(res => {
      //   this.navCtrl.pop();
      // });
    }
  }

  delete() {
    // this.categoriesService.deleteCategoriesById(this.id).then(res => {
    //   this.navCtrl.pop();
    // });
  }
}
