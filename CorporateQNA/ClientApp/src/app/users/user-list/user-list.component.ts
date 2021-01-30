import { UsersDataViewModel } from './../../Models/UsersDataViewModel';
import { UserApiService } from './../../Services/user-api-service.service';
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
  Users:UsersDataViewModel[] = [];
  showUsersList: boolean;
  constructor(private router:Router,
              private userApiService:UserApiService) { }

  ngOnInit(): void {
    this.userApiService.getUsers().subscribe(
      response=>{
        this.Users = response;
      }
    )
  }

  ngDoCheck(){
    this.showUsersList = this.ifUsersPage();
  }

  ifUsersPage():boolean{
    return this.router.url.lastIndexOf('users')+5 == this.router.url.length
  }
}
