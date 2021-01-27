import { Icons } from 'src/app/shared/font-awesome-icons';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit,DoCheck {
  Icons = new Icons();
  Users = [1,2,3,4,5,6,7,8];
  showUsersList: boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(){
    this.showUsersList = this.ifUsersPage();
  }

  ifUsersPage():boolean{
    return this.router.url.lastIndexOf('users')+5 == this.router.url.length
  }
}
