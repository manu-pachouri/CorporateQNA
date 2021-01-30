import { UsersDataViewModel } from './../../Models/UsersDataViewModel';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user : UsersDataViewModel;

  Icons = new Icons();
  constructor(private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onclick()
  {
    this.router.navigate(['user',this.user.id],{relativeTo:this.activeRoute});
  }

}
