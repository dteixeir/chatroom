import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { User } from '../../models/user';

@Injectable()
export class FirebaseService {
  // users: any[];
  // user: any = {};
  user = new User();
  userAuth: any = {};

  constructor(private ngFire: AngularFire) { }

  getUsers() {
    const users$: FirebaseListObservable<any> = this.ngFire.database.list('users/' + this.ngFire.auth.getAuth().uid);
    return users$;
  }

  login(user) {
    return this.ngFire.auth.login({
      email: user.email,
      password: user.password
    });
  }
}
