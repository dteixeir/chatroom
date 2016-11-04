import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class FirebaseService {
  users: any[];
  user: any = {};

  constructor(private ngFire: AngularFire) { }

  getUsers() {
    const users$: FirebaseListObservable<any> = this.ngFire.database.list('users/' + this.ngFire.auth.getAuth().uid);
    return users$;
  }

  login() {
    return this.ngFire.auth.login({
      email: 'danotex1128@gmail.com',
      password: 'training'
    });
  }

  subscribe() {
    this.user = this.ngFire.auth.subscribe((auth) => {
      if (auth) {
        this.user.uid = auth.uid;
        console.log(this.user.uid);
      } else {
        console.log('no user');
      }
    });
  }
}
