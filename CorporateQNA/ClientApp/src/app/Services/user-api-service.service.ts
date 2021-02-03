import { AnswerViewModel } from './../Models/AnswerModel';
import { AnswerAddViewModel } from '../Models/AnswerModel';
import { QuestionViewModel } from './../Models/QuestionViewModel';
import { CategoryViewModel } from './../Models/CategoryViewModel';
import { CategoryAddViewModel } from './../Models/CategoryAddViewModel';
import { UsersDataViewModel } from './../Models/UsersDataViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionAddViewModel } from '../Models/QuestionAddViewModel';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:5001";

  getUsers(){
    return this.http.get<UsersDataViewModel[]>(this.baseUrl+`/users`);
  }

  addCategory(category:CategoryAddViewModel){
    return this.http.post(this.baseUrl+`/categories/post`,category);
  }

  getCategories(){
    return this.http.get<CategoryViewModel[]>(this.baseUrl+`/categories`);
  }

  addQuestion(question:QuestionAddViewModel){
    return this.http.post(this.baseUrl+`/questions/post`,question);
  }

  getQuestions(userId:number){
    if(!userId)
      userId = 0;
    return this.http.get<QuestionViewModel[]>(this.baseUrl+`/questions/${userId}`);
  }

  postAnswer(answer:AnswerAddViewModel){
    return this.http.post(this.baseUrl+`/answers/post`,answer);
  }

  getAnswers(qid:number){
    return this.http.get<AnswerViewModel[]>(this.baseUrl+`/answers/get/${qid}/${sessionStorage.getItem('userId')}`);
  }

  getUser(userId:string){
    return this.http.get<UsersDataViewModel>(this.baseUrl+`/users/${userId}`);
  }
}
