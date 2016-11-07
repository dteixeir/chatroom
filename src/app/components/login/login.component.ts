import { Component } from '@angular/core';

import { User } from '../../models/user';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  user = new User();
  auth: any = {};

  constructor(private firebaseService: FirebaseService) { }

  login() {
    this.firebaseService.login(this.user).then((auth) => {
      // dont need this here but wanted to test with it
      this.auth = auth;
    });
  }
}
