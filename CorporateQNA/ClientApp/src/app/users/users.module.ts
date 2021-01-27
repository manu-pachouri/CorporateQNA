import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [UserCardComponent, UserListComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
