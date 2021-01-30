import { AnswerViewModel, AnswerActivityModel } from './../../../Models/AnswerModel';
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

  constructor(private activityService:UserActivityService) { }

  ngOnInit(): void {
  }

  like(){
    if(this.answer.activity == Activity.like)
      {
        this.activity(Activity.none);}
    else {
      this.activity(Activity.like);
    }
  }

  dislike(){
    if(this.answer.activity == Activity.dislike)
      this.activity(Activity.none)
    else 
      this.activity(Activity.dislike);
  }

  activity(activity:Activity){
    if(sessionStorage.getItem('userId')){
      let ansAct = new AnswerActivityModel();
      ansAct.answerId = this.answer.id;
      ansAct.activityBy = sessionStorage.getItem('userId');
      ansAct.activity = activity;

      this.activityService.AnswerActivity(ansAct).subscribe(
        ()=>{
          if(ansAct.activity == Activity.like)
            {
              this.liked = 1;}
          else if(ansAct.activity = Activity.dislike)
            { 
              this.liked = -1;
            }
          else 
              this.liked = 0;
          console.log('liked');
        }
      );
    }
  }

}
