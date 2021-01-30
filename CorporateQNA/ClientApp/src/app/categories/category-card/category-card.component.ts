import { CategoryViewModel } from './../../Models/CategoryViewModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styles: [
  ]
})
export class CategoryCardComponent implements OnInit {
  @Input() category:CategoryViewModel;
  constructor() { }

  ngOnInit(): void {
  }

}
