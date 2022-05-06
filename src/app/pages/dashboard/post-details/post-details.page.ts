import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from './../../../services/post.service';
import { Post } from './../../../services/post';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: 'post-details.page.html',
  styleUrls: ['post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  postForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private postService: PostService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.postForm = this.fb.group({ 
      authorName: '', 
      authorImage: '',
      release_date: '', 
      likes: '', 
      comments: '',
      content: ''
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      // this.postService.getPostById(this.id).subscribe(res => {
      //   console.log('my item: ', res);
      //   this.postForm.patchValue(res);
      // });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      // this.postService.updatePostById(this.id, this.postForm.value).then(res => {
      //   this.navCtrl.pop();
      // });
    } else {
      // this.postService.addPost(this.postForm.value).then(res => {
      //   this.navCtrl.pop();
      // });
    }
  }

  delete() {
    // this.postService.deletePostById(this.id).then(res => {
    //   this.navCtrl.pop();
    // });
  }
}
