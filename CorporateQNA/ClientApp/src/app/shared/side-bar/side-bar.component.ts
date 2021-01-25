import { Component, OnInit } from '@angular/core';
import { Icons } from '../font-awesome-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [
  ]
})
export class SideBarComponent implements OnInit {
  Icons = new Icons();

  constructor() { }

  ngOnInit(): void {
  }

}
