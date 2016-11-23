import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import *as firebase from 'firebase';
import { RouterModule } from '@angular/router';

// Local Files
import { firebaseConfig } from '../environments/firebase.config';
import { firebaseAuthConfig } from '../environments/firebaseAuth.config';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRouter } from './app-routing.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRouter
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
