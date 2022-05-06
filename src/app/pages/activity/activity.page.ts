import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  posts: any;

  /* This is a variable if you want to try without firebase connection. Do not forget to comment ngOnInit.
  posts: any = [
    {
      "id": "1", "authorName": "Erika Smalet",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 75, "comments": 12, "release_date": "One hour ago", "authorImage": "/assets/img/user.jpg"
    },
    {
      "id": "1", "authorName": "Francesca Beng",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 234, "comments": 132, "release_date": "One hour ago", "authorImage": "/assets/img/user3.jpg"
    },
    {
      "id": "1", "authorName": "Erika Smalet",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 75, "comments": 12, "release_date": "One hour ago", "authorImage": "/assets/img/user.jpg"
    }
  ];
  */

  gallery: any = [
    { "id": "1", "name": "Surf", "image": "/assets/img/slided.jpg", "rate": 4.5 },
    { "id": "1", "name": "Beach", "image": "/assets/img/slidec.jpg", "rate": 4.5 },
    { "id": "1", "name": "Running", "image": "/assets/img/slidea.jpg", "rate": 4.5 },
    { "id": "1", "name": "Erika Smalet", "image": "/assets/img/slided.jpg", "rate": 4.5 }
  ];

  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.postService.getPosts()
    // .subscribe(res=>{
    //   this.posts = res;
    // })
  };

}
