import { AnswerActivityModel, AnswerViewModel } from './../Models/AnswerModel';
import { QuestionActivityViewModel } from './../Models/QuestionActivityView';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {
  baseUrl = "https://localhost:5001";
  constructor(private http:HttpClient) { }

  viewQuestion(activity:QuestionActivityViewModel){
   return this.http.post(this.baseUrl+`/questions/view`,activity);
  }

  AnswerActivity(activity:AnswerActivityModel){
    return this.http.post(this.baseUrl+`/answers/activity`,activity);
  }

  upVoteQuestion(activity:QuestionActivityViewModel){
    return this.http.post(this.baseUrl+'/questions/upvote',activity);
  }

  markAsBest(answer:AnswerViewModel){
    return this.http.post(this.baseUrl+'/answers/markasbest',answer);
  }
}
