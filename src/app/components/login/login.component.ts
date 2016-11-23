import { Component } from '@angular/core';

import { User } from '../../models/user';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  user = new User();
  auth: firebase.User;
  users: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  login() {
    this.firebaseService.login(this.user)
      .subscribe((auth) => {
        this.auth = auth;
      });
  }

  getUsers() {
    this.firebaseService.getUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
  }
}
