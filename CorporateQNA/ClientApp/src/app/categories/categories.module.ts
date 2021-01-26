import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [CategoryCardComponent, CategoryListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
