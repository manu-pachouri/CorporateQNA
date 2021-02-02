import { UsersDataViewModel } from './../Models/UsersDataViewModel';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {
  event = new EventEmitter<any>();
  userInfoEvent= new EventEmitter<string>();
  constructor() { }
}
