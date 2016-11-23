import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouter { }
