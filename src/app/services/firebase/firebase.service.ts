import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {
  user = new User();
  auth: Observable<any>;

  constructor(
    private ngFire: AngularFire
  ) {
    // this.users = ngFire.database.list('users/' + this.ngFire.auth.getAuth().uid);
  }

  getUsers(uid) {
    const users$ = this.ngFire.database.list('users/' + uid);
    return users$;
  }

  getAuth() {
    return this.user;
  }

  setAuth(auth) {
    this.user.firebaseUser = auth;
  }

  getUserPromise() {
    return Promise.resolve(this.user);
  }

  getUser() {
    const user$: Observable<User> = Observable.fromPromise(this.getUserPromise());
    return user$;
  }

  login(user) {
    const auth$: Observable<firebase.User> = Observable.fromPromise(this.ngFire.auth.login(user) as Promise<FirebaseAuthState>)
      .map((res: FirebaseAuthState) => {
        this.user.firebaseUser = res.auth as firebase.User;
        return res.auth as firebase.User;
      });
    return auth$;
  }
}
