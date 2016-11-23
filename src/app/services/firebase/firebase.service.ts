import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {
  // users: any[];
  // user: any = {};
  user = new User();
  auth: Observable<any>;

  constructor(private ngFire: AngularFire) { }

  getUsers() {
    const users$: FirebaseListObservable<any> = this.ngFire.database.list('users/' + this.ngFire.auth.getAuth().uid);
    return users$;
  }

  getAuth() {
    return this.user;
  }

  setAuth(auth) {
    this.user.auth = auth;
  }

  login(user) {
    const auth$: Observable<firebase.User> = Observable.fromPromise(this.ngFire.auth.login(user) as Promise<FirebaseAuthState>)
      .map((res: FirebaseAuthState) => res.auth as firebase.User );
    return auth$;
  }
}
