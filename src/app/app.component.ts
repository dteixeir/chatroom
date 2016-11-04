import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ FirebaseService ]
})

export class AppComponent implements OnInit {
  title = 'app works!';
  stuff;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.login()
      // .then((stuff) => {
      //   console.log(stuff);
      //   stuff.auth.getToken().then(token => console.log(token));
      // })
      .then(() => {
        this.firebaseService.subscribe();
      }).then(() => {
        this.firebaseService.getUsers()
          .subscribe(users => {
            this.stuff = users;
            console.log(this.stuff);
          });
      });
  }
}
