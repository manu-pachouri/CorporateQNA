import { Activity, QuestionActivityViewModel } from './../../../Models/QuestionActivityView';
import { DateTimeService } from './../../../Services/date-time.service';
import { QuestionViewModel } from './../../../Models/QuestionViewModel';
import { HomeService } from './../../../Services/home-service.service';
import { AfterViewChecked, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/font-awesome-icons';
import { UserActivityService } from 'src/app/Services/user-activity.service';

@Component({
  selector: 'app-qna-card',
  templateUrl: './qna-card.component.html',
  styles: [
  ]
})
export class QnaCardComponent implements OnInit,DoCheck {
  Icons = new Icons();
  @Input() question:QuestionViewModel;
  agoTime:string;
  isActive:boolean = false;
  
  constructor(private homeService:HomeService,
              private userActivityService:UserActivityService) {
   }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.isActive = this.question.id == this.homeService.activeQuestion?.id;
  }

  onClick(){
    if(sessionStorage.getItem('userId')){
      let activity = new QuestionActivityViewModel();
    activity.activity = Activity.none;
    activity.viewed = true;
    activity.questionId = this.question.id;
    activity.activityBy = parseInt(sessionStorage.getItem('userId'));
    this.userActivityService.viewQuestion(activity).subscribe(
      ()=>console.log('question viewed')
    );
    }
    this.homeService.QuestionClick.emit(this.question);
  }

  upVote(){
    if(this.question.upVoted){
      this.question.upVoted=false;
      this.question.upVotes-=1;
      this.upvoteRequest(Activity.none);
    }else{
      this.question.upVoted=true;
      this.question.upVotes+=1;
      this.upvoteRequest(Activity.upVote);
    }
  }

  upvoteRequest(act:Activity){
    if(sessionStorage.getItem('userId')){
      let activity = new QuestionActivityViewModel();
      activity.activity=act;
      activity.activityBy= parseInt(sessionStorage.getItem('userId'));
      activity.questionId=this.question.id;

      this.userActivityService.upVoteQuestion(activity)
      .subscribe();
    }
  }
}


