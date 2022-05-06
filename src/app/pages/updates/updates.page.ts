import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {

  firstPost: any = [
    {
      "id": "1", "author": "Erika Smalet",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 75, "comments": 12, "date": "One hour ago", "avatar": "/assets/img/user.jpg"
    }];

  lastPost: any = [
    {
      "id": "1", "author": "Francesca Beng",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 234, "comments": 132, "date": "45 minutes ago", "avatar": "/assets/img/user3.jpg"
    },
    {
      "id": "1", "author": "Erika Smalet",
      "content": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.",
      "likes": 75, "comments": 12, "date": "Yesterday", "avatar": "/assets/img/user.jpg"
    }
  ];

  gallery: any = [
    { "id": "1", "name": "Surf", "image": "/assets/img/slided.jpg", "rate": 4.5 },
    { "id": "1", "name": "Beach", "image": "/assets/img/slidec.jpg", "rate": 4.5 },
    { "id": "1", "name": "Running", "image": "/assets/img/slidea.jpg", "rate": 4.5 },
    { "id": "1", "name": "Erika Smalet", "image": "/assets/img/slided.jpg", "rate": 4.5 }
  ];


  constructor() { }

  ngOnInit() {
  }

}
