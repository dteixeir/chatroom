import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private user = new User();


  constructor() { }

}
