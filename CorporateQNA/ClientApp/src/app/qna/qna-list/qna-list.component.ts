import { UserPageService } from 'src/app/Services/user-page.service';
import { UserActivityService } from 'src/app/Services/user-activity.service';
import { questionFilters } from './../../Models/QuestionActivityView';
import { AnswerViewModel } from './../../Models/AnswerModel';
import { AnswerAddViewModel } from '../../Models/AnswerModel';
import { DateTimeService } from './../../Services/date-time.service';
import { QuestionViewModel } from './../../Models/QuestionViewModel';
import { UserApiService } from './../../Services/user-api-service.service';
import { HomeService } from './../../Services/home-service.service';
import { Component, DoCheck, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Editor, Toolbar } from 'ngx-editor';
import { Icons } from 'src/app/shared/font-awesome-icons';
import { enumShowFilters } from 'src/app/Models/QuestionFilters';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styles: [
  ]
})
export class QnaListComponent implements OnInit,OnDestroy,DoCheck {
  allQuestions:QuestionViewModel[]=[];
  questions:QuestionViewModel[] = [];
  answers:AnswerViewModel[]=[];
  showFilters:boolean = true;
  formGroup:FormGroup;
  activeQuestion:QuestionViewModel;
  userId:string;
  bigEditor:boolean;
  
  //ngx editor 
  editor:Editor = new Editor({
    content:`Enter your Answer here..`,
    enabled:true,
    history:true,
    keyboardShortcuts:true
  });;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color']
  ];
  html='';
  //icons

  Icons = new Icons();
  //form

  //modal
  modalRef:BsModalRef;
  config={
    backdrop:false,
    keybodard:true,
    animated:true,
    class:'modal-lg'
  };

  constructor(private modalService:BsModalService,
              private router:Router,
              private dateTimeService:DateTimeService,
              private homeService:HomeService,
              private apiService:UserApiService,
              private route:ActivatedRoute,
              private userActivity:UserActivityService,
              private userPageService:UserPageService) { 
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      editorContent: new FormControl(null,Validators.required)
    });

    this.getQuestions();

    this.homeService.RefreshList.subscribe(
      (value)=>{
        this.getQuestions();
      }
    )

    this.homeService.QuestionClick
    .subscribe(
      response=>{
        this.activeQuestion = response;
        this.getAnswers();
      }
    )

    this.subscribeFilterEvents();

    this.homeService.markEvent.subscribe(
      (answer:AnswerViewModel)=>{
        for(let i=0;i<this.questions.length;i++)
          {
            if(this.questions[i].id == answer.answerOf)
              {
                if(this.questions[i].askedById == sessionStorage.getItem('userId')){
                  if(answer.markedAsBest == true)
                  this.questions[i].resolved = true;
                else this.questions[i].resolved = false;
                let prev = answer.answeredOn;
                answer.answeredOn = '2021-01-01';
                this.userActivity.markAsBest(answer).subscribe();
                answer.answeredOn = prev;
                }
              break;
            }
          }
          this.getAnswers();
      }
    );
  }

  ngDoCheck(){
    this.showFilters = this.router.url.indexOf('user') == -1;
  }

  ngOnDestroy(){
    this.editor.destroy();
  }

  onSubmit()
  {
    if(this.formGroup.valid && sessionStorage.getItem('userId')){
      let answer = new AnswerAddViewModel();
      answer.answerOf = this.activeQuestion.id;
      answer.answeredBy = sessionStorage.getItem('userId');
      answer.answeredOn = new Date();
      answer.description = this.formGroup.value['editorContent']['content'][0]['content'][0]['text'];

      this.apiService.postAnswer(answer).subscribe(
        ()=>{
          this.getAnswers();
          this.formGroup.reset();
          this.editor.setContent('Enter your text here...');
          window.alert('answer posted');
        }
      )
    }else window.alert("Please Login..");
  }

  openModal(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config);
  }

  closeModal(){
    this.modalRef.hide();
  }

  getQuestions(){
    this.apiService.getQuestions(sessionStorage.getItem('userId'))
    .subscribe(
      response=>{
        for(let key in response){
          response[key].askedOn = this.dateTimeService.dateDiff(new Date(response[key].askedOn),new Date());
        }
        this.allQuestions = response;
        this.questions = response;

        this.route.paramMap.subscribe(
          params=>{
            let param=params.get('id');
            let userId = param.substring(0,param.indexOf('+'));
            if(userId && param.indexOf('+allquestions')>-1)
              this.filterByUser(userId);
            else if(userId && param.indexOf('+answered')>-1)
            {
              this.apiService.getQuestions(userId).subscribe(
                response=>{
                  for(let key in response){
                    response[key].askedOn = this.dateTimeService.dateDiff(new Date(response[key].askedOn),new Date());
                  }
                  this.questions = response.filter(ques=>{
                    return ques.participated == true;
                  });
                }
              );
            }
          });
    }
    );
  }

  getAnswers(){
    this.apiService.getAnswers(this.activeQuestion.id).subscribe(
      response=>{
        for(let key in response){
          response[key].answeredOn = this.dateTimeService.dateDiff(new Date(response[key].answeredOn),new Date());
        }
        this.answers = response;
      })
  }

  filterBySearch = (searchText:string,questions:QuestionViewModel[])=>{
    searchText = searchText?searchText.toLowerCase():'';
    questions = questions.filter(question=>{
      let title = question.title?.toLowerCase();
      return title.indexOf(searchText)>-1;
    });
    return questions;
  };

  filterByCategory = (categoryId:number,questions:QuestionViewModel[])=>{
    questions = questions.filter(question=>{
      return question.categoryId == categoryId
    });
    return questions;
  };

  filterByUser = (userId:string)=>{
    this.questions = this.questions.filter(
      question=>{
        return question.askedById == userId;
      }
    );
  }

  filterByResolve = (questions:QuestionViewModel[],state:boolean)=>{
    this.questions = questions.filter(ques=>{
      return ques.resolved == state;
    });
  }

  filterByHot = (question:QuestionViewModel[])=>{
    this.questions = question.sort((a,b)=>{
      return b.answersCount - a.answersCount;
    });
  }

  sortByRecent = (questions:QuestionViewModel[])=>{
    return questions.sort((a,b)=>{
      let num1 = Number(a.askedOn.substring(0,a.askedOn.indexOf(' ')));
      let num2 = Number(b.askedOn.substring(0,b.askedOn.indexOf(' ')));
      return (num1-num2);
    });
  }

  subscribeFilterEvents(){
    this.homeService.FilterEvent.subscribe(
      (filters:questionFilters)=>{
        this.questions = this.allQuestions;

        this.questions = this.filterBySearch(filters.search,this.questions);

        if(filters.category != 0){
          this.questions = this.filterByCategory(filters.category,this.questions);
        }

        if(filters.show != "All"){
          if(filters.show == "My Participations"){
            this.questions = this.questions.filter(
              question=>{
                return question.participated == true;
              }
            );
          }else if(filters.show == "Hot"){
            this.filterByHot(this.questions);
          }else if(filters.show == "My Questions"){
            this.questions = this.questions.filter(
              question=>{
                return question.askedById == sessionStorage.getItem('userId');
              }
            );
          }else if(filters.show.toLowerCase() == "solved"){
            this.filterByResolve(this.questions,true);
          }else if(filters.show.toLowerCase() == "unsolved"){
            this.filterByResolve(this.questions,false);
          }
        }

        if(filters.sort != "All"){
          if(filters.sort.toLowerCase() == 'recent'){
            this.questions = this.sortByRecent(this.questions);
            this.questions=this.questions.slice(0,4);
          }else if(filters.sort.toLowerCase() == 'last 10 days'){
            this.questions = this.sortByRecent(this.questions);
            this.questions = this.questions.filter(ques=>{
                let num = Number(ques.askedOn.substring(0,ques.askedOn.indexOf(' ')));
                return num<=10;
            });
          }else if(filters.sort.toLowerCase() == 'last 30 days'){
            this.questions = this.sortByRecent(this.questions);
            this.questions = this.questions.filter(ques=>{
                let num = Number(ques.askedOn.substring(0,ques.askedOn.indexOf(' ')));
                return num<=30;
            })
        }
      }
      }
    );

  }

  toggleEditor(){
    this.bigEditor = this.bigEditor == true?false:true;
  }
  
}
