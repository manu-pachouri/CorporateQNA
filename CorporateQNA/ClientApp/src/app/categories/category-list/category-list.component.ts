import { UserPageService } from 'src/app/Services/user-page.service';
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
  allCategories:CategoryViewModel[]=[];
  categories:CategoryViewModel[] = [];
  constructor(private apiService:UserApiService,
              private catService:UserPageService) { }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe(
      (response)=>{
        this.allCategories = response;
        this.categories = response;
      }
    );
    
    this.catService.event.subscribe(
      (text:string)=>{
        this.categories = this.allCategories;
        this.categories = this.categories.filter(
          cat=>cat.title.toLowerCase().indexOf(text.toLowerCase())>-1
        );
      }
    )
  }

  ngDoCheck(){
  }
  
  

}
