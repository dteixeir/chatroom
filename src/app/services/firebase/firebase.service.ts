import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class FirebaseService {
  users: any[];

  constructor(private ngFire: AngularFire) {
    const users$: FirebaseListObservable<any> = ngFire.database.list('users');
  }

  getUsers() {
    const users$: FirebaseListObservable<any> = this.ngFire.database.list('users');
    return users$;
  }
}
