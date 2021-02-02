import { debounceTime } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
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
  allUsers:UsersDataViewModel[]=[];
  users:UsersDataViewModel[] = [];

  formGroup:FormGroup;

  showUsersList: boolean;
  constructor(private router:Router,
              private userApiService:UserApiService) { }

  ngOnInit(): void {
    this.userApiService.getUsers().subscribe(
      response=>{
        this.allUsers = response;
        this.users = response;
      }
    );

    this.formGroup = new FormGroup({
      search:new FormControl(null)
    });

    this.formGroup.get('search').valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      value=>this.searchByName(value)
    );
  }
  searchByName(name:string){
    name = name?name.toLowerCase():'';
    this.users = this.allUsers;
    this.users = this.users.filter(user=>{
      let fullName = user.fullName.toLowerCase();
      return fullName.indexOf(name)>-1;
    })
  }

  ngDoCheck(){
    this.showUsersList = this.ifUsersPage();
  }

  ifUsersPage():boolean{
    return this.router.url.lastIndexOf('users')+5 == this.router.url.length
  }
}
