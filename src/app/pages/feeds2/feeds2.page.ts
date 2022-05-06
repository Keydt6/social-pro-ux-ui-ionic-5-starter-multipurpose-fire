import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feeds2',
  templateUrl: './feeds2.page.html',
  styleUrls: ['./feeds2.page.scss'],
})
export class Feeds2Page implements OnInit {

  postfeed: any = [
    { "id": "1", "author": "Erika Smalet", "video": "assets/video/feeling.mp4", "likes": 75, "comments": 12, "date": "One hour ago", "avatar": "/assets/img/user3.jpg" },
    { "id": "2", "author": "Jonh Snow", "video": "assets/video/people.mp4", "likes": 34, "comments": 43, "date": "Yesterday", "avatar": "/assets/img/user.jpg" },
    { "id": "2", "author": "Laurel Castillo", "video": "assets/video/Tropical.webm", "likes": 611, "comments": 454, "date": "June, 25", "avatar": "/assets/img/user1.png" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
