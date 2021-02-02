import { HomeService } from './../../../Services/home-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AnswerViewModel, AnswerActivityModel, ansState } from './../../../Models/AnswerModel';
import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/font-awesome-icons';
import { Activity } from 'src/app/Models/QuestionActivityView';
import { UserActivityService } from 'src/app/Services/user-activity.service';

@Component({
  selector: 'app-qna-answers',
  templateUrl: './qna-answers.component.html',
  styles: [
  ]
})
export class QnaAnswersComponent implements OnInit {
  Icons = new Icons();
  @Input() answer:AnswerViewModel=null;
  liked:number;
  formGroup:FormGroup;

  constructor(private activityService:UserActivityService,
              private homeService:HomeService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      checkbox:new FormControl(this.answer.markedAsBest)
    });

    this.formGroup.get('checkbox').valueChanges
    .subscribe(
      state=>{
        this.answer.markedAsBest = state;
        this.homeService.markEvent.emit(this.answer);
      }
    );
  }

  like(){
    if(sessionStorage.getItem('userId')){
      if(this.answer.activity == Activity.like){
        this.answer.activity = Activity.none;
        this.answer.likes-=1;
        this.activity(Activity.none);
      }else{
        if(this.answer.activity == Activity.dislike)
          this.answer.dislikes-=1;
        this.answer.activity = Activity.like;
        this.answer.likes+=1;
        this.activity(Activity.like);
      }
    }
  }

  dislike(){
    if(sessionStorage.getItem('userId')){
      if(this.answer.activity == Activity.dislike){
        this.answer.activity = Activity.none;
        this.answer.dislikes-=1;
        this.activity(Activity.none);
      }else{
        if(this.answer.activity == Activity.like)
          this.answer.likes-=1;
        this.answer.activity = Activity.dislike;
        this.answer.dislikes+=1;
        this.activity(Activity.dislike);
      }
    }
  }

  activity(activity:Activity){
    if(sessionStorage.getItem('userId')){
      let ansAct = new AnswerActivityModel();
      ansAct.answerId = this.answer.id;
      ansAct.activityBy = sessionStorage.getItem('userId');
      ansAct.activity = activity;

      this.activityService.AnswerActivity(ansAct).subscribe(
        ()=>{
          console.log(activity.toString());
        }
      );
    }
  }

}
