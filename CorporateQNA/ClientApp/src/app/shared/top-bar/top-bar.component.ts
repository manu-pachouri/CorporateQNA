import { Icons } from '../font-awesome-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: [
  ]
})
export class TopBarComponent implements OnInit {
  Icons = new Icons();
  constructor() { }

  ngOnInit(): void {
  }

}
