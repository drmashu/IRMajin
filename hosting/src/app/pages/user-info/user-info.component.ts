import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      console.log(user);
    });
  }

  logout() {
    this.auth.logout();
  }
}
