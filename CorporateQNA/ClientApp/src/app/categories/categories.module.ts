import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';


@NgModule({
  declarations: [CategoryCardComponent, CategoryListComponent, CategoryNavigationComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ]
})
export class CategoriesModule { }
