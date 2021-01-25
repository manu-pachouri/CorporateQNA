import { Component, OnInit } from '@angular/core';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [
  ]
})
export class SideBarComponent implements OnInit {
  faComment = faCommentsDollar;

  constructor() { }

  ngOnInit(): void {
  }

}
