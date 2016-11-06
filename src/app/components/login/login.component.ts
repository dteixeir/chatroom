import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  user = new User();

  print() {
    console.log(this.user);
  }

}
