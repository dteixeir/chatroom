import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private user: User;
  private users: any;


  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.subscribeToUser();
  }

  subscribeToUser() {
    this.firebaseService.getUser()
      .subscribe((user) => {
        this.user = user;
        console.log(this.user);
      }).add(() => {
        this.getUserData();
      });
  }

  getUserData() {
    this.firebaseService.getUsers(this.user.firebaseUser.uid)
      .subscribe(snapshots => {
        snapshots.forEach(element => {
          console.log(element);
        });
      });
  }

  

}
