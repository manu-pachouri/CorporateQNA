import { QuestionViewModel } from './../Models/QuestionViewModel';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  @Output() RefreshList:EventEmitter<boolean> = new EventEmitter();
  @Output() QuestionClick:EventEmitter<QuestionViewModel> = new EventEmitter();

  activeQuestion:QuestionViewModel = null;

  constructor() {
    this.subscribeToEvents();
  }

  subscribeToEvents(){
    this.QuestionClick.subscribe(
      response=>{
        this.activeQuestion = response;
      }
    )
  }
}
