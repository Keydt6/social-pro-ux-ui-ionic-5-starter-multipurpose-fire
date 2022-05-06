import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './../../../services/post.service';
import { Post } from './../../../services/post';

@Component({
  selector: 'app-post',
  templateUrl: 'post.page.html',
  styleUrls: ['post.page.scss'],
})
export class PostPage implements OnInit {
  items: Observable<Post[]>;

  constructor(private postService: PostService) {
      
  }
  ngOnInit() {
    // this.items = this.postService.getPosts();
  }

}