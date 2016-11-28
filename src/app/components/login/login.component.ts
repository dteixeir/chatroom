// angular components
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

export class LoginComponent implements OnInit {

  user: User;
  users: any;
  userObserv: Observable<any>;
  rememberMe?: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.populuateUser();
  }

  login() {
    this.saveUser();

    this.firebaseService.login(this.user)
      .subscribe((auth) => {
        if (auth.uid) {
          this.router.navigate(['list']);
        } else {
          this.router.navigate(['login']);
        }
      });
  }

  populuateUser() {
    this.rememberMe = JSON.parse(localStorage.getItem('rememberMe'));
    console.log(this.rememberMe);

    switch (this.rememberMe) {
      case null:
        this.rememberMe = true;
        this.user = new User();
        break;

      case false:
        this.user = new User();
        break;

      default:
        this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  saveUser() {
    if (this.rememberMe) {
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('user');
      localStorage.setItem('rememberMe', 'false');
    }
  }

  // getUsers(uid) {
  //   this.firebaseService.getUsers(uid)
  //     .subscribe(users => {
  //       this.users = users;
  //     });
  // }
}
