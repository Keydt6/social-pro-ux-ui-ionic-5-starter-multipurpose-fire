import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './../../../services/user.service';
import { User } from './../../../services/user';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss'],
})
export class UserPage implements OnInit {
  items: Observable<User[]>;

  constructor(private userService: UserService) {
      
  }
  ngOnInit() {
    // this.items = this.userService.getUsers();
  }

}