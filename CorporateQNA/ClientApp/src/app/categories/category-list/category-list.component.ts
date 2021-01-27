import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [
  ]
})
export class CategoryListComponent implements OnInit {
  cards=[1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit(): void {
  }

}
