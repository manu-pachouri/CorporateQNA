import { UserPageService } from './../../Services/user-page.service';
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
  constructor(private router:Router,private activeRoute:ActivatedRoute,
      private userPageService:UserPageService) { }

  ngOnInit(): void {
  }

  onclick()
  {
    this.router.navigate(['users','user',this.user.id+'+allquestions']);
  }

}
