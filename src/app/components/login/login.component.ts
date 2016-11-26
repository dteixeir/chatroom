// angular components
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { LocalStorageService } from 'angular-2-local-storage';

// models
import { User } from '../../models/user';

// services
import { FirebaseService } from '../../services/firebase/firebase.service';
// import { UserService } from '../../services/user/user.service';

// 3rd party components
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  user = new User();
  users: any;
  userObserv: Observable<any>;

  constructor(
    private firebaseService: FirebaseService,
    // private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  login() {
    this.firebaseService.login(this.user)
      .subscribe((auth) => {
        // console.log(auth);

        if (auth.uid) {
          this.router.navigate(['list']);
        } else {
          this.router.navigate(['login']);
        }
      });
  }

  createAccount() {

  }

  getUsers(uid) {
    this.firebaseService.getUsers(uid)
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
  }
}
