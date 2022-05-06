import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates2',
  templateUrl: './updates2.page.html',
  styleUrls: ['./updates2.page.scss'],
})
export class Updates2Page implements OnInit {

  
  postFeed: any = [
    {
      "id": "1", "author": "Erika Smalet",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 75, "comments": 12, "date": "One hour ago", "avatar": "/assets/img/user.jpg"
    },
    {
      "id": "2", "author": "Francesca Beng",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 234, "comments": 132, "date": "45 minutes ago", "avatar": "/assets/img/user3.jpg"
    },
    {
      "id": "3", "author": "Erika Smalet",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 75, "comments": 12, "date": "Yesterday", "avatar": "/assets/img/user.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
