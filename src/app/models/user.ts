// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';

export class User {
  password: string;
  firstName: string;
  lastName: string;
  firebaseUser: firebase.User;

  constructor() {
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.firebaseUser = null;
  }
}
