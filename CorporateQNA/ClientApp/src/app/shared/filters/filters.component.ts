import { Component, OnInit } from '@angular/core';
import { Icons } from '../font-awesome-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  Icons = new Icons();
  constructor() { }

  ngOnInit(): void {
  }

}
