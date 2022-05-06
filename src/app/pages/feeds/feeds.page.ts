import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {

  constructor() { }

  postfeed: any = [
    { "id": "1", "author": "Erika Smalet", "image": "/assets/img/sport3.jpg", "likes": 75, "comments": 12, "date": "One hour ago", "avatar": "/assets/img/user.jpg" },
    { "id": "2", "author": "Jonh Snow", "image": "/assets/img/sport4.jpg", "likes": 34, "comments": 43, "date": "Yesterday", "avatar": "/assets/img/user1.png" },
    { "id": "2", "author": "Laurel Castillo", "image": "/assets/img/sport1.jpg", "likes": 611, "comments": 454, "date": "June, 25", "avatar": "/assets/img/user1.png" }
  ];

  ngOnInit() {
  }

}
