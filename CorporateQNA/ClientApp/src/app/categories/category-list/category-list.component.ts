import { UserApiService } from './../../Services/user-api-service.service';
import { CategoryViewModel } from './../../Models/CategoryViewModel';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [
  ]
})
export class CategoryListComponent implements OnInit,DoCheck {
  categories:CategoryViewModel[] = [];
  constructor(private apiService:UserApiService) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(){
    this.apiService.getCategories().subscribe(
      (response)=>{
        this.categories = response;
      }
    );
  }  

}
