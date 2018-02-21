import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      console.log(user);
    });
  }

  goAppend(cid: string) {
  }
}
