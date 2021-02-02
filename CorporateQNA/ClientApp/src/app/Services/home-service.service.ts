import { AnswerViewModel } from './../Models/AnswerModel';
import { questionFilters } from './../Models/QuestionActivityView';
import { QuestionViewModel } from './../Models/QuestionViewModel';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  @Output() RefreshList:EventEmitter<boolean> = new EventEmitter();

  @Output() FilterEvent:EventEmitter<questionFilters> = new EventEmitter<questionFilters>();

  @Output() searchFilterEvent:EventEmitter<string> = new EventEmitter();
  @Output() categoryFilterEvent:EventEmitter<number> = new EventEmitter();
  @Output() showFilterEvent:EventEmitter<string> = new EventEmitter();
  @Output() sortFilterEvent:EventEmitter<string> = new EventEmitter();

  markEvent = new EventEmitter<AnswerViewModel>();

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
